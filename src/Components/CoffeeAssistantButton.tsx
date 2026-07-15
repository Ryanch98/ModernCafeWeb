import { SparklesIcon } from '@heroicons/react/24/outline';

interface CoffeeAssistantButtonProps {
  onClick: () => void;
  language: 'en' | 'fa';
}

/**
 * Floating button to open coffee assistant
 */
export default function CoffeeAssistantButton({ onClick, language }: CoffeeAssistantButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-3 font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:shadow-xl active:scale-95 md:bottom-8 md:right-8"
      title={language === 'fa' ? 'دستیار قهوه' : 'Coffee Assistant'}
      aria-label="Open coffee assistant"
    >
      <SparklesIcon className="h-5 w-5 transition group-hover:rotate-12" />
      <span className="hidden text-sm sm:inline">
        {language === 'fa' ? 'دستیار قهوه' : 'Ask AI'}
      </span>
    </button>
  );
}
