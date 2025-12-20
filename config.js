/**
 * GS1 Digital Link Resolver デモアプリ設定ファイル
 * このファイルを編集して、表示内容をカスタマイズできます。
 */

const APP_CONFIG = {
  // ===== 共通設定 =====
  common: {
    headerTitle: "GS1 Japan",
    footerText: "© GS1 Japan",
    logoUrl: "https://www.gs1jp.org/assets/img/common/logo.svg",
    logoAlt: "GS1 Japan ロゴ"
  },

  // ===== index.html（トップページ）の設定 =====
  index: {
    pageTitle: "GS1 Japan - リゾルバデモ",
    sectionTitle: "組織情報",

    // 組織情報カードの内容
    infoItems: [
      {
        label: "組織名",
        value: "一般財団法人流通システム開発センター（GS1 Japan）"
      },
      {
        label: "所在地",
        value: "〒107-0052<br>東京都港区赤坂7-3-37 プラース・カナダ3F"
      },
      {
        label: "電話番号",
        value: "03-5414-8520"
      }
    ],

    // デモボタンの設定
    demoButton: {
      text: "リゾルバデモを体験",
      link: "qrcode.html"
    }
  },

  // ===== qrcode.html（QR読み取り画面）の設定 =====
  qrcode: {
    pageTitle: "QR読み取り画面",
    headerTitle: "QRコード読み取り",
    sectionTitle: "事業者情報",
    instruction: "メニューリンクを選択し、名刺のQRコードを再度読み取ってください。",
    menuTitle: "メニューリンク",

    // メニューボタンの設定（リンクタイプとボタン表示文字のセット）
    // linkType: GS1 Digital Linkのリンクタイプ
    // label: ボタンに表示するテキスト
    // active: 初期選択状態（trueは1つだけ）
    menuButtons: [
      { linkType: "homepage", label: "事業者情報", active: true },
      { linkType: "eventsInfo", label: "イベント", active: false },
      { linkType: "relatedVideo", label: "紹介講座", active: false },
      { linkType: "backgroundInfo", label: "理念・事業概要", active: false },
      { linkType: "promotion", label: "キャンペーン", active: false },
      { linkType: "loyaltyProgram", label: "会員限定", active: false },
      { linkType: "careersInfo", label: "採用情報", active: false },
      { linkType: "locationInfo", label: "アクセス", active: false },
      { linkType: "support", label: "お問い合わせ", active: false }
    ]
  }
};
