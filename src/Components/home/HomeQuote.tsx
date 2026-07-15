import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Comment from '../comment';
import type { Language } from '../../constants/types';

interface HomeQuoteProps {
  quoteText: string;
  commentIndex: number;
  language: Language;
}

export default function HomeQuote({ quoteText, commentIndex, language }: HomeQuoteProps) {
  return (
    <main className="flex flex-col items-center justify-end px-3 pb-4 sm:justify-center sm:px-6 sm:pb-8 lg:px-8">
      <div className="flex w-full flex-col gap-4 sm:items-center">
        <div className="w-full max-w-2xl rounded-[28px] border border-white/20 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6 md:min-w-[70%] lg:w-[42%]">
          <h1
            className={`${language === 'fa' ? 'text-right' : 'text-left'} text-lg font-semibold leading-7 text-white sm:text-xl`}
          >
            {quoteText}
          </h1>

          <p className="mt-3 text-sm text-slate-200">
            Enjoy handcrafted drinks, seasonal treats, and a cozy place to unwind.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/category/نوشیدنی ها"
              className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Order Drink
            </Link>
            <Link
              to="/cart"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <ShoppingCartIcon className="h-4 w-4" />
              View Cart
            </Link>
          </div>

          <div className="mt-4">
            <Comment commentIndex={commentIndex} language={language} />
          </div>
        </div>
      </div>
    </main>
  );
}
