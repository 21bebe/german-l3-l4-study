// ============================================================
// ドイツ語ゼロから攻略 (Lektion 3 p.24 〜 Lektion 4 p.32)
// 全データ：超ていねい解説（全ドイツ語訳つき）・単語帳・教科書全問題
// ============================================================

const STUDY_DATA = {
  // ----------------------------------------------------------
  // 1. 超ていねい解説セクション（すべてのドイツ語に日本語訳つき！）
  // ----------------------------------------------------------
  lessons: [
    {
      id: "zero",
      shortTitle: "0. 完全ゼロ入門",
      title: "Step 0：完全ゼロからの超入門（L1〜L2の土台）",
      badge: "まずはここから！",
      summary: "「単語も文法も何ひとつわからない！」という状態でも大丈夫。L3・L4を読むために絶対必要なルールだけを、専門用語なし・全訳つきでやさしく解説します。",
      blocks: [
        {
          heading: "① 名詞には「性別」がある＆必ず大文字で始まる！",
          html: `
            <p>ドイツ語では、すべての名詞（モノ・人・動物の名前）が<strong>「男性」「女性」「中性」</strong>の3つのグループに分かれています。モノに性別があるわけではなく、<strong>「言葉のチーム分け」</strong>だと思えばOKです。</p>
            <div class="callout callout-tip">
              <strong>色と冠詞（その〜）をセットで覚えよう！</strong><br>
              ・<span class="badge badge-masc">男性 der</span>（青）：<code>der Vater</code>（その父）, <code>der Hund</code>（その犬）, <code>der Bleistift</code>（その鉛筆）<br>
              ・<span class="badge badge-fem">女性 die</span>（赤）：<code>die Mutter</code>（その母）, <code>die Tasche</code>（そのかばん）, <code>die Uhr</code>（その時計）<br>
              ・<span class="badge badge-neut">中性 das</span>（緑）：<code>das Buch</code>（その本）, <code>das Auto</code>（その車）, <code>das Mädchen</code>（その少女）<br>
              ・<span class="badge badge-pl">複数 die</span>（橙）：2つ以上（複数）になると、性別に関係なく全部 <code>die</code> になります！
            </div>
            <p><strong>ポイント：</strong>ドイツ語の名詞は、文の途中でも<strong>必ず1文字目が大文字</strong>になります。</p>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Ich kaufe ein <b>B</b>uch.</span>
                  <button class="speak-btn" data-speak="Ich kaufe ein Buch.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：私は1冊の本を買います。（Ich＝私、kaufe＝買う、ein＝1つの、Buch＝本）</div>
              </div>
            </div>
          `
        },
        {
          heading: "② 「1格・2格・3格・4格」って何？（日本語の「は・の・に・を」！）",
          html: `
            <p>日本語では「父<strong>は</strong>」「父<strong>の</strong>」「父<strong>に</strong>」「父<strong>を</strong>」のように、うしろに助詞をつけますよね。ドイツ語ではその代わりに、<strong>名詞の前にある冠詞（der など）の形を変えて</strong>「は・の・に・を」を表します。これが「格（かく）」です！</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>格</th><th>日本語の訳しかた</th><th>例文での意味（父＝der Vater）</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1格（主格）</strong></td><td><strong>〜は / 〜が</strong>（主語）</td><td><span class="g-m">der</span> Vater（その父<strong>は</strong>）</td></tr>
                  <tr><td><strong>2格（属格）</strong></td><td><strong>〜の</strong>（所有）</td><td><span class="g-m">des</span> Vaters（その父<strong>の</strong>）</td></tr>
                  <tr><td><strong>3格（与格）</strong></td><td><strong>〜に</strong>（相手）</td><td><span class="g-m">dem</span> Vater（その父<strong>に</strong>）</td></tr>
                  <tr><td><strong>4格（対格）</strong></td><td><strong>〜を</strong>（対象）</td><td><span class="g-m">den</span> Vater（その父<strong>を</strong>）</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>定冠詞（「その〜」）の変化表</strong>（L3・L4でめちゃくちゃ使います！）</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>格（意味）</th><th class="g-m">男性</th><th class="g-f">女性</th><th class="g-n">中性</th><th class="g-p">複数</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1格（は・が）</strong></td><td class="g-m">der</td><td class="g-f">die</td><td class="g-n">das</td><td class="g-p">die</td></tr>
                  <tr><td><strong>2格（の）</strong></td><td>des</td><td>der</td><td>des</td><td>der</td></tr>
                  <tr><td><strong>3格（に）</strong></td><td><span class="hl">dem</span></td><td><span class="hl">der</span></td><td><span class="hl">dem</span></td><td><span class="hl">den</span> (+名詞に-n)</td></tr>
                  <tr><td><strong>4格（を）</strong></td><td><span class="hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-tip">
              <strong>不定冠詞（「ある1つの〜」）も超カンタン！</strong><br>
              ・1格（〜は）：男性 <code>ein</code> / 女性 <code>eine</code> / 中性 <code>ein</code><br>
              ・3格（〜に）：男性 <code>einem</code> / 女性 <code>einer</code> / 中性 <code>einem</code><br>
              ・4格（〜を）：男性だけ <strong><code>einen</code></strong> に変わる！女性 <code>eine</code>・中性 <code>ein</code> はそのまま。<br>
              ※複数には「1つの」という意味がないので不定冠詞はありません。
            </div>
          `
        },
        {
          heading: "③ 動詞の基本ルール（主語に合わせて語尾を変える！）",
          html: `
            <p>英語では he / she のときだけ動詞に -s をつけますが、ドイツ語では<strong>すべての主語に合わせて動詞のうしろ（語尾）を変えます</strong>。でもルールは1つだけ！</p>
            <div class="step-guide">
              <strong>動詞の変えかた（2ステップ）：</strong>
              <ol>
                <li>辞書に載っている形（原形）から、最後の <code>-en</code> を取る。（例：<code>kaufen</code> 買う → <code>kauf-</code>）</li>
                <li>主語に合わせて <strong>e - st - t - en - t - en</strong> をくっつける！</li>
              </ol>
            </div>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>主語</th><th>意味</th><th>つける語尾</th><th>kaufen（買う）</th><th>sein（〜である）</th><th>haben（持つ）</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>ich</strong></td><td>私は</td><td><strong>-e</strong></td><td>kauf<strong>e</strong>（買う）</td><td>bin（〜である）</td><td>habe（持つ）</td></tr>
                  <tr><td><strong>du</strong></td><td>君は（親しい1人）</td><td><strong>-st</strong></td><td>kauf<strong>st</strong></td><td>bist</td><td>ha<strong>st</strong></td></tr>
                  <tr><td><strong>er / sie / es</strong></td><td>彼/彼女/それ（単数名詞）</td><td><strong>-t</strong></td><td>kauf<strong>t</strong></td><td>ist</td><td>ha<strong>t</strong></td></tr>
                  <tr><td><strong>wir</strong></td><td>私たちは</td><td><strong>-en</strong></td><td>kauf<strong>en</strong></td><td>sind</td><td>haben</td></tr>
                  <tr><td><strong>ihr</strong></td><td>君たちは（親しい複数）</td><td><strong>-t</strong></td><td>kauf<strong>t</strong></td><td>seid</td><td>habt</td></tr>
                  <tr><td><strong>sie / Sie</strong></td><td>彼ら / あなた(敬称)</td><td><strong>-en</strong></td><td>kauf<strong>en</strong></td><td>sind</td><td>haben</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-warn">
              <strong>発音しにくいときの例外：</strong> <code>warten</code>（待つ）や <code>arbeiten</code>（働く）のように、-en を取ったあとが <code>-t, -d</code> で終わる動詞は、言いやすいように <code>du wart<b>e</b>st</code>（君は待つ）/ <code>er wart<b>e</b>t</code>（彼は待つ）/ <code>ihr wart<b>e</b>t</code>（君たちは待つ）と <strong>-e-</strong> を挟みます。
            </div>
          `
        },
        {
          heading: "④ 語順の超重要ルール（動詞はいつも2番目！）＆発音のコツ",
          html: `
            <p>ドイツ語の普通の文では、<strong>動詞は絶対に「2番目」</strong>に置きます。もし文の最初に「16時に」などの時間が来たら、<strong>主語は動詞のうしろ（3番目）</strong>にひっくり返ります！</p>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Ich <b>gehe</b> um 16 Uhr nach Hause.</span>
                  <button class="speak-btn" data-speak="Ich gehe um 16 Uhr nach Hause.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：私は16時に帰宅します。（1番目: Ich / 2番目: gehe）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Um 16 Uhr <b>gehe</b> ich nach Hause.</span>
                  <button class="speak-btn" data-speak="Um 16 Uhr gehe ich nach Hause.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：16時に私は帰宅します。（1番目: Um 16 Uhr / 2番目: gehe / 3番目: ich！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>Kennst</b> du das Mädchen?</span>
                  <button class="speak-btn" data-speak="Kennst du das Mädchen?">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：君はその少女を知っていますか？（はい/いいえで答える疑問文は「動詞が1番目」！）</div>
              </div>
            </div>
            <div class="callout callout-tip">
              <strong>ドイツ語の特殊文字の読み方：</strong><br>
              ・<code>ä</code>：口を大きく開けて「エー」　・<code>ö</code>：「オ」の口で「エー」　・<code>ü</code>：「ウ」の口で「イー」<br>
              ・<code>ß</code>（エスツェット）：「ss」と同じ（鋭いス）。例：<code>weiß</code>（ヴァイス＝知っている）<br>
              ・<code>ei</code>＝「アイ」、<code>ie</code>＝「イー」、<code>eu/äu</code>＝「オイ」、<code>sch</code>＝「シュ」
            </div>
          `
        }
      ]
    },
    {
      id: "l3-1",
      shortTitle: "L3-1 (p.24) 複数形・弱変化",
      title: "Lektion 3 (p.24)：名詞の複数形 ＆ 男性弱変化名詞",
      badge: "p.24",
      summary: "名詞を「2つ以上（複数）」にする5つのパターンと、複数3格（〜に）の超重要ルール、さらに例外的な変化をする男性名詞をわかりやすく整理します。",
      blocks: [
        {
          heading: "① 名詞の複数形（5つのパターン）",
          html: `
            <p>英語ではだいたい最後に <code>-s</code> をつければ複数になりますが、ドイツ語では単語ごとに決まった<strong>5つのパターン</strong>があります。また、母音（a, o, u）に点々（ウムラウト：ä, ö, ü）がつく「変音」をする単語もあります。</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>パターン</th><th>変音しない例（単数 → 複数）</th><th>変音する例（単数 → 複数）</th><th>覚え方のヒント</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. 無語尾</strong><br><span class="muted">(後ろに何もつけない)</span></td>
                    <td>Wagen → Wagen<span class="tr-ja">車 → 車（複数）</span></td>
                    <td>Bruder → Br<b>ü</b>der<span class="tr-ja">兄弟 → 兄弟たち</span></td>
                    <td>-er / -el / -en で終わる単語に多い</td>
                  </tr>
                  <tr>
                    <td><strong>2. -e</strong></td>
                    <td>Geschenk → Geschenk<b>e</b><span class="tr-ja">贈り物 → 贈り物（複数）</span></td>
                    <td>Baum → B<b>ä</b>um<b>e</b><span class="tr-ja">木 → 木々</span></td>
                    <td>男性・中性名詞に多い</td>
                  </tr>
                  <tr>
                    <td><strong>3. -er</strong></td>
                    <td>Lied → Lied<b>er</b><span class="tr-ja">歌 → 歌（複数）</span></td>
                    <td>Buch → B<b>ü</b>ch<b>er</b><span class="tr-ja">本 → 本（複数）</span></td>
                    <td>中性名詞に多い。変音できる母音は必ず変音！</td>
                  </tr>
                  <tr>
                    <td><strong>4. -(e)n</strong></td>
                    <td>Tasche → Tasch<b>en</b><span class="tr-ja">かばん → かばん（複数）</span>Zeitung → Zeitung<b>en</b><span class="tr-ja">新聞 → 新聞（複数）</span></td>
                    <td><em>変音しない</em></td>
                    <td><strong>女性名詞</strong>のほとんどがこのタイプ！</td>
                  </tr>
                  <tr>
                    <td><strong>5. -s</strong></td>
                    <td>Auto → Auto<b>s</b><span class="tr-ja">自動車 → 自動車（複数）</span>Restaurant → Restaurant<b>s</b><span class="tr-ja">レストラン → レストラン（複数）</span></td>
                    <td><em>変音しない</em></td>
                    <td>英語などの外来語・略語（CD → CDs）に多い</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-warn">
              <strong>上記の5パターン以外の特殊な複数形（p.24 そのまま暗記！）：</strong><br>
              ・<code>Museum → Museen</code>（博物館 → 博物館・複数）<br>
              ・<code>Gymnasium → Gymnasien</code>（ギムナジウム[中高一貫校] → 複数）<br>
              ・<code>Firma → Firmen</code>（会社 → 会社・複数）
            </div>
          `
        },
        {
          heading: "② 複数形の格変化（テスト超頻出：3格の -n！）",
          html: `
            <p>複数形になった名詞の定冠詞は <strong>die（1格）- der（2格）- den（3格）- die（4格）</strong> です。<br>
            ここで絶対にテストに出るのが、<strong>「複数3格（〜たちに）のときだけ、名詞の最後にも <code>-n</code> を付ける」</strong>というルール！</p>
            <div class="table-wrap">
              <table>
                <thead><tr><th>格</th><th>複数形（街：die Städte）</th><th>日本語の意味</th><th>注意点</th></tr></thead>
                <tbody>
                  <tr><td>1格</td><td><strong>die</strong> Städte</td><td>それらの街<strong>は</strong></td><td>そのまま</td></tr>
                  <tr><td>2格</td><td><strong>der</strong> Städte</td><td>それらの街<strong>の</strong></td><td>そのまま</td></tr>
                  <tr><td>3格</td><td><strong>den</strong> Städte<span class="hl">n</span></td><td>それらの街<strong>に</strong></td><td><strong>den ＋ 名詞に -n を付ける！</strong></td></tr>
                  <tr><td>4格</td><td><strong>die</strong> Städte</td><td>それらの街<strong>を</strong></td><td>そのまま</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-tip">
              <strong>例外：</strong>すでに複数形が <code>-n</code>（例：<code>die Taschen</code> かばん）や <code>-s</code>（例：<code>die Autos</code> 車、<code>die CDs</code> CD）で終わっている場合は、3格でも <code>-n</code> を重ねません！（<code>den Taschen</code>、<code>den Autos</code>、<code>den CDs</code>）
            </div>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Ich kaufe <b>den Kindern</b> ein Bilderbuch.</span>
                  <button class="speak-btn" data-speak="Ich kaufe den Kindern ein Bilderbuch.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：私は子どもたちに1冊の絵本を買います。（Kind の複数 Kinder ＋ 3格の -n → Kindern！）</div>
              </div>
            </div>
          `
        },
        {
          heading: "③ 男性弱変化名詞と例外的な名詞（das Herz）",
          html: `
            <p>一部の男性名詞（人や動物を表す言葉が多い）は、<strong>単数1格以外すべて（単数2・3・4格と複数すべて）に <code>-en / -n</code> が付きます</strong>。これを「男性弱変化名詞」と言います。<br>
            中性名詞で同じように特殊な変化をするのは <strong><code>das Herz</code>（心臓・心）だけ</strong>です！</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>格</th><th>-en/-n型<br>der Junge（少年）</th><th>単数-n / 複数-en<br>der Herr（男性・〜氏）</th><th>2格 -ns<br>der Name（名前）</th><th>中性(Herzだけ!)<br>das Herz（心・心臓）</th></tr>
                </thead>
                <tbody>
                  <tr><td>1格（は）</td><td>der Junge</td><td>der Herr</td><td>der Name</td><td>das Herz</td></tr>
                  <tr><td>2格（の）</td><td>des Junge<strong>n</strong></td><td>des Herr<strong>n</strong></td><td>des Name<strong>ns</strong></td><td>des Herz<strong>ens</strong></td></tr>
                  <tr><td>3格（に）</td><td>dem Junge<strong>n</strong></td><td>dem Herr<strong>n</strong></td><td>dem Name<strong>n</strong></td><td>dem Herz<strong>en</strong></td></tr>
                  <tr><td>4格（を）</td><td>den Junge<strong>n</strong></td><td>den Herr<strong>n</strong></td><td>den Name<strong>n</strong></td><td>das Herz（変化なし!）</td></tr>
                  <tr><td>複数</td><td>die Junge<strong>n</strong></td><td>die Herr<strong>en</strong></td><td>die Name<strong>n</strong></td><td>die Herz<strong>en</strong></td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-tip">
              <strong>教科書p.24に載っているその他の代表例：</strong><br>
              ・<code>der Polizist → Polizisten</code>（警察官）<br>
              ・<code>der Student → Studenten</code>（男子大学生）<br>
              ・<code>der Gedanke → Gedanken</code>（考え ※2格は <code>des Gedankens</code>）<br>
              ・<code>der Mensch → Menschen</code>（人間 ※p.29の必須単語！）
            </div>
          `
        }
      ]
    },
    {
      id: "l3-2",
      shortTitle: "L3-2 (p.25) 代名詞・語順・3格動詞",
      title: "Lektion 3 (p.25)：人称代名詞の3・4格 ＆ 語順 ＆ 注意すべき動詞",
      badge: "p.25 最重要",
      summary: "L3で一番テストに出るページ！「私に/私を」「彼に/彼を」の表、3格と4格の並べる順番、そして日本語とズレる「3格をとる動詞」を全例文の訳つきで完全理解します。",
      blocks: [
        {
          heading: "① 人称代名詞の1・3・4格（まずはこの表を見ながら解こう！）",
          html: `
            <p>「私・君・彼・彼女・それ」のように名詞の代わりに使う言葉を<strong>人称代名詞</strong>と言います。</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>意味</th><th>1格（〜は）</th><th>3格（〜に）</th><th>4格（〜を）</th></tr>
                </thead>
                <tbody>
                  <tr><td>私</td><td>ich</td><td><strong>mir</strong>（私に）</td><td><strong>mich</strong>（私を）</td></tr>
                  <tr><td>君（親しい1人）</td><td>du</td><td><strong>dir</strong>（君に）</td><td><strong>dich</strong>（君を）</td></tr>
                  <tr><td>彼 / <span class="g-m">男性名詞</span></td><td class="g-m">er</td><td><strong>ihm</strong>（彼に）</td><td><strong>ihn</strong>（彼を）</td></tr>
                  <tr><td>彼女 / <span class="g-f">女性名詞</span></td><td class="g-f">sie</td><td><strong>ihr</strong>（彼女に）</td><td><strong>sie</strong>（彼女を）</td></tr>
                  <tr><td>それ / <span class="g-n">中性名詞</span></td><td class="g-n">es</td><td><strong>ihm</strong>（それに）</td><td><strong>es</strong>（それを）</td></tr>
                  <tr><td>私たち</td><td>wir</td><td><strong>uns</strong>（私たちに）</td><td><strong>uns</strong>（私たちを）</td></tr>
                  <tr><td>君たち</td><td>ihr</td><td><strong>euch</strong>（君たちに）</td><td><strong>euch</strong>（君たちを）</td></tr>
                  <tr><td>彼ら / <span class="g-p">複数名詞</span></td><td class="g-p">sie</td><td><strong>ihnen</strong>（彼らに）</td><td><strong>sie</strong>（彼らを）</td></tr>
                  <tr><td>あなた(敬称)</td><td>Sie</td><td><strong>Ihnen</strong>（あなたに）</td><td><strong>Sie</strong>（あなたを）</td></tr>
                </tbody>
              </table>
            </div>
            <div class="step-guide">
              <strong>名詞を代名詞に言い換えるコツ（2ステップ）：</strong>
              <ol>
                <li>元の名詞の<strong>性別（男性・女性・中性・複数）</strong>を見る！</li>
                <li>文の中で<strong>何格（1格＝は / 3格＝に / 4格＝を）</strong>かを確認して、上の表から選ぶ！</li>
              </ol>
            </div>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Ich schenke <b>dem Freund</b> eine Uhr. → Ich schenke <b>ihm</b> eine Uhr.</span>
                  <button class="speak-btn" data-speak="Ich schenke dem Freund eine Uhr. Ich schenke ihm eine Uhr.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：私はその友人に時計をプレゼントします。→ 私は<strong>彼に</strong>時計をプレゼントします。（男性3格 → ihm）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>Der Mann</b> kauft <b>die Bücher</b>. → <b>Er</b> kauft <b>sie</b>.</span>
                  <button class="speak-btn" data-speak="Der Mann kauft die Bücher. Er kauft sie.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：その男性はそれらの本を買います。→ <strong>彼はそれらを</strong>買います。（男性1格→Er / 複数4格→sie）</div>
              </div>
            </div>
          `
        },
        {
          heading: "② 3格（人に）と4格（物を）の語順（テスト超頻出！）",
          html: `
            <p>「私は <strong>彼女に</strong>（3格）<strong>1冊の本を</strong>（4格）渡します」のように、1つの文に3格と4格が両方出るときは、<strong>「名詞か？代名詞か？」</strong>で順番が変わります！</p>
            <div class="table-wrap">
              <table>
                <thead><tr><th>組み合わせ</th><th>語順ルール</th><th>例文と日本語訳</th></tr></thead>
                <tbody>
                  <tr>
                    <td>① 両方とも<strong>名詞</strong></td>
                    <td><strong>3格 ＋ 4格</strong><br><span class="muted">(人に → 物を)</span></td>
                    <td>Ich gebe <span class="hl">der Freundin</span> ein Buch.<span class="tr-ja">訳：私はその友達に1冊の本を渡します。</span></td>
                  </tr>
                  <tr>
                    <td>② 片方が<strong>代名詞</strong></td>
                    <td><strong>代名詞 ＋ 名詞</strong><br><span class="muted">(短い代名詞が先!)</span></td>
                    <td>Ich gebe <span class="hl">ihr</span> ein Buch.<span class="tr-ja">訳：私は彼女に1冊の本を渡します。</span>Ich gebe <span class="hl">es</span> der Freundin.<span class="tr-ja">訳：私はそれをその友達に渡します。</span></td>
                  </tr>
                  <tr>
                    <td>③ 両方とも<strong>代名詞</strong></td>
                    <td><strong>4格 ＋ 3格</strong><br><span class="muted">(逆転するので超注意!)</span></td>
                    <td>Ich gebe <span class="hl">es</span> <span class="hl">ihr</span>.<span class="tr-ja">訳：私はそれを彼女に渡します。</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-warn">
              <strong>テストの鉄板ひっかけ問題：</strong><br>
              × <code>Der Lehrer gibt ihm es.</code> → <strong>○ <code>Der Lehrer gibt es ihm.</code></strong>（訳：先生はそれを彼に渡します。）<br>
              両方とも代名詞のときは、必ず<strong>「4格（モノ）→ 3格（ヒト）」</strong>の順番にします！
            </div>
          `
        },
        {
          heading: "③ 4格ではなく「3格」をとる注意が必要な動詞（p.25）",
          html: `
            <p>日本語だと「〜<strong>を</strong>手伝う」「〜<strong>を</strong>信じる」と「を」で訳したくなるのに、ドイツ語では<strong>必ず3格（mir / dir / ihm / ihr…）</strong>をとる動詞です。この5つは絶対に覚えよう！</p>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span><b>gefallen</b>（気に入る）：Die Schuhe gefallen <span class="hl">ihr</span> gut.</span>
                  <button class="speak-btn" data-speak="Die Schuhe gefallen ihr gut.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：それらの靴は彼女の気に入ります。（※「モノ（靴）」が主語、「気に入る人（彼女）」が3格 ihr！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>gehören</b>（〜のものである）：Das Buch gehört <span class="hl">mir</span>.</span>
                  <button class="speak-btn" data-speak="Das Buch gehört mir.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：その本は私のものです。（※「モノ（本）」が主語、「持ち主（私）」が3格 mir！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>glauben</b>（信じる）：Ich glaube <span class="hl">ihm</span>.</span>
                  <button class="speak-btn" data-speak="Ich glaube ihm.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：私は彼の言うことを信じます。（× ihn ではなく 3格 ihm！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>helfen</b>（手伝う・助ける）：Ich helfe <span class="hl">dir</span>.</span>
                  <button class="speak-btn" data-speak="Ich helfe dir.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：私は君を手伝います。（× dich ではなく 3格 dir！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>danken</b>（感謝する）：Der Junge dankt <span class="hl">der Frau</span>.</span>
                  <button class="speak-btn" data-speak="Der Junge dankt der Frau.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：その少年はその女性に感謝しています。（die Frau の3格＝der Frau！）</div>
              </div>
            </div>
          `
        }
      ]
    },
    {
      id: "l3-3",
      shortTitle: "L3-3 (p.26〜29) 時刻・持ち物・長文",
      title: "Lektion 3 (p.26〜29)：時刻表現・持ち物会話・Lesen 3 長文完全解説",
      badge: "p.26〜29",
      summary: "時刻の聞き方と答え方（p.26〜27）、持ち物の会話（p.28）、そして長文『Mein Geburtstag』（p.29）を、すべての文に日本語訳と単語の意味をつけて解説します。",
      blocks: [
        {
          heading: "① 時刻の表現（Uhrzeit）と時間帯の言葉（p.26〜27）",
          html: `
            <p>時刻の聞き方は2パターンあります。どちらも「今何時ですか？」という意味です。</p>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Entschuldigung! Wie viel Uhr ist es? / Wie spät ist es?</span>
                  <button class="speak-btn" data-speak="Entschuldigung! Wie viel Uhr ist es? Wie spät ist es?">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：すみません！今何時ですか？（spät＝遅い / jetzt＝今 → Wie spät ist es jetzt?＝今何時ですか？）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Es ist 10.10 Uhr. (Es ist zehn Uhr zehn.) — Danke schön! — Bitte schön!</span>
                  <button class="speak-btn" data-speak="Es ist zehn Uhr zehn. Danke schön! Bitte schön!">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：10時10分です。— どうもありがとう！ — どういたしまして！</div>
                <div class="example-note">p.27 時計の例：9 Uhr（neun Uhr＝9時）/ 8.05 Uhr（acht Uhr fünf＝8時5分）/ 13.30 Uhr（dreizehn Uhr dreißig＝13時30分）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>Um</b> 16 Uhr gehe ich <b>nach Hause</b>.</span>
                  <button class="speak-btn" data-speak="Um sechzehn Uhr gehe ich nach Hause.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：16時<b>に</b>私は<b>帰宅します</b>。（um + 時刻＝〜時に / nach Hause gehen＝帰宅する）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>Um wie viel Uhr</b> beginnt die Party?</span>
                  <button class="speak-btn" data-speak="Um wie viel Uhr beginnt die Party?">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：そのパーティーは<b>何時に</b>始まりますか？（beginnen＝始まる）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>Gegen</b> 16 Uhr bin ich <b>zu Hause</b>.</span>
                  <button class="speak-btn" data-speak="Gegen sechzehn Uhr bin ich zu Hause.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：16時<b>ごろ</b>私は<b>家にいます</b>。（gegen + 時刻＝〜時ごろ / zu Hause sein＝在宅している）</div>
              </div>
            </div>
            <div class="callout callout-tip">
              <strong>p.27 時間帯の副詞（すべて「いつも〜に」）：</strong><br>
              ・<code>morgens</code>（朝に） / <code>vormittags</code>（午前中に） / <code>nachmittags</code>（午後に） / <code>abends</code>（夕方に） / <code>nachts</code>（夜に）<br>
              <strong>時刻に使う数字のめやす：</strong><br>
              1 eins / 2 zwei / 3 drei / 4 vier / 5 fünf / 6 sechs / 7 sieben / 8 acht / 9 neun / 10 zehn / 11 elf / 12 zwölf / 13 dreizehn / 14 vierzehn / 15 fünfzehn / 16 sechzehn / 20 zwanzig / 30 dreißig
            </div>
          `
        },
        {
          heading: "② 「誰のもの？」を聞く会話（p.28）",
          html: `
            <p><code>gehören</code>（〜のものである）は<strong>3格</strong>をとるので、「誰の？」と聞くときは <code>wer</code>（誰）の3格 <strong><code>Wem</code></strong> を使います。また、答えるときは元の名詞の性別（男性→Er、女性→sie、中性→Es）で言い換えます！</p>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Der Bleistift gehört mir.</span>
                  <button class="speak-btn" data-speak="Der Bleistift gehört mir.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：その鉛筆は私のものです。（der Bleistift＝鉛筆）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Gehört dir <span class="g-f">die Brille</span>? — Ja, <span class="g-f">sie</span> gehört mir.</span>
                  <button class="speak-btn" data-speak="Gehört dir die Brille? Ja, sie gehört mir.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：その眼鏡は君のものですか？ — はい、それは私のものです。（die Brille は女性名詞なので sie！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>Wem</b> gehört <span class="g-n">das Handy</span>? — <span class="g-n">Es</span> gehört mir.</span>
                  <button class="speak-btn" data-speak="Wem gehört das Handy? Es gehört mir.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：その携帯電話は誰のものですか？ — それは私のものです。（das Handy は中性名詞なので Es！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>Wem</b> gehört <span class="g-m">der Rucksack</span>? — <span class="g-m">Er</span> gehört mir. Und gehört dir <span class="g-f">die Tasche</span>? — Nein, <span class="g-f">sie</span> gehört ihr.</span>
                  <button class="speak-btn" data-speak="Wem gehört der Rucksack? Er gehört mir. Und gehört dir die Tasche? Nein, sie gehört ihr.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：そのリュックは誰のもの？ — 私のものです。それでそのかばんは君のもの？ — いいえ、それは彼女のものです。</div>
              </div>
            </div>
            <div class="callout callout-tip">
              <strong>p.28 会話・作文練習2『Geburtstag』の質問文（全訳）：</strong><br>
              1) <code>Was kauft Yurina für Lena?</code> → 訳：ユリナはレーナのために何を買いますか？（答え方：<code>Sie kauft ...</code> 彼女は〜を買います）<br>
              2) <code>Um wie viel Uhr kommt Max zu Lena?</code> → 訳：マックスは何時にレーナのところに来ますか？（答え方：<code>Um ... Uhr.</code> 〜時に）<br>
              3) <code>Wann beginnt die Geburtstagsparty?</code> → 訳：誕生日パーティーはいつ始まりますか？（答え方：<code>Um ... Uhr.</code> 〜時に）
            </div>
          `
        },
        {
          heading: "③ Lesen 3『Mein Geburtstag（私の誕生日）』1文ずつ完全解説（p.29）",
          html: `
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Ich habe morgen Geburtstag und werde 18 Jahre alt.</span>
                  <button class="speak-btn" data-speak="Ich habe morgen Geburtstag und werde achtzehn Jahre alt.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：私は明日誕生日で、18歳になります。</div>
                <div class="example-note">単語：morgen＝明日 / Geburtstag haben＝誕生日である / und＝そして / werden＝〜になる / 18 Jahre alt＝18歳</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Meine Eltern geben eine Geburtstagsparty für mich.</span>
                  <button class="speak-btn" data-speak="Meine Eltern geben eine Geburtstagsparty für mich.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：私の両親が、私のために誕生日パーティーを開いてくれます。</div>
                <div class="example-note">単語：meine Eltern＝私の両親（複数） / geben＝開く・与える / für＋4格＝〜のために（ichの4格 mich）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Sie beginnt morgen um 14.00. Viele Freunde kommen.</span>
                  <button class="speak-btn" data-speak="Sie beginnt morgen um vierzehn Uhr. Viele Freunde kommen.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：それ（パーティー）は明日14時に始まります。たくさんの友達が来ます。</div>
                <div class="example-note">ポイント：Sie は直前の女性名詞 eine Geburtstagsparty（誕生日パーティー）のこと！ / viele Freunde＝たくさんの友達 / kommen＝来る</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Was schenken sie mir? Bücher, CDs, Kleider...</span>
                  <button class="speak-btn" data-speak="Was schenken sie mir? Bücher, CDs, Kleider.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：彼らは私に何をプレゼントしてくれるだろう？本、CD、服…</div>
                <div class="example-note">単語：Was＝何を / schenken＝贈る / sie＝彼ら（友達たち） / mir＝私に（3格） / Kleider＝服（Kleidの複数）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Sicher gefallen mir die Geschenke! Ich hoffe, wir haben viel Spaß.</span>
                  <button class="speak-btn" data-speak="Sicher gefallen mir die Geschenke! Ich hoffe, wir haben viel Spaß.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：きっとその贈り物たちは私の気に入るはず！私たちがすごく楽しめるといいな。</div>
                <div class="example-note">ポイント：sicher＝きっと / die Geschenke（複数）が主語なので動詞は gefallen、私に＝3格 mir！ / hoffen＝願う / viel Spaß haben＝すごく楽しむ</div>
              </div>
            </div>
            <div class="callout callout-success">
              <strong>p.29 補足：「小さな〜」を表す縮小語尾 <code>-chen</code> と <code>-lein</code></strong><br>
              語尾に <code>-chen</code> や <code>-lein</code> がつくと、元の性別に関係なく<strong>必ず中性名詞（<code>das</code>）</strong>になり、母音にウムラウトが付くことが多いです！<br>
              ・<code>das Mädchen</code>（少女） / <code>das Vöglein</code>（小鳥）<br>
              ・<code>Brot</code>（パン）→ <code>Brötchen</code>（小さなパン） / <code>Katze</code>（猫）→ <code>Kätzchen</code>（子猫）<br>
              ・<code>Baum</code>（木）→ <code>Bäumchen</code>（小さな木） / <code>Rose</code>（バラ）→ <code>Röslein</code>（小さなバラ）<br>
              ・<code>Hans</code>（ハンス）→ <code>Hänschen</code>（ハンスちゃん） / <code>Maus</code>（ネズミ）→ <code>Mäuschen</code>（小さなネズミ・かわいい子）
            </div>
          `
        }
      ]
    },
    {
      id: "l4-1",
      shortTitle: "L4-1 (p.30) 不規則動詞",
      title: "Lektion 4 (p.30)：不規則動詞の現在人称変化",
      badge: "p.30 超頻出",
      summary: "「du（君は）」と「er / sie / es（彼・彼女・それ・単数名詞）」のときだけ、動詞の真ん中の母音が変身するルールを、3パターン＋特殊5動詞に分けて完全マスターします！",
      blocks: [
        {
          heading: "① 絶対に覚えておく鉄則：変身するのは「du」と「3人称単数」だけ！",
          html: `
            <p>「3人称単数」とは、<strong>私（ich）でも君（du）でもない、1人・1つのもの</strong>（<code>er</code> 彼 / <code>sie</code> 彼女 / <code>es</code> それ / <code>das Kind</code> その子 / <code>man</code> 人々は…など）のことです。<br>
            <code>ich / wir / ihr / sie（彼ら）/ Sie（あなた）</code> のときは<strong>一切変身しません（いつも通り）</strong>！</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>主語</th><th>① a → ä<br>fahren（乗り物で行く）</th><th>② e(短音) → i<br>sprechen（話す）</th><th>③ e(長音) → ie<br>sehen（見る）</th></tr>
                </thead>
                <tbody>
                  <tr><td>ich（私は）</td><td>fahre</td><td>spreche</td><td>sehe</td></tr>
                  <tr><td><strong>du（君は）</strong></td><td><span class="hl">fährst</span></td><td><span class="hl">sprichst</span></td><td><span class="hl">siehst</span></td></tr>
                  <tr><td><strong>er / sie / es（3人称単数）</strong></td><td><span class="hl">fährt</span></td><td><span class="hl">spricht</span></td><td><span class="hl">sieht</span></td></tr>
                  <tr><td>wir / sie / Sie</td><td>fahren</td><td>sprechen</td><td>sehen</td></tr>
                  <tr><td>ihr（君たちは）</td><td>fahrt</td><td>sprecht</td><td>seht</td></tr>
                </tbody>
              </table>
            </div>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span><b>Fährst</b> du nach München?</span>
                  <button class="speak-btn" data-speak="Fährst du nach München?">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：君はミュンヘンへ行くの？（du なので fahren → fährst！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Er <b>spricht</b> sehr gut Deutsch.</span>
                  <button class="speak-btn" data-speak="Er spricht sehr gut Deutsch.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：彼はとても上手にドイツ語を話します。（er なので sprechen → spricht！）</div>
              </div>
            </div>
            <div class="callout callout-tip">
              <strong>p.30に載っている3パターン全動詞：</strong><br>
              ・<strong>a → ä</strong>：<code>fahren</code>（行く）, <code>schlafen</code>（眠る：schläfst/schläft）, <code>tragen</code>（運ぶ・着る：trägst/trägt）, <code>waschen</code>（洗う：wäschst/wäscht）, <code>laufen</code>（歩く・走る：läufst/läuft）, <code>gefallen</code>（気に入る：gefällst/gefällt）<br>
              ・<strong>e → i</strong>：<code>sprechen</code>（話す）, <code>essen</code>（食べる：<b>isst / isst</b>）, <code>helfen</code>（助ける：hilfst/hilft）, <code>treffen</code>（会う：triffst/trifft）, <code>vergessen</code>（忘れる：<b>vergisst / vergisst</b>）, <code>werfen</code>（投げる：wirfst/wirft）<br>
              ・<strong>e → ie</strong>：<code>sehen</code>（見る）, <code>lesen</code>（読む：<b>liest / liest</b>）, <code>empfehlen</code>（すすめる：empfiehlst/empfiehlt）, <code>befehlen</code>（命令する：befiehlst/befiehlt）, <code>geschehen</code>（起こる：geschieht）
            </div>
          `
        },
        {
          heading: "② スペルや語尾まで特別な5つの不規則動詞（テスト超頻出！）",
          html: `
            <p>下の5つは母音だけでなく<strong>文字が減ったり増えたりする</strong>ので、そのまま丸暗記がおすすめです！</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>動詞</th><th>意味</th><th>ich</th><th>du</th><th>er / sie / es</th><th>覚えるポイント</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>halten</strong></td><td>保つ・止まる</td><td>halte</td><td>hältst</td><td><span class="hl">hält</span></td><td>tを重ねない（×hältt）</td></tr>
                  <tr><td><strong>geben</strong></td><td>与える・渡す</td><td>gebe</td><td>gibst</td><td>gibt</td><td>e → i</td></tr>
                  <tr><td><strong>nehmen</strong></td><td>取る・乗る</td><td>nehme</td><td><span class="hl">nimmst</span></td><td><span class="hl">nimmt</span></td><td>hが消えてmが2つ！</td></tr>
                  <tr><td><strong>werden</strong></td><td>〜になる</td><td>werde</td><td><span class="hl">wirst</span></td><td><span class="hl">wird</span></td><td>dが消える！</td></tr>
                  <tr><td><strong>wissen</strong></td><td>知っている</td><td><span class="hl">weiß</span></td><td><span class="hl">weißt</span></td><td><span class="hl">weiß</span></td><td>ichとerが同じ weiß！</td></tr>
                </tbody>
              </table>
            </div>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span><b>Nimmst</b> du den Zug?</span>
                  <button class="speak-btn" data-speak="Nimmst du den Zug?">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：君はその列車に乗るの（利用するの）？（nehmen＋乗り物＝〜に乗る / der Zug＝列車）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Woher <b>weißt</b> du das?</span>
                  <button class="speak-btn" data-speak="Woher weißt du das?">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：君はどこでそれを知ったの？（woher＝どこから）</div>
              </div>
            </div>
          `
        }
      ]
    },
    {
      id: "l4-2",
      shortTitle: "L4-2 (p.31) 命令形・〜しましょう",
      title: "Lektion 4 (p.31)：命令形（Imperativ）＆「〜しましょう！」",
      badge: "p.31",
      summary: "相手（du / ihr / Sie）ごとに「〜して！」「〜してください」と頼む・命令する形と、「一緒に〜しよう！」の誘い方を、全例文の訳つきでやさしく解説します。",
      blocks: [
        {
          heading: "① 命令形の作り方（相手は du / ihr / Sie の3パターンだけ！）",
          html: `
            <p>「来て！」「待って！」「気をつけて！」のように、相手に何かを頼んだり命令したりするときの形です。</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>相手</th><th>kommen<br>(来る)</th><th>warten<br>(待つ)</th><th>sprechen<br>(話す e→i)</th><th>sehen<br>(見る e→ie)</th><th>schlafen<br>(眠る a→ä)</th><th>sein<br>(〜である)</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>du</strong>（君へ）</td><td>Komm(e)!<span class="tr-ja">来て！</span></td><td>Wart<strong>e</strong>!<span class="tr-ja">待って！</span></td><td><span class="hl">Sprich!</span><span class="tr-ja">話して！</span></td><td><span class="hl">Sieh!</span><span class="tr-ja">見て！</span></td><td>Schlaf(e)!<span class="tr-ja">寝て！</span></td><td><span class="hl">Sei ...!</span><span class="tr-ja">〜でいて！</span></td></tr>
                  <tr><td><strong>ihr</strong>（君たちへ）</td><td>Kommt!<span class="tr-ja">来て！</span></td><td>Wartet!<span class="tr-ja">待って！</span></td><td>Sprecht!<span class="tr-ja">話して！</span></td><td>Seht!<span class="tr-ja">見て！</span></td><td>Schlaft!<span class="tr-ja">寝て！</span></td><td><span class="hl">Seid ...!</span><span class="tr-ja">〜でいて！</span></td></tr>
                  <tr><td><strong>Sie</strong>（あなたへ）</td><td>Kommen <b>Sie</b>!<span class="tr-ja">来てください！</span></td><td>Warten <b>Sie</b>!<span class="tr-ja">待ってください！</span></td><td>Sprechen <b>Sie</b>!<span class="tr-ja">話してください！</span></td><td>Sehen <b>Sie</b>!<span class="tr-ja">見てください！</span></td><td>Schlafen <b>Sie</b>!<span class="tr-ja">寝てください！</span></td><td><span class="hl">Seien Sie ...!</span><span class="tr-ja">〜でいてください！</span></td></tr>
                </tbody>
              </table>
            </div>
            <div class="step-guide">
              <strong>カンタン暗記ルール（4つだけ！）：</strong>
              <ol>
                <li><strong><code>du</code>（君へ）</strong>：普通の du の形から <strong><code>-st</code> と主語 <code>du</code> を取る</strong>！<br>
                  ・ただし <strong><code>e → i / ie</code> 型は変化したまま</strong>（<code>du sprichst → Sprich!</code> / <code>du siehst → Sieh!</code> / <code>du hilfst → Hilf!</code> ※-eは付けない！）<br>
                  ・逆に <strong><code>a → ä</code> 型はウムラウトを消して元に戻す</strong>（<code>du schläfst → Schlaf(e)!</code>）<br>
                  ・<code>warten / öffnen</code> など言いにくい動詞は口調の <code>-e</code> を残す（<code>Warte!</code> / <code>Öffne!</code>）</li>
                <li><strong><code>ihr</code>（君たちへ）</strong>：普通の ihr の形から<strong>主語 <code>ihr</code> を取るだけ</strong>！（例：<code>Kommt!</code> / <code>Seid vorsichtig!</code>）</li>
                <li><strong><code>Sie</code>（あなたへ）</strong>：<strong><code>Sie</code> だけ必ず主語を付ける</strong>！「動詞原形 ＋ Sie!」（例：<code>Kommen Sie!</code>）</li>
                <li><strong><code>sein</code>（〜である）は超特殊</strong>：<code>Sei!</code>（du） / <code>Seid!</code>（ihr） / <strong><code>Seien Sie!</code></strong>（Sie ※×Sein Sie に注意！）</li>
              </ol>
            </div>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Komm schnell, Michael!</span>
                  <button class="speak-btn" data-speak="Komm schnell, Michael!">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：ミヒャエル、はやく来て！（schnell＝速く・早く）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Seid vorsichtig!</span>
                  <button class="speak-btn" data-speak="Seid vorsichtig!">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：君たち、気をつけて！（vorsichtig＝用心深い・気をつけて）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Nehmen Sie <b>bitte</b> Platz!</span>
                  <button class="speak-btn" data-speak="Nehmen Sie bitte Platz!">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：どうかおかけください！（bitte＝どうか・お願いします / Platz nehmen＝席に着く）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Sei <b>doch</b> ruhig! / Sieh <b>mal</b>!</span>
                  <button class="speak-btn" data-speak="Sei doch ruhig! Sieh mal!">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：頼むから静かにして！（doch＝頼むから / ruhig＝静かな） / ねえ、ちょっと見て！（mal＝ちょっと）</div>
              </div>
            </div>
          `
        },
        {
          heading: "② 「〜しましょう！」の表現（提案・誘い）",
          html: `
            <p>友達を誘うときは超カンタン！<strong>「動詞の原形 ＋ wir ...!」</strong>と、主語と動詞をひっくり返すだけです。</p>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span><b>Lernen wir</b> Deutsch! — Ja, gern!</span>
                  <button class="speak-btn" data-speak="Lernen wir Deutsch! Ja, gern!">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：ドイツ語を勉強しましょう！ — ええ、喜んで！（gern＝喜んで）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>Trinken wir</b> noch einen Schluck! — Nein, danke.</span>
                  <button class="speak-btn" data-speak="Trinken wir noch einen Schluck! Nein, danke.">🔊 聞く</button>
                </div>
                <div class="example-ja">訳：もう一杯飲みましょう！ — いえ、もう結構です。（noch＝もう1つ / Schluck＝一口・一杯）</div>
              </div>
            </div>
          `
        }
      ]
    }
  ],

  // ----------------------------------------------------------
  // 2. 単語帳データ（p.24〜32の重要語を網羅：全77語）
  // ----------------------------------------------------------
  vocab: [
    // --- L3 必須単語10個 (p.29) ---
    { id: "v01", word: "die Tasche", base: "Tasche", gender: "f", form: "複: die Taschen", meaning: "かばん", cat: "must10", page: "p.29", note: "女性名詞は-(e)n複数が多い！" },
    { id: "v02", word: "das Fahrrad", base: "Fahrrad", gender: "n", form: "複: die Fahrräder", meaning: "自転車", cat: "must10", page: "p.29", note: "fahren(行く)+Rad(車輪)" },
    { id: "v03", word: "die Eltern", base: "Eltern", gender: "p", form: "複数のみ", meaning: "両親", cat: "must10", page: "p.29", note: "いつも複数扱い（動詞も複数形）" },
    { id: "v04", word: "der Hund", base: "Hund", gender: "m", form: "複: die Hunde", meaning: "犬", cat: "must10", page: "p.29", note: "p.26練習1にも登場" },
    { id: "v05", word: "der Mensch", base: "Mensch", gender: "m", form: "複: die Menschen (弱変化)", meaning: "人間", cat: "must10", page: "p.29", note: "男性弱変化名詞（単数2〜4格もMenschen）" },
    { id: "v06", word: "besuchen", base: "besuchen", gender: "v", form: "besucht (規則動詞)", meaning: "〜を訪れる（+4格）", cat: "must10", page: "p.29", note: "Ich besuche sie morgen.（明日彼らを訪ねます）" },
    { id: "v07", word: "denken", base: "denken", gender: "v", form: "denkt (規則動詞)", meaning: "考える", cat: "must10", page: "p.29", note: "基本動詞" },
    { id: "v08", word: "gehören", base: "gehören", gender: "v", form: "gehört (+3格!)", meaning: "〜のものである", cat: "must10", page: "p.29", note: "超重要！3格支配（Das Buch gehört mir.＝その本は私のものです）" },
    { id: "v09", word: "schenken", base: "schenken", gender: "v", form: "schenkt (+3格に +4格を)", meaning: "贈る、プレゼントする", cat: "must10", page: "p.29", note: "Ich schenke ihm eine Uhr.（彼に時計を贈ります）" },
    { id: "v10", word: "spät", base: "spät", gender: "o", form: "形容詞・副詞", meaning: "遅い", cat: "must10", page: "p.29", note: "Wie spät ist es?（今何時ですか？）" },

    // --- p.28 身の回りの持ち物（全16語＋Tascheで17語） ---
    { id: "v11", word: "der Bleistift", base: "Bleistift", gender: "m", form: "複: die Bleistifte", meaning: "鉛筆", cat: "items", page: "p.28", note: "青＝男性" },
    { id: "v12", word: "der Druckbleistift", base: "Druckbleistift", gender: "m", form: "複: die Druckbleistifte", meaning: "シャープペンシル", cat: "items", page: "p.28", note: "Druck(押す)+Bleistift(鉛筆)" },
    { id: "v13", word: "der Radiergummi", base: "Radiergummi", gender: "m", form: "複: die Radiergummis", meaning: "消しゴム", cat: "items", page: "p.28", note: "-s複数" },
    { id: "v14", word: "der Kugelschreiber", base: "Kugelschreiber", gender: "m", form: "複: die Kugelschreiber", meaning: "ボールペン", cat: "items", page: "p.28", note: "無語尾複数" },
    { id: "v15", word: "der USB-Stick", base: "USB-Stick", gender: "m", form: "複: die USB-Sticks", meaning: "USBメモリ", cat: "items", page: "p.28", note: "外来語なので-s複数" },
    { id: "v16", word: "der Rucksack", base: "Rucksack", gender: "m", form: "複: die Rucksäcke", meaning: "リュックサック", cat: "items", page: "p.28", note: "複数でウムラウト！" },
    { id: "v17", word: "die Schere", base: "Schere", gender: "f", form: "複: die Scheren", meaning: "はさみ", cat: "items", page: "p.28", note: "赤＝女性" },
    { id: "v18", word: "die Armbanduhr", base: "Armbanduhr", gender: "f", form: "複: die Armbanduhren", meaning: "腕時計", cat: "items", page: "p.28", note: "Uhr(時計)も女性名詞" },
    { id: "v19", word: "die Brille", base: "Brille", gender: "f", form: "複: die Brillen", meaning: "眼鏡", cat: "items", page: "p.28", note: "ドイツ語では単数形 die Brille を使う" },
    { id: "v20", word: "das Stifteetui", base: "Stifteetui", gender: "n", form: "複: die Stifteetuis", meaning: "筆箱", cat: "items", page: "p.28", note: "緑＝中性" },
    { id: "v21", word: "das Heft", base: "Heft", gender: "n", form: "複: die Hefte", meaning: "ノート", cat: "items", page: "p.28", note: "-e複数" },
    { id: "v22", word: "das Messer", base: "Messer", gender: "n", form: "複: die Messer", meaning: "ナイフ・カッター", cat: "items", page: "p.28", note: "無語尾複数" },
    { id: "v23", word: "das Smartphone", base: "Smartphone", gender: "n", form: "複: die Smartphones", meaning: "スマートフォン", cat: "items", page: "p.28", note: "-s複数" },
    { id: "v24", word: "das Handy", base: "Handy", gender: "n", form: "複: die Handys", meaning: "携帯電話", cat: "items", page: "p.28", note: "ドイツ独自の言い方で「携帯電話」" },
    { id: "v25", word: "das Lehrbuch", base: "Lehrbuch", gender: "n", form: "複: die Lehrbücher", meaning: "教科書", cat: "items", page: "p.28", note: "Buch→Bücher" },
    { id: "v26", word: "das Wörterbuch", base: "Wörterbuch", gender: "n", form: "複: die Wörterbücher", meaning: "辞書", cat: "items", page: "p.28", note: "Wort(言葉)+Buch(本)" },

    // --- L3 名詞・複数形・弱変化 (p.24〜26) ---
    { id: "v27", word: "der Vater", base: "Vater", gender: "m", form: "複: die Väter", meaning: "父", cat: "l3noun", page: "p.24", note: "無語尾＋ウムラウト（3格: den Vätern）" },
    { id: "v28", word: "die Hand", base: "Hand", gender: "f", form: "複: die Hände", meaning: "手", cat: "l3noun", page: "p.24", note: "-e＋ウムラウト（3格: den Händen）" },
    { id: "v29", word: "der Mann", base: "Mann", gender: "m", form: "複: die Männer", meaning: "男性、夫", cat: "l3noun", page: "p.24", note: "-er＋ウムラウト（3格: den Männern）" },
    { id: "v30", word: "die CD", base: "CD", gender: "f", form: "複: die CDs", meaning: "CD", cat: "l3noun", page: "p.24", note: "-s複数（3格でも den CDs）" },
    { id: "v31", word: "der Bruder", base: "Bruder", gender: "m", form: "複: die Brüder", meaning: "兄、弟", cat: "l3noun", page: "p.24", note: "無語尾＋ウムラウト" },
    { id: "v32", word: "die Schwester", base: "Schwester", gender: "f", form: "複: die Schwestern", meaning: "姉、妹", cat: "l3noun", page: "p.26", note: "女性名詞なので4格は eine Schwester" },
    { id: "v33", word: "das Buch", base: "Buch", gender: "n", form: "複: die Bücher", meaning: "本", cat: "l3noun", page: "p.24", note: "-er＋ウムラウト" },
    { id: "v34", word: "das Geschenk", base: "Geschenk", gender: "n", form: "複: die Geschenke", meaning: "贈り物、プレゼント", cat: "l3noun", page: "p.24", note: "-e複数" },
    { id: "v35", word: "das Kind", base: "Kind", gender: "n", form: "複: die Kinder", meaning: "子ども", cat: "l3noun", page: "p.26", note: "複数3格は den Kindern！" },
    { id: "v36", word: "der Vogel", base: "Vogel", gender: "m", form: "複: die Vögel", meaning: "鳥", cat: "l3noun", page: "p.26", note: "無語尾＋ウムラウト" },
    { id: "v37", word: "das Mädchen", base: "Mädchen", gender: "n", form: "複: die Mädchen", meaning: "少女", cat: "l3noun", page: "p.25", note: "-chen付きなので必ず中性 das（代名詞は es）！" },
    { id: "v38", word: "der Junge", base: "Junge", gender: "m", form: "弱変化: des/dem/den/die Jungen", meaning: "少年", cat: "l3noun", page: "p.24", note: "男性弱変化の代表！" },
    { id: "v39", word: "der Herr", base: "Herr", gender: "m", form: "単2〜4: Herrn / 複: Herren", meaning: "男性、〜氏", cat: "l3noun", page: "p.24", note: "単数は-n、複数は-en！" },
    { id: "v40", word: "der Name", base: "Name", gender: "m", form: "2格: Namens / 他: Namen", meaning: "名前", cat: "l3noun", page: "p.24", note: "2格だけ -ns！" },
    { id: "v41", word: "das Herz", base: "Herz", gender: "n", form: "2格: Herzens / 3格: Herzen / 4格: Herz", meaning: "心臓、心", cat: "l3noun", page: "p.24", note: "中性で特殊変化するのは Herz だけ！" },
    { id: "v42", word: "die Stadt", base: "Stadt", gender: "f", form: "複: die Städte", meaning: "街、都市", cat: "l3noun", page: "p.24", note: "複数3格: den Städten" },
    { id: "v43", word: "das Museum", base: "Museum", gender: "n", form: "複: die Museen", meaning: "博物館、美術館", cat: "l3noun", page: "p.24", note: "特殊複数形！" },

    // --- L4 不規則動詞・重要動詞 (p.25, 30〜32) ---
    { id: "v44", word: "fahren", base: "fahren", gender: "v", form: "a→ä: fährst / fährt", meaning: "（乗り物で）行く、運転する", cat: "l4verb", page: "p.30", note: "命令形(du)は Fahr(e)!（ウムラウト戻す）" },
    { id: "v45", word: "schlafen", base: "schlafen", gender: "v", form: "a→ä: schläfst / schläft", meaning: "眠る", cat: "l4verb", page: "p.30", note: "命令形(du)は Schlaf(e)!" },
    { id: "v46", word: "tragen", base: "tragen", gender: "v", form: "a→ä: trägst / trägt", meaning: "運ぶ、身に着ける（着る）", cat: "l4verb", page: "p.30", note: "Er trägt einen Anzug.（彼はスーツを着ている）" },
    { id: "v47", word: "waschen", base: "waschen", gender: "v", form: "a→ä: wäschst / wäscht", meaning: "洗う", cat: "l4verb", page: "p.30", note: "Wäsche waschen＝洗濯する" },
    { id: "v48", word: "laufen", base: "laufen", gender: "v", form: "a→ä: läufst / läuft", meaning: "歩く、走る", cat: "l4verb", page: "p.30", note: "au → äu（オイ）に変化" },
    { id: "v49", word: "gefallen", base: "gefallen", gender: "v", form: "a→ä: gefällst / gefällt (+3格)", meaning: "気に入る", cat: "l4verb", page: "p.25/30", note: "3格支配＋不規則変化のダブル重要語！" },
    { id: "v50", word: "sprechen", base: "sprechen", gender: "v", form: "e→i: sprichst / spricht", meaning: "話す", cat: "l4verb", page: "p.30", note: "命令形(du)は Sprich!" },
    { id: "v51", word: "essen", base: "essen", gender: "v", form: "e→i: isst / isst", meaning: "食べる", cat: "l4verb", page: "p.30", note: "du と er が同じ isst！命令形(du): Iss!" },
    { id: "v52", word: "helfen", base: "helfen", gender: "v", form: "e→i: hilfst / hilft (+3格)", meaning: "助ける、手伝う", cat: "l4verb", page: "p.25/30", note: "3格支配！命令形(du): Hilf mir!（私を手伝って！）" },
    { id: "v53", word: "treffen", base: "treffen", gender: "v", form: "e→i: triffst / trifft (+4格)", meaning: "会う", cat: "l4verb", page: "p.30", note: "英語のmeetと同じく4格をとる" },
    { id: "v54", word: "vergessen", base: "vergessen", gender: "v", form: "e→i: vergisst / vergisst", meaning: "忘れる", cat: "l4verb", page: "p.30", note: "du と er が同じ vergisst！" },
    { id: "v55", word: "werfen", base: "werfen", gender: "v", form: "e→i: wirfst / wirft", meaning: "投げる", cat: "l4verb", page: "p.30", note: "e → i" },
    { id: "v56", word: "sehen", base: "sehen", gender: "v", form: "e→ie: siehst / sieht", meaning: "見る", cat: "l4verb", page: "p.30", note: "命令形(du): Sieh!（見て！）" },
    { id: "v57", word: "lesen", base: "lesen", gender: "v", form: "e→ie: liest / liest", meaning: "読む", cat: "l4verb", page: "p.30", note: "du と er が同じ liest！命令形(du): Lies!" },
    { id: "v58", word: "empfehlen", base: "empfehlen", gender: "v", form: "e→ie: empfiehlst / empfiehlt", meaning: "すすめる", cat: "l4verb", page: "p.30", note: "3格(人)に4格(物)をすすめる" },
    { id: "v59", word: "halten", base: "halten", gender: "v", form: "a→ä: hältst / hält", meaning: "保つ、止まる", cat: "l4verb", page: "p.30", note: "er は hält（-tを重ねない！）" },
    { id: "v60", word: "geben", base: "geben", gender: "v", form: "e→i: gibst / gibt", meaning: "与える、渡す", cat: "l4verb", page: "p.30", note: "命令形(du): Gib!" },
    { id: "v61", word: "nehmen", base: "nehmen", gender: "v", form: "特殊: nimmst / nimmt", meaning: "取る、（乗り物に）乗る", cat: "l4verb", page: "p.30", note: "hが消えてmが2つ！命令形(du): Nimm!" },
    { id: "v62", word: "werden", base: "werden", gender: "v", form: "特殊: wirst / wird", meaning: "〜になる", cat: "l4verb", page: "p.30", note: "dが落ちる！wirst / wird" },
    { id: "v63", word: "wissen", base: "wissen", gender: "v", form: "特殊: weiß / weißt / weiß", meaning: "知っている", cat: "l4verb", page: "p.30", note: "ich と er が同じ weiß！" },
    { id: "v64", word: "glauben", base: "glauben", gender: "v", form: "glaubt (+3格)", meaning: "信じる", cat: "l4verb", page: "p.25", note: "3格支配動詞（Ich glaube ihm.＝彼の言うことを信じる）" },
    { id: "v65", word: "danken", base: "danken", gender: "v", form: "dankt (+3格)", meaning: "感謝する", cat: "l4verb", page: "p.25", note: "3格支配動詞（Der Junge dankt der Frau.＝少年は女性に感謝する）" },

    // --- 時刻・表現・副詞など (p.26〜32) ---
    { id: "v66", word: "morgens", base: "morgens", gender: "o", form: "副詞", meaning: "朝に（毎朝）", cat: "expr", page: "p.27", note: "小文字で -s がつくと「いつも〜に」" },
    { id: "v67", word: "vormittags", base: "vormittags", gender: "o", form: "副詞", meaning: "午前中に", cat: "expr", page: "p.27", note: "vor(前)+Mittag(正午)" },
    { id: "v68", word: "nachmittags", base: "nachmittags", gender: "o", form: "副詞", meaning: "午後に", cat: "expr", page: "p.27", note: "nach(後)+Mittag(正午)" },
    { id: "v69", word: "abends", base: "abends", gender: "o", form: "副詞", meaning: "夕方に、夜に", cat: "expr", page: "p.27", note: "Abend(夕方)から" },
    { id: "v70", word: "nachts", base: "nachts", gender: "o", form: "副詞", meaning: "夜に、夜間に", cat: "expr", page: "p.27", note: "Nacht(夜)から" },
    { id: "v71", word: "nach Hause gehen", base: "nach Hause gehen", gender: "o", form: "熟語", meaning: "帰宅する（家へ帰る）", cat: "expr", page: "p.27", note: "動き・方向は nach Hause" },
    { id: "v72", word: "zu Hause sein", base: "zu Hause sein", gender: "o", form: "熟語", meaning: "在宅している（家にいる）", cat: "expr", page: "p.27", note: "場所は zu Hause" },
    { id: "v73", word: "um ~ Uhr", base: "um ~ Uhr", gender: "o", form: "時刻表現", meaning: "〜時に", cat: "expr", page: "p.27", note: "Um 16 Uhr gehe ich nach Hause.（16時に帰宅します）" },
    { id: "v74", word: "gegen ~ Uhr", base: "gegen ~ Uhr", gender: "o", form: "時刻表現", meaning: "〜時ごろ", cat: "expr", page: "p.27", note: "Gegen 16 Uhr bin ich zu Hause.（16時ごろ家にいます）" },
    { id: "v75", word: "vorsichtig", base: "vorsichtig", gender: "o", form: "形容詞", meaning: "用心深い、気をつけて", cat: "expr", page: "p.31/32", note: "Seid vorsichtig!（気をつけて！）" },
    { id: "v76", word: "gesund", base: "gesund", gender: "o", form: "形容詞", meaning: "健康な", cat: "expr", page: "p.31", note: "Bleib immer gesund!（いつも健康でいてね！）" },
    { id: "v77", word: "zusammen", base: "zusammen", gender: "o", form: "副詞", meaning: "いっしょに", cat: "expr", page: "p.32", note: "Essen wir zusammen zu Mittag!（一緒にお昼を食べよう！）" }
  ],

  // ----------------------------------------------------------
  // 3. 教科書の全問題（p.24〜p.32 を1問も残さず完全収録！全68問）
  // ----------------------------------------------------------
  exerciseSets: [
    {
      id: "p24",
      title: "p.24 練習：名詞の複数形と定冠詞の格変化（全4問）",
      desc: "教科書の4単語すべて！1〜4格の完全な変化表つき",
      questions: [
        {
          id: "p24-1",
          prompt: "1) der Vater（その父）の複数形（1格〜4格）は？ → 複数1格を答えよう",
          ja: "「父親たち」の複数形はどれ？",
          words: [{ de: "der Vater", ja: "父（男性）" }],
          answer: "die Väter",
          accept: ["die Väter", "Väter"],
          choices: ["die Väter", "die Vaters", "die Vater", "die Väten"],
          hint: "Bruder → Brüder と同じ「無語尾＋ウムラウト」タイプ！a が ä になります。",
          explanation: "<b>複数形の格変化（完全版）：</b><br>1格 <b>die Väter</b>（父たちは） / 2格 <b>der Väter</b>（父たちの） / 3格 <b>den Vätern</b>（父たちに ※-nが付く！） / 4格 <b>die Väter</b>（父たちを）"
        },
        {
          id: "p24-2",
          prompt: "2) die Hand（その手）の複数形（1格〜4格）は？ → 複数1格を答えよう",
          ja: "「手（複数）」の形はどれ？",
          words: [{ de: "die Hand", ja: "手（女性）" }],
          answer: "die Hände",
          accept: ["die Hände", "Hände"],
          choices: ["die Hände", "die Handen", "die Hande", "die Hands"],
          hint: "女性名詞ですが -(e)n ではなく、Baum → Bäume と同じ「-e＋ウムラウト」タイプです！",
          explanation: "<b>複数形の格変化（完全版）：</b><br>1格 <b>die Hände</b>（手は） / 2格 <b>der Hände</b>（手の） / 3格 <b>den Händen</b>（手に ※-nが付く！） / 4格 <b>die Hände</b>（手を）"
        },
        {
          id: "p24-3",
          prompt: "3) der Mann（その男性）の複数形（1格〜4格）は？ → 複数1格を答えよう",
          ja: "「男性たち」の複数形はどれ？",
          words: [{ de: "der Mann", ja: "男性、夫（男性）" }],
          answer: "die Männer",
          accept: ["die Männer", "Männer"],
          choices: ["die Männer", "die Manne", "die Mannen", "die Männe"],
          hint: "Buch → Bücher と同じ「-er＋ウムラウト」タイプ！",
          explanation: "<b>複数形の格変化（完全版）：</b><br>1格 <b>die Männer</b>（男性たちは） / 2格 <b>der Männer</b>（男性たちの） / 3格 <b>den Männern</b>（男性たちに ※-nが付く！） / 4格 <b>die Männer</b>（男性たちを）"
        },
        {
          id: "p24-4",
          prompt: "4) die CD（そのCD）の複数形（1格〜4格）は？ → 複数「3格」を答えよう",
          ja: "超ひっかけ注意！-s 複数形の3格（〜たちに）はどうなる？",
          words: [{ de: "die CD", ja: "CD（女性）" }],
          answer: "den CDs",
          accept: ["den CDs"],
          choices: ["den CDs", "den CDsn", "die CDs", "der CDs"],
          hint: "複数3格は普通 -n を付けますが、すでに -s や -n で終わる複数形には付けません！",
          explanation: "<b>複数形の格変化（完全版）：</b><br>1格 <b>die CDs</b> / 2格 <b>der CDs</b> / 3格 <b>den CDs</b>（-s複数なので -n は付けない！） / 4格 <b>die CDs</b>"
        }
      ]
    },
    {
      id: "p25",
      title: "p.25 練習：人称代名詞に書き換え（全3問）",
      desc: "下線部の名詞を人称代名詞に変えて書き直そう！",
      questions: [
        {
          id: "p25-1",
          prompt: "1) Der Junge dankt <u>der Frau</u>. → 下線部を代名詞にして書き直そう",
          ja: "元の文：その少年はあの女性に感謝している。→ 書き換え後：その少年は「彼女に」感謝している。",
          words: [
            { de: "der Junge", ja: "その少年" },
            { de: "dankt (danken)", ja: "感謝している（+3格）" },
            { de: "der Frau", ja: "その女性に（女性3格）" }
          ],
          answer: "Der Junge dankt ihr.",
          accept: ["Der Junge dankt ihr.", "Der Junge dankt ihr", "ihr"],
          choices: ["Der Junge dankt ihr.", "Der Junge dankt sie.", "Der Junge dankt ihm.", "Der Junge dankt ihnen."],
          hint: "danken（感謝する）は「3格」をとる動詞！女性名詞（die Frau）の3格代名詞は？",
          explanation: "<b>正解の訳：</b>その少年は彼女に感謝している。<br><b>解説：</b><code>der Frau</code> は女性名詞の<strong>3格（〜に）</strong>。女性3格の代名詞は <b>ihr</b> なので <b>Der Junge dankt ihr.</b> になります。"
        },
        {
          id: "p25-2",
          prompt: "2) Kennst du <u>das Mädchen</u>? → 下線部を代名詞にして書き直そう",
          ja: "元の文：きみはあの少女を知ってるの？→ 書き換え後：きみは「彼女を」知ってるの？",
          words: [
            { de: "Kennst (kennen)", ja: "知っている（+4格）" },
            { de: "du", ja: "君は" },
            { de: "das Mädchen", ja: "その少女（中性名詞！）" }
          ],
          answer: "Kennst du es?",
          accept: ["Kennst du es?", "Kennst du es", "es"],
          choices: ["Kennst du es?", "Kennst du sie?", "Kennst du ihm?", "Kennst du ihn?"],
          hint: "Mädchen は「少女」ですが、-chen が付いているので文法上の性別は「中性（das）」！",
          explanation: "<b>正解の訳：</b>きみは彼女（その少女）を知ってるの？<br><b>解説：</b>テスト超頻出！<code>das Mädchen</code> は<strong>中性名詞</strong>なので、4格の代名詞は <code>sie</code> ではなく中性の <b>es</b>！よって <b>Kennst du es?</b> になります。"
        },
        {
          id: "p25-3",
          prompt: "3) Das Auto gehört <u>dem Mann</u>. → 下線部を代名詞にして書き直そう",
          ja: "元の文：この車はあの男性のものです。→ 書き換え後：この車は「彼の」ものです。",
          words: [
            { de: "das Auto", ja: "その車" },
            { de: "gehört (gehören)", ja: "〜のものである（+3格）" },
            { de: "dem Mann", ja: "その男性に（男性3格）" }
          ],
          answer: "Das Auto gehört ihm.",
          accept: ["Das Auto gehört ihm.", "Das Auto gehört ihm", "ihm"],
          choices: ["Das Auto gehört ihm.", "Das Auto gehört ihn.", "Das Auto gehört er.", "Das Auto gehört ihr."],
          hint: "gehören は「3格」をとる動詞！男性名詞（dem Mann）の3格代名詞は？",
          explanation: "<b>正解の訳：</b>この車は彼のものです。<br><b>解説：</b><code>dem Mann</code> は男性名詞の<strong>3格</strong>。男性3格の代名詞は <b>ihm</b> なので <b>Das Auto gehört ihm.</b> になります。"
        }
      ]
    },
    {
      id: "p26",
      title: "p.26 Übungen（文法練習1・2・3 全15問）",
      desc: "複数形・人称代名詞・間違い探しの教科書問題すべて！",
      questions: [
        // 文法練習1
        {
          id: "p26-1-1",
          prompt: "【練習1-1】Zwei ( ____ ) spielen dort Tennis.",
          ja: "訳：二人の男性（Mann）があそこでテニスをしている。",
          words: [
            { de: "zwei", ja: "2人の" },
            { de: "spielen", ja: "（スポーツを）する" },
            { de: "dort", ja: "あそこで" }
          ],
          answer: "Männer",
          accept: ["Männer"],
          choices: ["Männer", "Mannen", "Manne", "Männern"],
          hint: "主語（1格＝〜は）なので、Mann の複数1格を入れよう！",
          explanation: "<b>完成文：</b>Zwei <b>Männer</b> spielen dort Tennis.（二人の男性があそこでテニスをしている。）<br><b>解説：</b>Mann の複数形は <b>Männer</b>（-er＋ウムラウト）。主語（1格）なので -n は付きません。"
        },
        {
          id: "p26-1-2",
          prompt: "【練習1-2】Kennt er [ ____ ] Jungen?",
          ja: "訳：彼はその男の子達を知っているのかい？（[ ]に定冠詞を入れよう）",
          words: [
            { de: "Kennt (kennen)", ja: "知っている（+4格）" },
            { de: "er", ja: "彼は" },
            { de: "Jungen", ja: "男の子たち（複数）" }
          ],
          answer: "die",
          accept: ["die"],
          choices: ["die", "den", "der", "das"],
          hint: "「男の子達を」＝複数の4格！複数4格の定冠詞は？",
          explanation: "<b>完成文：</b>Kennt er <b>die</b> Jungen?（彼はその男の子達を知っているのかい？）<br><b>解説：</b>kennen は4格（〜を）をとります。複数の4格の定冠詞は <b>die</b>（die - der - den - die）！"
        },
        {
          id: "p26-1-3",
          prompt: "【練習1-3】Schenkst du [ ____ ] Schwestern die Blumen?",
          ja: "訳：君は妹たちにそれらの花を贈るの？（[ ]に定冠詞を入れよう）",
          words: [
            { de: "Schenkst (schenken)", ja: "贈る（3格に＋4格を）" },
            { de: "Schwestern", ja: "妹・姉たち（複数）" },
            { de: "die Blumen", ja: "それらの花" }
          ],
          answer: "den",
          accept: ["den"],
          choices: ["den", "die", "der", "dem"],
          hint: "「妹たちに」＝複数の3格！複数3格の定冠詞は？",
          explanation: "<b>完成文：</b>Schenkst du <b>den</b> Schwestern die Blumen?（君は妹たちにそれらの花を贈るの？）<br><b>解説：</b>複数の3格（〜たちに）の定冠詞は <b>den</b>！Schwestern はすでに -n で終わっているのでそのままでOK。"
        },
        {
          id: "p26-1-4",
          prompt: "【練習1-4】Wir haben zwei ( ____ ) und drei ( ____ ).",
          ja: "訳：私たちは2匹の犬（Hund）と3羽の鳥（Vogel）を飼っています。（2語をスペース区切り）",
          words: [
            { de: "Wir haben", ja: "私たちは飼っている（持っている）" },
            { de: "der Hund", ja: "犬" },
            { de: "der Vogel", ja: "鳥" }
          ],
          answer: "Hunde Vögel",
          accept: ["Hunde Vögel", "Hunde, Vögel", "Hunde und Vögel"],
          choices: ["Hunde Vögel", "Hunden Vögeln", "Hunde Vogel", "Hünde Vögel"],
          hint: "Hund は -e型（変音なし）、Vogel は無語尾＋ウムラウト型！",
          explanation: "<b>完成文：</b>Wir haben zwei <b>Hunde</b> und drei <b>Vögel</b>.（私たちは2匹の犬と3羽の鳥を飼っています。）<br><b>解説：</b>犬の複数＝<b>Hunde</b>、鳥の複数＝<b>Vögel</b>（o→ö）。haben は4格をとるので -n は付きません。"
        },
        {
          id: "p26-1-5",
          prompt: "【練習1-5】Ich kaufe den ( ____ ) ein Bilderbuch.",
          ja: "訳：私は子供たち（Kind）に絵本を買います。",
          words: [
            { de: "kaufe (kaufen)", ja: "買う（3格に＋4格を）" },
            { de: "das Kind", ja: "子ども（複数: Kinder）" },
            { de: "ein Bilderbuch", ja: "1冊の絵本" }
          ],
          answer: "Kindern",
          accept: ["Kindern"],
          choices: ["Kindern", "Kinder", "Kinde", "Kind"],
          hint: "前に den がある＝複数「3格（〜たちに）」！Kind の複数 Kinder に何を足す？",
          explanation: "<b>完成文：</b>Ich kaufe den <b>Kindern</b> ein Bilderbuch.（私は子供たちに絵本を買います。）<br><b>解説：</b>超重要！Kind の複数形は Kinder ですが、<strong>複数3格なので最後に -n を付けて <b>Kindern</b></strong> にします！"
        },
        // 文法練習2
        {
          id: "p26-2-1",
          prompt: "【練習2-1】Er zeigt ____ das Foto.",
          ja: "訳：彼は君にその写真を見せてくれます。（人称代名詞を入れよう）",
          words: [
            { de: "Er zeigt (zeigen)", ja: "彼は見せる（3格に＋4格を）" },
            { de: "das Foto", ja: "その写真" }
          ],
          answer: "dir",
          accept: ["dir"],
          choices: ["dir", "dich", "du", "mir"],
          hint: "「君に」＝ du の3格！",
          explanation: "<b>完成文：</b>Er zeigt <b>dir</b> das Foto.（彼は君にその写真を見せてくれます。）<br><b>解説：</b>「君に（3格）」なので du の3格 <b>dir</b> を使います。"
        },
        {
          id: "p26-2-2",
          prompt: "【練習2-2】Mein Vater kauft ____ ein Fahrrad.",
          ja: "訳：お父さんは私に自転車を1台買ってくれます。",
          words: [
            { de: "Mein Vater", ja: "私の父は" },
            { de: "kauft", ja: "買う" },
            { de: "ein Fahrrad", ja: "1台の自転車" }
          ],
          answer: "mir",
          accept: ["mir"],
          choices: ["mir", "mich", "ich", "dir"],
          hint: "「私に」＝ ich の3格！",
          explanation: "<b>完成文：</b>Mein Vater kauft <b>mir</b> ein Fahrrad.（お父さんは私に自転車を1台買ってくれます。）<br><b>解説：</b>「私に（3格）」なので ich の3格 <b>mir</b>！"
        },
        {
          id: "p26-2-3",
          prompt: "【練習2-3】Ich liebe ____.",
          ja: "訳：きみを愛しているよ。",
          words: [{ de: "liebe (lieben)", ja: "愛している（+4格）" }],
          answer: "dich",
          accept: ["dich"],
          choices: ["dich", "dir", "du", "euch"],
          hint: "lieben（愛する）は「〜を（4格）」をとる！du の4格は？",
          explanation: "<b>完成文：</b>Ich liebe <b>dich</b>.（きみを愛しているよ。）<br><b>解説：</b>du の4格（君を）は <b>dich</b> です。"
        },
        {
          id: "p26-2-4",
          prompt: "【練習2-4】Ich besuche ____ morgen.",
          ja: "訳：私は明日、彼らを訪ねますよ。",
          words: [
            { de: "besuche (besuchen)", ja: "訪れる（+4格）" },
            { de: "morgen", ja: "明日" }
          ],
          answer: "sie",
          accept: ["sie"],
          choices: ["sie", "ihnen", "ihn", "Sie"],
          hint: "besuchen は4格をとる！「彼らを」＝複数3人称の4格は？",
          explanation: "<b>完成文：</b>Ich besuche <b>sie</b> morgen.（私は明日、彼らを訪ねますよ。）<br><b>解説：</b>「彼らを（複数4格）」は小文字の <b>sie</b>！（3格なら ihnen、敬称「あなたを」なら大文字 Sie）。"
        },
        {
          id: "p26-2-5",
          prompt: "【練習2-5】Wie geht es ____? — Es geht ____ gut, danke!",
          ja: "訳：（あなたの）ご機嫌いかがですか？ — 元気です、ありがとう！（2語をスペース区切り）",
          words: [
            { de: "Wie geht es + 3格?", ja: "ご機嫌いかがですか？" },
            { de: "gut, danke!", ja: "元気です、ありがとう！" }
          ],
          answer: "Ihnen mir",
          accept: ["Ihnen mir", "dir mir"],
          choices: ["Ihnen mir", "Sie mich", "ihnen mich", "dir mich"],
          hint: "Wie geht es + 3格！敬称「あなたに」と「私に」の3格を入れよう。",
          explanation: "<b>完成文：</b>Wie geht es <b>Ihnen</b>? — Es geht <b>mir</b> gut, danke!（お元気ですか？— 元気です、ありがとう！）<br><b>解説：</b>決まり文句 <code>Wie geht es + 3格?</code>。敬称なら <b>Ihnen</b>（親しい相手なら dir）、答えは <b>mir</b> です！"
        },
        // 文法練習3（間違い探し＋和訳）
        {
          id: "p26-3-1",
          prompt: "【練習3-1 間違い探し】Ich habe einen Schwester und zwei Brüder.",
          ja: "誤りを1つ直して正しい文にしよう！",
          words: [
            { de: "Ich habe", ja: "私は持っている（いる）" },
            { de: "die Schwester", ja: "姉・妹（女性名詞！）" },
            { de: "zwei Brüder", ja: "2人の兄・弟" }
          ],
          answer: "Ich habe eine Schwester und zwei Brüder.",
          accept: ["Ich habe eine Schwester und zwei Brüder.", "Ich habe eine Schwester und zwei Brüder", "eine"],
          choices: [
            "Ich habe eine Schwester und zwei Brüder.",
            "Ich habe einen Schwester und zwei Bruder.",
            "Ich hat eine Schwester und zwei Brüder.",
            "Ich habe ein Schwester und zwei Brüder."
          ],
          hint: "Schwester（姉・妹）は女性名詞！女性4格の不定冠詞は einen ではなく…？",
          explanation: "<b>正しい文：</b>Ich habe <b>eine</b> Schwester und zwei Brüder.<br><b>和訳：</b>私には姉（妹）が1人と兄（弟）が2人います。<br><b>解説：</b><code>einen</code> は男性4格の形。Schwester は女性名詞なので <b>eine</b> が正解！"
        },
        {
          id: "p26-3-2",
          prompt: "【練習3-2 間違い探し】Die Kinder kauft der Mutter einen Blumenstrauß.",
          ja: "誤りを1つ直して正しい文にしよう！",
          words: [
            { de: "Die Kinder", ja: "その子どもたち（複数！）" },
            { de: "der Mutter", ja: "母に（女性3格）" },
            { de: "einen Blumenstrauß", ja: "1つの花束を（男性4格）" }
          ],
          answer: "Die Kinder kaufen der Mutter einen Blumenstrauß.",
          accept: ["Die Kinder kaufen der Mutter einen Blumenstrauß.", "Die Kinder kaufen der Mutter einen Blumenstrauß", "kaufen"],
          choices: [
            "Die Kinder kaufen der Mutter einen Blumenstrauß.",
            "Die Kinder kauft die Mutter einen Blumenstrauß.",
            "Die Kind kauft der Mutter einen Blumenstrauß.",
            "Die Kinder kaufen der Mutter ein Blumenstrauß."
          ],
          hint: "主語 Die Kinder（子どもたち）は複数！複数主語のとき動詞の語尾は？",
          explanation: "<b>正しい文：</b>Die Kinder <b>kaufen</b> der Mutter einen Blumenstrauß.<br><b>和訳：</b>子どもたちは母に花束を買います。<br><b>解説：</b>主語 <code>Die Kinder</code> は複数なので、動詞は <code>kauft</code>（単数）ではなく <b>kaufen</b>（複数）にします！"
        },
        {
          id: "p26-3-3",
          prompt: "【練習3-3 間違い探し】Was schenkst du ihn?",
          ja: "誤りを1つ直して正しい文にしよう！",
          words: [
            { de: "Was", ja: "何を" },
            { de: "schenkst (schenken)", ja: "贈る（3格に＋4格を）" }
          ],
          answer: "Was schenkst du ihm?",
          accept: ["Was schenkst du ihm?", "Was schenkst du ihm", "ihm"],
          choices: [
            "Was schenkst du ihm?",
            "Was schenkt du ihn?",
            "Was schenkst du er?",
            "Was schenkst dir ihn?"
          ],
          hint: "「彼に」何を贈るの？「彼に」は3格か4格かチェック！",
          explanation: "<b>正しい文：</b>Was schenkst du <b>ihm</b>?<br><b>和訳：</b>君は彼に何を贈るの？<br><b>解説：</b><code>ihn</code> は4格（彼を）。「彼<strong>に</strong>」は3格なので <b>ihm</b> に直します！"
        },
        {
          id: "p26-3-4",
          prompt: "【練習3-4 間違い探し】Der Lehrer gibt ihm es.",
          ja: "誤りを1つ直して正しい文にしよう！",
          words: [
            { de: "Der Lehrer", ja: "その先生は" },
            { de: "gibt (geben)", ja: "渡す・与える" },
            { de: "ihm / es", ja: "彼に(3格) / それを(4格)" }
          ],
          answer: "Der Lehrer gibt es ihm.",
          accept: ["Der Lehrer gibt es ihm.", "Der Lehrer gibt es ihm", "es ihm"],
          choices: [
            "Der Lehrer gibt es ihm.",
            "Der Lehrer gibt ihn es.",
            "Der Lehrer gebt ihm es.",
            "Der Lehrer gibt ihm sie."
          ],
          hint: "ihm(3格) も es(4格) も両方「代名詞」！両方代名詞のときの語順は？",
          explanation: "<b>正しい文：</b>Der Lehrer gibt <b>es ihm</b>.<br><b>和訳：</b>先生はそれを彼に渡します。<br><b>解説：</b>両方とも代名詞のときは必ず<strong>4格（es）＋ 3格（ihm）</strong>の語順にします！"
        },
        {
          id: "p26-3-5",
          prompt: "【練習3-5 間違い探し】Die Bücher gehören ich.",
          ja: "誤りを1つ直して正しい文にしよう！",
          words: [
            { de: "Die Bücher", ja: "それらの本は（複数）" },
            { de: "gehören", ja: "〜のものである（+3格！）" }
          ],
          answer: "Die Bücher gehören mir.",
          accept: ["Die Bücher gehören mir.", "Die Bücher gehören mir", "mir"],
          choices: [
            "Die Bücher gehören mir.",
            "Die Bücher gehören mich.",
            "Die Bücher gehört ich.",
            "Die Buch gehören mir."
          ],
          hint: "gehören（〜のものである）は何格をとる動詞だった？",
          explanation: "<b>正しい文：</b>Die Bücher gehören <b>mir</b>.<br><b>和訳：</b>それらの本は私のものです。<br><b>解説：</b><code>gehören</code> は3格をとるので、<code>ich</code>（1格）を3格の <b>mir</b> に直します！"
        }
      ]
    },
    {
      id: "p27-28",
      title: "p.27〜28 演習：時刻・持ち物・Wem＋gehören（全8問）",
      desc: "p.27の時計イラスト3問＋表現、p.28の持ち物会話！",
      questions: [
        {
          id: "p27-clock1",
          prompt: "【p.27 時計】「9時です」（9 Uhr）をドイツ語で言うと？",
          ja: "時刻の答え方：Es ist ～ Uhr.",
          words: [{ de: "neun", ja: "9" }, { de: "Uhr", ja: "時" }],
          answer: "Es ist neun Uhr.",
          accept: ["Es ist neun Uhr.", "Es ist neun Uhr", "Es ist 9 Uhr.", "Es ist 9 Uhr"],
          choices: ["Es ist neun Uhr.", "Es ist acht Uhr.", "Es ist zehn Uhr.", "Es ist vier Uhr."],
          hint: "9 はドイツ語で neun（ノイン）！",
          explanation: "<b>正解の訳：</b>9時です。<br><b>解説：</b><code>Es ist neun Uhr.</code>（9 Uhr）"
        },
        {
          id: "p27-clock2",
          prompt: "【p.27 時計】「8時5分です」（8.05 Uhr）をドイツ語で言うと？",
          ja: "「時 ＋ Uhr ＋ 分」の順で言おう！",
          words: [{ de: "acht", ja: "8" }, { de: "fünf", ja: "5" }],
          answer: "Es ist acht Uhr fünf.",
          accept: ["Es ist acht Uhr fünf.", "Es ist acht Uhr fünf"],
          choices: ["Es ist acht Uhr fünf.", "Es ist fünf Uhr acht.", "Es ist acht fünf Uhr.", "Es ist sieben Uhr fünf."],
          hint: "8＝acht、5＝fünf！Uhr を真ん中に挟みます。",
          explanation: "<b>正解の訳：</b>8時5分です。<br><b>解説：</b><code>Es ist acht Uhr fünf.</code>（8.05 Uhr）。「時＋Uhr＋分」の語順！"
        },
        {
          id: "p27-clock3",
          prompt: "【p.27 時計】「13時30分です」（13.30 Uhr）をドイツ語で言うと？",
          ja: "13＝dreizehn、30＝dreißig",
          words: [{ de: "dreizehn", ja: "13" }, { de: "dreißig", ja: "30" }],
          answer: "Es ist dreizehn Uhr dreißig.",
          accept: ["Es ist dreizehn Uhr dreißig.", "Es ist dreizehn Uhr dreißig"],
          choices: ["Es ist dreizehn Uhr dreißig.", "Es ist dreißig Uhr dreizehn.", "Es ist drei Uhr dreißig.", "Es ist vierzehn Uhr dreißig."],
          hint: "13（dreizehn）＋ Uhr ＋ 30（dreißig）！",
          explanation: "<b>正解の訳：</b>13時30分です。<br><b>解説：</b><code>Es ist dreizehn Uhr dreißig.</code>（13.30 Uhr）"
        },
        {
          id: "p27-2",
          prompt: "【p.27 追加表現】____ 16 Uhr gehe ich nach Hause.",
          ja: "訳：「16時に」私は帰宅します。",
          words: [
            { de: "gehe (gehen)", ja: "行く" },
            { de: "nach Hause gehen", ja: "帰宅する" }
          ],
          answer: "Um",
          accept: ["Um", "um"],
          choices: ["Um", "Gegen", "In", "Am"],
          hint: "「ちょうど〜時に」は um、「〜時ごろ」は gegen！",
          explanation: "<b>完成文：</b><b>Um</b> 16 Uhr gehe ich nach Hause.（16時に私は帰宅します。）<br><b>解説：</b>時刻の前の「〜時に」は <b>um</b>！文頭なので大文字 <b>Um</b>。"
        },
        {
          id: "p27-3",
          prompt: "【p.27 追加表現】Gegen 16 Uhr bin ich ____ Hause.",
          ja: "訳：16時ごろ私は家にいます（在宅している）。",
          words: [
            { de: "Gegen 16 Uhr", ja: "16時ごろ" },
            { de: "bin (sein)", ja: "〜にいる" }
          ],
          answer: "zu",
          accept: ["zu"],
          choices: ["zu", "nach", "in", "um"],
          hint: "「帰宅する」は nach Hause gehen、「家にいる」は？",
          explanation: "<b>完成文：</b>Gegen 16 Uhr bin ich <b>zu</b> Hause.（16時ごろ私は家にいます。）<br><b>解説：</b>在宅している＝<b>zu Hause sein</b>！帰宅する（nach Hause gehen）とのペアで覚えよう！"
        },
        {
          id: "p28-1",
          prompt: "【p.28 会話】____ gehört der Rucksack?",
          ja: "訳：そのリュックは「誰の」ものですか？",
          words: [
            { de: "gehört (gehören)", ja: "〜のものである（+3格）" },
            { de: "der Rucksack", ja: "そのリュックサック" }
          ],
          answer: "Wem",
          accept: ["Wem", "wem"],
          choices: ["Wem", "Wer", "Wen", "Was"],
          hint: "gehören は3格をとるので、「誰（wer）」の3格を使います！",
          explanation: "<b>完成文：</b><b>Wem</b> gehört der Rucksack?（そのリュックは誰のものですか？）<br><b>解説：</b>wer（誰は）の3格（誰に）が <b>Wem</b>！<code>Wem gehört ...?</code> で「〜は誰のもの？」と丸暗記しよう！"
        },
        {
          id: "p28-2",
          prompt: "【p.28 会話】Gehört dir die Brille? — Ja, ____ gehört mir.",
          ja: "訳：その眼鏡は君のもの？ — うん、それは私のものだよ。",
          words: [
            { de: "die Brille", ja: "その眼鏡（女性名詞！）" },
            { de: "dir / mir", ja: "君に / 私に（3格）" }
          ],
          answer: "sie",
          accept: ["sie"],
          choices: ["sie", "er", "es", "ihr"],
          hint: "die Brille（眼鏡）は女性名詞！女性名詞を受ける1格の代名詞は？",
          explanation: "<b>完成文：</b>Gehört dir die Brille? — Ja, <b>sie</b> gehört mir.（その眼鏡は君のもの？— はい、私のものです。）<br><b>解説：</b><code>die Brille</code> は女性名詞なので、主語として受けるときは <b>sie</b>！"
        },
        {
          id: "p28-3",
          prompt: "【p.28 会話】Wem gehört das Handy? — ____ gehört mir.",
          ja: "訳：その携帯は誰のもの？ — それは私のものです。",
          words: [{ de: "das Handy", ja: "その携帯電話（中性名詞！）" }],
          answer: "Es",
          accept: ["Es", "es"],
          choices: ["Es", "Er", "Sie", "Ihm"],
          hint: "das Handy（携帯）は中性名詞！",
          explanation: "<b>完成文：</b>Wem gehört das Handy? — <b>Es</b> gehört mir.（その携帯は誰のもの？— それは私のものです。）<br><b>解説：</b><code>das Handy</code> は中性名詞なので、主語として受けるときは <b>Es</b>！"
        }
      ]
    },
    {
      id: "p30",
      title: "p.30 練習：不規則動詞の現在人称変化（全10問）",
      desc: "教科書の練習問題1〜10を全単語訳＆ステップ解説つきで！",
      questions: [
        {
          id: "p30-1",
          prompt: "1) Er ( ____ ) immer einen Anzug.",
          ja: "訳：彼はいつもスーツを着ています。（tragen を使う）",
          words: [
            { de: "immer", ja: "いつも" },
            { de: "einen Anzug", ja: "スーツを" },
            { de: "tragen", ja: "身に着ける・着る（a→ä）" }
          ],
          answer: "trägt",
          accept: ["trägt"],
          choices: ["trägt", "tragt", "trägst", "trage"],
          hint: "tragen は a → ä 型！主語は er（3人称単数）なので語尾は -t。",
          explanation: "<b>完成文：</b>Er <b>trägt</b> immer einen Anzug.（彼はいつもスーツを着ています。）<br><b>解説：</b>tragen は <code>du trägst / er <b>trägt</b></code> と変音します。"
        },
        {
          id: "p30-2",
          prompt: "2) Sie ( ____ ) jetzt Wäsche.",
          ja: "訳：彼女は今、洗濯をしています。（waschen を使う）",
          words: [
            { de: "jetzt", ja: "今" },
            { de: "Wäsche", ja: "洗濯物" },
            { de: "waschen", ja: "洗う（a→ä）" }
          ],
          answer: "wäscht",
          accept: ["wäscht"],
          choices: ["wäscht", "wascht", "waschen", "wäschst"],
          hint: "waschen は a → ä 型！ここの Sie は「彼女（3人称単数）」。",
          explanation: "<b>完成文：</b>Sie <b>wäscht</b> jetzt Wäsche.（彼女は今、洗濯をしています。）<br><b>解説：</b>「彼女」なので3人称単数 <b>wäscht</b>！"
        },
        {
          id: "p30-3",
          prompt: "3) Die Studentin ( ____ ) uns.",
          ja: "訳：その学生は私たちを手伝ってくれる。（helfen を使う）",
          words: [
            { de: "Die Studentin", ja: "その女子学生は（3人称単数）" },
            { de: "uns", ja: "私たちを/に（3格）" },
            { de: "helfen", ja: "手伝う（e→i）" }
          ],
          answer: "hilft",
          accept: ["hilft"],
          choices: ["hilft", "helft", "hilst", "helfst"],
          hint: "helfen は e → i 型！Die Studentin は1人なので3人称単数。",
          explanation: "<b>完成文：</b>Die Studentin <b>hilft</b> uns.（その学生は私たちを手伝ってくれる。）<br><b>解説：</b>helfen の3人称単数は <b>hilft</b>（du hilfst / er hilft）。"
        },
        {
          id: "p30-4",
          prompt: "4) Warum ( ____ ) das Kind kein Gemüse?",
          ja: "訳：どうしてその子は野菜を食べないの？（essen を使う）",
          words: [
            { de: "Warum", ja: "どうして" },
            { de: "das Kind", ja: "その子（単数）" },
            { de: "kein Gemüse", ja: "野菜を食べない（否定）" },
            { de: "essen", ja: "食べる（e→i）" }
          ],
          answer: "isst",
          accept: ["isst"],
          choices: ["isst", "esst", "ist", "esse"],
          hint: "essen は e → i 型！das Kind は3人称単数。",
          explanation: "<b>完成文：</b>Warum <b>isst</b> das Kind kein Gemüse?（どうしてその子は野菜を食べないの？）<br><b>解説：</b>essen の3人称単数は <b>isst</b>（sが2つ！istはseinなので注意）。"
        },
        {
          id: "p30-5",
          prompt: "5) ( ____ ) du sie oft?",
          ja: "訳：彼女にはよく会うかい？（treffen を使う）",
          words: [
            { de: "sie", ja: "彼女を（4格）" },
            { de: "oft", ja: "よく、しばしば" },
            { de: "treffen", ja: "会う（e→i）" }
          ],
          answer: "Triffst",
          accept: ["Triffst", "triffst"],
          choices: ["Triffst", "Treffst", "Trifft", "Treffen"],
          hint: "treffen は e → i 型！主語は du、文頭なので大文字。",
          explanation: "<b>完成文：</b><b>Triffst</b> du sie oft?（彼女にはよく会うかい？）<br><b>解説：</b>treffen の du 変化は <b>Triffst</b>（e → i）！"
        },
        {
          id: "p30-6",
          prompt: "6) Welches Café ( ____ ) du mir?",
          ja: "訳：どのカフェが君のおすすめなの？（君は私にどのカフェをすすめる？）（empfehlen を使う）",
          words: [
            { de: "Welches Café", ja: "どのカフェを" },
            { de: "mir", ja: "私に（3格）" },
            { de: "empfehlen", ja: "すすめる（e→ie）" }
          ],
          answer: "empfiehlst",
          accept: ["empfiehlst"],
          choices: ["empfiehlst", "empfehlst", "empfiehlt", "empfilst"],
          hint: "empfehlen は e → ie 型！主語は du。",
          explanation: "<b>完成文：</b>Welches Café <b>empfiehlst</b> du mir?（どのカフェが君のおすすめなの？）<br><b>解説：</b>empfehlen は長音の e → ie で <b>empfiehlst</b>（hを消さないように注意！）。"
        },
        {
          id: "p30-7",
          prompt: "7) Die Katze ( ____ ) gemütlich da drüben.",
          ja: "訳：その猫は気持ちよさそうにあそこで眠っている。（schlafen を使う）",
          words: [
            { de: "Die Katze", ja: "その猫（単数）" },
            { de: "gemütlich", ja: "気持ちよさそうに" },
            { de: "da drüben", ja: "あそこで" },
            { de: "schlafen", ja: "眠る（a→ä）" }
          ],
          answer: "schläft",
          accept: ["schläft"],
          choices: ["schläft", "schlaft", "schläfst", "schlafen"],
          hint: "schlafen は a → ä 型！Die Katze は1匹なので3人称単数。",
          explanation: "<b>完成文：</b>Die Katze <b>schläft</b> gemütlich da drüben.（その猫は気持ちよさそうにあそこで眠っている。）<br><b>解説：</b>schlafen の3人称単数は <b>schläft</b>！"
        },
        {
          id: "p30-8",
          prompt: "8) Der Schüler ( ____ ) immer etwas.",
          ja: "訳：その生徒はいつも忘れ物をする。（vergessen を使う）",
          words: [
            { de: "Der Schüler", ja: "その生徒（単数）" },
            { de: "immer etwas", ja: "いつも何か" },
            { de: "vergessen", ja: "忘れる（e→i）" }
          ],
          answer: "vergisst",
          accept: ["vergisst"],
          choices: ["vergisst", "vergesst", "vergist", "vergessen"],
          hint: "vergessen は e → i 型！essen と同じ変化。",
          explanation: "<b>完成文：</b>Der Schüler <b>vergisst</b> immer etwas.（その生徒はいつも何か忘れる。）<br><b>解説：</b>vergessen の3人称単数は <b>vergisst</b>（sが2つ！）。"
        },
        {
          id: "p30-9",
          prompt: "9) Sie ( ____ ) immer den Bus. ( ____ ) du?",
          ja: "訳：彼女はいつもそのバスに乗るよ。知ってた？（nehmen と wissen、2語をスペース区切り）",
          words: [
            { de: "den Bus", ja: "そのバスに（を）" },
            { de: "nehmen", ja: "取る・乗る（特殊）" },
            { de: "wissen", ja: "知っている（特殊）" }
          ],
          answer: "nimmt Weißt",
          accept: ["nimmt Weißt", "nimmt weißt"],
          choices: ["nimmt Weißt", "nehmt Wisst", "nimt Weißt", "nimmt Weiß"],
          hint: "nehmen(彼女)＝hが消えてmが2つ！wissen(du)＝weiß に t を付ける！",
          explanation: "<b>完成文：</b>Sie <b>nimmt</b> immer den Bus. <b>Weißt</b> du?（彼女はいつもそのバスに乗るよ。知ってた？）<br><b>解説：</b>超頻出の特殊動詞コンビ！nehmen(er/sie) → <b>nimmt</b>、wissen(du) → <b>Weißt</b>！"
        },
        {
          id: "p30-10",
          prompt: "10) Den Fernsehturm ( ____ ) man schon von fern.",
          ja: "訳：テレビ塔は遠くからでも見えます。（sehen を使う）",
          words: [
            { de: "Den Fernsehturm", ja: "テレビ塔を" },
            { de: "man", ja: "人は（必ず3人称単数扱い！）" },
            { de: "schon von fern", ja: "遠くからでも" },
            { de: "sehen", ja: "見る（e→ie）" }
          ],
          answer: "sieht",
          accept: ["sieht"],
          choices: ["sieht", "seht", "siehst", "sehen"],
          hint: "主語は man（一般の人々＝必ず3人称単数扱い）！sehen は e → ie 型。",
          explanation: "<b>完成文：</b>Den Fernsehturm <b>sieht</b> man schon von fern.（テレビ塔は遠くからでも見えます。）<br><b>解説：</b><code>man</code> は必ず<strong>3人称単数</strong>扱い！sehen の3人称単数は <b>sieht</b> です。"
        }
      ]
    },
    {
      id: "p31",
      title: "p.31 練習：命令形（du / ihr / Sie 全12問コンプリート！）",
      desc: "教科書の1〜4 × (du / ihr / Sie) の12問を1つも省略せず全収録！",
      questions: [
        // 1. viel / lernen / Deutsch
        {
          id: "p31-1-du",
          prompt: "1-du) 「たくさんドイツ語を勉強してください。」（du に対する命令形）",
          ja: "使う語句：viel（たくさん） / lernen（勉強する） / Deutsch（ドイツ語）",
          words: [{ de: "lernen", ja: "勉強する（規則動詞）" }, { de: "viel Deutsch", ja: "たくさんドイツ語を" }],
          answer: "Lern viel Deutsch!",
          accept: ["Lern viel Deutsch!", "Lerne viel Deutsch!", "Lern viel Deutsch", "Lerne viel Deutsch"],
          choices: ["Lern viel Deutsch!", "Lernst viel Deutsch!", "Lernen viel Deutsch!", "Lernt viel Deutsch!"],
          hint: "du の命令形は「lernst から -st と du を取る」！（口調の -e を付けて Lerne でもOK）",
          explanation: "<b>正解の訳：</b>たくさんドイツ語を勉強して！（君へ）<br><b>解説：</b><b>Lern(e) viel Deutsch!</b>（規則動詞の du 命令形は主語なしで -st を取るだけ！）"
        },
        {
          id: "p31-1-ihr",
          prompt: "1-ihr) 「たくさんドイツ語を勉強してください。」（ihr に対する命令形）",
          ja: "使う語句：viel / lernen / Deutsch",
          words: [{ de: "lernen (ihr)", ja: "ihr lernt（君たちは勉強する）" }],
          answer: "Lernt viel Deutsch!",
          accept: ["Lernt viel Deutsch!", "Lernt viel Deutsch"],
          choices: ["Lernt viel Deutsch!", "Lern viel Deutsch!", "Lernen Sie viel Deutsch!", "Lernt ihr viel Deutsch!"],
          hint: "ihr の命令形は、普通の ihr の活用形（lernt）から主語 ihr を取るだけ！",
          explanation: "<b>正解の訳：</b>たくさんドイツ語を勉強して！（君たちへ）<br><b>解説：</b><b>Lernt viel Deutsch!</b>（ihr の形そのまま、主語なし！）"
        },
        {
          id: "p31-1-Sie",
          prompt: "1-Sie) 「たくさんドイツ語を勉強してください。」（Sie に対する命令形）",
          ja: "使う語句：viel / lernen / Deutsch",
          words: [{ de: "Sie", ja: "あなた（敬称・命令形でも主語をつける！）" }],
          answer: "Lernen Sie viel Deutsch!",
          accept: ["Lernen Sie viel Deutsch!", "Lernen Sie viel Deutsch"],
          choices: ["Lernen Sie viel Deutsch!", "Lernen viel Deutsch!", "Sie lernen viel Deutsch!", "Lernt Sie viel Deutsch!"],
          hint: "Sie に対する命令形だけ「動詞原形 ＋ Sie」の順で主語を付けます！",
          explanation: "<b>正解の訳：</b>たくさんドイツ語を勉強してください。（あなたへ）<br><b>解説：</b><b>Lernen Sie viel Deutsch!</b>"
        },
        // 2. immer / gesund / bleiben
        {
          id: "p31-2-du",
          prompt: "2-du) 「いつも健康でいてください。」（du に対する命令形）",
          ja: "使う語句：immer（いつも） / gesund（健康な） / bleiben（〜のままでいる）",
          words: [{ de: "bleiben", ja: "〜のままでいる" }, { de: "immer gesund", ja: "いつも健康で" }],
          answer: "Bleib immer gesund!",
          accept: ["Bleib immer gesund!", "Bleibe immer gesund!", "Bleib immer gesund", "Bleibe immer gesund"],
          choices: ["Bleib immer gesund!", "Bleibst immer gesund!", "Bleibt immer gesund!", "Bleiben immer gesund!"],
          hint: "bleiben の du 形（bleibst）から -st を取る！",
          explanation: "<b>正解の訳：</b>いつも健康でいてね！（君へ）<br><b>解説：</b><b>Bleib(e) immer gesund!</b>"
        },
        {
          id: "p31-2-ihr",
          prompt: "2-ihr) 「いつも健康でいてください。」（ihr に対する命令形）",
          ja: "使う語句：immer / gesund / bleiben",
          words: [{ de: "bleiben (ihr)", ja: "ihr bleibt" }],
          answer: "Bleibt immer gesund!",
          accept: ["Bleibt immer gesund!", "Bleibt immer gesund"],
          choices: ["Bleibt immer gesund!", "Bleib immer gesund!", "Bleiben Sie immer gesund!", "Bleibt ihr immer gesund!"],
          hint: "ihr の活用形 bleibt を先頭に置くだけ（主語なし）！",
          explanation: "<b>正解の訳：</b>いつも健康でいてね！（君たちへ）<br><b>解説：</b><b>Bleibt immer gesund!</b>"
        },
        {
          id: "p31-2-Sie",
          prompt: "2-Sie) 「いつも健康でいてください。」（Sie に対する命令形）",
          ja: "使う語句：immer / gesund / bleiben",
          words: [{ de: "bleiben + Sie", ja: "〜のままでいてください" }],
          answer: "Bleiben Sie immer gesund!",
          accept: ["Bleiben Sie immer gesund!", "Bleiben Sie immer gesund"],
          choices: ["Bleiben Sie immer gesund!", "Bleiben immer gesund!", "Sie bleiben immer gesund!", "Bleibt Sie immer gesund!"],
          hint: "動詞原形（Bleiben）＋ Sie ＋ immer gesund!",
          explanation: "<b>正解の訳：</b>いつも健康でいてください。（あなたへ）<br><b>解説：</b><b>Bleiben Sie immer gesund!</b>"
        },
        // 3. helfen / mir
        {
          id: "p31-3-du",
          prompt: "3-du) 「私を手伝ってください。」（du に対する命令形）",
          ja: "使う語句：helfen（手伝う） / mir（私に・3格） ※超重要！e→i型！",
          words: [{ de: "helfen", ja: "手伝う（e→i の不規則動詞！）" }, { de: "mir", ja: "私に（3格）" }],
          answer: "Hilf mir!",
          accept: ["Hilf mir!", "Hilf mir"],
          choices: ["Hilf mir!", "Helf mir!", "Helfe mir!", "Hilfst mir!"],
          hint: "e → i 型は du 命令形でも i のまま！しかも -e は付けない！",
          explanation: "<b>正解の訳：</b>私を手伝って！（君へ）<br><b>解説：</b>超重要！<code>du hilfst → <b>Hilf mir!</b></code>（e→i型はそのまま引き継ぎ、-eは付けません！）。"
        },
        {
          id: "p31-3-ihr",
          prompt: "3-ihr) 「私を手伝ってください。」（ihr に対する命令形）",
          ja: "使う語句：helfen / mir ※ihr は変音する？しない？",
          words: [{ de: "helfen (ihr)", ja: "ihr helft（変音しない！）" }],
          answer: "Helft mir!",
          accept: ["Helft mir!", "Helft mir"],
          choices: ["Helft mir!", "Hilft mir!", "Helfen mir!", "Hilf mir!"],
          hint: "不規則変化するのは du と er/sie/es だけ！ihr は元の e のまま！",
          explanation: "<b>正解の訳：</b>私を手伝って！（君たちへ）<br><b>解説：</b><b>Helft mir!</b>（ihr は変音しないので Helft！Hilft は誤り！）"
        },
        {
          id: "p31-3-Sie",
          prompt: "3-Sie) 「私を手伝ってください。」（Sie に対する命令形）",
          ja: "使う語句：helfen / mir",
          words: [{ de: "helfen + Sie", ja: "手伝ってください" }],
          answer: "Helfen Sie mir!",
          accept: ["Helfen Sie mir!", "Helfen Sie mir"],
          choices: ["Helfen Sie mir!", "Hilfen Sie mir!", "Helfen mir!", "Sie helfen mir!"],
          hint: "動詞原形（Helfen）＋ Sie ＋ mir!",
          explanation: "<b>正解の訳：</b>私を手伝ってください。（あなたへ）<br><b>解説：</b><b>Helfen Sie mir!</b>"
        },
        // 4. das Foto / zeigen / mir
        {
          id: "p31-4-du",
          prompt: "4-du) 「その写真を私に見せてください。」（du に対する命令形）",
          ja: "使う語句：das Foto（その写真） / zeigen（見せる） / mir（私に）",
          words: [{ de: "zeigen", ja: "見せる" }, { de: "mir", ja: "私に（代名詞）" }, { de: "das Foto", ja: "その写真（名詞）" }],
          answer: "Zeig mir das Foto!",
          accept: ["Zeig mir das Foto!", "Zeige mir das Foto!", "Zeig mir das Foto", "Zeige mir das Foto"],
          choices: ["Zeig mir das Foto!", "Zeig das Foto mir!", "Zeigst mir das Foto!", "Zeigt mir das Foto!"],
          hint: "L3の語順ルール：代名詞（mir）が名詞（das Foto）より先！",
          explanation: "<b>正解の訳：</b>その写真を私に見せて！（君へ）<br><b>解説：</b><b>Zeig(e) mir das Foto!</b>（代名詞 mir ＋ 名詞 das Foto の順！）"
        },
        {
          id: "p31-4-ihr",
          prompt: "4-ihr) 「その写真を私に見せてください。」（ihr に対する命令形）",
          ja: "使う語句：das Foto / zeigen / mir",
          words: [{ de: "zeigen (ihr)", ja: "ihr zeigt" }],
          answer: "Zeigt mir das Foto!",
          accept: ["Zeigt mir das Foto!", "Zeigt mir das Foto"],
          choices: ["Zeigt mir das Foto!", "Zeig mir das Foto!", "Zeigt das Foto mir!", "Zeigen Sie mir das Foto!"],
          hint: "Zeigt ＋ mir（代名詞が先）＋ das Foto!",
          explanation: "<b>正解の訳：</b>その写真を私に見せて！（君たちへ）<br><b>解説：</b><b>Zeigt mir das Foto!</b>"
        },
        {
          id: "p31-4-Sie",
          prompt: "4-Sie) 「その写真を私に見せてください。」（Sie に対する命令形）",
          ja: "使う語句：das Foto / zeigen / mir",
          words: [{ de: "zeigen + Sie", ja: "見せてください" }],
          answer: "Zeigen Sie mir das Foto!",
          accept: ["Zeigen Sie mir das Foto!", "Zeigen Sie mir das Foto"],
          choices: ["Zeigen Sie mir das Foto!", "Zeigen mir das Foto!", "Zeigen Sie das Foto mir!", "Sie zeigen mir das Foto!"],
          hint: "Zeigen Sie ＋ mir ＋ das Foto!",
          explanation: "<b>正解の訳：</b>その写真を私に見せてください。（あなたへ）<br><b>解説：</b><b>Zeigen Sie mir das Foto!</b>"
        }
      ]
    },
    {
      id: "p32",
      title: "p.32 Übungen（文法練習1・2・3 全14問）",
      desc: "L4の総まとめ！不規則動詞・誘う文・間違い探しすべて！",
      questions: [
        // 文法練習1
        {
          id: "p32-1-1",
          prompt: "【練習1-1】A: ____ du nach Berlin?  B: Ja, ich ____ nach Berlin.",
          ja: "訳：A「君はベルリンへ行くの？」 B「うん、私はベルリンへ行くよ。」（fahren、2語をスペース区切り）",
          words: [{ de: "nach Berlin", ja: "ベルリンへ" }, { de: "fahren", ja: "（乗り物で）行く（a→ä）" }],
          answer: "Fährst fahre",
          accept: ["Fährst fahre", "fährst fahre"],
          choices: ["Fährst fahre", "Fahrst fahre", "Fährt fahre", "Fährst fähre"],
          hint: "du は変音（a→ä）、ich は変音しない！",
          explanation: "<b>完成文：</b>A: <b>Fährst</b> du nach Berlin?（君はベルリンへ行くの？） / B: Ja, ich <b>fahre</b> nach Berlin.（うん、ベルリンへ行くよ。）<br><b>解説：</b>ich のときは絶対に変音しません！"
        },
        {
          id: "p32-1-2",
          prompt: "【練習1-2】A: ____ er gern Filme?  B: Ja, er ____ gern Filme.",
          ja: "訳：A「彼は映画を見るのが好き？」 B「うん、彼は映画を見るのが好きだよ。」（sehen、2語）",
          words: [{ de: "gern", ja: "好んで（〜するのが好き）" }, { de: "Filme", ja: "映画（複数）" }, { de: "sehen", ja: "見る（e→ie）" }],
          answer: "Sieht sieht",
          accept: ["Sieht sieht", "sieht sieht"],
          choices: ["Sieht sieht", "Seht seht", "Siehst sieht", "Sieht sehe"],
          hint: "どちらも主語は er（3人称単数）！sehen は e → ie 型。",
          explanation: "<b>完成文：</b>A: <b>Sieht</b> er gern Filme?（彼は映画を見るのが好き？） / B: Ja, er <b>sieht</b> gern Filme.（うん、彼は映画を見るのが好きだよ。）"
        },
        {
          id: "p32-1-3",
          prompt: "【練習1-3】A: ____ Lina gern Romane?  B: Nein, sie ____ nicht gern Romane.",
          ja: "訳：A「リーナは小説を読むのが好き？」 B「いいえ、彼女は小説を読むのがあまり好きじゃないよ。」（lesen、2語）",
          words: [{ de: "Romane", ja: "小説（複数）" }, { de: "nicht gern", ja: "あまり好きではない" }, { de: "lesen", ja: "読む（e→ie）" }],
          answer: "Liest liest",
          accept: ["Liest liest", "liest liest"],
          choices: ["Liest liest", "Lest lest", "Leset liest", "Liest lese"],
          hint: "Lina / sie（彼女）は3人称単数！lesen は e → ie 型。",
          explanation: "<b>完成文：</b>A: <b>Liest</b> Lina gern Romane?（リーナは小説を読むのが好き？） / B: Nein, sie <b>liest</b> nicht gern Romane.（いいえ、彼女は小説を読むのが好きじゃないよ。）"
        },
        {
          id: "p32-1-4",
          prompt: "【練習1-4】A: ____ Herr Müller gut Englisch?  B: Nein, er ____ nicht gut Englisch.",
          ja: "訳：A「ミュラーさんは英語を上手に話しますか？」 B「いいえ、彼はあまり上手に英語を話しません。」（sprechen、2語）",
          words: [{ de: "Herr Müller", ja: "ミュラーさん（男性・3人称単数）" }, { de: "gut Englisch", ja: "上手に英語を" }, { de: "sprechen", ja: "話す（e→i）" }],
          answer: "Spricht spricht",
          accept: ["Spricht spricht", "spricht spricht"],
          choices: ["Spricht spricht", "Sprecht sprecht", "Sprichst spricht", "Sprechen spricht"],
          hint: "Herr Müller / er は3人称単数！sprechen は e → i 型。",
          explanation: "<b>完成文：</b>A: <b>Spricht</b> Herr Müller gut Englisch?（ミュラーさんは英語を上手に話しますか？） / B: Nein, er <b>spricht</b> nicht gut Englisch.（いいえ、あまり上手に話しません。）"
        },
        {
          id: "p32-1-5",
          prompt: "【練習1-5】A: ____ du gern Brot?  B: Ja, ich ____ gern Brot.",
          ja: "訳：A「君はパンを食べるのが好き？」 B「うん、私はパンを食べるのが好きだよ。」（essen、2語）",
          words: [{ de: "Brot", ja: "パン" }, { de: "essen", ja: "食べる（e→i）" }],
          answer: "Isst esse",
          accept: ["Isst esse", "isst esse"],
          choices: ["Isst esse", "Esst esse", "Isst isse", "Ist esse"],
          hint: "du は e → i（isst）、ich はそのまま（esse）！",
          explanation: "<b>完成文：</b>A: <b>Isst</b> du gern Brot?（君はパンを食べるのが好き？） / B: Ja, ich <b>esse</b> gern Brot.（うん、パンを食べるのが好きだよ。）"
        },
        {
          id: "p32-1-6",
          prompt: "【練習1-6】A: ____ du oft Sandalen?  B: Ja, ich ____ oft Sandalen.",
          ja: "訳：A「君はよくサンダルを履くの？」 B「うん、私はよくサンダルを履くよ。」（tragen、2語）",
          words: [{ de: "oft", ja: "よく" }, { de: "Sandalen", ja: "サンダル（複数）" }, { de: "tragen", ja: "身に着ける・履く（a→ä）" }],
          answer: "Trägst trage",
          accept: ["Trägst trage", "trägst trage"],
          choices: ["Trägst trage", "Tragst trage", "Trägt trage", "Trägst träge"],
          hint: "du は a → ä（trägst）、ich はそのまま（trage）！",
          explanation: "<b>完成文：</b>A: <b>Trägst</b> du oft Sandalen?（君はよくサンダルを履くの？） / B: Ja, ich <b>trage</b> oft Sandalen.（うん、よくサンダルを履くよ。）"
        },
        // 文法練習2（誘う文）
        {
          id: "p32-2-1",
          prompt: "【練習2-1 作文】いっしょにお昼ご飯を食べましょう！",
          ja: "使う語句：zusammen（いっしょに） / zu Mittag（昼食に） / essen（食べる）",
          words: [{ de: "zu Mittag essen", ja: "昼食を食べる" }, { de: "zusammen", ja: "いっしょに" }],
          answer: "Essen wir zusammen zu Mittag!",
          accept: ["Essen wir zusammen zu Mittag!", "Essen wir zusammen zu Mittag"],
          choices: [
            "Essen wir zusammen zu Mittag!",
            "Wir essen zusammen zu Mittag!",
            "Isst wir zusammen zu Mittag!",
            "Essen zusammen wir zu Mittag!"
          ],
          hint: "「〜しましょう！」＝ 動詞原形 ＋ wir ...!（先頭は Essen wir ...!）",
          explanation: "<b>正解の訳：</b>いっしょにお昼ご飯を食べましょう！<br><b>解説：</b><b>Essen wir zusammen zu Mittag!</b>（動詞原形＋wir で提案・誘いの文になります！）"
        },
        {
          id: "p32-2-2",
          prompt: "【練習2-2 作文】一度、先生にきいてみよう！",
          ja: "使う語句：einmal（一度） / Lehrer(r)（先生・男性） / fragen(jn)（〜に尋ねる・+4格）",
          words: [{ de: "einmal", ja: "一度" }, { de: "der Lehrer", ja: "先生（男性名詞）" }, { de: "fragen (+4格)", ja: "〜に尋ねる" }],
          answer: "Fragen wir einmal den Lehrer!",
          accept: ["Fragen wir einmal den Lehrer!", "Fragen wir einmal den Lehrer", "Fragen wir den Lehrer einmal!"],
          choices: [
            "Fragen wir einmal den Lehrer!",
            "Fragen wir einmal der Lehrer!",
            "Fragen wir einmal dem Lehrer!",
            "Frag wir einmal den Lehrer!"
          ],
          hint: "fragen は4格をとる！男性名詞 der Lehrer の4格は「den Lehrer」！",
          explanation: "<b>正解の訳：</b>一度、先生にきいてみよう！<br><b>解説：</b><b>Fragen wir einmal den Lehrer!</b>（fragen は4格をとるので der → <b>den</b> Lehrer にします！）"
        },
        {
          id: "p32-2-3",
          prompt: "【練習2-3 作文】一休みしましょう！",
          ja: "使う語句：eine Pause（一休み・休憩） / machen（する）",
          words: [{ de: "eine Pause machen", ja: "休憩する、一休みする" }],
          answer: "Machen wir eine Pause!",
          accept: ["Machen wir eine Pause!", "Machen wir eine Pause"],
          choices: [
            "Machen wir eine Pause!",
            "Macht wir eine Pause!",
            "Wir machen eine Pause!",
            "Machen eine Pause wir!"
          ],
          hint: "Machen wir ＋ eine Pause!",
          explanation: "<b>正解の訳：</b>一休みしましょう！<br><b>解説：</b><b>Machen wir eine Pause!</b>"
        },
        // 文法練習3（間違い探し＋和訳）
        {
          id: "p32-3-1",
          prompt: "【練習3-1 間違い探し】Jetzt lest er Manga.",
          ja: "誤りを1つ直して正しい文にしよう！（※jetzt は文頭に置くこと）",
          words: [{ de: "Jetzt", ja: "今" }, { de: "lesen", ja: "読む（e→ie）" }, { de: "Manga", ja: "マンガ" }],
          answer: "Jetzt liest er Manga.",
          accept: ["Jetzt liest er Manga.", "Jetzt liest er Manga", "liest"],
          choices: [
            "Jetzt liest er Manga.",
            "Jetzt er liest Manga.",
            "Jetzt lesen er Manga.",
            "Jetzt lisst er Manga."
          ],
          hint: "lesen の3人称単数（er）は不規則変化（e → ie）！",
          explanation: "<b>正しい文：</b>Jetzt <b>liest</b> er Manga.<br><b>和訳：</b>今、彼はマンガを読んでいます。<br><b>解説：</b><code>lest</code> → <b>liest</b>（lesen は e→ie 変化）。文頭に Jetzt が来ているので動詞が2番目・主語が3番目なのは正しい！"
        },
        {
          id: "p32-3-2",
          prompt: "【練習3-2 間違い探し】Wohin fahrst du morgen?",
          ja: "誤りを1つ直して正しい文にしよう！",
          words: [{ de: "Wohin", ja: "どこへ" }, { de: "fahren", ja: "行く（a→ä）" }, { de: "morgen", ja: "明日" }],
          answer: "Wohin fährst du morgen?",
          accept: ["Wohin fährst du morgen?", "Wohin fährst du morgen", "fährst"],
          choices: [
            "Wohin fährst du morgen?",
            "Wohin fährt du morgen?",
            "Wohin du fährst morgen?",
            "Wohin fähren du morgen?"
          ],
          hint: "fahren の du 変化は a → ä！",
          explanation: "<b>正しい文：</b>Wohin <b>fährst</b> du morgen?<br><b>和訳：</b>君は明日どこへ行くの？<br><b>解説：</b><code>fahrst</code> → <b>fährst</b>（ウムラウト忘れに注意！）。"
        },
        {
          id: "p32-3-3",
          prompt: "【練習3-3 間違い探し】Was seht er gern?",
          ja: "誤りを1つ直して正しい文にしよう！",
          words: [{ de: "Was", ja: "何を" }, { de: "sehen", ja: "見る（e→ie）" }, { de: "gern", ja: "好んで" }],
          answer: "Was sieht er gern?",
          accept: ["Was sieht er gern?", "Was sieht er gern", "sieht"],
          choices: [
            "Was sieht er gern?",
            "Was siehst er gern?",
            "Was sehen er gern?",
            "Was seht ihr gern?"
          ],
          hint: "sehen の er 変化は e → ie！",
          explanation: "<b>正しい文：</b>Was <b>sieht</b> er gern?<br><b>和訳：</b>彼は何を見るのが好きですか？<br><b>解説：</b><code>seht</code> → <b>sieht</b>。"
        },
        {
          id: "p32-3-4",
          prompt: "【練習3-4 間違い探し】Sprech bitte langsam!",
          ja: "du に対する命令形として誤りを直そう！",
          words: [{ de: "sprechen", ja: "話す（e→i）" }, { de: "bitte", ja: "どうか" }, { de: "langsam", ja: "ゆっくり" }],
          answer: "Sprich bitte langsam!",
          accept: ["Sprich bitte langsam!", "Sprich bitte langsam", "Sprich"],
          choices: [
            "Sprich bitte langsam!",
            "Spreche bitte langsam!",
            "Sprichst bitte langsam!",
            "Sprecht bitte langsam!"
          ],
          hint: "sprechen は e → i 型！du の命令形も i になる！",
          explanation: "<b>正しい文：</b><b>Sprich</b> bitte langsam!<br><b>和訳：</b>どうかゆっくり話して！<br><b>解説：</b><code>Sprech</code> → <b>Sprich</b>（e→i型のdu命令形はそのまま引き継ぐ！）。"
        },
        {
          id: "p32-3-5",
          prompt: "【練習3-5 間違い探し】Sein Sie bitte vorsichtig!",
          ja: "誤りを1つ直して正しい文にしよう！",
          words: [{ de: "sein", ja: "〜である（命令形が超特殊！）" }, { de: "vorsichtig", ja: "用心深い、気をつけて" }],
          answer: "Seien Sie bitte vorsichtig!",
          accept: ["Seien Sie bitte vorsichtig!", "Seien Sie bitte vorsichtig", "Seien"],
          choices: [
            "Seien Sie bitte vorsichtig!",
            "Sind Sie bitte vorsichtig!",
            "Sei Sie bitte vorsichtig!",
            "Seid Sie bitte vorsichtig!"
          ],
          hint: "sein の Sie に対する命令形は超特殊な形！",
          explanation: "<b>正しい文：</b><b>Seien</b> Sie bitte vorsichtig!<br><b>和訳：</b>どうか気をつけてください！<br><b>解説：</b><code>Sein</code> → <b>Seien</b>（sein の命令形は Sei! / Seid! / <b>Seien Sie!</b>）。"
        }
      ]
    }
  ]
};
