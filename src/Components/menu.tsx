import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setCategory } from '../redux/menuSlice';
import { useNavigate } from 'react-router-dom';
import { translations } from '../redux/translations';
import { HomeIcon } from '@heroicons/react/24/outline';
import type { Language } from '../constants/types';

type MenuLabel = 'menuDrinks' | 'menuCakes' | 'menuFoods' | 'menuCart' | 'menuHome';
interface MenuCategory {
  id: string;
  key: string;
  label: MenuLabel;
  icon: string;
  alt: string;
}

/**
 * Side menu component for navigation
 * Displays expandable menu with category and cart buttons
 */
export default function Menu() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  const language = useAppSelector((state) => state.language.lang) as Language;
  const t = translations[language];

  const categoryMenuItems: MenuCategory[] = [
    { id: 'drinks', key: 'drinks', label: 'menuDrinks', icon: '/pic/coffee.svg', alt: 'Drinks' },
    { id: 'cakes', key: 'cakes', label: 'menuCakes', icon: '/pic/cake.svg', alt: 'Cakes' },
    { id: 'foods', key: 'foods', label: 'menuFoods', icon: '/pic/pizza.svg', alt: 'Foods' },
  ];

  const handleCategoryClick = (categoryKey: string) => {
    dispatch(setCategory(categoryKey));
    navigate(`/category/${categoryKey}`);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <nav className="group flex h-[520px] w-auto flex-col items-start justify-evenly rounded-3xl bg-white/15 p-2 text-white shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-500 hover:w-36 hover:px-3">
      {/* Home Button */}
      <button
        onClick={() => navigate('/')}
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/20"
        aria-label={t.menuHome}
      >
        <HomeIcon className="h-9 w-9 text-black/55" />
        <span className="absolute left-14 hidden text-sm font-medium text-white group-hover:block">
          {t.menuHome}
        </span>
      </button>

      {/* Category Buttons */}
      {categoryMenuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleCategoryClick(item.key)}
          className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/20"
          aria-label={t[item.label]}
        >
          <img className="h-9 w-9" src={item.icon} alt={item.alt} />
          <span className="absolute left-14 hidden text-sm font-medium text-white group-hover:block">
            {t[item.label]}
          </span>
        </button>
      ))}

      {/* Cart Button */}
      <button
        type="button"
        onClick={handleCartClick}
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/20"
        aria-label={t.menuCart}
      >
        <img className="h-9 w-9" src="/pic/basket.svg" alt="Cart" />
        {cartQuantity > 0 && (
          <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-semibold text-slate-950">
            {cartQuantity}
          </span>
        )}
        <span className="absolute left-14 hidden text-sm font-medium text-white group-hover:block">
          {t.menuCart}
        </span>
      </button>
    </nav>
  );
}
