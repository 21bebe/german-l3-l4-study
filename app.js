// ============================================================
// ドイツ語ゼロから攻略 - アプリケーションロジック
// ============================================================

const STORAGE_KEY = "german_l3_l4_progress_v1";
const THEME_KEY = "german_theme_v1";

function getCurrentTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {}
  const icon = document.getElementById("theme-icon");
  if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  const next = getCurrentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  showToast(next === "dark" ? "ダークモードにしました" : "ライトモードにしました");
  if (state.tab === "textbook") render();
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        masteredVocab: Array.isArray(parsed.masteredVocab) ? parsed.masteredVocab : [],
        solvedQuestions: Array.isArray(parsed.solvedQuestions) ? parsed.solvedQuestions : [],
        wrongQuestions: Array.isArray(parsed.wrongQuestions) ? parsed.wrongQuestions : [],
        readLessons: Array.isArray(parsed.readLessons) ? parsed.readLessons : []
      };
    }
  } catch (e) {
    // ignore
  }
  return { masteredVocab: [], solvedQuestions: [], wrongQuestions: [], readLessons: [] };
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  } catch (e) {
    // ignore
  }
}

const state = {
  tab: "home",
  textbookPage: 24,
  textbookZoom: 100, // 100 | 135 | 175
  textbookDim: true, // dim bright white scan in dark mode
  lessonId: "zero",
  vocabMode: "list", // list | flashcard | quiz
  vocabCat: "all",
  vocabSearch: "",
  fcIndex: 0,
  fcFlipped: false,
  fcList: [],
  vocabQuiz: null, // { type: 'meaning'|'gender', questions, index, score, answered, selected }
  practiceSetId: null, // null = menu, or setId / 'random' / 'wrong'
  practiceInputMode: "choice", // choice | input | sheet
  practiceSession: null, // { title, questions, index, score, answered, showHint, lastCorrect, userAnswer }
  sheetRevealAll: false,
  sheetRevealed: {},
  progress: loadProgress()
};

// -------------------- Utilities --------------------

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showToast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => el.classList.remove("show"), 2000);
}

function speakGerman(text) {
  if (!("speechSynthesis" in window)) {
    showToast("このブラウザは音声読み上げに未対応です");
    return;
  }
  window.speechSynthesis.cancel();
  const uttr = new SpeechSynthesisUtterance(text);
  uttr.lang = "de-DE";
  uttr.rate = 0.88;
  const voices = window.speechSynthesis.getVoices();
  const deVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("de"));
  if (deVoice) uttr.voice = deVoice;
  window.speechSynthesis.speak(uttr);
}

function genderBadge(g) {
  switch (g) {
    case "m": return '<span class="badge badge-masc">男性 der</span>';
    case "f": return '<span class="badge badge-fem">女性 die</span>';
    case "n": return '<span class="badge badge-neut">中性 das</span>';
    case "p": return '<span class="badge badge-pl">複数 die</span>';
    case "v": return '<span class="badge badge-verb">動詞</span>';
    default: return '<span class="badge badge-other">表現</span>';
  }
}

function genderColorClass(g) {
  if (g === "m") return "g-m";
  if (g === "f") return "g-f";
  if (g === "n") return "g-n";
  if (g === "p") return "g-p";
  return "";
}

function getAllQuestions() {
  return STUDY_DATA.exerciseSets.flatMap((s) => s.questions.map((q) => ({ ...q, setTitle: s.title })));
}

function normalizeAnswer(str) {
  return String(str || "")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[.!?。！？]+$/g, "")
    .toLowerCase();
}

// -------------------- Navigation --------------------

function setTab(tab) {
  state.tab = tab;
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  window.scrollTo({ top: 0, behavior: "instant" });
  render();
}

function openLesson(id) {
  state.lessonId = id;
  setTab("learn");
}

function openPracticeSet(setId) {
  let title = "";
  let questions = [];
  if (setId === "random") {
    title = "🎲 ランダム10問 総復習テスト";
    questions = shuffle(getAllQuestions()).slice(0, 10);
  } else if (setId === "wrong") {
    title = "🔥 間違えた問題だけ復習";
    const wrongSet = new Set(state.progress.wrongQuestions);
    questions = getAllQuestions().filter((q) => wrongSet.has(q.id));
    if (questions.length === 0) {
      showToast("間違えた問題はありません！素晴らしい！");
      return;
    }
  } else {
    const found = STUDY_DATA.exerciseSets.find((s) => s.id === setId);
    if (!found) return;
    title = found.title;
    questions = found.questions;
  }

  state.practiceSetId = setId;
  state.practiceSession = {
    title,
    questions: questions.map((q) => ({ ...q, shuffledChoices: shuffle(q.choices) })),
    index: 0,
    score: 0,
    answered: false,
    showHint: false,
    lastCorrect: false,
    userAnswer: ""
  };
  setTab("practice");
}

// -------------------- Render: HOME --------------------

