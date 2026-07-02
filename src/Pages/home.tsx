import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import Comment from '../Components/comment';
import CoffeeStory from '../Components/coffeeStory/coffeeStory';
import LanguageSwitcher from '../Components/LanguageSwitcher';
import { translations } from '../redux/translations';
import SignInModal from '../Components/SignInModal';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Home() {
  const language = useAppSelector((state) => state.language.lang);
  const t = translations[language];
  const [showSignIn, setShowSignIn] = useState(false);

  const Picture = [
    '/pic/pic1.jpg',
    '/pic/pic2.jpg',
    '/pic/pic3.jpg',
    '/pic/pic4.jpg',
    '/pic/pic5.jpg',
  ];

  const [pic, setPic] = useState(0);
  const [commentIndex, setCommentIndex] = useState(0);
  const handlerSignin = () => {
    setShowSignIn(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPic((prevIndex) => (prevIndex === Picture.length - 1 ? 0 : prevIndex + 1));
      setCommentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [Picture.length]);

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-slate-950">
        <div className="absolute inset-0 hidden sm:block">
          <img src={Picture[pic]} alt="Cafe background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 block bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 sm:hidden" />

        <div className="relative z-10 flex min-h-screen w-full flex-col">
          <header className="px-3 pt-4 sm:px-6 sm:pt-5 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-3 sm:px-4 lg:px-6">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <button
                  onClick={handlerSignin}
                  className="rounded-2xl border border-white/20 bg-white/10 p-3 text-sm font-medium text-white transition hover:bg-white/20 sm:p-6"
                >
                  {t.signIn}
                </button>
                <LanguageSwitcher />
              </div>

              <div className="flex flex-1 justify-center rounded-full border border-white/15 bg-slate-950/30 backdrop:blur-xl lg:flex-none lg:justify-start">
                <img className="w-20 sm:w-24 lg:w-48" src="/pic/logo.png" alt="Logo" />
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <button className="rounded-2xl border border-white/20 bg-white/10 p-3 text-sm font-medium text-white transition hover:bg-white/20 sm:p-6">
                  {t.aboutUs}
                </button>
                <Menu as="div" className="relative flex items-center sm:hidden">
                  <MenuButton className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-3 text-sm font-medium text-white transition hover:bg-white/20 sm:p-6">
                    {({ open }) => (
                      <>
                        {open ? (
                          <XMarkIcon className="h-5 w-5" />
                        ) : (
                          <Bars3Icon className="h-5 w-5" />
                        )}
                        <span>{open ? 'Close' : 'Menu'}</span>
                      </>
                    )}
                  </MenuButton>

                  <MenuItems className="absolute right-0 top-full mt-2 w-64 origin-top-right rounded-2xl border border-white/10 bg-slate-900/95 p-2 text-sm text-white shadow-2xl shadow-black/40 backdrop-blur-xl focus:outline-none sm:w-56">
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
                          className="flex items-center justify-between rounded-xl bg-amber-400 p-3 font-semibold text-slate-950 transition hover:bg-amber-300 sm:p-6"
                        >
                          <span>Cart</span>
                          <span className="text-xs">↗</span>
                        </Link>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </header>

          <main className="flex flex-1 flex-col justify-end px-3 pb-4 sm:px-6 sm:pb-8 lg:px-8">
            <div className="flex w-full flex-col gap-4 sm:items-end">
              <div className="w-full max-w-xl rounded-[28px] border border-white/20 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6 lg:w-[42%]">
                <h1
                  className={`${language === 'fa' ? 'text-right' : 'text-left'} text-sm leading-7 text-white sm:text-base`}
                >
                  {t.quoteText}
                </h1>
                <div className="mt-4">
                  <Comment commentIndex={commentIndex} language={language} />
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-black/30 sm:hidden">
                <div className="flex flex-col gap-3 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
                    Mobile special
                  </p>
                  <p className="text-sm text-slate-300">
                    Discover our daily drink recommendation, quick order shortcut, and cozy cafe
                    vibe—designed for mobile users.
                  </p>
                  <div className="grid gap-2">
                    <Link
                      to="/category/نوشیدنی ها"
                      className="rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                    >
                      Order drink now
                    </Link>
                    <Link
                      to="/category/کیک"
                      className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Try a sweet cake
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 sm:block">
            <img className="h-9 w-9" src="/pic/down.svg" alt="Scroll down" />
          </div>
        </div>
      </div>

      <CoffeeStory />
      <SignInModal open={showSignIn} onClose={() => setShowSignIn(false)} />
    </>
  );
}
