# MELIA FITNESS — ランディングページ

フィットネスジム「MELIA FITNESS」のランディングページです。
Gulp 4 による Sass コンパイル・画像最適化・BrowserSync によるローカル開発環境を利用しています。

## 技術スタック

| カテゴリ | 内容 |
| --- | --- |
| マークアップ | HTML |
| スタイル | Sass（Dart Sass） / スマホファースト |
| スクリプト | Vanilla JavaScript |
| ビルド | Gulp 4 |
| 開発サーバー | BrowserSync |

## 必要環境

- **Node.js** 14 以降
- **Gulp** 4 系

## セットアップ

```bash
# 1. プロジェクトフォルダに移動
cd fitness-lp

# 2. 依存パッケージをインストール
npm i

# 3. 開発サーバーを起動
npx gulp
```

`npm i` 実行後、`node_modules` と `package-lock.json` が生成されます。
`npx gulp` を実行すると、Sass のコンパイル・画像の最適化・ファイル監視が開始され、BrowserSync でローカルサーバーが立ち上がります。

## ディレクトリ構成

```
fitness-lp/
├── index.html          # トップページ
├── css/                # コンパイル済み CSS（出力先）
├── images/             # 最適化済み画像（出力先）
├── js/                 # JavaScript
├── src/
│   ├── sass/           # Sass ソース（編集はここ）
│   └── images/         # 画像ソース（編集はここ）
├── gulpfile.js
└── package.json
```

## 開発のルール

### Sass / CSS

- 編集場所: `src/sass/`
- 出力先: `css/`
- ソースマップ付きでコンパイルされます

### 画像

- 編集場所: `src/images/`
- 出力先: `images/`（起動時に最適化されます）
- 対応形式: JPEG / PNG / SVG

### JavaScript

- 編集場所: `js/`
- 圧縮・バンドル等の処理は行いません

## デザイン仕様

- **スマホファースト** を前提としたレスポンシブ設計
- サイズ指定は **rem** を基本としています
- ルートフォントを **vw** で設定しているため、rem で記述したレイアウトは PC サイズをタブレット幅でも再現できます

## コマンド一覧

| コマンド | 説明 |
| --- | --- |
| `npm i` | 依存パッケージをインストール |
| `npx gulp` | Sass コンパイル・画像最適化・監視・ローカルサーバー起動 |