function renderHome() {
  const totalVocab = STUDY_DATA.vocab.length;
  const masteredCount = state.progress.masteredVocab.length;
  const allQs = getAllQuestions();
  const solvedCount = state.progress.solvedQuestions.length;
  const wrongCount = state.progress.wrongQuestions.length;
  const readCount = state.progress.readLessons.length;

  return `
    <section class="hero">
      <div class="hero-kicker">DEUTSCH STUDY NOTEBOOK • L3 – L4</div>
      <h2>ゼロからわかるドイツ語（p.24〜p.32）</h2>
      <p>教科書の実物ページを見ながら、全ドイツ語の日本語訳・ていねい解説・単語帳・教科書全66問をスマホでもPCでも勉強できます。</p>
      <div class="hero-stats">
        <div class="stat-box">
          <div class="stat-num">${readCount} / ${STUDY_DATA.lessons.length}</div>
          <div class="stat-label">解説読破</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">${masteredCount} / ${totalVocab}</div>
          <div class="stat-label">覚えた単語</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">${solvedCount} / ${allQs.length}</div>
          <div class="stat-label">正解した問題</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px;">
        <button class="btn btn-primary" onclick="openTextbookPage(24)">📚 教科書そのままビューを開く（p.24〜32）</button>
        <button class="btn btn-secondary" onclick="openLesson('zero')">📖 まずは完全ゼロ入門を読む</button>
      </div>
    </section>

    ${wrongCount > 0 ? `
      <div class="card" style="border-color:var(--danger-border);background:var(--danger-bg);">
        <div class="card-title">🔥 復習チャンス！間違えた問題が ${wrongCount} 問あります</div>
        <p class="muted" style="margin-bottom:10px;">間違えた問題だけ集中して解き直すと一気にテストの点が伸びます！</p>
        <button class="btn btn-danger" onclick="openPracticeSet('wrong')">間違えた ${wrongCount} 問を復習する</button>
      </div>
    ` : ""}

    <div class="card">
      <div class="card-title">🧭 おすすめの勉強ステップ（完全ゼロ向け）</div>
      <p class="muted" style="margin-bottom:12px;">上から順番に進めれば、単語も文法もわからない状態からテスト範囲を完全攻略できます！</p>
      <div class="step-list">
        <button class="step-card" onclick="openLesson('zero')">
          <div class="step-num">0</div>
          <div class="step-body">
            <div class="step-title">完全ゼロ入門：名詞の性別・1〜4格・動詞の基本 ${state.progress.readLessons.includes("zero") ? "✅" : ""}</div>
            <div class="step-desc">まずはここ！der/die/dasと1〜4格の意味を5分で理解</div>
          </div>
          <span>→</span>
        </button>

        <button class="step-card" onclick="openLesson('l3-1')">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">L3前半 (p.24〜25)：複数形・弱変化・人称代名詞・3格動詞 ${state.progress.readLessons.includes("l3-1") && state.progress.readLessons.includes("l3-2") ? "✅" : ""}</div>
            <div class="step-desc">L3のテスト超頻出ポイントを色分け表でマスター</div>
          </div>
          <span>→</span>
        </button>

        <button class="step-card" onclick="openLesson('l3-3')">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">L3後半 (p.26〜29)：時刻・持ち物・長文『Mein Geburtstag』 ${state.progress.readLessons.includes("l3-3") ? "✅" : ""}</div>
            <div class="step-desc">時刻表現、Wem gehört...?、長文の1文ずつ丁寧解説</div>
          </div>
          <span>→</span>
        </button>

        <button class="step-card" onclick="openLesson('l4-1')">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">L4 (p.30〜31)：不規則動詞 ＆ 命令形 ＆ 〜しましょう ${state.progress.readLessons.includes("l4-1") && state.progress.readLessons.includes("l4-2") ? "✅" : ""}</div>
            <div class="step-desc">a→ä / e→i / e→ie の変化ルールと命令形3パターン</div>
          </div>
          <span>→</span>
        </button>

        <button class="step-card" onclick="setTab('vocab')">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">単語帳・暗記カード・冠詞(der/die/das)クイズ</div>
            <div class="step-desc">必須単語10個・持ち物・不規則動詞を音声つきで暗記</div>
          </div>
          <span>→</span>
        </button>

        <button class="step-card" onclick="setTab('practice')">
          <div class="step-num">5</div>
          <div class="step-body">
            <div class="step-title">教科書 p.24〜p.32 問題演習 ＆ ランダム模試</div>
            <div class="step-desc">4択モード / スペル入力モードを切り替えながら全問制覇！</div>
          </div>
          <span>→</span>
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-title">⚡ スキマ時間クイックスタート</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="openPracticeSet('random')">🎲 ランダム10問テスト</button>
        <button class="btn btn-secondary" onclick="startVocabQuickQuiz('meaning')">🃏 単語意味クイズ</button>
        <button class="btn btn-secondary" onclick="startVocabQuickQuiz('gender')">🎨 冠詞(der/die/das)クイズ</button>
      </div>
    </div>
  `;
}

// -------------------- Render: TEXTBOOK VIEWER --------------------

function openTextbookPage(page) {
  state.textbookPage = page;
  setTab("textbook");
}

function setTextbookZoom(zoom) {
  state.textbookZoom = zoom;
  render();
}

function toggleTextbookDim() {
  state.textbookDim = !state.textbookDim;
  render();
}

