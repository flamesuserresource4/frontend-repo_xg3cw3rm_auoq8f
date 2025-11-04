import React from 'react';
import { Bot, PenTool, Palette, ShieldCheck } from 'lucide-react';

const agents = [
  {
    title: 'Strategy Planner',
    icon: Bot,
    desc: 'Turns a brief into a multi-channel plan with goals, audiences, and deliverables.',
    accent: 'from-emerald-500/20 to-emerald-500/0',
  },
  {
    title: 'AI Writer',
    icon: PenTool,
    desc: 'Drafts SEO-friendly copy in your brand voice across formats: posts, ads, scripts.',
    accent: 'from-indigo-500/20 to-indigo-500/0',
  },
  {
    title: 'Visual Designer',
    icon: Palette,
    desc: 'Creates art directions, layout ideas, and prompts for image/video generation.',
    accent: 'from-pink-500/20 to-pink-500/0',
  },
  {
    title: 'Compliance & QA',
    icon: ShieldCheck,
    desc: 'Checks claims, bias, and licensing. Enforces tone, legal, and accessibility rules.',
    accent: 'from-amber-500/20 to-amber-500/0',
  },
];

const AgentShowcase = () => {
  return (
    <section id="agents" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Meet your specialized agent team
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Each agent has a clear role, communicates with others, and shares memory to keep work aligned.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {agents.map(({ title, icon: Icon, desc, accent }) => (
          <div
            key={title}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-slate-900/60"
          >
            <div className={`pointer-events-none absolute -inset-px bg-gradient-to-b ${accent}`} />
            <div className="relative z-10">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgentShowcase;
