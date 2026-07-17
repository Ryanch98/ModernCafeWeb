import type { CategoryMenuItem, Language } from '../../constants/types';
import { useAppSelector } from '../../redux/hooks';
import { translations } from '../../redux/translations';

interface CategorySelectorProps {
  items: readonly CategoryMenuItem[];
  selectedCategory: string;
  onSelectCategory: (key: string) => void;
}

export default function CategorySelector({
  items,
  selectedCategory,
  onSelectCategory,
}: CategorySelectorProps) {
  const language = useAppSelector((state) => state.language.lang) as Language;

  return (
    <div className="flex flex-row-reverse items-center justify-center gap-8 pt-6 sm:gap-12">
      {items.map((item) => {
        const isSelected = selectedCategory === item.key;

        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onSelectCategory(item.key)}
            className={`flex flex-col items-center justify-between rounded-xl border p-3 transition hover:scale-150 ${
              isSelected ? 'border-amber-400 bg-white/25' : 'border-none bg-white/10'
            }`}
            aria-pressed={isSelected}
            aria-label={`Select ${item.name} category`}
          >
            <img
              className="h-[50px] w-[50px] object-contain sm:h-[80px] sm:w-[80px]"
              src={item.pic}
              alt={item.name}
            />
            <p className="mt-2 text-sm text-white">{translations[language][item.name]}</p>
          </button>
        );
      })}
    </div>
  );
}