function renderTextbook() {
  const pages = STUDY_DATA.textbookPages;
  const idx = Math.max(0, pages.findIndex((p) => p.page === state.textbookPage));
  const cur = pages[idx] || pages[0];
  const prev = pages[idx - 1];
  const next = pages[idx + 1];
  const isDark = getCurrentTheme() === "dark";
  const dimmed = isDark && state.textbookDim;

  const pagePills = pages.map((p) => `
    <button class="pill ${p.page === cur.page ? "active" : ""}" onclick="state.textbookPage=${p.page}; render();">
      p.${p.page}
    </button>
  `).join("");

  return `
    <h2 class="section-heading">📚 教科書ビュー（p.24 〜 p.32）</h2>
    <div class="pill-bar">${pagePills}</div>

    <div class="textbook-layout">
      <div class="textbook-stage">
        <div class="textbook-toolbar">
          <div style="display:flex;gap:6px;align-items:center;">
            <button class="btn btn-sm btn-secondary" ${prev ? `onclick="state.textbookPage=${prev.page}; render();"` : "disabled"}>← 前</button>
            <strong>${cur.lektion} ・ p.${cur.page}</strong>
            <button class="btn btn-sm btn-secondary" ${next ? `onclick="state.textbookPage=${next.page}; render();"` : "disabled"}>次 →</button>
          </div>
          <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap;">
            <button class="btn btn-sm ${state.textbookZoom === 100 ? "btn-primary" : "btn-secondary"}" onclick="setTextbookZoom(100)">標準</button>
            <button class="btn btn-sm ${state.textbookZoom === 135 ? "btn-primary" : "btn-secondary"}" onclick="setTextbookZoom(135)">1.3倍</button>
            <button class="btn btn-sm ${state.textbookZoom === 175 ? "btn-primary" : "btn-secondary"}" onclick="setTextbookZoom(175)">1.7倍</button>
            ${isDark ? `<button class="btn btn-sm ${state.textbookDim ? "btn-primary" : "btn-secondary"}" onclick="toggleTextbookDim()">${state.textbookDim ? "🌙 紙面の明るさ軽減ON" : "☀️ 原色表示"}</button>` : ""}
          </div>
        </div>
        <div class="textbook-scroll">
          <img
            src="${cur.img}"
            alt="${escapeHtml(cur.title)}"
            class="textbook-img ${dimmed ? "dimmed" : ""}"
            style="width:${state.textbookZoom}%;max-width:${state.textbookZoom === 100 ? "100%" : "none"};"
            loading="eager"
          />
        </div>
      </div>

      <aside class="textbook-side">
        <div style="margin-bottom:8px;">
          <span class="badge badge-masc">${cur.lektion}</span>
          <span class="muted" style="margin-left:6px;">p.${cur.page} / 32</span>
        </div>
        <h3 class="card-title" style="margin-bottom:8px;">${escapeHtml(cur.title)}</h3>
        <p class="muted" style="margin-bottom:14px;">${escapeHtml(cur.summary)}</p>

        <div style="font-weight:800;font-size:0.88rem;margin-bottom:8px;">このページの主なドイツ語と訳</div>
        <div class="example-list">
          ${cur.notes.map((n) => `
            <div class="example-item">
              <div class="example-de">
                <span>${escapeHtml(n.de)}</span>
                <button class="speak-btn" data-speak="${escapeHtml(n.de)}">🔊</button>
              </div>
              <div class="example-ja">${escapeHtml(n.ja)}</div>
            </div>
          `).join("")}
        </div>

        <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px;">
          <button class="btn btn-primary" onclick="state.practiceInputMode='sheet'; openPracticeSet('${cur.practiceId}');">📖 このページの問題・全訳・解説を見る</button>
          <button class="btn btn-secondary" onclick="openLesson('${cur.lessonId}')">💡 このページの文法解説を読む</button>
          <button class="btn btn-secondary" onclick="state.practiceInputMode='choice'; openPracticeSet('${cur.practiceId}');">✏️ 4択クイズでテストする</button>
        </div>
      </aside>
    </div>
  `;
}

// -------------------- Render: LEARN --------------------

function renderLearn() {
  const lesson = STUDY_DATA.lessons.find((l) => l.id === state.lessonId) || STUDY_DATA.lessons[0];
  const idx = STUDY_DATA.lessons.findIndex((l) => l.id === lesson.id);
  const nextLesson = STUDY_DATA.lessons[idx + 1];
  const isRead = state.progress.readLessons.includes(lesson.id);

  const pills = STUDY_DATA.lessons.map((l) => `
    <button class="pill ${l.id === lesson.id ? "active" : ""}" onclick="openLesson('${l.id}')">
      ${l.shortTitle}${state.progress.readLessons.includes(l.id) ? " ✓" : ""}
    </button>
  `).join("");

  const blocksHtml = lesson.blocks.map((b) => `
    <div class="card">
      <h3 class="card-title">${b.heading}</h3>
      ${b.html}
    </div>
  `).join("");

  const practiceMap = {
    zero: "p24",
    "l3-1": "p24",
    "l3-2": "p25",
    "l3-3": "p26",
    "l4-1": "p30",
    "l4-2": "p31"
  };

  return `
    <div class="pill-bar">${pills}</div>
    <div class="card" style="background:var(--primary-soft);border-color:var(--masc-border);">
      <div class="card-title">
        <span>${lesson.title}</span>
        <span class="badge badge-masc">${lesson.badge}</span>
      </div>
      <p class="muted" style="color:var(--text);">${lesson.summary}</p>
    </div>

    ${blocksHtml}

    <div class="card" style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:space-between;">
      <button class="btn ${isRead ? "btn-success" : "btn-secondary"}" onclick="toggleLessonRead('${lesson.id}')">
        ${isRead ? "✅ この単元は読了済み" : "☑️ この単元を読了にする"}
      </button>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-secondary" onclick="openPracticeSet('${practiceMap[lesson.id] || "p24"}')">✏️ この範囲の問題を解く</button>
        ${nextLesson ? `<button class="btn btn-primary" onclick="openLesson('${nextLesson.id}')">次へ：${nextLesson.shortTitle} →</button>` : `<button class="btn btn-primary" onclick="openPracticeSet('p32')">✏️ p.32 総まとめ演習へ →</button>`}
      </div>
    </div>
  `;
}

