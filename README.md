# GS1 Digital Link Resolver デモアプリ

名刺などに印刷されたGS1 Digital Link QRコードを読み取り、選択したリンクタイプに応じたページへ遷移するデモアプリケーションです。

## ファイル構成

```
bizcardDemoApp/
├── index.html     # トップページ（組織情報表示）
├── qrcode.html    # QRコード読み取り画面
├── config.js      # 設定ファイル
└── README.md      # このファイル
```

## 使い方

### 1. 基本的な起動方法

HTMLファイルをブラウザで直接開くか、ローカルサーバーで起動します。

```bash
# Python 3の場合
python -m http.server 8000

# Node.jsの場合
npx serve .
```

ブラウザで `http://localhost:8000` にアクセスします。

### 2. 設定のカスタマイズ

`config.js` を編集することで、表示内容を変更できます。

## 設定ファイル（config.js）の構成

### 共通設定

```javascript
common: {
  headerTitle: "GS1 Japan",           // ヘッダーに表示するタイトル
  footerText: "© GS1 Japan",          // フッターに表示するテキスト
  logoUrl: "https://example.com/logo.svg",  // ロゴ画像のURL
  logoAlt: "ロゴ"                      // ロゴのalt属性
}
```

### トップページ（index.html）の設定

```javascript
index: {
  pageTitle: "ページタイトル",         // ブラウザタブに表示
  sectionTitle: "組織情報",           // セクション見出し

  // 情報カードの内容（項目数は自由）
  infoItems: [
    { label: "組織名", value: "株式会社サンプル" },
    { label: "所在地", value: "東京都..." },
    { label: "電話番号", value: "03-1234-5678" }
  ],

  // デモボタン
  demoButton: {
    text: "デモを体験",
    link: "qrcode.html"
  }
}
```

### QR読み取り画面（qrcode.html）の設定

```javascript
qrcode: {
  pageTitle: "QR読み取り画面",
  headerTitle: "QRコード読み取り",
  sectionTitle: "事業者情報",
  instruction: "メニューリンクを選択し、QRコードを読み取ってください。",
  menuTitle: "メニューリンク",

  // メニューボタンの設定（ボタン数は自由）
  menuButtons: [
    { linkType: "gs1:homepage", label: "事業者情報", active: true },
    { linkType: "gs1:eventsInfo", label: "イベント", active: false },
    { linkType: "gs1:support", label: "お問い合わせ", active: false }
  ]
}
```

### メニューボタンの設定項目

| プロパティ | 説明 |
|-----------|------|
| `linkType` | GS1 Digital Linkのリンクタイプ（URLパラメータに使用） |
| `label` | ボタンに表示するテキスト |
| `active` | 初期選択状態（`true`は1つだけ推奨） |

### 利用可能なリンクタイプ例

| linkType | 説明 |
|----------|------|
| `homepage` | 事業者情報 |
| `eventsInfo` | イベント情報 |
| `relatedVideo` | 関連動画 |
| `backgroundInfo` | 理念・事業概要 |
| `promotion` | キャンペーン |
| `loyaltyProgram` | 会員限定情報 |
| `careersInfo` | 採用情報 |
| `locationInfo` | アクセス・所在地 |
| `support` | お問い合わせ |

## 動作の流れ

1. トップページで「リゾルバデモを体験」をクリック
2. QR読み取り画面でメニューリンク（リンクタイプ）を選択
3. 名刺のQRコードをカメラで読み取る
4. QRコードに含まれるURLに `?linkType=選択したリンクタイプ` を付与して遷移

## 技術仕様

- **フロントエンドのみ** - バックエンド不要
- **QRコード読み取り** - [html5-qrcode](https://github.com/mebjas/html5-qrcode) ライブラリ使用
- **対応ブラウザ** - カメラアクセスをサポートするモダンブラウザ（Chrome, Safari, Edge等）

## 注意事項

- カメラへのアクセス許可が必要です
- HTTPS環境またはlocalhost環境で動作します（HTTPではカメラアクセスが制限される場合があります）
