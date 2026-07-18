import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleLanguage } from '../redux/languageSlice';
import type { Language } from '../constants/types';

interface LanguageInfo {
  code: Language;
  flag: string;
  label: string;
}

const LANGUAGE_CONFIG: Record<Language, LanguageInfo> = {
  en: { code: 'en', flag: 'en', label: 'EN' },
  fa: { code: 'fa', flag: 'ir', label: 'FA' },
};

/**
 * Language switcher component for toggling between English and Persian
 * Displays current language flag and code
 */
export default function LanguageSwitcher() {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.language.lang) as Language;
  const languageInfo = LANGUAGE_CONFIG[currentLanguage];

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
  };

  return (
    <button
      onClick={handleLanguageToggle}
      className="flex items-center justify-center gap-2 rounded-lg px-2 py-1 transition duration-300 hover:bg-white/20"
      title={`Switch to ${currentLanguage === 'en' ? 'Persian' : 'English'}`}
      aria-label="Toggle language"
    >
      <span className="text-lg">
        <img
          src={`/pic/${languageInfo.flag}.png`}
          alt={currentLanguage}
          className="h-8 w-8 object-cover sm:h-10 sm:w-10"
        />
      </span>
      <span className="text-sm font-medium text-white">{languageInfo.label}</span>
    </button>
  );
}
