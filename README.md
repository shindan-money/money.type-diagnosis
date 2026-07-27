<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="description" content="12問でわかる、フジナガ版の6タイプ・マネータイプ診断">
  <meta name="theme-color" content="#fff8e8">
  <title>フジナガ版　マネータイプ診断</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="app" id="app">
    <section class="screen active" id="start-screen" aria-labelledby="start-title">
      <div class="hero-card">
        <p class="eyebrow">12問・約2分</p>
        <h1 id="start-title">フジナガ版<br>マネータイプ診断</h1>
        <p class="lead">あなたのお金との付き合い方は、どのタイプ？<br>いちばん自分に近い答えを選んでください。</p>
        <div class="type-grid" aria-label="6つの診断タイプ">
          <div><img src="images/invest.png" alt="投資タイプ"><span>投資</span></div>
          <div><img src="images/save.png" alt="貯蓄タイプ"><span>貯蓄</span></div>
          <div><img src="images/plan.png" alt="計画タイプ"><span>計画</span></div>
          <div><img src="images/balance.png" alt="バランスタイプ"><span>バランス</span></div>
          <div><img src="images/enjoy.png" alt="エンジョイタイプ"><span>エンジョイ</span></div>
          <div><img src="images/challenger.png" alt="チャレンジャータイプ"><span>チャレンジャー</span></div>
        </div>
        <div class="profile-form" aria-labelledby="profile-heading">
          <h2 id="profile-heading">診断する方の情報</h2>
          <div class="form-grid">
            <label class="field">
              <span>支社名 <b>必須</b></span>
              <input id="branch-input" name="branch" type="text" autocomplete="organization" maxlength="40" placeholder="例：大阪支社" required>
            </label>
            <label class="field">
              <span>お名前 <b>必須</b></span>
              <input id="name-input" name="name" type="text" autocomplete="name" maxlength="40" placeholder="例：山田 太郎" required>
            </label>
          </div>
          <p class="form-error" id="form-error" role="alert" aria-live="polite"></p>
        </div>
        <button class="primary" id="start-button" type="button">診断をはじめる</button>
        <p class="note">※入力内容はこの端末内での結果表示にのみ使用し、外部には送信されません。<br>※この診断は娯楽目的です。金融商品の推奨ではありません。</p>
      </div>
    </section>

    <section class="screen" id="quiz-screen" aria-live="polite">
      <div class="quiz-card">
        <div class="progress-row">
          <span id="question-count">1 / 12</span>
          <span id="progress-percent">8%</span>
        </div>
        <div class="progress-track" aria-hidden="true"><div id="progress-bar"></div></div>
        <p class="question-label" id="question-label">QUESTION 1</p>
        <h2 id="question-text"></h2>
        <div class="answers" id="answers"></div>
        <button class="back-button" id="back-button" type="button">← 前の質問へ</button>
      </div>
    </section>

    <section class="screen" id="result-screen" aria-labelledby="result-heading">
      <div class="result-card">
        <p class="eyebrow">診断結果</p>
        <div class="participant-card" aria-label="診断者情報">
          <div><span>支社名</span><strong id="result-branch"></strong></div>
          <div><span>お名前</span><strong id="result-name"></strong></div>
          <div><span>診断日</span><strong id="result-date"></strong></div>
        </div>
        <h2 id="result-heading">あなたは…</h2>
        <img class="result-image" id="result-image" src="" alt="">
        <h1 class="result-title" id="result-title"></h1>
        <p class="result-catch" id="result-catch"></p>
        <div class="result-copy" id="result-copy"></div>
        <div class="score-wrap">
          <h3>あなたのタイプ傾向</h3>
          <div id="score-list"></div>
        </div>
        <button class="primary" id="restart-button" type="button">もう一度診断する</button>
      </div>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>
