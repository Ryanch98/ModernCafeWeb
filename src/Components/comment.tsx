import { useEffect, useState } from 'react';
import { CUSTOMER_COMMENTS } from '../constants/commentConstants';
import type { Language } from '../constants/types';

interface CommentProps {
  commentIndex: number;
  language?: Language;
}

/**
 * Comment component displays rotating customer testimonials
 * with fade animation when comment changes
 */
export default function Comment({ commentIndex, language = 'en' }: CommentProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [commentIndex]);

  const currentComment = CUSTOMER_COMMENTS[commentIndex];
  const isRTL = language === 'fa';

  return (
    <div className="w-full overflow-hidden text-lg text-black">
      <div
        className={`${
          isRTL ? 'text-right' : 'text-left'
        } relative flex flex-col gap-5 rounded-2xl bg-white px-1 py-2 transition-all duration-500 ${
          animate ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        }`}
      >
        <p className="p-2 text-sm">{currentComment[language].text}</p>
        <div className="flex items-center justify-center">
          <img
            src={currentComment.profileImage}
            alt={currentComment[language].name}
            className="h-10 w-10 rounded-full"
          />
          <span className="ml-4 text-sm font-semibold">{currentComment[language].name}</span>
        </div>
      </div>
    </div>
  );
}
