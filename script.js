# マネータイプ診断

12問の回答から、次の6タイプを判定する静的Webサイトです。

- 投資タイプ
- 貯蓄タイプ
- 計画タイプ
- バランスタイプ
- エンジョイタイプ
- チャレンジャータイプ

## GitHubで公開する方法

1. GitHubで新しいリポジトリを作成します。
2. このフォルダ内のファイルをすべてアップロードします。
3. リポジトリの `Settings` → `Pages` を開きます。
4. `Build and deployment` の Source を `Deploy from a branch` にします。
5. Branch を `main`、フォルダを `/(root)` にして `Save` を押します。
6. 数分後に表示されるURLから診断サイトを開けます。

## ファイル構成

```text
money-type-diagnosis/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── invest.png
    ├── save.png
    ├── plan.png
    ├── balance.png
    ├── enjoy.png
    └── challenger.png
```

## 質問・結果文を変更する

`script.js` の `questions` と `TYPES` を編集してください。

## 補足

- サーバー処理やデータベースは使っていません。
- 回答内容は保存・送信されません。
- 商用利用や公開時は、使用画像の権利をご確認ください。
