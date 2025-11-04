import React from 'react';
import { Rocket } from 'lucide-react';

const FooterCTA = () => {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-slate-200 bg-white/70 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Creative Media Co‑Pilot</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Plan, generate, and review campaigns with collaborative AI agents.</p>
          </div>
          <button
            onClick={handleScrollTop}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900"
          >
            <Rocket className="h-5 w-5" /> Get started
          </button>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          Built for Neural.Net Hackathon · Synergy ’25 · Uses open‑source models & frameworks
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
