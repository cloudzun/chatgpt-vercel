import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI Vercel
- 本网站基于 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 技术，仅用于演示。
- 由 [@CloudZun](https://github.com/cloudzun) 运维， [项目代码](https://github.com/cloudzun/chatgpt-vercel) 源自 [@ourongxing](https://github.com/ourongxing) 和 [@ddiu8081](https://github.com/ddiu8081/chatgpt-demo)。
- <kbd>Shift</kbd> + <kbd>Enter</kbd> 换行。开头输入 <kbd>/</kbd> 或者 <kbd>空格</kbd> 搜索 Prompt 预设。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
