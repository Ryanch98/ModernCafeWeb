import { useState, useRef, useEffect } from 'react';
import { coffeeAssistantService, type ChatMessage } from '../services/coffeeAssistant';

interface UseCoffeeAssistantProps {
  isOpen: boolean;
}

/**
 * Hook for managing coffee assistant state and interactions
 */
export const useCoffeeAssistant = ({ isOpen }: UseCoffeeAssistantProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Load conversation history when assistant opens
  useEffect(() => {
    if (isOpen) {
      setMessages(coffeeAssistantService.getHistory());
    }
  }, [isOpen]);

  const sendMessage = async (userInput: string) => {
    if (!userInput.trim()) return;

    setIsLoading(true);

    try {
      const assistantResponse = await coffeeAssistantService.sendMessage(userInput);
      setMessages([...messages, assistantResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message to chat
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: Date.now(),
      };
      setMessages([...messages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    coffeeAssistantService.clearHistory();
    setMessages([]);
  };

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat,
    messagesEndRef,
  };
};
