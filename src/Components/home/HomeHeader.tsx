import { useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';

interface HomeHeaderProps {
  signInText: string;
  aboutUsText: string;
  onSignIn: () => void;
}

export default function HomeHeader({ signInText, aboutUsText, onSignIn }: HomeHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="px-3 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      <div className="flex items-center justify-between gap-3 rounded-xl border border-white/20 bg-white/10 px-3 py-1 sm:px-4 md:border-none md:bg-transparent lg:px-6">
        {/* Left Section: Sign In & Language */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <button
            onClick={onSignIn}
            className="rounded-2xl p-3 text-sm font-medium text-white transition hover:bg-white/20 sm:border sm:border-white/20 sm:bg-white/10 sm:p-6"
          >
            {signInText}
          </button>
          <LanguageSwitcher />
        </div>

        {/* Center Section: Logo */}
        <div className="flex justify-center border border-white/15 bg-slate-900 px-3 backdrop:blur-xl sm:rounded-full sm:bg-slate-950/30 md:rounded-full md:px-0 lg:flex-none lg:justify-start">
          <img className="w-20 sm:w-24 lg:w-40" src="/pic/logo.png" alt="Modern Cafe Logo" />
        </div>

        {/* Right Section: About Us & Mobile Menu */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 md:flex-row">
          <button
            onClick={() => navigate('/about')}
            className="rounded-2xl p-3 text-sm font-medium text-white transition hover:bg-white/20 sm:border sm:border-white/20 sm:bg-white/10 sm:p-6"
          >
            {aboutUsText}
          </button>

          {/* Mobile Menu */}
          <Menu as="div" className="relative flex items-center sm:hidden">
            <MenuButton className="inline-flex items-center justify-center gap-2 rounded-2xl p-3 text-sm font-medium text-white transition hover:bg-white/20 sm:border sm:border-white/20 sm:bg-white/10 sm:p-6">
              {({ open }) => (
                <>
                  {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                  <span>{open ? 'Close' : 'Menu'}</span>
                </>
              )}
            </MenuButton>

            <MenuItems className="fixed left-4 right-4 top-32 z-50 w-auto origin-top-right rounded-2xl border border-white/10 p-2 text-sm text-white shadow-2xl shadow-black/40 backdrop-blur-lg focus:outline-none sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-2 sm:w-56">
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
              <MenuItem>
                {({ close }) => (
                  <Link
                    to="/about"
                    onClick={close}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/10"
                  >
                    <span>About Us</span>
                    <span className="text-xs text-slate-400">↗</span>
                  </Link>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </header>
  );
}
