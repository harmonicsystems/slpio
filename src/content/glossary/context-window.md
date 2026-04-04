---
term: "Context Window"
aliases: ["context length", "context limit", "memory", "token limit"]
slpDefinition: "The model's working memory: the total amount of text it can 'hold in mind' during a conversation. Think of it like auditory memory span: just as a patient with reduced working memory loses the beginning of a long instruction, an LLM loses access to earlier parts of a conversation when the context window fills up. Once information falls outside the window, the model doesn't remember it."
techDefinition: "The fixed-length sequence of tokens that a transformer model can attend to during inference. All input tokens (system prompt, conversation history, user message) and output tokens must fit within this window. Information beyond the window boundary is not accessible to the model's attention mechanism."
order: 6
---

## Why SLPs Need to Know This

If you've ever had a long conversation with ChatGPT or Claude and noticed the model "forgetting" something you said earlier, you hit the context window limit. This isn't the model being careless; it physically cannot access text that has scrolled past its window. For clinical work, this means long conversations about a patient may lose critical details from earlier in the exchange.

## Clinical Impact

- Pasting an entire lengthy eval report may consume most of the context window, leaving little room for the model's response
- In long back-and-forth conversations, the model may forget instructions you gave at the beginning, including safety instructions like "do not add information I didn't provide"
- Multi-session work doesn't carry over; each new conversation starts with an empty context window unless you manually provide the information again

## Practical Guide for SLPs

1. **Start fresh for important tasks.** Don't rely on a long conversation thread for clinical documentation
2. **Repeat critical instructions.** If your conversation is getting long, restate key constraints ("Remember: do not add findings I didn't report")
3. **Front-load the most important information.** Models tend to attend best to the beginning and end of the context window
4. **Know your tool's window size.** GPT-4 offers 128K tokens; Claude offers 200K tokens. Larger windows cost more but handle longer documents

## Related Terms

- **Token**: context windows are measured in tokens, not words
- **Hallucination**: when earlier context drops out of the window, the model is more likely to fabricate details it can no longer reference
- **Prompt**: your prompt and the model's entire response must fit within the context window together
