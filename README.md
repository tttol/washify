# washify
```bash
npx http-server
```
https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/

# 要件
## Must
- 「項目＋洗濯日」をセットで管理
- 項目の追加/編集/削除
- 洗濯日から何日経過しているかを表示
- 洗濯日からN日経過したらプッシュ通知
  - N日は固定でもいい
  - 洗濯物ごとにNを可変にできるとなおよし
## Want
- 項目の入れ替え機能
- ライト/ダークモード切り替え
  - デフォはダークの予定

# UI
- 下部にメニュー２つ
  - リスト（三本線アイコン）
  - 設定（歯車アイコン）
- アプリアイコン
  - どうしよう？

# 技術
## Frontend
- HTML5
- CSS3
  - Tailwind css
- JS
  - React?
  - Vanilla?
  - Other...?
## Backtend
- DBいる？
- FirebaseにDB的なものある？
## Infra
- Firebase