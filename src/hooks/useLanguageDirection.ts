import type { Language } from '../constants/types';

/**
 * Custom hook for handling RTL/LTR language direction
 */
export const useLanguageDirection = (language: Language) => {
  const isRTL = language === 'fa';
  const textAlign = isRTL ? 'text-right' : 'text-left';
  const direction = isRTL ? 'rtl' : 'ltr';
  const flexReverse = isRTL ? 'flex-row-reverse' : 'flex-row';

  return { isRTL, textAlign, direction, flexReverse };
};
