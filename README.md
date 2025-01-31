# cline-next-todo-app

Clineに作って！と言ったらできたモノ

## 実行環境

- Cline v3.2.7
- API Provider: VS Code LM API
  - Language Model: copilot - claude-3.5-sonnet

## 考察

- pnpmでNext.js App Router + Tailwindで書くように頼んだら、普通に`'use client'`したアプリが出てきた
- 保存できるよう、sqliteを使うように頼んだ
  - gitignore忘れてない？
- App Routerなのに、Server Componentとか使ってくれなかった
  - 具体的にServer ComponentとかServer Actions使ってくださいと指定しないといけなさそう