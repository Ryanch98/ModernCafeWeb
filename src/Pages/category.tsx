import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useParams } from 'react-router-dom';
import { translations } from '../redux/translations';
import formatPrice from '../utils/formatPrice';
import { addToCart } from '../redux/cartSlice';

const Category = () => {
  const dispatch = useAppDispatch();
  const { name } = useParams();
  const menuItems = useAppSelector((state) => state.menu.menuItems);
  const language = useAppSelector((state) => state.language.lang);
  const t = translations[language];

  const categoryKeyMap = {
    'نوشیدنی ها': 'drinks',
    drinks: 'drinks',
    غذاها: 'foods',
    foods: 'foods',
    'کیک ها': 'cakes',
    cakes: 'cakes',
  };

  const categoryKey = categoryKeyMap[name] || name;
  const categoryEntry = menuItems[categoryKey] || {};
  const categoryData = categoryEntry.items || [];
  const categoryTitle =
    categoryEntry.title && typeof categoryEntry.title === 'object'
      ? categoryEntry.title[language]
      : categoryEntry.title || name;

  return (
    <div className="relative min-h-screen text-white sm:px-4 sm:py-10">
      <div className="mx-auto space-y-20 sm:max-w-7xl">
        <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-2 text-center shadow-2xl shadow-black/20 sm:p-8">
          <h1 className="mt-4 text-4xl font-bold text-amber-300 md:text-5xl">{categoryTitle}</h1>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            {translations[language].categoryDescription ||
              'Choose your favorite items and add them to the cart.'}
          </p>
        </section>
        <div className="grid grid-cols-2 gap-4 pt-5 sm:gap-6 xl:grid-cols-3">
          {categoryData.length > 0 ? (
            categoryData.map((item) => (
              <div
                key={item.id}
                className="group relative flex w-auto flex-col gap-2 overflow-hidden rounded-xl border border-white/10 bg-slate-900/80 p-4 text-center transition duration-300 hover:-translate-y-2 hover:border-amber-300/40 sm:rounded-[32px] sm:p-6"
              >
                <img
                  src={item.image}
                  className="mx-auto h-28 w-28 rounded-full border border-white/10 object-cover p-2 transition duration-300 group-hover:scale-105 sm:h-40 sm:w-40"
                  alt={item.name}
                />
                <h2 className="font-semibold text-white sm:mt-6 sm:text-2xl">
                  {typeof item.name === 'object' ? item.name[language] : item.name}
                </h2>
                <p className="hidden text-sm leading-7 text-slate-300 sm:mt-3 sm:block">
                  {typeof item.description === 'object'
                    ? item.description[language]
                    : item.description || t.descriptionUnavailable}
                </p>
                <p className="font-semibold text-amber-200 sm:mt-6 sm:text-lg">
                  {t.priceLabel}: {formatPrice(item.price, language)}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        ...item,
                        name: typeof item.name === 'object' ? item.name[language] : item.name,
                      }),
                    )
                  }
                  className="mx-auto w-24 rounded-full bg-amber-400 p-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 sm:mt-4 sm:w-auto sm:px-5 sm:py-2"
                >
                  {t.addToCartLabel}
                </button>
              </div>
            ))
          ) : (
            <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-10 text-center text-slate-300 shadow-2xl shadow-black/20">
              <p className="text-xl">{t.noItemsAvailable}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
