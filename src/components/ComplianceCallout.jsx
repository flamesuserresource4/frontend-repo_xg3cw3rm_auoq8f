import React from 'react';
import { ShieldCheck, Scale, Accessibility } from 'lucide-react';

const ComplianceCallout = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/60">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <div className="mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-emerald-500 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Policy aware</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Brand, legal, and platform rules are checked automatically with explainable feedback.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-indigo-500 text-white">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Attribution first</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Sources and licenses are tracked so you can publish with confidence.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-amber-500 text-white">
              <Accessibility className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Inclusive by default</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Accessibility checks for color contrast, alt text, and language sensitivity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCallout;
