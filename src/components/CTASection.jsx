import React from 'react';
import { Rocket } from 'lucide-react';

const CTASection = () => {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm dark:border-white/10 dark:from-slate-800 dark:to-slate-900">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Ship campaigns 3× faster with an accountable AI team
            </h3>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
              Transparent steps, reusable memory, and built‑in compliance. Perfect for hackathon demos and real creative ops.
            </p>
          </div>
          <button
            onClick={handleScrollTop}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:shadow-white/10 dark:hover:bg-slate-100"
          >
            <Rocket className="h-5 w-5" />
            Start a new campaign
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
