import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Link } from 'react-router-dom';
import { clearCart, removeFromCart, updateQuantity } from '../redux/cartSlice';

import { translations } from '../redux/translations';
import formatPrice from '../utils/formatPrice';

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const language = useAppSelector((state) => state.language.lang);
  const t = translations[language];

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="relative min-h-screen overflow-x-hidden px-3 py-6 text-white sm:px-4 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-10">
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/40 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="text-center sm:text-right">
              <p className="text-xs uppercase tracking-[0.24em] text-amber-300 sm:text-sm">
                {t.cartTitleSmall}
              </p>

              <h1 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-4xl">
                {t.cartHeading}
              </h1>

              <p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
                {t.cartDescription}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
              <span className="rounded-full bg-amber-400 px-4 py-2 text-center text-sm font-semibold text-slate-950">
                {totalItems} {t.itemsLabel}
              </span>

              <span className="rounded-full bg-slate-800 px-4 py-2 text-center text-sm text-slate-200">
                {t.totalLabel}: {formatPrice(totalPrice, language)}
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.8fr]">
            <div className="space-y-6">
              {cartItems.length === 0 ? (
                <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 text-center text-slate-300 shadow-2xl shadow-black/20 sm:p-10">
                  <h2 className="text-2xl font-semibold text-white">{t.cartEmptyTitle}</h2>
                  <p className="mt-4 text-sm leading-7">{t.cartEmptyDesc}</p>
                  <Link
                    to="/category/نوشیدنی ها"
                    className="mt-6 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                  >
                    {t.selectProducts}
                  </Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-start gap-5 rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/20 sm:flex-row sm:items-center sm:p-6"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-2xl border border-white/10 bg-slate-800 object-cover sm:h-28 sm:w-28"
                    />

                    <div className="flex w-full flex-1 flex-col gap-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-center sm:text-right">
                          <h3 className="break-words text-lg font-semibold text-white sm:text-2xl">
                            {item.name}
                          </h3>

                          <p className="text-sm text-slate-400">
                            {t.unitPriceLabel}: {formatPrice(item.price, language)}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="w-full rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-400 sm:w-auto"
                        >
                          حذف
                        </button>
                      </div>

                      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-3 rounded-full bg-slate-800 px-3 py-2">
                          <button
                            type="button"
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity: item.quantity - 1,
                                }),
                              )
                            }
                            disabled={item.quantity <= 1}
                            className="h-9 w-9 rounded-full bg-white/10 text-xl font-bold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:w-10 sm:text-2xl"
                          >
                            −
                          </button>

                          <span className="min-w-[2rem] text-center text-lg font-semibold text-white">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity: item.quantity + 1,
                                }),
                              )
                            }
                            className="h-9 w-9 rounded-full bg-white/10 text-xl font-bold text-white transition hover:bg-white/20 sm:h-10 sm:w-10 sm:text-2xl"
                          >
                            +
                          </button>
                        </div>

                        <p className="text-center text-sm text-slate-300 sm:text-right">
                          {t.totalLabel}: {formatPrice(item.price * item.quantity, language)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <aside className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/20 sm:p-6 lg:sticky lg:top-28">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white">{t.orderSummary}</h2>
                  <p className="mt-3 text-sm text-slate-300">
                    {t.itemsLabel}: <span className="font-semibold text-white">{totalItems}</span>
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-6 text-white">
                  <p className="text-sm text-slate-400">{t.totalLabel}</p>
                  <p className="mt-3 text-2xl font-bold text-amber-200 sm:text-3xl">
                    {formatPrice(totalPrice, language)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => dispatch(clearCart())}
                  disabled={cartItems.length === 0}
                  className="w-full rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {t.clearCart}
                </button>
                <Link
                  to="/category/نوشیدنی ها"
                  className="block rounded-full border border-white/10 bg-slate-800 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-200"
                >
                  {t.continueShopping}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
