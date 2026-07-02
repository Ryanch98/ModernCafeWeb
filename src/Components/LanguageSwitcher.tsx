import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleLanguage } from '../redux/languageSlice';

export default function LanguageSwitcher() {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.language.lang);

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
  };

  return (
    <button
      onClick={handleLanguageToggle}
      className="flex items-center justify-center gap-2 backdrop-blur-sm transition duration-300 hover:bg-white/20"
      title="Toggle Language"
    >
      <span className="text-lg">
        <img
          src={`/Pic/${currentLanguage === 'en' ? 'en' : 'ir'}.png`}
          alt={currentLanguage === 'en' ? 'English' : 'Persian'}
          className="*: w-10"
        />
      </span>
      <span className="font-medium text-white">{currentLanguage === 'en' ? 'EN' : 'FA'}</span>
    </button>
  );
}
