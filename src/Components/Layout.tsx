import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import MenuCastum from './menu';
import Footer from './footer';
import LanguageSwitcher from './LanguageSwitcher';
import SkeletonLoader from './SkeletonLoader';
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import {
//   ArchiveBoxXMarkIcon,
//   ChevronDownIcon,
//   PencilIcon,
//   Square2StackIcon,
//   TrashIcon,
// } from '@heroicons/react/16/solid';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setMobileMenuOpen(false);
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 450);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-950 text-white">
      <div className="fixed inset-x-3 top-3 z-30 block sm:hidden">
        {/* Mobile menu */}
        {/* {!isHome && (
          <div className="flex justify-center">
            <Menu as="div" className="relative">
              <MenuButton className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/80 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-black/30 backdrop-blur-xl transition hover:bg-slate-800/80">
                {({ open }) => (
                  <>
                    {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                    <span>{open ? 'Close' : 'Menu'}</span>
                  </>
                )}
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-2xl border border-white/10 bg-slate-900/95 p-2 text-sm text-white shadow-2xl shadow-black/40 backdrop-blur-xl focus:outline-none">
                <MenuItem>
                  {({ close }) => (
                    <Link
                      to="/"
                      onClick={close}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/10"
                    >
                      <span>Home</span>
                      <span className="text-xs text-slate-400">↗</span>
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ close }) => (
                    <Link
                      to="/category/نوشیدنی ها"
                      onClick={close}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/10"
                    >
                      <span>Drinks</span>
                      <span className="text-xs text-slate-400">↗</span>
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ close }) => (
                    <Link
                      to="/category/کیک"
                      onClick={close}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/10"
                    >
                      <span>Cakes</span>
                      <span className="text-xs text-slate-400">↗</span>
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ close }) => (
                    <Link
                      to="/category/غذا"
                      onClick={close}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/10"
                    >
                      <span>Foods</span>
                      <span className="text-xs text-slate-400">↗</span>
                    </Link>
                  )}
                </MenuItem>
                <div className="my-1 h-px bg-white/10" />
                <MenuItem>
                  {({ close }) => (
                    <Link
                      to="/cart"
                      onClick={close}
                      className="flex items-center justify-between rounded-xl bg-amber-400 px-3 py-2.5 font-semibold text-slate-950 transition hover:bg-amber-300"
                    >
                      <span>Cart</span>
                      <span className="text-xs">↗</span>
                    </Link>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        )} */}
      </div>
      <div className="fixed left-4 top-60 z-20 hidden lg:block">
        <MenuCastum />
      </div>

      {!isHome && !loading && (
        <div className="px-2 py-4 sm:mx-auto sm:max-w-7xl sm:px-10 sm:py-6">
          <header className="rounded-[32px] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/20 backdrop-blur-sm sm:mb-10 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  className="h-12 w-12 rounded-3xl border border-white/10 bg-white/10 p-2 sm:h-14 sm:w-14"
                  src="/pic/logo.png"
                  alt="Modern Cafe"
                />
                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-[0.24em] text-amber-300">Modern Cafe</p>
                  <p className="text-sm text-slate-300">Fresh coffee, food & desserts</p>
                </div>
              </Link>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden items-center gap-3 sm:flex">
                  <LanguageSwitcher />
                  <Link
                    to="/cart"
                    className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                  >
                    Cart
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:hidden"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-3 sm:hidden">
                <div className="flex items-center justify-between gap-3">
                  <LanguageSwitcher />
                  <Link
                    to="/cart"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-950"
                  >
                    Cart
                  </Link>
                </div>
                <div className="grid gap-2">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl border border-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    Home
                  </Link>
                  <Link
                    to="/category/نوشیدنی ها"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl border border-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    Drinks
                  </Link>
                  <Link
                    to="/category/کیک"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl border border-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    Cakes
                  </Link>
                  <Link
                    to="/category/غذا"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl border border-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    Foods
                  </Link>
                </div>
              </div>
            )}
          </header>
        </div>
      )}

      {loading ? (
        <SkeletonLoader isHome={isHome} />
      ) : isHome ? (
        <main className="w-full flex-1">
          <Outlet />
        </main>
      ) : (
        <div className="w-full max-w-7xl px-2 sm:mx-auto sm:flex-1 sm:px-10 lg:pl-14">
          <main className="pb-16">
            <Outlet />
          </main>
        </div>
      )}

      {!loading && <Footer />}
    </div>
  );
}
