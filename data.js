// ============================================================
// ドイツ語ゼロから攻略 (Lektion 3 p.24 〜 Lektion 4 p.32)
// 全データ：解説・単語帳・問題演習
// ============================================================

const STUDY_DATA = {
  // ----------------------------------------------------------
  // 1. 解説セクション (Step 0 〜 L4-2)
  // ----------------------------------------------------------
  lessons: [
    {
      id: "zero",
      shortTitle: "0. 完全ゼロ入門",
      title: "Step 0：完全ゼロからの超入門（L1〜L2の土台）",
      badge: "まずはここから！",
      summary: "「1格って何？」「der/die/dasって何が違うの？」という状態から、L3・L4を読むために絶対必要なルールだけを5分でスッキリ理解できます。",
      blocks: [
        {
          heading: "① 名詞には「性別」がある＆必ず大文字で始まる！",
          html: `
            <p>ドイツ語では、すべての名詞（モノ・人の名前）に <strong>男性・女性・中性</strong> の3つの性別があります。モノに性別？と不思議ですが、言葉のグループ分けだと思えばOKです。</p>
            <div class="callout callout-tip">
              <strong>覚え方のコツ：名詞は「冠詞とセット」＆「色」で覚える！</strong><br>
              ・<span class="badge badge-masc">男性 der</span>（青）：<code>der Vater</code>（父）, <code>der Hund</code>（犬）, <code>der Bleistift</code>（鉛筆）<br>
              ・<span class="badge badge-fem">女性 die</span>（赤）：<code>die Mutter</code>（母）, <code>die Tasche</code>（かばん）, <code>die Uhr</code>（時計）<br>
              ・<span class="badge badge-neut">中性 das</span>（緑）：<code>das Buch</code>（本）, <code>das Auto</code>（車）, <code>das Mädchen</code>（少女 ※-chenは必ず中性！）<br>
              ・<span class="badge badge-pl">複数 die</span>（橙）：複数になると性別に関係なく全部 <code>die</code>！
            </div>
            <p>※ ドイツ語の名詞は文の途中でも<strong>必ず頭文字が大文字</strong>（例：<code>Ich kaufe ein <b>B</b>uch.</code>）。</p>
          `
        },
        {
          heading: "② 「1格・2格・3格・4格」とは？（日本語の助詞で覚える！）",
          html: `
            <p>英語の「I / my / me」のように、ドイツ語では<strong>「〜は」「〜の」「〜に」「〜を」</strong>の役割によって冠詞や代名詞の形が変わります。これを<strong>格（かく）</strong>と呼びます。</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>格</th><th>日本語のめやす</th><th>役割</th><th>例（父＝der Vater）</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1格</strong></td><td><strong>〜は / 〜が</strong></td><td>主語</td><td><span class="g-m">der</span> Vater（父は）</td></tr>
                  <tr><td><strong>2格</strong></td><td><strong>〜の</strong></td><td>所有</td><td><span class="g-m">des</span> Vaters（父の）</td></tr>
                  <tr><td><strong>3格</strong></td><td><strong>〜に</strong></td><td>相手・間接目的語</td><td><span class="g-m">dem</span> Vater（父に）</td></tr>
                  <tr><td><strong>4格</strong></td><td><strong>〜を</strong></td><td>対象・直接目的語</td><td><span class="g-m">den</span> Vater（父を）</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>定冠詞（その〜）の格変化表</strong>（まずは赤枠の<strong>男性4格 den</strong>と<strong>3格 dem / der / dem / den</strong>を意識しよう！）</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>格</th><th class="g-m">男性</th><th class="g-f">女性</th><th class="g-n">中性</th><th class="g-p">複数</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1格（は・が）</strong></td><td class="g-m">der</td><td class="g-f">die</td><td class="g-n">das</td><td class="g-p">die</td></tr>
                  <tr><td><strong>2格（の）</strong></td><td>des</td><td>der</td><td>des</td><td>der</td></tr>
                  <tr><td><strong>3格（に）</strong></td><td><span class="hl">dem</span></td><td><span class="hl">der</span></td><td><span class="hl">dem</span></td><td><span class="hl">den</span> (+名詞に-n)</td></tr>
                  <tr><td><strong>4格（を）</strong></td><td><span class="hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>不定冠詞（ある1つの〜）</strong>：複数形はありません。1格 <code>ein / eine / ein</code>、4格は男性だけ <code><span class="hl">einen</span></code>（女性 <code>eine</code>、中性 <code>ein</code>）、3格は <code>einem / einer / einem</code>。</p>
          `
        },
        {
          heading: "③ 動詞の基本変化（魔法の呪文：e - st - t - en - t - en）",
          html: `
            <p>ドイツ語の動詞の原形はほとんど <code>-en</code> で終わります（例：<code>kaufen</code> 買う、<code>lernen</code> 学ぶ）。<code>-en</code> を取った部分（<strong>語幹</strong>）に、主語に合わせた語尾をつけます。</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>主語</th><th>意味</th><th>語尾</th><th>kaufen（買う）</th><th>sein（〜である）</th><th>haben（持つ）</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>ich</strong></td><td>私は</td><td><strong>-e</strong></td><td>kauf<strong>e</strong></td><td>bin</td><td>habe</td></tr>
                  <tr><td><strong>du</strong></td><td>君は（親しい相手）</td><td><strong>-st</strong></td><td>kauf<strong>st</strong></td><td>bist</td><td>ha<strong>st</strong></td></tr>
                  <tr><td><strong>er / sie / es</strong></td><td>彼/彼女/それ（単数名詞）</td><td><strong>-t</strong></td><td>kauf<strong>t</strong></td><td>ist</td><td>ha<strong>t</strong></td></tr>
                  <tr><td><strong>wir</strong></td><td>私たちは</td><td><strong>-en</strong></td><td>kauf<strong>en</strong></td><td>sind</td><td>haben</td></tr>
                  <tr><td><strong>ihr</strong></td><td>君たちは</td><td><strong>-t</strong></td><td>kauf<strong>t</strong></td><td>seid</td><td>habt</td></tr>
                  <tr><td><strong>sie / Sie</strong></td><td>彼ら / あなた(敬称)</td><td><strong>-en</strong></td><td>kauf<strong>en</strong></td><td>sind</td><td>haben</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-warn">
              <strong>注意：</strong> <code>warten</code>（待つ）や <code>arbeiten</code>（働く）のように語幹が <code>-t, -d</code> で終わる動詞は、発音しやすいように <code>du wart<b>e</b>st / er wart<b>e</b>t / ihr wart<b>e</b>t</code> と <strong>-e-</strong> を挟みます。
            </div>
          `
        },
        {
          heading: "④ 語順の超重要ルール（動詞はいつも2番目！）＆発音のコツ",
          html: `
            <p>ドイツ語の普通の文では、<strong>動詞は必ず「2番目」</strong>に置きます。文の最初に時間や場所が来たら、主語は動詞のうしろ（3番目）に回ります。</p>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Ich <b>gehe</b> um 16 Uhr nach Hause.</span>
                  <button class="speak-btn" data-speak="Ich gehe um 16 Uhr nach Hause.">🔊 聞く</button>
                </div>
                <div class="example-ja">私は16時に帰宅します。（1番目: Ich / 2番目: gehe）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Um 16 Uhr <b>gehe</b> ich nach Hause.</span>
                  <button class="speak-btn" data-speak="Um 16 Uhr gehe ich nach Hause.">🔊 聞く</button>
                </div>
                <div class="example-ja">16時に私は帰宅します。（1番目: Um 16 Uhr / 2番目: gehe / 3番目: ich！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>Kennst</b> du das Mädchen?</span>
                  <button class="speak-btn" data-speak="Kennst du das Mädchen?">🔊 聞く</button>
                </div>
                <div class="example-ja">Yes/No疑問文は「動詞が1番目」！（君はその少女を知ってる？）</div>
              </div>
            </div>
            <div class="callout callout-tip">
              <strong>特殊文字の読み方ガイド：</strong><br>
              ・<code>ä</code>（ア・ウムラウト）：口を大きく開けて「エー」<br>
              ・<code>ö</code>（オ・ウムラウト）：「オ」の口で「エー」<br>
              ・<code>ü</code>（ウ・ウムラウト）：「ウ」の口で「イー」<br>
              ・<code>ß</code>（エスツェット）：「ss」と同じ（鋭いス）。例：<code>weiß</code>（ヴァイス）<br>
              ・<code>ei</code>＝「アイ」、<code>ie</code>＝「イー」、<code>eu/äu</code>＝「オイ」、<code>sch</code>＝「シュ」
            </div>
          `
        }
      ]
    },
    {
      id: "l3-1",
      shortTitle: "L3-1. 複数形・弱変化",
      title: "Lektion 3 (p.24)：名詞の複数形 ＆ 男性弱変化名詞",
      badge: "p.24",
      summary: "英語はだいたい -s をつければ複数になりますが、ドイツ語は5パターンあります。さらに「複数3格の -n」と「男性弱変化名詞」がテストの頻出ポイント！",
      blocks: [
        {
          heading: "① 名詞の複数形（5つのパターン）",
          html: `
            <p>単語ごとに決まったパターンがあり、さらに母音（a, o, u）に点々（ウムラウト：ä, ö, ü）がつくものもあります。</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>パターン</th><th>変音しない例</th><th>変音する（ウムラウト）例</th><th>メモ</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1. 無語尾</strong></td><td>Wagen → Wagen（車）</td><td>Bruder → Br<b>ü</b>der（兄弟）</td><td>-er/-el/-enで終わる名詞に多い</td></tr>
                  <tr><td><strong>2. -e</strong></td><td>Geschenk → Geschenk<b>e</b>（贈り物）</td><td>Baum → B<b>ä</b>um<b>e</b>（木）</td><td>男性・中性に多い</td></tr>
                  <tr><td><strong>3. -er</strong></td><td>Lied → Lied<b>er</b>（歌）</td><td>Buch → B<b>ü</b>ch<b>er</b>（本）</td><td>中性名詞に多い。変音できる母音は必ず変音！</td></tr>
                  <tr><td><strong>4. -(e)n</strong></td><td>Tasche → Tasch<b>en</b>（かばん）<br>Zeitung → Zeitung<b>en</b>（新聞）</td><td><em>変音しない</em></td><td>女性名詞のほとんどがこのタイプ！</td></tr>
                  <tr><td><strong>5. -s</strong></td><td>Auto → Auto<b>s</b>（車）<br>Restaurant → Restaurant<b>s</b></td><td><em>変音しない</em></td><td>外来語・略語（CD → CDs）に多い</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-warn">
              <strong>特殊な複数形（そのまま暗記！）：</strong><br>
              ・<code>Museum → Museen</code>（博物館）<br>
              ・<code>Gymnasium → Gymnasien</code>（ギムナジウム）<br>
              ・<code>Firma → Firmen</code>（会社）
            </div>
          `
        },
        {
          heading: "② 複数形の格変化（テスト超頻出：3格の -n！）",
          html: `
            <p>複数形の定冠詞は <strong>die - der - den - die</strong> ですが、<strong>3格（〜に）のときだけ名詞の最後にも <code>-n</code> を付ける</strong>のが大原則！</p>
            <div class="table-wrap">
              <table>
                <thead><tr><th>格</th><th>複数形（die Städte 街）</th><th>ポイント</th></tr></thead>
                <tbody>
                  <tr><td>1格</td><td><strong>die</strong> Städte</td><td>冠詞は die</td></tr>
                  <tr><td>2格</td><td><strong>der</strong> Städte</td><td>冠詞は der</td></tr>
                  <tr><td>3格</td><td><strong>den</strong> Städte<span class="hl">n</span></td><td><strong>den + 名詞語尾に -n！</strong></td></tr>
                  <tr><td>4格</td><td><strong>die</strong> Städte</td><td>冠詞は die</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-tip">
              <strong>例外：</strong>すでに複数形が <code>-n</code>（例：<code>die Taschen</code>）や <code>-s</code>（例：<code>die Autos</code>, <code>die CDs</code>）で終わっている名詞には、3格でも <code>-n</code> を重ねて付けません！（<code>den Taschen</code>, <code>den Autos</code>）
            </div>
          `
        },
        {
          heading: "③ 男性弱変化名詞と例外的な名詞（das Herz）",
          html: `
            <p>一部の男性名詞（人や動物が多い）は、<strong>単数1格以外すべて（単数2・3・4格と複数）に <code>-en / -n</code> が付きます</strong>。中性名詞でこういう特殊な変化をするのは <strong><code>das Herz</code>（心臓・心）だけ</strong>！</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>格</th><th>-en/-n型<br>(少年)</th><th>単数-n / 複数-en<br>(男性・〜氏)</th><th>2格 -s*<br>(名前)</th><th>中性(Herzだけ!)<br>(心臓・心)</th></tr>
                </thead>
                <tbody>
                  <tr><td>1格</td><td>der Junge</td><td>der Herr</td><td>der Name</td><td>das Herz</td></tr>
                  <tr><td>2格</td><td>des Junge<strong>n</strong></td><td>des Herr<strong>n</strong></td><td>des Name<strong>ns</strong></td><td>des Herz<strong>ens</strong></td></tr>
                  <tr><td>3格</td><td>dem Junge<strong>n</strong></td><td>dem Herr<strong>n</strong></td><td>dem Name<strong>n</strong></td><td>dem Herz<strong>en</strong></td></tr>
                  <tr><td>4格</td><td>den Junge<strong>n</strong></td><td>den Herr<strong>n</strong></td><td>den Name<strong>n</strong></td><td>das Herz（変化なし!）</td></tr>
                  <tr><td>複数</td><td>die Junge<strong>n</strong></td><td>die Herr<strong>en</strong></td><td>die Name<strong>n</strong></td><td>die Herz<strong>en</strong></td></tr>
                </tbody>
              </table>
            </div>
            <p class="muted">その他の主な男性弱変化名詞：<code>der Polizist → Polizisten</code>（警察官）、<code>der Student → Studenten</code>（大学生）、<code>der Mensch → Menschen</code>（人間）、<code>der Gedanke → Gedanken</code>（考え・2格は <code>Gedankens</code>）。</p>
          `
        }
      ]
    },
    {
      id: "l3-2",
      shortTitle: "L3-2. 代名詞・語順・3格動詞",
      title: "Lektion 3 (p.25)：人称代名詞の3・4格 ＆ 語順 ＆ 注意すべき動詞",
      badge: "p.25 最重要",
      summary: "L3の一番のヤマ場！人称代名詞の表、3格と4格の並べ方（語順）、そして「3格をとる動詞（gehören / gefallen / helfen / glauben）」を完全マスターします。",
      blocks: [
        {
          heading: "① 人称代名詞の1・3・4格（必ず丸暗記！）",
          html: `
            <p>名詞の代わりに使う言葉（私・君・彼・彼女・それ…）です。特に3人称（<code>er / sie / es</code>）は、<strong>元の名詞の性別（der/die/das）</strong>に合わせて選びます！</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>意味</th><th>1格（〜は）</th><th>3格（〜に）</th><th>4格（〜を）</th></tr>
                </thead>
                <tbody>
                  <tr><td>私</td><td>ich</td><td><strong>mir</strong></td><td><strong>mich</strong></td></tr>
                  <tr><td>君</td><td>du</td><td><strong>dir</strong></td><td><strong>dich</strong></td></tr>
                  <tr><td>彼 / <span class="g-m">男性名詞</span></td><td class="g-m">er</td><td><strong>ihm</strong></td><td><strong>ihn</strong></td></tr>
                  <tr><td>彼女 / <span class="g-f">女性名詞</span></td><td class="g-f">sie</td><td><strong>ihr</strong></td><td><strong>sie</strong></td></tr>
                  <tr><td>それ / <span class="g-n">中性名詞</span></td><td class="g-n">es</td><td><strong>ihm</strong></td><td><strong>es</strong></td></tr>
                  <tr><td>私たち</td><td>wir</td><td><strong>uns</strong></td><td><strong>uns</strong></td></tr>
                  <tr><td>君たち</td><td>ihr</td><td><strong>euch</strong></td><td><strong>euch</strong></td></tr>
                  <tr><td>彼ら / <span class="g-p">複数名詞</span></td><td class="g-p">sie</td><td><strong>ihnen</strong></td><td><strong>sie</strong></td></tr>
                  <tr><td>あなた(敬称)</td><td>Sie</td><td><strong>Ihnen</strong></td><td><strong>Sie</strong></td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-tip">
              <strong>覚え方のコツ：</strong><br>
              ・3格は <code>mir / dir / ihm / ihr / ihm</code> と <strong>-r や -m</strong> が多い（定冠詞の dem/der と似てる！）<br>
              ・<code>wir → uns / uns</code>、<code>ihr → euch / euch</code> は3格と4格が同じ！<br>
              ・モノでも性別がある！例：<code>das Mädchen</code>（少女）は中性なので <strong>es</strong>、<code>die Tasche</code>（かばん）は女性なので <strong>sie</strong>！
            </div>
          `
        },
        {
          heading: "② 3格と4格の語順（テストで超引っかかりやすい！）",
          html: `
            <p>1つの文に「3格（人に）」と「4格（物を）」の両方があるとき、<strong>名詞か代名詞か</strong>で順番が変わります！</p>
            <div class="table-wrap">
              <table>
                <thead><tr><th>組み合わせ</th><th>語順ルール</th><th>例文</th></tr></thead>
                <tbody>
                  <tr><td>① 両方とも<strong>名詞</strong></td><td><strong>3格 ＋ 4格</strong></td><td>Ich gebe <span class="hl">der Freundin</span>(3) ein Buch(4).</td></tr>
                  <tr><td>② 片方が<strong>代名詞</strong></td><td><strong>代名詞 ＋ 名詞</strong></td><td>Ich gebe <span class="hl">ihr</span>(代) ein Buch(名).<br>Ich gebe <span class="hl">es</span>(代) der Freundin(名).</td></tr>
                  <tr><td>③ 両方とも<strong>代名詞</strong></td><td><strong>4格 ＋ 3格</strong>（逆転！）</td><td>Ich gebe <span class="hl">es</span>(4) <span class="hl">ihr</span>(3).</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-warn">
              <strong>テストの鉄板ひっかけ：</strong><br>
              × <code>Der Lehrer gibt ihm es.</code> → <strong>○ <code>Der Lehrer gibt es ihm.</code></strong><br>
              両方代名詞なら<strong>必ず「4格（モノ）→ 3格（ヒト）」</strong>！
            </div>
          `
        },
        {
          heading: "③ 4格ではなく「3格」をとる注意すべき動詞",
          html: `
            <p>日本語だと「〜を助ける」「〜を信じる」のように「を」と訳すのに、ドイツ語では<strong>必ず3格</strong>をとる動詞です。L3〜L4の最重要単語！</p>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span><b>gefallen</b>（気に入る）：Die Schuhe gefallen <span class="hl">ihr</span> gut.</span>
                  <button class="speak-btn" data-speak="Die Schuhe gefallen ihr gut.">🔊 聞く</button>
                </div>
                <div class="example-ja">それらの靴は彼女の気に入ります。（※「モノ」が主語、「気に入る人」が3格！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>gehören</b>（〜のものである）：Das Buch gehört <span class="hl">mir</span>.</span>
                  <button class="speak-btn" data-speak="Das Buch gehört mir.">🔊 聞く</button>
                </div>
                <div class="example-ja">その本は私のものです。（※「モノ」が主語、「持ち主」が3格！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>glauben</b>（信じる）：Ich glaube <span class="hl">ihm</span>.</span>
                  <button class="speak-btn" data-speak="Ich glaube ihm.">🔊 聞く</button>
                </div>
                <div class="example-ja">私は彼の言うことを信じます。</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>helfen</b>（手伝う・助ける）：Ich helfe <span class="hl">dir</span>.</span>
                  <button class="speak-btn" data-speak="Ich helfe dir.">🔊 聞く</button>
                </div>
                <div class="example-ja">私は君を手伝います。</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>danken</b>（感謝する）：Der Junge dankt <span class="hl">der Frau</span>.</span>
                  <button class="speak-btn" data-speak="Der Junge dankt der Frau.">🔊 聞く</button>
                </div>
                <div class="example-ja">その少年はその女性に感謝しています。</div>
              </div>
            </div>
          `
        }
      ]
    },
    {
      id: "l3-3",
      shortTitle: "L3-3. 時刻・持ち物・長文",
      title: "Lektion 3 (p.26〜29)：時刻表現・持ち物会話・Lesen 3 長文解説",
      badge: "p.26〜29",
      summary: "時刻の尋ね方・答え方、Wemを使った持ち物会話、そしてp.29の長文『Mein Geburtstag』を1文ずつ完全分解します。",
      blocks: [
        {
          heading: "① 時刻の表現（Uhrzeit）と時間帯の副詞（p.26〜27）",
          html: `
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Wie viel Uhr ist es? / Wie spät ist es?</span>
                  <button class="speak-btn" data-speak="Wie viel Uhr ist es? Wie spät ist es?">🔊 聞く</button>
                </div>
                <div class="example-ja">今何時ですか？（2つの聞き方をセットで覚えよう！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Es ist 10.10 Uhr. (Es ist zehn Uhr zehn.)</span>
                  <button class="speak-btn" data-speak="Es ist zehn Uhr zehn.">🔊 聞く</button>
                </div>
                <div class="example-ja">10時10分です。（「時 + Uhr + 分」の順！例：8.05 Uhr = acht Uhr fünf / 13.30 Uhr = dreizehn Uhr dreißig）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>Um</b> 16 Uhr gehe ich <b>nach Hause</b>.</span>
                  <button class="speak-btn" data-speak="Um sechzehn Uhr gehe ich nach Hause.">🔊 聞く</button>
                </div>
                <div class="example-ja">16時<b>に</b>私は<b>帰宅します</b>。（um + 時刻＝〜時に / Um wie viel Uhr ~?＝何時に〜？）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span><b>Gegen</b> 16 Uhr bin ich <b>zu Hause</b>.</span>
                  <button class="speak-btn" data-speak="Gegen sechzehn Uhr bin ich zu Hause.">🔊 聞く</button>
                </div>
                <div class="example-ja">16時<b>ごろ</b>私は<b>家にいます</b>。（gegen + 時刻＝〜時ごろ）</div>
              </div>
            </div>
            <div class="callout callout-tip">
              <strong>頻出ペア＆時間帯の言葉：</strong><br>
              ・<code>nach Hause gehen</code>（帰宅する＝方向） vs <code>zu Hause sein</code>（在宅している＝場所）<br>
              ・<code>morgens</code>（朝に）, <code>vormittags</code>（午前中に）, <code>nachmittags</code>（午後に）, <code>abends</code>（夕方に）, <code>nachts</code>（夜に）<br>
              ・基本の数字：1 eins / 2 zwei / 3 drei / 4 vier / 5 fünf / 6 sechs / 7 sieben / 8 acht / 9 neun / 10 zehn / 11 elf / 12 zwölf / 13 dreizehn / 14 vierzehn / 16 sechzehn / 20 zwanzig / 30 dreißig
            </div>
          `
        },
        {
          heading: "② 「誰のもの？」を聞く Wem + gehören（p.28）",
          html: `
            <p><code>gehören</code> は3格をとるので、「誰のもの？」と聞くときは疑問詞 <code>wer</code>（誰）の<strong>3格 <code>Wem</code></strong> を使います！</p>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span><b>Wem</b> gehört <span class="g-m">der Rucksack</span>? — <span class="g-m">Er</span> gehört mir.</span>
                  <button class="speak-btn" data-speak="Wem gehört der Rucksack? Er gehört mir.">🔊 聞く</button>
                </div>
                <div class="example-ja">そのリュックは誰のもの？ — （それは）私のものです。（男性名詞なので Er で受ける！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Gehört dir <span class="g-f">die Tasche</span>? — Nein, <span class="g-f">sie</span> gehört ihr.</span>
                  <button class="speak-btn" data-speak="Gehört dir die Tasche? Nein, sie gehört ihr.">🔊 聞く</button>
                </div>
                <div class="example-ja">そのかばんは君のもの？ — いいえ、（それは）彼女のものです。（女性名詞なので sie！）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Wem gehört <span class="g-n">das Handy</span>? — <span class="g-n">Es</span> gehört mir.</span>
                  <button class="speak-btn" data-speak="Wem gehört das Handy? Es gehört mir.">🔊 聞く</button>
                </div>
                <div class="example-ja">その携帯は誰のもの？ — （それは）私のものです。（中性名詞なので Es！）</div>
              </div>
            </div>
          `
        },
        {
          heading: "③ Lesen 3『Mein Geburtstag（私の誕生日）』全文分解（p.29）",
          html: `
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Ich habe morgen Geburtstag und werde 18 Jahre alt.</span>
                  <button class="speak-btn" data-speak="Ich habe morgen Geburtstag und werde achtzehn Jahre alt.">🔊 聞く</button>
                </div>
                <div class="example-ja">私は明日誕生日で、18歳になります。</div>
                <div class="example-note">解説：Geburtstag haben＝誕生日である / werden＝〜になる / Jahre alt＝〜歳</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Meine Eltern geben eine Geburtstagsparty für mich.</span>
                  <button class="speak-btn" data-speak="Meine Eltern geben eine Geburtstagsparty für mich.">🔊 聞く</button>
                </div>
                <div class="example-ja">両親が私のために誕生日パーティーを開いてくれます。</div>
                <div class="example-note">解説：Eltern＝両親（複数） / für + 4格＝〜のために（ichの4格 mich）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Sie beginnt morgen um 14.00. Viele Freunde kommen.</span>
                  <button class="speak-btn" data-speak="Sie beginnt morgen um vierzehn Uhr. Viele Freunde kommen.">🔊 聞く</button>
                </div>
                <div class="example-ja">それ（パーティー）は明日14時に始まります。たくさんの友達が来ます。</div>
                <div class="example-note">解説：Sie＝直前の女性名詞 eine Geburtstagsparty を受けている！</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Was schenken sie mir? Bücher, CDs, Kleider...</span>
                  <button class="speak-btn" data-speak="Was schenken sie mir? Bücher, CDs, Kleider.">🔊 聞く</button>
                </div>
                <div class="example-ja">彼らは私に何をプレゼントしてくれるかな？本、CD、服…</div>
                <div class="example-note">解説：schenken＋3格(mir)＋4格(Was) / Kleidの複数形＝Kleider</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Sicher gefallen mir die Geschenke! Ich hoffe, wir haben viel Spaß.</span>
                  <button class="speak-btn" data-speak="Sicher gefallen mir die Geschenke! Ich hoffe, wir haben viel Spaß.">🔊 聞く</button>
                </div>
                <div class="example-ja">きっとその贈り物たちは私の気に入るはず！すごく楽しいといいな。</div>
                <div class="example-note">解説：gefallen は「贈り物(die Geschenke 複数)」が主語なので gefallen、「私(mir)」が3格！ / viel Spaß haben＝すごく楽しむ</div>
              </div>
            </div>
            <div class="callout callout-success">
              <strong>p.29 補足：縮小語尾 <code>-chen</code> と <code>-lein</code>（「小さな〜」）</strong><br>
              語尾に <code>-chen</code> や <code>-lein</code> がつくと、元の性別に関係なく<strong>必ず中性名詞（<code>das</code>）</strong>になり、ウムラウトがつくことが多い！<br>
              ・<code>das Mädchen</code>（少女）, <code>das Vöglein</code>（小鳥）<br>
              ・<code>Brot → Brötchen</code>（小型パン）, <code>Baum → Bäumchen</code>（小木）, <code>Katze → Kätzchen</code>（子猫）, <code>Rose → Röslein</code>（小さなバラ）, <code>Maus → Mäuschen</code>（小さなネズミ・かわいい子）
            </div>
          `
        }
      ]
    },
    {
      id: "l4-1",
      shortTitle: "L4-1. 不規則動詞",
      title: "Lektion 4 (p.30)：不規則動詞の現在人称変化",
      badge: "p.30 超頻出",
      summary: "主語が「du」と「er/sie/es（3人称単数）」のときだけ、動詞の真ん中の母音が変身します！変化する場所と3パターンを押さえれば怖くない！",
      blocks: [
        {
          heading: "① 鉄則：変わるのは「du」と「er / sie / es」だけ！",
          html: `
            <p><code>ich / wir / ihr / sie / Sie</code> は<strong>一切変身しません（いつも通り）</strong>。変身するのは <strong>2人称単数（du）</strong> と <strong>3人称単数（er / sie / es / 単数名詞）</strong> だけ！</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>主語</th><th>a → ä<br>fahren（乗り物で行く）</th><th>e(短音) → i<br>sprechen（話す）</th><th>e(長音) → ie<br>sehen（見る）</th></tr>
                </thead>
                <tbody>
                  <tr><td>ich</td><td>fahre</td><td>spreche</td><td>sehe</td></tr>
                  <tr><td><strong>du</strong></td><td><span class="hl">fährst</span></td><td><span class="hl">sprichst</span></td><td><span class="hl">siehst</span></td></tr>
                  <tr><td><strong>er / sie / es</strong></td><td><span class="hl">fährt</span></td><td><span class="hl">spricht</span></td><td><span class="hl">sieht</span></td></tr>
                  <tr><td>wir / sie / Sie</td><td>fahren</td><td>sprechen</td><td>sehen</td></tr>
                  <tr><td>ihr</td><td>fahrt</td><td>sprecht</td><td>seht</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-tip">
              <strong>3パターンごとの代表動詞（p.30一覧）：</strong><br>
              ・<strong>a → ä</strong>：<code>fahren</code>（行く）, <code>schlafen</code>（眠る）, <code>tragen</code>（運ぶ・着る）, <code>waschen</code>（洗う）, <code>laufen</code>（歩く・走る → läufst/läuft）, <code>gefallen</code>（気に入る → gefällst/gefällt）<br>
              ・<strong>e → i</strong>：<code>sprechen</code>（話す）, <code>essen</code>（食べる → <b>isst / isst</b>）, <code>helfen</code>（助ける → hilfst/hilft）, <code>treffen</code>（会う → triffst/trifft）, <code>vergessen</code>（忘れる → <b>vergisst / vergisst</b>）, <code>werfen</code>（投げる → wirfst/wirft）<br>
              ・<strong>e → ie</strong>：<code>sehen</code>（見る）, <code>lesen</code>（読む → <b>liest / liest</b>）, <code>empfehlen</code>（すすめる → empfiehlst/empfiehlt）, <code>befehlen</code>（命令する）, <code>geschehen</code>（起こる → geschieht）
            </div>
          `
        },
        {
          heading: "② 語尾やスペルにも注意が必要な5つの不規則動詞",
          html: `
            <p>この5つは母音だけでなく<strong>スペル自体がちょっと特殊</strong>なので、テストで狙われやすいです！</p>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>動詞</th><th>意味</th><th>ich</th><th>du</th><th>er / sie / es</th><th>注意点</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>halten</strong></td><td>保つ</td><td>halte</td><td>hältst</td><td><span class="hl">hält</span></td><td>tを重ねない（×hältt）</td></tr>
                  <tr><td><strong>geben</strong></td><td>与える</td><td>gebe</td><td>gibst</td><td>gibt</td><td>e → i</td></tr>
                  <tr><td><strong>nehmen</strong></td><td>取る・乗る</td><td>nehme</td><td><span class="hl">nimmst</span></td><td><span class="hl">nimmt</span></td><td>hが消えてmが2つ！</td></tr>
                  <tr><td><strong>werden</strong></td><td>〜になる</td><td>werde</td><td><span class="hl">wirst</span></td><td><span class="hl">wird</span></td><td>dが消える！</td></tr>
                  <tr><td><strong>wissen</strong></td><td>知っている</td><td><span class="hl">weiß</span></td><td><span class="hl">weißt</span></td><td><span class="hl">weiß</span></td><td>ichとerが同じ weiß！</td></tr>
                </tbody>
              </table>
            </div>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Nimmst du den Zug?</span>
                  <button class="speak-btn" data-speak="Nimmst du den Zug?">🔊 聞く</button>
                </div>
                <div class="example-ja">君はその列車に乗るの（〜を利用するの）？（nehmen＋乗り物＝〜に乗る）</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Woher weißt du das?</span>
                  <button class="speak-btn" data-speak="Woher weißt du das?">🔊 聞く</button>
                </div>
                <div class="example-ja">君はどこでそれを知ったの？</div>
              </div>
            </div>
          `
        }
      ]
    },
    {
      id: "l4-2",
      shortTitle: "L4-2. 命令形・〜しましょう",
      title: "Lektion 4 (p.31)：命令形（Imperativ）＆「〜しましょう！」",
      badge: "p.31",
      summary: "相手（du / ihr / Sie）に対して「〜して！」「〜してください」と言う方法と、「一緒に〜しよう！」の誘い方を学びます。",
      blocks: [
        {
          heading: "① 命令形の作り方（相手3パターン）",
          html: `
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>相手</th><th>kommen<br>(来る)</th><th>warten<br>(待つ)</th><th>sprechen<br>(e→i)</th><th>sehen<br>(e→ie)</th><th>schlafen<br>(a→ä)</th><th>sein<br>(〜である)</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>du</strong>（君へ）</td><td>Komm(e)!</td><td>Wart<strong>e</strong>!</td><td><span class="hl">Sprich!</span></td><td><span class="hl">Sieh!</span></td><td>Schlaf(e)!</td><td><span class="hl">Sei ...!</span></td></tr>
                  <tr><td><strong>ihr</strong>（君たちへ）</td><td>Kommt!</td><td>Wartet!</td><td>Sprecht!</td><td>Seht!</td><td>Schlaft!</td><td><span class="hl">Seid ...!</span></td></tr>
                  <tr><td><strong>Sie</strong>（あなたへ）</td><td>Kommen <b>Sie</b>!</td><td>Warten <b>Sie</b>!</td><td>Sprechen <b>Sie</b>!</td><td>Sehen <b>Sie</b>!</td><td>Schlafen <b>Sie</b>!</td><td><span class="hl">Seien Sie ...!</span></td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout callout-warn">
              <strong>絶対に押さえる4つのルール：</strong><br>
              1. <strong><code>Sie</code> のときだけ主語をつける</strong>（<code>Kommen Sie!</code>）。<code>du / ihr</code> は主語を書かない！<br>
              2. <strong><code>du</code> の命令形は <code>e→i / ie</code> 型の変化を引き継ぐ</strong>（<code>du sprichst → Sprich!</code>, <code>du siehst → Sieh!</code>, <code>du hilfst → Hilf!</code> ※-eは付けない）。<br>
              3. 逆に <strong><code>a→ä</code> 型はウムラウトを戻す</strong>！（<code>du schläfst → Schlaf(e)!</code>, <code>du fährst → Fahr(e)!</code>）<br>
              4. <strong><code>sein</code> は超特殊なので丸暗記</strong>：<code>Sei! / Seid! / Seien Sie!</code>（×Sein Sie はテスト定番の間違い！）
            </div>
            <div class="callout callout-tip">
              <strong>やわらかく頼む＆ニュアンスを足す言葉：</strong><br>
              ・<code>bitte</code>（どうか・お願いします）：<code>Nehmen Sie bitte Platz!</code>（どうぞおかけください）<br>
              ・<code>doch</code>（頼むから・ほら）：<code>Sei doch ruhig!</code>（お願いだから静かにして！）<br>
              ・<code>mal</code>（ねえ、ちょっと）：<code>Sieh mal!</code>（ちょっと見て！）
            </div>
          `
        },
        {
          heading: "② 「〜しましょう！」の表現（提案・促し）",
          html: `
            <p>作り方は超シンプル！<strong>「動詞の原形 ＋ wir ...!」</strong>と、主語と動詞をひっくり返すだけです。</p>
            <div class="example-list">
              <div class="example-item">
                <div class="example-de">
                  <span>Lernen wir Deutsch! — Ja, gern!</span>
                  <button class="speak-btn" data-speak="Lernen wir Deutsch! Ja, gern!">🔊 聞く</button>
                </div>
                <div class="example-ja">ドイツ語を勉強しましょう！ — ええ、喜んで！</div>
              </div>
              <div class="example-item">
                <div class="example-de">
                  <span>Trinken wir noch einen Schluck! — Nein, danke.</span>
                  <button class="speak-btn" data-speak="Trinken wir noch einen Schluck! Nein, danke.">🔊 聞く</button>
                </div>
                <div class="example-ja">もう一杯飲みましょう！ — いえ、もう結構です。（Schluck＝一口、一杯）</div>
              </div>
            </div>
          `
        }
      ]
    }
  ],

  // ----------------------------------------------------------
  // 2. 単語帳データ（p.24〜32の重要語を網羅）
  // ----------------------------------------------------------
  vocab: [
    // --- L3 必須単語10個 (p.29) ---
    { id: "v01", word: "die Tasche", base: "Tasche", gender: "f", form: "複: die Taschen", meaning: "かばん", cat: "must10", page: "p.29", note: "女性名詞は-(e)n複数が多い！" },
    { id: "v02", word: "das Fahrrad", base: "Fahrrad", gender: "n", form: "複: die Fahrräder", meaning: "自転車", cat: "must10", page: "p.29", note: "fahren(行く)+Rad(車輪)" },
    { id: "v03", word: "die Eltern", base: "Eltern", gender: "p", form: "複数のみ", meaning: "両親", cat: "must10", page: "p.29", note: "いつも複数扱い（動詞も複数形）" },
    { id: "v04", word: "der Hund", base: "Hund", gender: "m", form: "複: die Hunde", meaning: "犬", cat: "must10", page: "p.29", note: "p.26練習1にも登場" },
    { id: "v05", word: "der Mensch", base: "Mensch", gender: "m", form: "複: die Menschen (弱変化)", meaning: "人間", cat: "must10", page: "p.29", note: "男性弱変化名詞（単数2〜4格もMenschen）" },
    { id: "v06", word: "besuchen", base: "besuchen", gender: "v", form: "besucht (規則動詞)", meaning: "〜を訪れる（+4格）", cat: "must10", page: "p.29", note: "Ich besuche sie morgen." },
    { id: "v07", word: "denken", base: "denken", gender: "v", form: "denkt (規則動詞)", meaning: "考える", cat: "must10", page: "p.29", note: "基本動詞" },
    { id: "v08", word: "gehören", base: "gehören", gender: "v", form: "gehört (+3格!)", meaning: "〜のものである", cat: "must10", page: "p.29", note: "超重要！3格支配（Das Buch gehört mir.）" },
    { id: "v09", word: "schenken", base: "schenken", gender: "v", form: "schenkt (+3格に +4格を)", meaning: "贈る、プレゼントする", cat: "must10", page: "p.29", note: "Ich schenke ihm eine Uhr." },
    { id: "v10", word: "spät", base: "spät", gender: "o", form: "形容詞・副詞", meaning: "遅い", cat: "must10", page: "p.29", note: "Wie spät ist es?（今何時？）" },

    // --- p.28 身の回りの持ち物 ---
    { id: "v11", word: "der Bleistift", base: "Bleistift", gender: "m", form: "複: die Bleistifte", meaning: "鉛筆", cat: "items", page: "p.28", note: "青＝男性" },
    { id: "v12", word: "der Druckbleistift", base: "Druckbleistift", gender: "m", form: "複: die Druckbleistifte", meaning: "シャープペンシル", cat: "items", page: "p.28", note: "Druck(押す)+Bleistift" },
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
    { id: "v24", word: "das Handy", base: "Handy", gender: "n", form: "複: die Handys", meaning: "携帯電話", cat: "items", page: "p.28", note: "ドイツ英語！英語のhandyではなく携帯" },
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
    { id: "v46", word: "tragen", base: "tragen", gender: "v", form: "a→ä: trägst / trägt", meaning: "運ぶ、身に着ける（着る）", cat: "l4verb", page: "p.30", note: "Er trägt einen Anzug.（スーツを着ている）" },
    { id: "v47", word: "waschen", base: "waschen", gender: "v", form: "a→ä: wäschst / wäscht", meaning: "洗う", cat: "l4verb", page: "p.30", note: "Wäsche waschen＝洗濯する" },
    { id: "v48", word: "laufen", base: "laufen", gender: "v", form: "a→ä: läufst / läuft", meaning: "歩く、走る", cat: "l4verb", page: "p.30", note: "au → äu（オイ）に変化" },
    { id: "v49", word: "gefallen", base: "gefallen", gender: "v", form: "a→ä: gefällst / gefällt (+3格)", meaning: "気に入る", cat: "l4verb", page: "p.25/30", note: "3格支配＋不規則変化のダブル重要語！" },
    { id: "v50", word: "sprechen", base: "sprechen", gender: "v", form: "e→i: sprichst / spricht", meaning: "話す", cat: "l4verb", page: "p.30", note: "命令形(du)は Sprich!" },
    { id: "v51", word: "essen", base: "essen", gender: "v", form: "e→i: isst / isst", meaning: "食べる", cat: "l4verb", page: "p.30", note: "du と er が同じ isst！命令形(du): Iss!" },
    { id: "v52", word: "helfen", base: "helfen", gender: "v", form: "e→i: hilfst / hilft (+3格)", meaning: "助ける、手伝う", cat: "l4verb", page: "p.25/30", note: "3格支配！命令形(du): Hilf mir!" },
    { id: "v53", word: "treffen", base: "treffen", gender: "v", form: "e→i: triffst / trifft (+4格)", meaning: "会う", cat: "l4verb", page: "p.30", note: "英語のmeetと同じく4格をとる" },
    { id: "v54", word: "vergessen", base: "vergessen", gender: "v", form: "e→i: vergisst / vergisst", meaning: "忘れる", cat: "l4verb", page: "p.30", note: "du と er が同じ vergisst！" },
    { id: "v55", word: "werfen", base: "werfen", gender: "v", form: "e→i: wirfst / wirft", meaning: "投げる", cat: "l4verb", page: "p.30", note: "e → i" },
    { id: "v56", word: "sehen", base: "sehen", gender: "v", form: "e→ie: siehst / sieht", meaning: "見る", cat: "l4verb", page: "p.30", note: "命令形(du): Sieh!" },
    { id: "v57", word: "lesen", base: "lesen", gender: "v", form: "e→ie: liest / liest", meaning: "読む", cat: "l4verb", page: "p.30", note: "du と er が同じ liest！命令形(du): Lies!" },
    { id: "v58", word: "empfehlen", base: "empfehlen", gender: "v", form: "e→ie: empfiehlst / empfiehlt", meaning: "すすめる", cat: "l4verb", page: "p.30", note: "3格(人)に4格(物)をすすめる" },
    { id: "v59", word: "halten", base: "halten", gender: "v", form: "a→ä: hältst / hält", meaning: "保つ、止まる", cat: "l4verb", page: "p.30", note: "er は hält（-tを重ねない！）" },
    { id: "v60", word: "geben", base: "geben", gender: "v", form: "e→i: gibst / gibt", meaning: "与える、渡す", cat: "l4verb", page: "p.30", note: "命令形(du): Gib!" },
    { id: "v61", word: "nehmen", base: "nehmen", gender: "v", form: "特殊: nimmst / nimmt", meaning: "取る、（乗り物に）乗る", cat: "l4verb", page: "p.30", note: "hが消えてmが2つ！命令形(du): Nimm!" },
    { id: "v62", word: "werden", base: "werden", gender: "v", form: "特殊: wirst / wird", meaning: "〜になる", cat: "l4verb", page: "p.30", note: "dが落ちる！wirst / wird" },
    { id: "v63", word: "wissen", base: "wissen", gender: "v", form: "特殊: weiß / weißt / weiß", meaning: "知っている", cat: "l4verb", page: "p.30", note: "ich と er が同じ weiß！" },
    { id: "v64", word: "glauben", base: "glauben", gender: "v", form: "glaubt (+3格)", meaning: "信じる", cat: "l4verb", page: "p.25", note: "3格支配動詞（Ich glaube ihm.）" },
    { id: "v65", word: "danken", base: "danken", gender: "v", form: "dankt (+3格)", meaning: "感謝する", cat: "l4verb", page: "p.25", note: "3格支配動詞（Der Junge dankt der Frau.）" },

    // --- 時刻・表現・副詞など (p.26〜32) ---
    { id: "v66", word: "morgens", base: "morgens", gender: "o", form: "副詞", meaning: "朝に（毎朝）", cat: "expr", page: "p.27", note: "小文字で -s がつくと「いつも〜に」" },
    { id: "v67", word: "vormittags", base: "vormittags", gender: "o", form: "副詞", meaning: "午前中に", cat: "expr", page: "p.27", note: "vor(前)+Mittag(正午)" },
    { id: "v68", word: "nachmittags", base: "nachmittags", gender: "o", form: "副詞", meaning: "午後に", cat: "expr", page: "p.27", note: "nach(後)+Mittag(正午)" },
    { id: "v69", word: "abends", base: "abends", gender: "o", form: "副詞", meaning: "夕方に、夜に", cat: "expr", page: "p.27", note: "Abend(夕方)から" },
    { id: "v70", word: "nachts", base: "nachts", gender: "o", form: "副詞", meaning: "夜に、夜間に", cat: "expr", page: "p.27", note: "Nacht(夜)から" },
    { id: "v71", word: "nach Hause gehen", base: "nach Hause gehen", gender: "o", form: "熟語", meaning: "帰宅する（家へ帰る）", cat: "expr", page: "p.27", note: "動き・方向は nach Hause" },
    { id: "v72", word: "zu Hause sein", base: "zu Hause sein", gender: "o", form: "熟語", meaning: "在宅している（家にいる）", cat: "expr", page: "p.27", note: "場所は zu Hause" },
    { id: "v73", word: "um ~ Uhr", base: "um ~ Uhr", gender: "o", form: "時刻表現", meaning: "〜時に", cat: "expr", page: "p.27", note: "Um 16 Uhr gehe ich nach Hause." },
    { id: "v74", word: "gegen ~ Uhr", base: "gegen ~ Uhr", gender: "o", form: "時刻表現", meaning: "〜時ごろ", cat: "expr", page: "p.27", note: "Gegen 16 Uhr bin ich zu Hause." },
    { id: "v75", word: "vorsichtig", base: "vorsichtig", gender: "o", form: "形容詞", meaning: "用心深い、気をつけて", cat: "expr", page: "p.31/32", note: "Seid vorsichtig! / Seien Sie bitte vorsichtig!" },
    { id: "v76", word: "gesund", base: "gesund", gender: "o", form: "形容詞", meaning: "健康な", cat: "expr", page: "p.31", note: "Bleib immer gesund!（いつも健康でいてね）" },
    { id: "v77", word: "zusammen", base: "zusammen", gender: "o", form: "副詞", meaning: "いっしょに", cat: "expr", page: "p.32", note: "Essen wir zusammen zu Mittag!" }
  ],

  // ----------------------------------------------------------
  // 3. 問題演習データ（教科書 p.24〜p.32 完全網羅）
  // ----------------------------------------------------------
  exerciseSets: [
    {
      id: "p24",
      title: "p.24 練習：名詞の複数形と格変化",
      desc: "複数形（1格・3格）をマスターしよう！",
      questions: [
        {
          id: "p24-1",
          prompt: "der Vater（父）の複数形（1格）は？",
          ja: "ヒント：無語尾＋ウムラウト型",
          answer: "die Väter",
          accept: ["die Väter", "Väter"],
          choices: ["die Väter", "die Vaters", "die Vater", "die Väten"],
          hint: "Bruder → Brüder と同じ「無語尾＋ウムラウト」タイプ！a が ä になります。",
          explanation: "正解は <b>die Väter</b>！格変化は 1格 die Väter / 2格 der Väter / 3格 <b>den Vätern</b>（-nが付く！）/ 4格 die Väter です。"
        },
        {
          id: "p24-2",
          prompt: "die Hand（手）の複数形（1格）は？",
          ja: "ヒント：-e ＋ ウムラウト型",
          answer: "die Hände",
          accept: ["die Hände", "Hände"],
          choices: ["die Hände", "die Handen", "die Hande", "die Hands"],
          hint: "女性名詞ですが -(e)n ではなく、Baum → Bäume と同じ「-e＋ウムラウト」です！",
          explanation: "正解は <b>die Hände</b>！格変化は 1格 die Hände / 2格 der Hände / 3格 <b>den Händen</b> / 4格 die Hände です。"
        },
        {
          id: "p24-3",
          prompt: "der Mann（男性）の複数形（1格）は？",
          ja: "ヒント：-er ＋ ウムラウト型",
          answer: "die Männer",
          accept: ["die Männer", "Männer"],
          choices: ["die Männer", "die Manne", "die Mannen", "die Männe"],
          hint: "Buch → Bücher と同じ「-er＋ウムラウト」タイプ！",
          explanation: "正解は <b>die Männer</b>！格変化は 1格 die Männer / 2格 der Männer / 3格 <b>den Männern</b> / 4格 die Männer です。"
        },
        {
          id: "p24-4",
          prompt: "die CD（CD）の複数「3格」は？",
          ja: "超ひっかけ注意！-s 複数形の3格どうなる？",
          answer: "den CDs",
          accept: ["den CDs"],
          choices: ["den CDs", "den CDsn", "die CDs", "der CDs"],
          hint: "複数3格は普通 -n を付けますが、すでに -s や -n で終わる複数形には付けません！",
          explanation: "正解は <b>den CDs</b>！-s で終わる複数形（Autos, CDsなど）には3格の -n は付けません（×CDsn）。"
        }
      ]
    },
    {
      id: "p25",
      title: "p.25 練習：人称代名詞に書き換え",
      desc: "下線部の名詞を人称代名詞に変えよう！",
      questions: [
        {
          id: "p25-1",
          prompt: "Der Junge dankt <u>der Frau</u>. → 下線部を代名詞にして書き直そう",
          ja: "その少年は彼女に感謝している。",
          answer: "Der Junge dankt ihr.",
          accept: ["Der Junge dankt ihr.", "Der Junge dankt ihr", "ihr"],
          choices: ["Der Junge dankt ihr.", "Der Junge dankt sie.", "Der Junge dankt ihm.", "Der Junge dankt ihnen."],
          hint: "danken は「3格支配」の動詞！女性名詞（die Frau）の3格代名詞は？",
          explanation: "<code>der Frau</code> は女性名詞の<strong>3格</strong>（dankenが3格をとるため）。女性単数3格の代名詞は <b>ihr</b> なので <b>Der Junge dankt ihr.</b>！"
        },
        {
          id: "p25-2",
          prompt: "Kennst du <u>das Mädchen</u>? → 下線部を代名詞にして書き直そう",
          ja: "きみは彼女を知ってるの？",
          answer: "Kennst du es?",
          accept: ["Kennst du es?", "Kennst du es", "es"],
          choices: ["Kennst du es?", "Kennst du sie?", "Kennst du ihm?", "Kennst du ihn?"],
          hint: "Mädchen は「少女」ですが、-chen が付くので文法上の性別は「中性（das）」！",
          explanation: "ここがテスト超頻出！<code>das Mädchen</code> は中性名詞なので、4格の代名詞は <code>sie</code> ではなく中性の <b>es</b>！よって <b>Kennst du es?</b>。"
        },
        {
          id: "p25-3",
          prompt: "Das Auto gehört <u>dem Mann</u>. → 下線部を代名詞にして書き直そう",
          ja: "この車は彼のものです。",
          answer: "Das Auto gehört ihm.",
          accept: ["Das Auto gehört ihm.", "Das Auto gehört ihm", "ihm"],
          choices: ["Das Auto gehört ihm.", "Das Auto gehört ihn.", "Das Auto gehört er.", "Das Auto gehört ihr."],
          hint: "gehören は「3格支配」！男性名詞（dem Mann）の3格代名詞は？",
          explanation: "<code>dem Mann</code> は男性名詞の<strong>3格</strong>。男性単数3格の代名詞は <b>ihm</b> なので <b>Das Auto gehört ihm.</b>！"
        }
      ]
    },
    {
      id: "p26",
      title: "p.26 Übungen（文法練習1・2・3）",
      desc: "複数形・人称代名詞・間違い探しの総仕上げ（全15問）",
      questions: [
        // 文法練習1
        {
          id: "p26-1-1",
          prompt: "【練習1】Zwei ( ____ ) spielen dort Tennis.",
          ja: "二人の男性（Mann）があそこでテニスをしている。",
          answer: "Männer",
          accept: ["Männer"],
          choices: ["Männer", "Mannen", "Manne", "Männern"],
          hint: "主語（1格）なので、Mann の複数1格を入れよう！",
          explanation: "Mann の複数形は <b>Männer</b>（-er＋ウムラウト）。主語（1格）なので -n は付きません。"
        },
        {
          id: "p26-1-2",
          prompt: "【練習1】Kennt er [ ____ ] Jungen?",
          ja: "彼はその男の子達を知っているのかい？（[ ]に定冠詞）",
          answer: "die",
          accept: ["die"],
          choices: ["die", "den", "der", "das"],
          hint: "「男の子達を」＝複数の4格！複数4格の定冠詞は？",
          explanation: "kennen は4格をとります。複数の4格の定冠詞は <b>die</b>（die - der - den - die）！"
        },
        {
          id: "p26-1-3",
          prompt: "【練習1】Schenkst du [ ____ ] Schwestern die Blumen?",
          ja: "君は妹たちにそれらの花を贈るの？（[ ]に定冠詞）",
          answer: "den",
          accept: ["den"],
          choices: ["den", "die", "der", "dem"],
          hint: "「妹たちに」＝複数の3格！複数3格の定冠詞は？",
          explanation: "「〜に（3格）〜を（4格）贈る」。複数の3格の定冠詞は <b>den</b>！（Schwesternはすでに-nで終わっているのでそのままでOK）"
        },
        {
          id: "p26-1-4",
          prompt: "【練習1】Wir haben zwei ( ____ ) und drei ( ____ ).",
          ja: "私たちは2匹の犬（Hund）と3羽の鳥（Vogel）を飼っています。（半角スペース区切りで2語）",
          answer: "Hunde Vögel",
          accept: ["Hunde Vögel", "Hunde, Vögel", "Hunde und Vögel"],
          choices: ["Hunde Vögel", "Hunden Vögeln", "Hunde Vogel", "Hünde Vögel"],
          hint: "Hund は -e型（変音なし）、Vogel は無語尾＋ウムラウト型！",
          explanation: "犬の複数は <b>Hunde</b>、鳥の複数は <b>Vögel</b>（o→ö）。どちらも4格なので -n は付きません。"
        },
        {
          id: "p26-1-5",
          prompt: "【練習1】Ich kaufe den ( ____ ) ein Bilderbuch.",
          ja: "私は子供たち（Kind）に絵本を買います。",
          answer: "Kindern",
          accept: ["Kindern"],
          choices: ["Kindern", "Kinder", "Kinde", "Kind"],
          hint: "前に den がある＝複数「3格」！Kind の複数 Kinder に何を足す？",
          explanation: "超重要！Kind の複数形は Kinder ですが、<strong>複数3格（〜に）なので最後に -n を付けて <b>Kindern</b></strong> にします！"
        },
        // 文法練習2
        {
          id: "p26-2-1",
          prompt: "【練習2】Er zeigt ____ das Foto.",
          ja: "彼は君にその写真を見せてくれます。",
          answer: "dir",
          accept: ["dir"],
          choices: ["dir", "dich", "du", "mir"],
          hint: "「君に」＝ du の3格！",
          explanation: "「君に（3格）写真を（4格）見せる」。du の3格は <b>dir</b> です。"
        },
        {
          id: "p26-2-2",
          prompt: "【練習2】Mein Vater kauft ____ ein Fahrrad.",
          ja: "お父さんは私に自転車を1台買ってくれます。",
          answer: "mir",
          accept: ["mir"],
          choices: ["mir", "mich", "ich", "dir"],
          hint: "「私に」＝ ich の3格！",
          explanation: "「私に（3格）自転車を（4格）買う」。ich の3格は <b>mir</b> です。"
        },
        {
          id: "p26-2-3",
          prompt: "【練習2】Ich liebe ____.",
          ja: "きみを愛しているよ。",
          answer: "dich",
          accept: ["dich"],
          choices: ["dich", "dir", "du", "euch"],
          hint: "lieben（愛する）は「〜を（4格）」をとる！du の4格は？",
          explanation: "有名なフレーズ <b>Ich liebe dich.</b>！du の4格は <b>dich</b> です。"
        },
        {
          id: "p26-2-4",
          prompt: "【練習2】Ich besuche ____ morgen.",
          ja: "私は明日、彼らを訪ねますよ。",
          answer: "sie",
          accept: ["sie"],
          choices: ["sie", "ihnen", "ihn", "Sie"],
          hint: "besuchen は4格をとる！「彼らを」＝複数3人称の4格は？",
          explanation: "「彼ら」の4格は小文字の <b>sie</b>（3格だと ihnen、敬称「あなた」だと大文字 Sie）。"
        },
        {
          id: "p26-2-5",
          prompt: "【練習2】Wie geht es ____? — Es geht ____ gut, danke!",
          ja: "（あなたの）ご機嫌いかがですか？ — 元気です、ありがとう！（スペース区切りで2語）",
          answer: "Ihnen mir",
          accept: ["Ihnen mir", "dir mir"],
          choices: ["Ihnen mir", "Sie mich", "ihnen mich", "dir mich"],
          hint: "Wie geht es + 3格！敬称「あなたに」と「私に」の3格を入れよう。",
          explanation: "「お元気ですか」の決まり文句は <code>Wie geht es + 3格?</code>。敬称なら <b>Ihnen</b>（親称なら dir）、答えは <b>mir</b> です！"
        },
        // 文法練習3（間違い探し）
        {
          id: "p26-3-1",
          prompt: "【練習3 間違い探し】Ich habe einen Schwester und zwei Brüder.",
          ja: "1つの誤りを直して正しい文にしよう！",
          answer: "Ich habe eine Schwester und zwei Brüder.",
          accept: ["Ich habe eine Schwester und zwei Brüder.", "Ich habe eine Schwester und zwei Brüder", "eine"],
          choices: [
            "Ich habe eine Schwester und zwei Brüder.",
            "Ich habe einen Schwester und zwei Bruder.",
            "Ich hat eine Schwester und zwei Brüder.",
            "Ich habe ein Schwester und zwei Brüder."
          ],
          hint: "Schwester（姉・妹）の性別は何でしょう？",
          explanation: "誤り：<code>einen</code> → <b>eine</b>（Schwesterは女性名詞なので4格は eine）。<br>訳：私には姉（妹）が1人と兄（弟）が2人います。"
        },
        {
          id: "p26-3-2",
          prompt: "【練習3 間違い探し】Die Kinder kauft der Mutter einen Blumenstrauß.",
          ja: "1つの誤りを直して正しい文にしよう！",
          answer: "Die Kinder kaufen der Mutter einen Blumenstrauß.",
          accept: ["Die Kinder kaufen der Mutter einen Blumenstrauß.", "Die Kinder kaufen der Mutter einen Blumenstrauß", "kaufen"],
          choices: [
            "Die Kinder kaufen der Mutter einen Blumenstrauß.",
            "Die Kinder kauft die Mutter einen Blumenstrauß.",
            "Die Kind kauft der Mutter einen Blumenstrauß.",
            "Die Kinder kaufen der Mutter ein Blumenstrauß."
          ],
          hint: "主語 Die Kinder（子どもたち）は単数？複数？動詞の語尾をチェック！",
          explanation: "誤り：<code>kauft</code> → <b>kaufen</b>（主語 Die Kinder は複数なので動詞も複数形 -en）。<br>訳：子どもたちは母に花束を買います。"
        },
        {
          id: "p26-3-3",
          prompt: "【練習3 間違い探し】Was schenkst du ihn?",
          ja: "1つの誤りを直して正しい文にしよう！",
          answer: "Was schenkst du ihm?",
          accept: ["Was schenkst du ihm?", "Was schenkst du ihm", "ihm"],
          choices: [
            "Was schenkst du ihm?",
            "Was schenkt du ihn?",
            "Was schenkst du er?",
            "Was schenkst dir ihn?"
          ],
          hint: "「彼に」何を贈るの？「彼に」は3格か4格かチェック！",
          explanation: "誤り：<code>ihn</code>(4格) → <b>ihm</b>(3格)（schenkenは「〜に(3格) 〜を(4格)贈る」）。<br>訳：君は彼に何を贈るの？"
        },
        {
          id: "p26-3-4",
          prompt: "【練習3 間違い探し】Der Lehrer gibt ihm es.",
          ja: "1つの誤りを直して正しい文にしよう！",
          answer: "Der Lehrer gibt es ihm.",
          accept: ["Der Lehrer gibt es ihm.", "Der Lehrer gibt es ihm", "es ihm"],
          choices: [
            "Der Lehrer gibt es ihm.",
            "Der Lehrer gibt ihn es.",
            "Der Lehrer gebt ihm es.",
            "Der Lehrer gibt ihm sie."
          ],
          hint: "ihm(3格) も es(4格) も両方「代名詞」！両方代名詞のときの語順は？",
          explanation: "誤り：<code>ihm es</code> → <b>es ihm</b>（両方とも代名詞のときは必ず<strong>4格＋3格</strong>の順！）。<br>訳：先生はそれを彼に渡します。"
        },
        {
          id: "p26-3-5",
          prompt: "【練習3 間違い探し】Die Bücher gehören ich.",
          ja: "1つの誤りを直して正しい文にしよう！",
          answer: "Die Bücher gehören mir.",
          accept: ["Die Bücher gehören mir.", "Die Bücher gehören mir", "mir"],
          choices: [
            "Die Bücher gehören mir.",
            "Die Bücher gehören mich.",
            "Die Bücher gehört ich.",
            "Die Buch gehören mir."
          ],
          hint: "gehören（〜のものである）は何格をとる動詞だった？",
          explanation: "誤り：<code>ich</code> → <b>mir</b>（gehören は3格支配動詞なので ich の3格 mir！）。<br>訳：それらの本は私のものです。"
        }
      ]
    },
    {
      id: "p27-28",
      title: "p.27〜28 演習：時刻表現＆Wem＋gehören",
      desc: "時刻の表現と持ち物の受け答えを練習しよう！",
      questions: [
        {
          id: "p27-1",
          prompt: "「今何時ですか？」をドイツ語で言うと？（Wie spät 以外の言い方）",
          ja: "p.26〜27 補足表現",
          answer: "Wie viel Uhr ist es?",
          accept: ["Wie viel Uhr ist es?", "Wie viel Uhr ist es"],
          choices: ["Wie viel Uhr ist es?", "Was Uhr ist es?", "Wie Uhr ist es?", "Um wie viel Uhr ist es?"],
          hint: "「どれくらい多くの時計（時間）ですか？」と直訳する表現です。",
          explanation: "時刻の尋ね方は <b>Wie viel Uhr ist es?</b> と <b>Wie spät ist es?</b> の2つをセットで覚えましょう！"
        },
        {
          id: "p27-2",
          prompt: "____ 16 Uhr gehe ich nach Hause.",
          ja: "「16時に」私は帰宅します。",
          answer: "Um",
          accept: ["Um", "um"],
          choices: ["Um", "Gegen", "In", "Am"],
          hint: "「ちょうど〜時に」は um、「〜時ごろ」は gegen！",
          explanation: "「〜時に」は前置詞 <b>Um</b>（文頭なので大文字）。ちなみに「16時ごろ」なら <code>Gegen 16 Uhr</code> です。"
        },
        {
          id: "p27-3",
          prompt: "Gegen 16 Uhr bin ich ____ Hause.",
          ja: "16時ごろ私は家にいます（在宅している）。",
          answer: "zu",
          accept: ["zu"],
          choices: ["zu", "nach", "in", "um"],
          hint: "「帰宅する」は nach Hause gehen、「家にいる」は？",
          explanation: "在宅しているは <b>zu Hause sein</b>！帰宅する（nach Hause gehen）との使い分けは超頻出です。"
        },
        {
          id: "p28-1",
          prompt: "____ gehört der Rucksack?",
          ja: "そのリュックは「誰の」ものですか？",
          answer: "Wem",
          accept: ["Wem", "wem"],
          choices: ["Wem", "Wer", "Wen", "Was"],
          hint: "gehören は3格をとるので、「誰（wer）」の3格を使います！",
          explanation: "wer(1格) → wessen(2格) → <b>wem</b>(3格) → wen(4格)。<code>Wem gehört ...?</code> で「〜は誰のもの？」！"
        },
        {
          id: "p28-2",
          prompt: "Gehört dir die Brille? — Ja, ____ gehört mir.",
          ja: "その眼鏡は君のもの？ — うん、それは私のものだよ。",
          answer: "sie",
          accept: ["sie"],
          choices: ["sie", "er", "es", "ihr"],
          hint: "die Brille（眼鏡）は女性名詞！女性名詞を受ける1格の代名詞は？",
          explanation: "<code>die Brille</code> は女性名詞なので、1格（主語）の代名詞 <b>sie</b> で受けます。"
        },
        {
          id: "p28-3",
          prompt: "Wem gehört das Handy? — ____ gehört mir.",
          ja: "その携帯は誰のもの？ — それは私のものです。",
          answer: "Es",
          accept: ["Es", "es"],
          choices: ["Es", "Er", "Sie", "Ihm"],
          hint: "das Handy（携帯）は中性名詞！",
          explanation: "<code>das Handy</code> は中性名詞なので、主語として受けるときは <b>Es</b>！"
        }
      ]
    },
    {
      id: "p30",
      title: "p.30 練習：不規則動詞の現在人称変化",
      desc: "教科書の練習問題10問を完全制覇しよう！",
      questions: [
        {
          id: "p30-1",
          prompt: "Er ( ____ ) immer einen Anzug.",
          ja: "彼はいつもスーツを着ています。（tragen を使う）",
          answer: "trägt",
          accept: ["trägt"],
          choices: ["trägt", "tragt", "trägst", "trage"],
          hint: "tragen は a → ä 型！主語は er（3人称単数）。",
          explanation: "tragen は <code>du trägst / er <b>trägt</b></code> と変音します。"
        },
        {
          id: "p30-2",
          prompt: "Sie ( ____ ) jetzt Wäsche.",
          ja: "彼女は今、洗濯をしています。（waschen を使う）",
          answer: "wäscht",
          accept: ["wäscht"],
          choices: ["wäscht", "wascht", "waschen", "wäschst"],
          hint: "waschen は a → ä 型！主語は Sie（彼女＝3人称単数）。",
          explanation: "ここでは文頭の Sie が「彼女」なので 3人称単数 <b>wäscht</b>！"
        },
        {
          id: "p30-3",
          prompt: "Die Studentin ( ____ ) uns.",
          ja: "その学生は私たちを手伝ってくれる。（helfen を使う）",
          answer: "hilft",
          accept: ["hilft"],
          choices: ["hilft", "helft", "hilst", "helfst"],
          hint: "helfen は e → i 型！Die Studentin は3人称単数。",
          explanation: "helfen の3人称単数は <b>hilft</b>（du hilfst / er hilft）。"
        },
        {
          id: "p30-4",
          prompt: "Warum ( ____ ) das Kind kein Gemüse?",
          ja: "どうしてその子は野菜を食べないの？（essen を使う）",
          answer: "isst",
          accept: ["isst"],
          choices: ["isst", "esst", "ist", "esse"],
          hint: "essen は e → i 型！das Kind は単数（3人称単数）。",
          explanation: "essen の3人称単数は <b>isst</b>（du isst / er isst）。※ist は sein の活用なのでスペル注意！"
        },
        {
          id: "p30-5",
          prompt: "( ____ ) du sie oft?",
          ja: "彼女にはよく会うかい？（treffen を使う）",
          answer: "Triffst",
          accept: ["Triffst", "triffst"],
          choices: ["Triffst", "Treffst", "Trifft", "Treffen"],
          hint: "treffen は e → i 型！主語は du、文頭なので大文字。",
          explanation: "treffen の du 変化は <b>Triffst</b>（e → i）！"
        },
        {
          id: "p30-6",
          prompt: "Welches Café ( ____ ) du mir?",
          ja: "どのカフェが君のおすすめなの？（empfehlen を使う）",
          answer: "empfiehlst",
          accept: ["empfiehlst"],
          choices: ["empfiehlst", "empfehlst", "empfiehlt", "empfilst"],
          hint: "empfehlen は e → ie 型！主語は du。",
          explanation: "empfehlen は長音の e → ie で <b>empfiehlst</b>（hを落とさないように注意！）。"
        },
        {
          id: "p30-7",
          prompt: "Die Katze ( ____ ) gemütlich da drüben.",
          ja: "その猫は気持ちよさそうにあそこで眠っている。（schlafen を使う）",
          answer: "schläft",
          accept: ["schläft"],
          choices: ["schläft", "schlaft", "schläfst", "schlafen"],
          hint: "schlafen は a → ä 型！Die Katze は単数。",
          explanation: "schlafen の3人称単数は <b>schläft</b>！"
        },
        {
          id: "p30-8",
          prompt: "Der Schüler ( ____ ) immer etwas.",
          ja: "その生徒はいつも忘れ物をする。（vergessen を使う）",
          answer: "vergisst",
          accept: ["vergisst"],
          choices: ["vergisst", "vergesst", "vergist", "vergessen"],
          hint: "vergessen は e → i 型！essen と同じ変化。",
          explanation: "vergessen の3人称単数は <b>vergisst</b>（sが2つ！）。"
        },
        {
          id: "p30-9",
          prompt: "Sie ( ____ ) immer den Bus. ( ____ ) du?",
          ja: "彼女はいつもそのバスに乗るよ。知ってた？（nehmen と wissen、スペース区切りで2語）",
          answer: "nimmt Weißt",
          accept: ["nimmt Weißt", "nimmt weißt"],
          choices: ["nimmt Weißt", "nehmt Wisst", "nimt Weißt", "nimmt Weiß"],
          hint: "nehmen(er)＝hが消えてmが2つ！wissen(du)＝weiß に t を付ける！",
          explanation: "超頻出の特殊動詞コンビ！nehmen(彼女) → <b>nimmt</b>、wissen(du) → <b>Weißt</b>！"
        },
        {
          id: "p30-10",
          prompt: "Den Fernsehturm ( ____ ) man schon von fern.",
          ja: "テレビ塔は遠くからでも見えます。（sehen を使う）",
          answer: "sieht",
          accept: ["sieht"],
          choices: ["sieht", "seht", "siehst", "sehen"],
          hint: "主語は man（一般の人々＝必ず3人称単数扱い）！sehen は e → ie 型。",
          explanation: "<code>man</code> は必ず<strong>3人称単数</strong>扱い！sehen の3人称単数は <b>sieht</b> です。"
        }
      ]
    },
    {
      id: "p31",
      title: "p.31 練習：命令形（du / ihr / Sie）",
      desc: "du・ihr・Sie に対する命令文をマスターしよう！",
      questions: [
        {
          id: "p31-1-du",
          prompt: "「たくさんドイツ語を勉強して！」（du に対する命令形：viel / lernen / Deutsch）",
          ja: "du に対する命令形（主語なし！）",
          answer: "Lern viel Deutsch!",
          accept: ["Lern viel Deutsch!", "Lerne viel Deutsch!", "Lern viel Deutsch", "Lerne viel Deutsch"],
          choices: ["Lern viel Deutsch!", "Lernst viel Deutsch!", "Lernen viel Deutsch!", "Lernt viel Deutsch!"],
          hint: "lernen の du 形（lernst）から -st と du を取る！（口調の -e を付けて Lerne でもOK）",
          explanation: "正解は <b>Lern(e) viel Deutsch!</b>（規則動詞の du 命令形は -st を取るだけ！）。"
        },
        {
          id: "p31-1-ihr",
          prompt: "「たくさんドイツ語を勉強して！」（ihr に対する命令形：viel / lernen / Deutsch）",
          ja: "ihr に対する命令形",
          answer: "Lernt viel Deutsch!",
          accept: ["Lernt viel Deutsch!", "Lernt viel Deutsch"],
          choices: ["Lernt viel Deutsch!", "Lern viel Deutsch!", "Lernen Sie viel Deutsch!", "Lernt ihr viel Deutsch!"],
          hint: "ihr の命令形は、普通の ihr の活用形から主語 ihr を取るだけ！",
          explanation: "正解は <b>Lernt viel Deutsch!</b>（ihr の形そのまま、主語なし！）。"
        },
        {
          id: "p31-1-Sie",
          prompt: "「たくさんドイツ語を勉強してください。」（Sie に対する命令形：viel / lernen / Deutsch）",
          ja: "Sie に対する命令形（主語 Sie を忘れずに！）",
          answer: "Lernen Sie viel Deutsch!",
          accept: ["Lernen Sie viel Deutsch!", "Lernen Sie viel Deutsch"],
          choices: ["Lernen Sie viel Deutsch!", "Lernen viel Deutsch!", "Sie lernen viel Deutsch!", "Lernt Sie viel Deutsch!"],
          hint: "Sie に対する命令形だけ「動詞原形 ＋ Sie」の順で主語を付けます！",
          explanation: "正解は <b>Lernen Sie viel Deutsch!</b>。"
        },
        {
          id: "p31-2-du",
          prompt: "「いつも健康でいてね！」（du に対する命令形：immer / gesund / bleiben）",
          ja: "bleiben＝〜のままでいる",
          answer: "Bleib immer gesund!",
          accept: ["Bleib immer gesund!", "Bleibe immer gesund!", "Bleib immer gesund", "Bleibe immer gesund"],
          choices: ["Bleib immer gesund!", "Bleibst immer gesund!", "Bleibt immer gesund!", "Bleiben immer gesund!"],
          hint: "bleiben の du 命令形 → Bleib(e)!",
          explanation: "正解は <b>Bleib(e) immer gesund!</b>（ihr: Bleibt immer gesund! / Sie: Bleiben Sie immer gesund!）。"
        },
        {
          id: "p31-3-du",
          prompt: "「私を手伝って！」（du に対する命令形：helfen / mir）",
          ja: "超注意！helfen は e → i の不規則動詞！",
          answer: "Hilf mir!",
          accept: ["Hilf mir!", "Hilf mir"],
          choices: ["Hilf mir!", "Helf mir!", "Helfe mir!", "Hilfst mir!"],
          hint: "e → i 型は du 命令形でも i のまま！しかも -e は付けない！",
          explanation: "超重要！<code>du hilfst → <b>Hilf mir!</b></code>（e→i型はそのまま引き継ぎ、-eを付けません）。"
        },
        {
          id: "p31-3-ihr",
          prompt: "「私を手伝って！」（ihr に対する命令形：helfen / mir）",
          ja: "ihr のときは変音する？しない？",
          answer: "Helft mir!",
          accept: ["Helft mir!", "Helft mir"],
          choices: ["Helft mir!", "Hilft mir!", "Helfen mir!", "Hilf mir!"],
          hint: "不規則変化は du と er/sie/es だけ！ihr は元の e のまま！",
          explanation: "正解は <b>Helft mir!</b>（ihr は変音しないので Helft！Sie なら Helfen Sie mir!）。"
        },
        {
          id: "p31-4-du",
          prompt: "「その写真を私に見せて！」（du に対する命令形：das Foto / zeigen / mir）",
          ja: "語順注意：代名詞(mir) と 名詞(das Foto) はどっちが先？",
          answer: "Zeig mir das Foto!",
          accept: ["Zeig mir das Foto!", "Zeige mir das Foto!", "Zeig mir das Foto", "Zeige mir das Foto"],
          choices: ["Zeig mir das Foto!", "Zeig das Foto mir!", "Zeigst mir das Foto!", "Zeigt mir das Foto!"],
          hint: "L3の語順ルール：代名詞（mir）が名詞（das Foto）より先！",
          explanation: "正解は <b>Zeig(e) mir das Foto!</b>（ihr: Zeigt mir das Foto! / Sie: Zeigen Sie mir das Foto!）。"
        }
      ]
    },
    {
      id: "p32",
      title: "p.32 Übungen（文法練習1・2・3）",
      desc: "L4の総まとめ！不規則動詞・誘い文・間違い探し（全14問）",
      questions: [
        // 文法練習1
        {
          id: "p32-1-1",
          prompt: "【練習1】A: ____ du nach Berlin?  B: Ja, ich ____ nach Berlin.",
          ja: "ベルリンへ行くの？（fahren を使って2語をスペース区切り）",
          answer: "Fährst fahre",
          accept: ["Fährst fahre", "fährst fahre"],
          choices: ["Fährst fahre", "Fahrst fahre", "Fährt fahre", "Fährst fähre"],
          hint: "du は変音（a→ä）、ich は変音しない！",
          explanation: "du → <b>Fährst</b>、ich → <b>fahre</b>（ich は絶対に変音しません！）。"
        },
        {
          id: "p32-1-2",
          prompt: "【練習1】A: ____ er gern Filme?  B: Ja, er ____ gern Filme.",
          ja: "彼は映画を見るのが好き？（sehen を使って2語）",
          answer: "Sieht sieht",
          accept: ["Sieht sieht", "sieht sieht"],
          choices: ["Sieht sieht", "Seht seht", "Siehst sieht", "Sieht sehe"],
          hint: "どちらも主語は er（3人称単数）！sehen は e → ie 型。",
          explanation: "er → <b>Sieht / sieht</b>（e→ie）。"
        },
        {
          id: "p32-1-3",
          prompt: "【練習1】A: ____ Lina gern Romane?  B: Nein, sie ____ nicht gern Romane.",
          ja: "リーナは小説を読むのが好き？（lesen を使って2語）",
          answer: "Liest liest",
          accept: ["Liest liest", "liest liest"],
          choices: ["Liest liest", "Lest lest", "Leset liest", "Liest lese"],
          hint: "Lina / sie（彼女）は3人称単数！lesen は e → ie 型。",
          explanation: "lesen の3人称単数は <b>Liest / liest</b>！"
        },
        {
          id: "p32-1-4",
          prompt: "【練習1】A: ____ Herr Müller gut Englisch?  B: Nein, er ____ nicht gut Englisch.",
          ja: "ミュラーさんは英語を上手に話しますか？（sprechen を使って2語）",
          answer: "Spricht spricht",
          accept: ["Spricht spricht", "spricht spricht"],
          choices: ["Spricht spricht", "Sprecht sprecht", "Sprichst spricht", "Sprechen spricht"],
          hint: "Herr Müller / er は3人称単数！sprechen は e → i 型。",
          explanation: "sprechen の3人称単数は <b>Spricht / spricht</b>！"
        },
        {
          id: "p32-1-5",
          prompt: "【練習1】A: ____ du gern Brot?  B: Ja, ich ____ gern Brot.",
          ja: "君はパンを食べるのが好き？（essen を使って2語）",
          answer: "Isst esse",
          accept: ["Isst esse", "isst esse"],
          choices: ["Isst esse", "Esst esse", "Isst isse", "Ist esse"],
          hint: "du は e → i（isst）、ich はそのまま（esse）！",
          explanation: "du → <b>Isst</b>、ich → <b>esse</b>！"
        },
        {
          id: "p32-1-6",
          prompt: "【練習1】A: ____ du oft Sandalen?  B: Ja, ich ____ oft Sandalen.",
          ja: "君はよくサンダルを履くの？（tragen を使って2語）",
          answer: "Trägst trage",
          accept: ["Trägst trage", "trägst trage"],
          choices: ["Trägst trage", "Tragst trage", "Trägt trage", "Trägst träge"],
          hint: "du は a → ä（trägst）、ich はそのまま（trage）！",
          explanation: "du → <b>Trägst</b>、ich → <b>trage</b>！"
        },
        // 文法練習2（誘う文）
        {
          id: "p32-2-1",
          prompt: "【練習2 作文】いっしょにお昼ご飯を食べましょう！（zusammen / zu Mittag / essen）",
          ja: "「〜しましょう！」＝ 動詞原形 ＋ wir ...!",
          answer: "Essen wir zusammen zu Mittag!",
          accept: ["Essen wir zusammen zu Mittag!", "Essen wir zusammen zu Mittag"],
          choices: [
            "Essen wir zusammen zu Mittag!",
            "Wir essen zusammen zu Mittag!",
            "Isst wir zusammen zu Mittag!",
            "Essen zusammen wir zu Mittag!"
          ],
          hint: "先頭は Essen wir ...!",
          explanation: "正解は <b>Essen wir zusammen zu Mittag!</b>（動詞原形＋wir で提案・誘いの文！）。"
        },
        {
          id: "p32-2-2",
          prompt: "【練習2 作文】一度、先生にきいてみよう！（einmal / Lehrer(r) / fragen(jn)）",
          ja: "超注意：Lehrer は男性名詞(r)、fragen は4格(jn)をとる！",
          answer: "Fragen wir einmal den Lehrer!",
          accept: ["Fragen wir einmal den Lehrer!", "Fragen wir einmal den Lehrer", "Fragen wir den Lehrer einmal!"],
          choices: [
            "Fragen wir einmal den Lehrer!",
            "Fragen wir einmal der Lehrer!",
            "Fragen wir einmal dem Lehrer!",
            "Frag wir einmal den Lehrer!"
          ],
          hint: "男性名詞 der Lehrer の4格は「den Lehrer」！",
          explanation: "正解は <b>Fragen wir einmal den Lehrer!</b>（fragen は4格をとるので der → <b>den</b> Lehrer！）。"
        },
        {
          id: "p32-2-3",
          prompt: "【練習2 作文】一休みしましょう！（eine Pause / machen）",
          ja: "eine Pause machen＝休憩する",
          answer: "Machen wir eine Pause!",
          accept: ["Machen wir eine Pause!", "Machen wir eine Pause"],
          choices: [
            "Machen wir eine Pause!",
            "Macht wir eine Pause!",
            "Wir machen eine Pause!",
            "Machen eine Pause wir!"
          ],
          hint: "Machen wir ＋ eine Pause!",
          explanation: "正解は <b>Machen wir eine Pause!</b>。"
        },
        // 文法練習3（間違い探し）
        {
          id: "p32-3-1",
          prompt: "【練習3 間違い探し】Jetzt lest er Manga.",
          ja: "誤りを直して正しい文にしよう！（※jetzt は文頭に置く）",
          answer: "Jetzt liest er Manga.",
          accept: ["Jetzt liest er Manga.", "Jetzt liest er Manga", "liest"],
          choices: [
            "Jetzt liest er Manga.",
            "Jetzt er liest Manga.",
            "Jetzt lesen er Manga.",
            "Jetzt lisst er Manga."
          ],
          hint: "lesen の3人称単数（er）は不規則変化（e → ie）！",
          explanation: "誤り：<code>lest</code> → <b>liest</b>。<br>訳：今、彼はマンガを読んでいます。"
        },
        {
          id: "p32-3-2",
          prompt: "【練習3 間違い探し】Wohin fahrst du morgen?",
          ja: "誤りを直して正しい文にしよう！",
          answer: "Wohin fährst du morgen?",
          accept: ["Wohin fährst du morgen?", "Wohin fährst du morgen", "fährst"],
          choices: [
            "Wohin fährst du morgen?",
            "Wohin fährt du morgen?",
            "Wohin du fährst morgen?",
            "Wohin fähren du morgen?"
          ],
          hint: "fahren の du 変化は a → ä！",
          explanation: "誤り：<code>fahrst</code> → <b>fährst</b>（ウムラウト忘れ！）。<br>訳：君は明日どこへ行くの？"
        },
        {
          id: "p32-3-3",
          prompt: "【練習3 間違い探し】Was seht er gern?",
          ja: "誤りを直して正しい文にしよう！",
          answer: "Was sieht er gern?",
          accept: ["Was sieht er gern?", "Was sieht er gern", "sieht"],
          choices: [
            "Was sieht er gern?",
            "Was siehst er gern?",
            "Was sehen er gern?",
            "Was seht ihr gern?"
          ],
          hint: "sehen の er 変化は e → ie！",
          explanation: "誤り：<code>seht</code> → <b>sieht</b>。<br>訳：彼は何を見るのが好きですか？"
        },
        {
          id: "p32-3-4",
          prompt: "【練習3 間違い探し】Sprech bitte langsam!",
          ja: "du に対する命令形として誤りを直そう！",
          answer: "Sprich bitte langsam!",
          accept: ["Sprich bitte langsam!", "Sprich bitte langsam", "Sprich"],
          choices: [
            "Sprich bitte langsam!",
            "Spreche bitte langsam!",
            "Sprichst bitte langsam!",
            "Sprecht bitte langsam!"
          ],
          hint: "sprechen は e → i 型！du の命令形も i になる！",
          explanation: "誤り：<code>Sprech</code> → <b>Sprich</b>（e→i型のdu命令形はそのまま引き継ぐ！）。<br>訳：どうかゆっくり話して！"
        },
        {
          id: "p32-3-5",
          prompt: "【練習3 間違い探し】Sein Sie bitte vorsichtig!",
          ja: "誤りを直して正しい文にしよう！",
          answer: "Seien Sie bitte vorsichtig!",
          accept: ["Seien Sie bitte vorsichtig!", "Seien Sie bitte vorsichtig", "Seien"],
          choices: [
            "Seien Sie bitte vorsichtig!",
            "Sind Sie bitte vorsichtig!",
            "Sei Sie bitte vorsichtig!",
            "Seid Sie bitte vorsichtig!"
          ],
          hint: "sein の Sie に対する命令形は超特殊な形！",
          explanation: "誤り：<code>Sein</code> → <b>Seien</b>（sein の命令形は Sei! / Seid! / <b>Seien Sie!</b>）。<br>訳：どうか気をつけてください！"
        }
      ]
    }
  ]
};
