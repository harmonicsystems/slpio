---
term: "Token"
aliases: ["subword", "tokenization", "token limit"]
slpDefinition: "The smallest unit of text that an LLM processes. Tokens are like morphemes — the smallest meaningful pieces the model works with. The word 'unhappiness' might become three tokens ('un,' 'happi,' 'ness'), just as a morphologist would break it into three morphemes. Understanding tokens matters because AI tools charge by the token and limit how many tokens you can use in a single conversation."
techDefinition: "A subword unit produced by a tokenization algorithm (such as BPE or SentencePiece) that splits text into a vocabulary of common character sequences. Models process and generate text token-by-token, not word-by-word. Token counts determine both cost and context window consumption."
order: 5
---

## Why SLPs Need to Know This

Tokens affect two things you care about: cost and capacity. Every word you send to an AI tool gets broken into tokens, and every word it sends back costs tokens too. When a tool says you've hit your limit or that your conversation is too long, tokens are the reason. Understanding this helps you use AI tools more efficiently.

## Clinical Impact

- Long eval reports consume more tokens — you may need to break them into sections rather than pasting entire reports
- Specialized clinical vocabulary sometimes tokenizes inefficiently ("velopharyngeal" may become 4-5 tokens), meaning clinical text uses more capacity than everyday language
- Billing codes, standardized test names, and technical terminology all consume tokens, so be strategic about what you include in a prompt

## Practical Guide for SLPs

1. **Be concise in prompts** — include necessary clinical detail, but cut unnecessary filler
2. **Break long tasks into parts** — instead of pasting an entire eval and asking for a summary, process sections individually
3. **Know your tool's limits** — free tiers typically have lower token limits; if output cuts off mid-sentence, you've likely hit a token ceiling
4. **Reuse effective prompts** — save prompts that work well so you don't spend tokens iterating every time

## Related Terms

- **Context Window** — the total number of tokens the model can hold at once, including both your input and its output
- **Prompt** — your prompt is converted to tokens before the model processes it
