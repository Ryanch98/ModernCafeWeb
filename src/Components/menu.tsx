import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setCategory } from '../redux/menuSlice';
import { useNavigate } from 'react-router-dom';
import { translations } from '../redux/translations';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function Menu() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  const language = useAppSelector((state) => state.language.lang);
  const t = translations[language];

  const handleCategory = (Category) => {
    dispatch(setCategory(Category));
    navigate(`/category/${Category}`);
  };

  const handleCart = () => {
    navigate('/cart');
  };

  return (
    <nav className="group flex h-[520px] w-auto flex-col items-start justify-evenly rounded-3xl bg-white/15 p-2 text-white shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-500 hover:w-36 hover:px-3">
      <button
        onClick={() => navigate('/')}
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/20"
      >
        <HomeIcon className="h-9 w-9 text-black/55" aria-label={t.menuHome} />
        <span className="absolute left-14 hidden text-sm font-medium text-white group-hover:block">
          {t.menuHome}
        </span>
      </button>
      <button
        onClick={() => handleCategory('drinks')}
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/20"
        aria-label={t.menuDrinks}
      >
        <img className="h-9 w-9" src="/pic/coffee.svg" alt={t.menuDrinks} />
        <span className="absolute left-14 hidden text-sm font-medium text-white group-hover:block">
          {t.menuDrinks}
        </span>
      </button>

      <button
        onClick={() => handleCategory('cakes')}
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/20"
        aria-label={t.menuCakes}
      >
        <img className="h-8 w-8" src="/pic/cake.svg" alt={t.menuCakes} />
        <span className="absolute left-14 hidden text-sm font-medium text-white group-hover:block">
          {t.menuCakes}
        </span>
      </button>

      <button
        onClick={() => handleCategory('foods')}
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/20"
        aria-label={t.menuFoods}
      >
        <img className="h-9 w-9" src="/pic/pizza.svg" alt={t.menuFoods} />
        <span className="absolute left-14 hidden text-sm font-medium text-white group-hover:block">
          {t.menuFoods}
        </span>
      </button>

      <button
        type="button"
        onClick={handleCart}
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/20"
        aria-label={t.menuCart}
      >
        <img className="h-9 w-9" src="/pic/basket.svg" alt="Basket" />
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