function toggleLessonRead(id) {
  const list = state.progress.readLessons;
  const idx = list.indexOf(id);
  if (idx >= 0) {
    list.splice(idx, 1);
    showToast("読了マークを外しました");
  } else {
    list.push(id);
    showToast("読了にしました！ナイス！");
  }
  saveProgress();
  render();
}

// -------------------- Render: VOCAB --------------------

function getFilteredVocab() {
  const masteredSet = new Set(state.progress.masteredVocab);
  return STUDY_DATA.vocab.filter((v) => {
    if (state.vocabCat === "unmastered") {
      if (masteredSet.has(v.id)) return false;
    } else if (state.vocabCat !== "all" && v.cat !== state.vocabCat) {
      return false;
    }
    if (state.vocabSearch.trim()) {
      const q = state.vocabSearch.trim().toLowerCase();
      return (
        v.word.toLowerCase().includes(q) ||
        v.meaning.toLowerCase().includes(q) ||
        v.form.toLowerCase().includes(q) ||
        (v.note && v.note.toLowerCase().includes(q))
      );
    }
    return true;
  });
}

function setVocabMode(mode) {
  state.vocabMode = mode;
  if (mode === "flashcard") {
    state.fcList = getFilteredVocab();
    state.fcIndex = 0;
    state.fcFlipped = false;
  } else if (mode === "quiz" && !state.vocabQuiz) {
    startVocabQuiz("meaning");
    return;
  }
  render();
}

function setVocabCat(cat) {
  state.vocabCat = cat;
  if (state.vocabMode === "flashcard") {
    state.fcList = getFilteredVocab();
    state.fcIndex = 0;
    state.fcFlipped = false;
  }
  render();
}

function toggleMastered(id) {
  const list = state.progress.masteredVocab;
  const idx = list.indexOf(id);
  if (idx >= 0) {
    list.splice(idx, 1);
  } else {
    list.push(id);
  }
  saveProgress();
  render();
}

function startVocabQuickQuiz(type) {
  state.tab = "vocab";
  state.vocabMode = "quiz";
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === "vocab");
  });
  startVocabQuiz(type);
}

function startVocabQuiz(type) {
  let pool = getFilteredVocab();
  if (type === "gender") {
    pool = STUDY_DATA.vocab.filter((v) => ["m", "f", "n"].includes(v.gender));
  } else if (pool.length < 4) {
    pool = STUDY_DATA.vocab;
  }

  const picked = shuffle(pool).slice(0, Math.min(10, pool.length));
  const questions = picked.map((item) => {
    if (type === "gender") {
      const correct = item.gender === "m" ? "der（男性）" : item.gender === "f" ? "die（女性）" : "das（中性）";
      return {
        item,
        prompt: item.base,
        sub: `意味：${item.meaning}（${item.page}）`,
        answer: correct,
        choices: ["der（男性）", "die（女性）", "das（中性）"]
      };
    } else {
      const distractors = shuffle(STUDY_DATA.vocab.filter((v) => v.id !== item.id))
        .slice(0, 3)
        .map((v) => v.meaning);
      return {
        item,
        prompt: item.word,
        sub: `${item.form}（${item.page}）`,
        answer: item.meaning,
        choices: shuffle([item.meaning, ...distractors])
      };
    }
  });

  state.vocabQuiz = {
    type,
    questions,
    index: 0,
    score: 0,
    answered: false,
    selected: null
  };
  render();
}

function answerVocabQuiz(choice) {
  const qz = state.vocabQuiz;
  if (!qz || qz.answered) return;
  const cur = qz.questions[qz.index];
  qz.answered = true;
  qz.selected = choice;
  if (choice === cur.answer) {
    qz.score++;
  }
  render();
}

function nextVocabQuiz() {
  const qz = state.vocabQuiz;
  if (!qz) return;
  qz.index++;
  qz.answered = false;
  qz.selected = null;
  render();
}

