import { useState } from 'react';
import { XMarkIcon, PaperAirplaneIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCoffeeAssistant } from '../hooks/useCoffeeAssistant';
import type { Language } from '../constants/types';

interface CoffeeAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

/**
 * Coffee Assistant Chat Component
 * AI-powered chat interface for coffee-related questions
 */
export default function CoffeeAssistant({ isOpen, onClose, language }: CoffeeAssistantProps) {
  const [inputValue, setInputValue] = useState('');
  const { messages, isLoading, sendMessage, clearChat, messagesEndRef } = useCoffeeAssistant({
    isOpen,
  });

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    await sendMessage(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  const isRTL = language === 'fa';

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/20 backdrop-blur-sm sm:items-center sm:justify-center">
      {/* Click outside to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Chat Window */}
      <div
        className={`relative z-10 m-2 flex h-[600px] w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-black/40 sm:h-[500px] sm:w-[450px] md:h-[600px] md:w-[500px] ${
          isRTL ? 'flex-row-reverse' : ''
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-4">
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-amber-600">
              ☕
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {language === 'fa' ? 'دستیار قهوه' : 'Coffee Assistant'}
              </h3>
              <p className="text-xs text-slate-100">
                {language === 'fa' ? 'سؤالات قهوه' : 'Coffee Questions'}
              </p>
            </div>
          </div>

          {/* Header Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={clearChat}
              className="rounded-lg p-2 text-white transition hover:bg-white/20"
              title={language === 'fa' ? 'پاک کردن' : 'Clear'}
              aria-label="Clear chat"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-white transition hover:bg-white/20"
              title={language === 'fa' ? 'بستن' : 'Close'}
              aria-label="Close assistant"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <div className="mb-4 text-4xl">☕</div>
                <p className="text-sm text-slate-300">
                  {language === 'fa'
                    ? 'سلام! من دستیار قهوه شما هستم. چند سؤال دارید؟'
                    : "Hi! I'm your coffee assistant. Ask me anything!"}
                </p>
              </div>
            </div>
          ) : (
            <div className={`space-y-3 ${isRTL ? 'text-right' : ''}`}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs rounded-2xl px-4 py-2 text-sm ${
                      message.role === 'user'
                        ? 'bg-amber-500 text-white'
                        : 'border border-white/10 bg-slate-800 text-slate-100'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl border border-white/10 bg-slate-800 px-4 py-2">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-amber-400" />
                      <div className="animation-delay-100 h-2 w-2 animate-bounce rounded-full bg-amber-400" />
                      <div className="animation-delay-200 h-2 w-2 animate-bounce rounded-full bg-amber-400" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-white/10 bg-slate-950/50 p-3">
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={language === 'fa' ? 'درباره قهوه بپرسید...' : 'Ask about coffee...'}
              className={`flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder-slate-400 transition focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 ${
                isRTL ? 'text-right' : ''
              }`}
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="rounded-full bg-amber-500 p-2 text-white transition hover:bg-amber-600 disabled:opacity-50"
              aria-label="Send message"
            >
              <PaperAirplaneIcon className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-slate-400">
            {language === 'fa'
              ? 'برای ارسال Enter یا دکمه ارسال را فشار دهید'
              : 'Press Enter or click send'}
          </p>
        </div>
      </div>
    </div>
  );
}
