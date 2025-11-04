import React from 'react';
import { Workflow as WorkflowIcon, MessagesSquare, Share2, Database, Sparkles } from 'lucide-react';

const steps = [
  {
    title: 'Plan',
    desc: 'Brief is transformed into a campaign plan with channels, timelines, and KPIs.',
    icon: WorkflowIcon,
  },
  {
    title: 'Create',
    desc: 'Writer and Designer collaborate to draft copy, visuals, and variants.',
    icon: Sparkles,
  },
  {
    title: 'Review',
    desc: 'Compliance agent validates claims, citations, tone, and accessibility.',
    icon: MessagesSquare,
  },
  {
    title: 'Publish',
    desc: 'Content is packaged for web, socials, and ads with version tracking.',
    icon: Share2,
  },
];

const Workflow = () => {
  return (
    <section id="workflow" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">How the multi‑agent system works</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Built with open‑source agent frameworks and shared memory so every step stays aligned to your brand standards.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {steps.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-slate-900/60">
            <div className="relative z-10 flex items-start gap-4">
              <div className="mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-slate-900 text-white transition group-hover:scale-105 dark:bg-white dark:text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-emerald-50 p-6 dark:border-white/10 dark:from-slate-800 dark:to-slate-800">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">Transparent by design</h3>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">We use open‑source models and frameworks. Logs include sources, prompts, and decisions by each agent.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white dark:bg-white dark:text-slate-900">
            <Database className="h-4 w-4" /> Persistent memory & traceability
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
