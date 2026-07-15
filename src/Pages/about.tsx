import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import LanguageSwitcher from '../Components/LanguageSwitcher';

import SignInModal from '../Components/SignInModal';
import { useState } from 'react';

export default function About() {
  const language = useAppSelector((s) => s.language.lang);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/pic/logo.png" alt="logo" className="h-12 w-12 rounded-full" />
              <div>
                <h2 className="text-lg font-semibold">Modern Cafe</h2>
                <p className="text-xs text-slate-400">A cozy place for every moment</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setShowSignIn(true)}
              className="rounded-md bg-amber-400 px-3 py-2 font-semibold text-slate-950"
            >
              Sign in
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-12">
        <section className="rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-8 shadow-lg">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h1
                className={`${language === 'fa' ? 'text-right' : 'text-left'} text-3xl font-bold`}
              >
                About Us
              </h1>
              <p className="mt-4 text-slate-300">
                We craft exceptional coffee and delicious treats in a warm, welcoming space. Our
                mission is to create moments — whether you need a quick pick-me-up or a place to
                linger with friends.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/category/نوشیدنی ها"
                  className="rounded-full bg-amber-400 px-4 py-2 font-semibold text-slate-950"
                >
                  Order Online
                </Link>
                <a
                  href="#contact"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="/pic/about-hero.jpg"
                alt="About"
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg bg-slate-900/60 p-6 text-center">
            <h3 className="font-semibold">Our Mission</h3>
            <p className="mt-2 text-sm text-slate-300">
              Serve quality, sustainably sourced coffee every day.
            </p>
          </div>
          <div className="rounded-lg bg-slate-900/60 p-6 text-center">
            <h3 className="font-semibold">Our Values</h3>
            <p className="mt-2 text-sm text-slate-300">
              Community, quality, and kindness in every cup.
            </p>
          </div>
          <div className="rounded-lg bg-slate-900/60 p-6 text-center">
            <h3 className="font-semibold">Sustainability</h3>
            <p className="mt-2 text-sm text-slate-300">
              Thoughtful sourcing and minimal-waste operations.
            </p>
          </div>
        </section>

        <section id="team" className="mt-8">
          <h2 className="text-xl font-semibold">Meet the Team</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-lg bg-slate-900/60 p-4 text-center">
                <div className="mx-auto h-20 w-20 overflow-hidden rounded-full bg-slate-800">
                  <img
                    src={`/pic/team${i + 1}.jpg`}
                    alt={`Team ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className="mt-3 font-semibold">Team Member</h4>
                <p className="mt-1 text-sm text-slate-400">Barista &amp; Host</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-8 rounded-lg bg-slate-900/60 p-6">
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-2 text-sm text-slate-300">
            Have a question or catering request? Email us at hello@moderncafe.example
          </p>
        </section>
      </main>

      <SignInModal open={showSignIn} onClose={() => setShowSignIn(false)} />
    </div>
  );
}
