import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { OpenRouter } from "@openrouter/sdk";
import type { EventStream } from "@openrouter/sdk/lib/event-streams.js";
import type { ChatStreamChunk } from "@openrouter/sdk/models/chatstreamchunk.js";
import type { ChatResult } from "@openrouter/sdk/models/chatresult.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenRouter client
const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY || "",
});

// System prompt for the AIROTIX assistant
const SYSTEM_PROMPT = `You are the AIROTIX AI Advisor, an expert assistant for AIROTIX, a company that builds high-performance AI and computer vision systems for enterprise automation.

About AIROTIX:
- AIROTIX builds AI and computer vision systems that see, understand, and act in real time
- Services include: Computer Vision & Defect Detection, AI Automation & Workflow, LLM Fine-Tuning & NLP, Predictive Analytics, Edge AI Deployment, and AI Strategy Consulting
- Industries served: Manufacturing, Retail, Healthcare, Logistics, Agriculture, and more
- Computer vision systems inspect products on moving production lines at 120+ FPS
- Defect escape rates drop from ~2% to under 0.1% within weeks of deployment
- Retail AI can reduce inventory discrepancies by 34% and model $2M+ in annual waste reduction
- LLM fine-tuning uses LoRA and QLoRA for domain-specific language models
- Typical deployment timeline: 2-4 months from discovery to production-ready

Guidelines:
- Be helpful, professional, and concise
- Provide specific, actionable information about AIROTIX services
- When relevant, mention real-world metrics and results
- If asked about pricing or specific project estimates, encourage the user to contact AIROTIX for a consultation
- If a question is outside the scope of AIROTIX's services, politely redirect to relevant AI/automation topics
- Keep responses focused and not overly long`;

// Type guard: check if the response is an EventStream (ReadableStream)
function isEventStream(
  value: ChatResult | EventStream<ChatStreamChunk>
): value is EventStream<ChatStreamChunk> {
  return (
    value !== null &&
    typeof value === "object" &&
    typeof (value as EventStream<ChatStreamChunk>).getReader === "function"
  );
}

// Chat endpoint with streaming
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return res
        .status(500)
        .json({ error: "OpenRouter API key is not configured" });
    }

    // Set up SSE headers for streaming
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Prepend system prompt
    const fullMessages = [{ role: "system", content: SYSTEM_PROMPT }, ...messages];

    // Stream the response from OpenRouter
    const response = await openrouter.chat.send({
      chatRequest: {
        model: "openai/gpt-oss-20b:free",
        messages: fullMessages,
        stream: true,
      },
    });

    // Handle streaming response
    if (isEventStream(response)) {
      // Use the reader API to iterate over the stream
      const reader = response.getReader();

      while (true) {
        const { done, value: chunk } = await reader.read();
        if (done) break;

        if (chunk) {
          const content = chunk.choices?.[0]?.delta?.content;
          if (content) {
            res.write(`data: ${JSON.stringify({ content })}\n\n`);
          }

          if (chunk.usage) {
            res.write(
              `data: ${JSON.stringify({ usage: chunk.usage, done: true })}\n\n`
            );
          }
        }
      }
    } else {
      // Non-streaming response (fallback - API returned ChatResult instead of stream)
      const content = response.choices?.[0]?.message?.content;
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
      if (response.usage) {
        res.write(
          `data: ${JSON.stringify({ usage: response.usage, done: true })}\n\n`
        );
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("Chat API error:", error);

    // If headers haven't been sent yet, send error as JSON
    if (!res.headersSent) {
      res.status(500).json({ error: "Failed to get response from AI" });
    } else {
      // If streaming has started, send error as SSE
      res.write(`data: ${JSON.stringify({ error: "Stream interrupted" })}\n\n`);
      res.end();
    }
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "AIROTIX Chat API is running" });
});

app.listen(PORT, () => {
  console.log(`AIROTIX Chat Server running on http://localhost:${PORT}`);
});