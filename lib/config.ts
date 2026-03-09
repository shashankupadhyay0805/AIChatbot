// Configuration file for the AI Chatbot Template
// Modify these values to customize your chatbot

export const chatbotConfig = {
  // Basic chatbot information
  name: "AI Assistant",

  // Initial message (supports {{choice:}} and {{link:}} syntax)
  welcomeMessage:
    "Hello! I'm your AI Assistant. What can I help you with today? {{choice:See Features}} {{link:https://github.com/yourusername/ai-chatbot|Source Code}}",

  // UI customization
  ui: {
    // Chat window title
    windowTitle: "AI Assistant",

    // Placeholder text for input
    inputPlaceholder: "Message AI Assistant...",

    // Avatar image (place in public folder)
    avatarImage: "/ai-avatar.png",
    avatarFallback: "AI",
  },

  // Rate limiting configuration
  rateLimit: {
    // Token bucket settings
    capacity: 5, // Max request capacity
    refillRate: 2, // Tokens refilled per interval
    interval: 10, // Refill interval in seconds

    // Client-side throttling
    minTimeBetweenMessages: 1000, // Minimum time between messages (ms)
    maxMessageLength: 1000, // Max message length (characters)
  },

  // API configuration
  api: {
  // AI model provider
  model: "gemini-2.5-flash",

  // System prompt for the AI
  systemPrompt: `You are a helpful AI assistant.

You can answer questions about:
- General knowledge
- Programming and software development
- Artificial Intelligence and Machine Learning
- Problem solving and explanations

Always respond clearly and accurately.

If a user asks a programming question, explain step-by-step and include example code when helpful.

If you do not know the answer, say you are unsure instead of making up information.

You may optionally add buttons at the end of responses using:

{{choice:Option Name}}
{{link:https://url.com|Button Text}}
`,
},

  // Security settings
  security: {
    // Enable/disable bot detection
    enableBotDetection: true,

    // Enable/disable shield protection
    enableShield: true,

    // Allowed bot categories (empty array blocks all bots)
    allowedBots: [],
  },
} as const;

export type ChatbotConfig = typeof chatbotConfig;
