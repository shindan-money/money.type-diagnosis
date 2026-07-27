<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="12問でわかる、6タイプのお金の使い方診断">
  <title>マネータイプ診断</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="app-shell">
    <section id="start-screen" class="screen card is-active" aria-labelledby="start-title">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">12 QUESTIONS / 3 MINUTES</p>
          <h1 id="start-title">あなたの<br><span>マネータイプ診断</span></h1>
          <p class="lead">買い物、貯金、将来への備え。普段の選び方から、あなたのお金との付き合い方を6タイプで診断します。</p>
          <button id="start-button" class="primary-button" type="button">診断をはじめる</button>
          <p class="note">※診断は性格傾向を楽しむためのもので、金融アドバイスではありません。</p>
        </div>
        <div class="type-orbit" aria-label="6つの診断タイプ">
          <img src="images/invest.png" alt="投資タイプ">
          <img src="images/save.png" alt="貯蓄タイプ">
          <img src="images/plan.png" alt="計画タイプ">
          <img src="images/balance.png" alt="バランスタイプ">
          <img src="images/enjoy.png" alt="エンジョイタイプ">
          <img src="images/challenger.png" alt="チャレンジャータイプ">
        </div>
      </div>
    </section>

    <section id="quiz-screen" class="screen card" aria-labelledby="question-title">
      <header class="quiz-header">
        <button id="back-button" class="text-button" type="button" aria-label="前の質問へ">← 戻る</button>
        <div class="progress-wrap" aria-label="診断の進み具合">
          <div class="progress-meta"><span id="question-count">1 / 12</span><span id="progress-percent">8%</span></div>
          <div class="progress-track"><div id="progress-bar" class="progress-bar"></div></div>
        </div>
      </header>
      <div class="question-area">
        <p id="question-number" class="eyebrow">QUESTION 01</p>
        <h2 id="question-title"></h2>
        <div id="choices" class="choices" role="group" aria-labelledby="question-title"></div>
      </div>
    </section>

    <section id="result-screen" class="screen card" aria-live="polite">
      <div class="result-grid">
        <div class="result-visual">
          <p class="eyebrow">YOUR MONEY TYPE</p>
          <img id="result-image" src="" alt="">
        </div>
        <div class="result-copy">
          <p class="result-prefix">あなたは…</p>
          <h2 id="result-title"></h2>
          <p id="result-catch" class="result-catch"></p>
          <p id="result-description" class="result-description"></p>
          <div class="result-points">
            <h3>このタイプの強み</h3>
            <ul id="result-strengths"></ul>
          </div>
          <div class="result-tip">
            <span>ONE POINT</span>
            <p id="result-tip"></p>
          </div>
          <div class="result-actions">
            <button id="retry-button" class="secondary-button" type="button">もう一度診断する</button>
            <button id="share-button" class="primary-button" type="button">結果をシェア</button>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>Money Type Diagnosis</footer>
  <script src="script.js"></script>
</body>
</html>