function renderVocab() {
  const cats = [
    { id: "all", label: "すべて" },
    { id: "must10", label: "⭐ 必須10語(p.29)" },
    { id: "items", label: "🎒 持ち物(p.28)" },
    { id: "l3noun", label: "📦 L3名詞・複数形" },
    { id: "l4verb", label: "⚡ L4不規則動詞" },
    { id: "expr", label: "⏰ 時刻・表現" },
    { id: "unmastered", label: "🔥 未習得のみ" }
  ];

  const modeBar = `
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
      <button class="btn ${state.vocabMode === "list" ? "btn-primary" : "btn-secondary"}" onclick="setVocabMode('list')">📋 単語リスト</button>
      <button class="btn ${state.vocabMode === "flashcard" ? "btn-primary" : "btn-secondary"}" onclick="setVocabMode('flashcard')">🃏 暗記カード</button>
      <button class="btn ${state.vocabMode === "quiz" ? "btn-primary" : "btn-secondary"}" onclick="setVocabMode('quiz')">🎯 単語クイズ</button>
    </div>
  `;

  const catBar = `
    <div class="pill-bar">
      ${cats.map((c) => `<button class="pill ${state.vocabCat === c.id ? "active" : ""}" onclick="setVocabCat('${c.id}')">${c.label}</button>`).join("")}
    </div>
  `;

  if (state.vocabMode === "list") {
    const items = getFilteredVocab();
    const masteredSet = new Set(state.progress.masteredVocab);
    return `
      <h2 class="section-heading">🃏 単語帳（全${STUDY_DATA.vocab.length}語）</h2>
      ${modeBar}
      ${catBar}
      <div class="toolbar">
        <input type="search" class="search-input" placeholder="単語や日本語の意味で検索..." value="${escapeHtml(state.vocabSearch)}" oninput="state.vocabSearch = this.value; render();" />
        <span class="muted">${items.length}語を表示中</span>
      </div>
      ${items.length === 0 ? `<div class="card"><p class="muted">該当する単語がありません。</p></div>` : `
        <div class="vocab-grid">
          ${items.map((v) => {
            const m = masteredSet.has(v.id);
            return `
              <div class="vocab-item ${m ? "mastered" : ""}">
                <div class="vocab-top">
                  <div>
                    <div class="vocab-word ${genderColorClass(v.gender)}">${escapeHtml(v.word)}</div>
                    <div class="vocab-sub">${escapeHtml(v.form)} ・ ${escapeHtml(v.page)}</div>
                  </div>
                  ${genderBadge(v.gender)}
                </div>
                <div class="vocab-meaning">${escapeHtml(v.meaning)}</div>
                ${v.note ? `<div class="vocab-sub" style="color:var(--primary);">💡 ${escapeHtml(v.note)}</div>` : ""}
                <div class="vocab-actions">
                  <button class="speak-btn" data-speak="${escapeHtml(v.word)}">🔊 発音</button>
                  <button class="btn btn-sm ${m ? "btn-success" : "btn-secondary"}" onclick="toggleMastered('${v.id}')">
                    ${m ? "✅ 覚えた" : "⬜ まだ"}
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      `}
    `;
  }

  if (state.vocabMode === "flashcard") {
    const list = state.fcList.length ? state.fcList : getFilteredVocab();
    if (list.length === 0) {
      return `
        <h2 class="section-heading">🃏 暗記カード</h2>
        ${modeBar}
        ${catBar}
        <div class="card"><p class="muted">このカテゴリにカードがありません（「すべて」を選んでみてください）。</p></div>
      `;
    }
    if (state.fcIndex >= list.length) state.fcIndex = 0;
    const item = list[state.fcIndex];
    const isMastered = state.progress.masteredVocab.includes(item.id);

    return `
      <h2 class="section-heading">🃏 暗記カード</h2>
      ${modeBar}
      ${catBar}
      <div class="flashcard-wrap">
        <div class="quiz-meta">
          <span class="muted">${state.fcIndex + 1} / ${list.length} 枚目</span>
          <button class="btn btn-sm btn-secondary" onclick="state.fcList = shuffle(getFilteredVocab()); state.fcIndex = 0; state.fcFlipped = false; render();">🔀 シャッフル</button>
        </div>
        <div class="flashcard" onclick="state.fcFlipped = !state.fcFlipped; render();">
          <div>${genderBadge(item.gender)} <span class="muted">${item.page}</span></div>
          <div class="fc-front ${genderColorClass(item.gender)}">${escapeHtml(item.word)}</div>
          <button class="speak-btn" onclick="event.stopPropagation(); speakGerman('${escapeHtml(item.word).replace(/'/g, "\\'")}');">🔊 ドイツ語を聞く</button>
          ${state.fcFlipped ? `
            <div class="fc-back">
              <div class="fc-meaning">${escapeHtml(item.meaning)}</div>
              <div class="muted" style="margin-top:4px;">${escapeHtml(item.form)}</div>
              ${item.note ? `<div style="font-size:0.85rem;color:var(--primary);margin-top:6px;">💡 ${escapeHtml(item.note)}</div>` : ""}
            </div>
          ` : `<p class="muted" style="margin-top:16px;">👆 カードをタップして意味を表示</p>`}
        </div>
        <div class="fc-controls">
          <button class="btn btn-secondary" onclick="state.fcIndex = (state.fcIndex - 1 + ${list.length}) % ${list.length}; state.fcFlipped = false; render();">← 前へ</button>
          <button class="btn ${isMastered ? "btn-success" : "btn-primary"}" onclick="fcMarkAndNext('${item.id}', true)">✅ 覚えた！次へ</button>
          <button class="btn btn-secondary" onclick="fcMarkAndNext('${item.id}', false)">🔁 まだ・次へ →</button>
        </div>
      </div>
    `;
  }

  // Vocab Quiz mode
  const qz = state.vocabQuiz;
  if (!qz) {
    return `${modeBar}<div class="card"><button class="btn btn-primary" onclick="startVocabQuiz('meaning')">クイズ開始</button></div>`;
  }

  const finished = qz.index >= qz.questions.length;
  return `
    <h2 class="section-heading">🎯 単語4択クイズ</h2>
    ${modeBar}
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
      <button class="btn btn-sm ${qz.type === "meaning" ? "btn-primary" : "btn-secondary"}" onclick="startVocabQuiz('meaning')">意味クイズ（独→日）</button>
      <button class="btn btn-sm ${qz.type === "gender" ? "btn-primary" : "btn-secondary"}" onclick="startVocabQuiz('gender')">冠詞クイズ（der / die / das）</button>
    </div>
    ${finished ? `
      <div class="quiz-box" style="text-align:center;">
        <h3>🎉 クイズ終了！</h3>
        <p style="font-size:1.6rem;font-weight:800;margin:10px 0;color:var(--primary);">${qz.score} / ${qz.questions.length} 問正解</p>
        <p class="muted" style="margin-bottom:14px;">${qz.score === qz.questions.length ? "パーフェクト！完璧です！" : "いい調子！繰り返すほど自然に定着します！"}</p>
        <button class="btn btn-primary" onclick="startVocabQuiz('${qz.type}')">もう1セット挑戦する</button>
      </div>
    ` : (() => {
      const cur = qz.questions[qz.index];
      const pct = Math.round((qz.index / qz.questions.length) * 100);
      return `
        <div class="quiz-box">
          <div class="quiz-meta">
            <span><strong>第 ${qz.index + 1} 問</strong> / ${qz.questions.length}</span>
            <span class="muted">正解数: ${qz.score}</span>
          </div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
            <div class="question-prompt" style="margin:0;font-size:1.3rem;">${escapeHtml(cur.prompt)}</div>
            <button class="speak-btn" data-speak="${escapeHtml(cur.item.word)}">🔊 聞く</button>
          </div>
          <div class="question-ja">${escapeHtml(cur.sub)}</div>
          <div class="choices two-col">
            ${cur.choices.map((c) => {
              let cls = "choice-btn";
              if (qz.answered) {
                if (c === cur.answer) cls += " correct";
                else if (c === qz.selected) cls += " wrong";
              }
              return `<button class="${cls}" ${qz.answered ? "disabled" : ""} onclick="answerVocabQuiz('${escapeHtml(c).replace(/'/g, "\\'")}')">${escapeHtml(c)}</button>`;
            }).join("")}
          </div>
          ${qz.answered ? `
            <div class="feedback-box ${qz.selected === cur.answer ? "ok" : "ng"}">
              <strong>${qz.selected === cur.answer ? "⭕ 正解！" : `❌ 惜しい！正解は「${escapeHtml(cur.answer)}」`}</strong>
              <div style="margin-top:4px;">${escapeHtml(cur.item.word)}（${escapeHtml(cur.item.form)}）＝ ${escapeHtml(cur.item.meaning)}</div>
              ${cur.item.note ? `<div style="margin-top:4px;font-size:0.85rem;">💡 ${escapeHtml(cur.item.note)}</div>` : ""}
              <div style="margin-top:10px;">
                <button class="btn btn-primary" onclick="nextVocabQuiz()">次の問題へ →</button>
              </div>
            </div>
          ` : ""}
        </div>
      `;
    })()}
  `;
}

function fcMarkAndNext(id, mastered) {
  const list = state.progress.masteredVocab;
  const idx = list.indexOf(id);
  if (mastered && idx < 0) list.push(id);
  if (!mastered && idx >= 0) list.splice(idx, 1);
  saveProgress();
  const len = state.fcList.length || 1;
  state.fcIndex = (state.fcIndex + 1) % len;
  state.fcFlipped = false;
  render();
}

// -------------------- Render: PRACTICE --------------------

function renderWordChips(words) {
  if (!words || !words.length) return "";
  return `
    <div class="word-chips">
      ${words.map((w) => `<span class="word-chip"><b>${escapeHtml(w.de)}</b>＝${escapeHtml(w.ja)}</span>`).join("")}
    </div>
  `;
}

function toggleSheetAnswer(qId) {
  state.sheetRevealed[qId] = !state.sheetRevealed[qId];
  render();
}

function toggleSheetAll() {
  state.sheetRevealAll = !state.sheetRevealAll;
  if (state.practiceSession) {
    state.practiceSession.questions.forEach((q) => {
      state.sheetRevealed[q.id] = state.sheetRevealAll;
    });
  }
  render();
}

function renderPractice() {
  if (!state.practiceSession) {
    const solvedSet = new Set(state.progress.solvedQuestions);
    const wrongCount = state.progress.wrongQuestions.length;

    return `
      <h2 class="section-heading">✏️ 教科書 全問題＆解説（p.24〜p.32）</h2>
      <div class="card">
        <div class="card-title">勉強モードを選ぶ（途中でいつでも切り替えOK）</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn ${state.practiceInputMode === "sheet" ? "btn-primary" : "btn-secondary"}" onclick="state.practiceInputMode='sheet'; render();">📖 参考書モード（全問・訳・解説を一覧）</button>
          <button class="btn ${state.practiceInputMode === "choice" ? "btn-primary" : "btn-secondary"}" onclick="state.practiceInputMode='choice'; render();">📱 4択クイズ</button>
          <button class="btn ${state.practiceInputMode === "input" ? "btn-primary" : "btn-secondary"}" onclick="state.practiceInputMode='input'; render();">⌨️ スペル入力</button>
        </div>
        <p class="muted" style="margin-top:8px;">※ 最初は<strong>「📖 参考書モード」</strong>で日本語訳・単語の意味・答えと解説を見ながら読むのが一番わかりやすいです！</p>
      </div>

      <div class="card" style="background:var(--primary-soft);border-color:var(--masc-border);">
        <div class="card-title">🎯 総合テスト・復習</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="openPracticeSet('random')">🎲 全範囲ランダム10問テスト</button>
          ${wrongCount > 0 ? `<button class="btn btn-danger" onclick="openPracticeSet('wrong')">🔥 間違えた問題だけ復習 (${wrongCount}問)</button>` : ""}
        </div>
      </div>

      <div class="step-list">
        ${STUDY_DATA.exerciseSets.map((s) => {
          const done = s.questions.filter((q) => solvedSet.has(q.id)).length;
          return `
            <button class="step-card" onclick="openPracticeSet('${s.id}')">
              <div class="step-num">${done === s.questions.length ? "✅" : "✏️"}</div>
              <div class="step-body">
                <div class="step-title">${s.title}</div>
                <div class="step-desc">${s.desc}（クリア ${done} / ${s.questions.length}）</div>
              </div>
              <span>→</span>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  const sess = state.practiceSession;

  // 参考書モード（全問・日本語訳・単語の意味・答え解説を一覧表示）
  if (state.practiceInputMode === "sheet") {
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
        <button class="btn btn-sm btn-secondary" onclick="state.practiceSession = null; render();">← 問題一覧</button>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <button class="btn btn-sm btn-primary" onclick="state.practiceInputMode='sheet'; render();">📖 一覧</button>
          <button class="btn btn-sm btn-secondary" onclick="state.practiceInputMode='choice'; render();">📱 4択</button>
          <button class="btn btn-sm btn-secondary" onclick="state.practiceInputMode='input'; render();">⌨️ 入力</button>
        </div>
      </div>

      <div class="card" style="background:var(--primary-soft);border-color:var(--masc-border);display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">
        <div>
          <div class="card-title" style="margin:0;">${escapeHtml(sess.title)}</div>
          <div class="muted" style="color:var(--text);">全${sess.questions.length}問の訳・単語・解説をまとめて確認できます</div>
        </div>
        <button class="btn btn-sm btn-primary" onclick="toggleSheetAll()">
          ${state.sheetRevealAll ? "🙈 全部の答えを隠す" : "👀 全部の答え・解説を表示"}
        </button>
      </div>

      ${sess.questions.map((q) => {
        const open = !!state.sheetRevealed[q.id];
        return `
          <div class="answer-sheet-item">
            <div class="question-prompt">${q.prompt}</div>
            <div class="question-ja">${escapeHtml(q.ja)}</div>
            ${renderWordChips(q.words)}
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;">
              <button class="btn btn-sm ${open ? "btn-secondary" : "btn-primary"}" onclick="toggleSheetAnswer('${q.id}')">
                ${open ? "答えを隠す" : "答えと解説を見る"}
              </button>
              <button class="speak-btn" data-speak="${escapeHtml(q.answer)}">🔊 正解を聞く</button>
            </div>
            ${open ? `
              <div class="answer-reveal">
                <div><strong>✅ 正解：${escapeHtml(q.answer)}</strong></div>
                <div style="margin-top:6px;">${q.explanation}</div>
              </div>
            ` : ""}
          </div>
        `;
      }).join("")}
    `;
  }

  const finished = sess.index >= sess.questions.length;

  if (finished) {
    return `
      <div style="margin-bottom:12px;">
        <button class="btn btn-sm btn-secondary" onclick="state.practiceSession = null; render();">← 問題一覧に戻る</button>
      </div>
      <div class="quiz-box" style="text-align:center;">
        <h2>🎉 ${escapeHtml(sess.title)} 完了！</h2>
        <p style="font-size:1.8rem;font-weight:800;margin:12px 0;color:var(--primary);">${sess.score} / ${sess.questions.length} 問正解</p>
        <p class="muted" style="margin-bottom:16px;">${sess.score === sess.questions.length ? "全問正解！完全にマスターしました！" : "間違えた問題は自動で復習リストに入っています！"}</p>
        <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="openPracticeSet('${state.practiceSetId}')">もう一度解く</button>
          <button class="btn btn-secondary" onclick="state.practiceSession = null; render();">別の単元を選ぶ</button>
        </div>
      </div>
    `;
  }

  const q = sess.questions[sess.index];
  const pct = Math.round((sess.index / sess.questions.length) * 100);

  return `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
      <button class="btn btn-sm btn-secondary" onclick="state.practiceSession = null; render();">← 問題一覧</button>
      <div style="display:flex;gap:6px;">
        <button class="btn btn-sm btn-secondary" onclick="state.practiceInputMode='sheet'; render();">📖 一覧</button>
        <button class="btn btn-sm ${state.practiceInputMode === "choice" ? "btn-primary" : "btn-secondary"}" onclick="state.practiceInputMode='choice'; render();">📱 4択</button>
        <button class="btn btn-sm ${state.practiceInputMode === "input" ? "btn-primary" : "btn-secondary"}" onclick="state.practiceInputMode='input'; render();">⌨️ 入力</button>
      </div>
    </div>

    <div class="quiz-box">
      <div class="quiz-meta">
        <span><strong>${escapeHtml(sess.title)}</strong>（${sess.index + 1} / ${sess.questions.length}）</span>
        <span class="muted">正解: ${sess.score}</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>

      <div class="question-prompt">${q.prompt}</div>
      <div class="question-ja">${escapeHtml(q.ja)}</div>
      ${renderWordChips(q.words)}

      ${!sess.answered && !sess.showHint ? `
        <button class="btn btn-sm btn-secondary" style="margin:6px 0 10px;" onclick="state.practiceSession.showHint = true; render();">💡 ヒントを見る</button>
      ` : ""}
      ${sess.showHint ? `<div class="hint-box">💡 <strong>ヒント：</strong>${escapeHtml(q.hint)}</div>` : ""}

      ${state.practiceInputMode === "choice" ? `
        <div class="choices">
          ${q.shuffledChoices.map((c) => {
            let cls = "choice-btn";
            if (sess.answered) {
              if (c === q.answer) cls += " correct";
              else if (c === sess.userAnswer) cls += " wrong";
            }
            return `<button class="${cls}" ${sess.answered ? "disabled" : ""} onclick="submitPracticeAnswer('${escapeHtml(c).replace(/'/g, "\\'")}')">${escapeHtml(c)}</button>`;
          }).join("")}
        </div>
      ` : `
        <div class="umlaut-bar">
          ${["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"].map((ch) => `<button type="button" class="umlaut-key" onclick="insertUmlaut('${ch}')">${ch}</button>`).join("")}
        </div>
        <form onsubmit="event.preventDefault(); submitPracticeInput();">
          <div class="input-row">
            <input id="practice-input" type="text" class="answer-input" placeholder="ドイツ語を入力..." value="${escapeHtml(sess.userAnswer)}" ${sess.answered ? "disabled" : ""} autocomplete="off" autocapitalize="none" spellcheck="false" />
            <button type="submit" class="btn btn-primary" ${sess.answered ? "disabled" : ""}>答え合わせ</button>
          </div>
        </form>
      `}

      ${sess.answered ? `
        <div class="feedback-box ${sess.lastCorrect ? "ok" : "ng"}">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;">
            <strong>${sess.lastCorrect ? "⭕ 正解！" : `❌ 正解は：${escapeHtml(q.answer)}`}</strong>
            <button class="speak-btn" data-speak="${escapeHtml(q.answer)}">🔊 正解を聞く</button>
          </div>
          <div style="margin-top:8px;">${q.explanation}</div>
          <div style="margin-top:12px;">
            <button class="btn btn-primary" onclick="nextPracticeQuestion()">次の問題へ →</button>
          </div>
        </div>
      ` : ""}
    </div>
  `;
}

