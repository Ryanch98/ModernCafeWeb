// Import for future use with real AI providers
// import { COFFEE_KNOWLEDGE_BASE, SYSTEM_PROMPT } from './coffeeAssistantKnowledge';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

/**
 * Coffee Assistant Service
 * Manages AI-powered coffee recommendations and answers
 *
 * Note: This is a template service. To use with a real AI provider:
 * 1. Get an API key from OpenAI, Anthropic, or similar
 * 2. Add it to your .env file (never commit API keys)
 * 3. Uncomment and update the implementation with your chosen provider
 */

// Uncomment one of these providers based on your choice:
// import OpenAI from 'openai';
// import Anthropic from '@anthropic-ai/sdk';

/**
 * Example implementation with mock responses
 * Replace with real API calls when you have an API key
 */
export class CoffeeAssistantService {
  private conversationHistory: ChatMessage[] = [];
  private messageIdCounter = 0;

  /**
   * Send a message to the coffee assistant and get a response
   */
  async sendMessage(userMessage: string): Promise<ChatMessage> {
    const userMsg: ChatMessage = {
      id: `msg-${this.messageIdCounter++}`,
      role: 'user',
      content: userMessage,
      timestamp: Date.now(),
    };

    this.conversationHistory.push(userMsg);

    // TODO: Replace with real API implementation
    const response = await this.callOpenAI(userMessage);

    const assistantMsg: ChatMessage = {
      id: `msg-${this.messageIdCounter++}`,
      role: 'assistant',
      content: response,
      timestamp: Date.now(),
    };

    this.conversationHistory.push(assistantMsg);

    return assistantMsg;
  }

  private async callOpenAI(userMessage: string): Promise<string> {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

    const response = await fetch(`${SERVER_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        history: this.conversationHistory.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Server error: ${response.status} ${text}`);
    }

    const data = await response.json();

    return data.answer;
  }

  /**
   * Get conversation history
   */
  getHistory(): ChatMessage[] {
    return [...this.conversationHistory];
  }

  /**
   * Clear conversation history
   */
  clearHistory(): void {
    this.conversationHistory = [];
    this.messageIdCounter = 0;
  }

  /**
   * Mock response generator for testing
   * Replace with real API implementation
   */

  /**
   * Placeholder for OpenAI integration
   * Uncomment and update when you have an API key
   */
  // private async callOpenAI(userMessage: string): Promise<string> {
  //   const client = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY });
  //
  //   const messages = [
  //     {
  //       role: 'system' as const,
  //       content: `${SYSTEM_PROMPT}\n\nKnowledge Base:\n${COFFEE_KNOWLEDGE_BASE}`,
  //     },
  //     ...this.conversationHistory.map((msg) => ({
  //       role: msg.role as 'user' | 'assistant',
  //       content: msg.content,
  //     })),
  //     { role: 'user' as const, content: userMessage },
  //   ];
  //
  //   const response = await client.chat.completions.create({
  //     model: 'gpt-3.5-turbo',
  //     messages,
  //     max_tokens: 500,
  //     temperature: 0.7,
  //   });
  //
  //   return response.choices[0]?.message?.content || 'Unable to generate response';
  // }

  /**
   * Placeholder for Anthropic (Claude) integration
   * Uncomment and update when you have an API key
   */
  // private async callClaude(userMessage: string): Promise<string> {
  //   const client = new Anthropic({ apiKey: process.env.REACT_APP_ANTHROPIC_API_KEY });
  //
  //   const response = await client.messages.create({
  //     model: 'claude-3-sonnet-20240229',
  //     max_tokens: 500,
  //     system: `${SYSTEM_PROMPT}\n\nKnowledge Base:\n${COFFEE_KNOWLEDGE_BASE}`,
  //     messages: [
  //       ...this.conversationHistory.map((msg) => ({
  //         role: msg.role as 'user' | 'assistant',
  //         content: msg.content,
  //       })),
  //       { role: 'user' as const, content: userMessage },
  //     ],
  //   });
  //
  //   return response.content[0]?.type === 'text' ? response.content[0].text : 'Unable to generate response';
  // }
}

// Create singleton instance
export const coffeeAssistantService = new CoffeeAssistantService();