function insertUmlaut(ch) {
  const input = document.getElementById("practice-input");
  if (!input || input.disabled) return;
  const start = input.selectionStart || input.value.length;
  const end = input.selectionEnd || input.value.length;
  input.value = input.value.slice(0, start) + ch + input.value.slice(end);
  input.focus();
  input.setSelectionRange(start + ch.length, start + ch.length);
}

function submitPracticeInput() {
  const input = document.getElementById("practice-input");
  if (!input) return;
  const val = input.value.trim();
  if (!val) {
    showToast("答えを入力してください");
    return;
  }
  submitPracticeAnswer(val);
}

function submitPracticeAnswer(val) {
  const sess = state.practiceSession;
  if (!sess || sess.answered) return;
  const q = sess.questions[sess.index];
  const norm = normalizeAnswer(val);
  const accepted = (q.accept || [q.answer]).map(normalizeAnswer);
  const isCorrect = accepted.includes(norm);

  sess.answered = true;
  sess.userAnswer = val;
  sess.lastCorrect = isCorrect;

  if (isCorrect) {
    sess.score++;
    if (!state.progress.solvedQuestions.includes(q.id)) {
      state.progress.solvedQuestions.push(q.id);
    }
    const wIdx = state.progress.wrongQuestions.indexOf(q.id);
    if (wIdx >= 0) state.progress.wrongQuestions.splice(wIdx, 1);
  } else {
    if (!state.progress.wrongQuestions.includes(q.id)) {
      state.progress.wrongQuestions.push(q.id);
    }
  }
  saveProgress();
  render();
}

function nextPracticeQuestion() {
  const sess = state.practiceSession;
  if (!sess) return;
  sess.index++;
  sess.answered = false;
  sess.showHint = false;
  sess.lastCorrect = false;
  sess.userAnswer = "";
  render();
}

// -------------------- Main Render & Event Delegation --------------------

function render() {
  const main = document.getElementById("app-main");
  if (!main) return;
  if (state.tab === "home") main.innerHTML = renderHome();
  else if (state.tab === "textbook") main.innerHTML = renderTextbook();
  else if (state.tab === "learn") main.innerHTML = renderLearn();
  else if (state.tab === "vocab") main.innerHTML = renderVocab();
  else if (state.tab === "practice") main.innerHTML = renderPractice();
}

const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleTheme);
}
applyTheme(getCurrentTheme());

document.addEventListener("click", (e) => {
  const navBtn = e.target.closest(".nav-btn");
  if (navBtn && navBtn.dataset.tab) {
    setTab(navBtn.dataset.tab);
    return;
  }
  const speakBtn = e.target.closest(".speak-btn[data-speak]");
  if (speakBtn) {
    e.stopPropagation();
    speakGerman(speakBtn.dataset.speak);
  }
});

// Preload voices on browsers that load them asynchronously
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

render();
