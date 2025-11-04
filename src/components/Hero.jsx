import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Users } from 'lucide-react';

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">      
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-slate-900/60 dark:via-slate-900/40 dark:to-slate-900/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,transparent,rgba(0,0,0,0.15))]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
          <Users className="h-3.5 w-3.5" />
          Creative Media Co‑Pilot · Multi‑Agent AI
        </span>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
          Build campaigns with a collaborative team of AI agents
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
          Plan, generate, and review creative media with specialized agents for writing, design, compliance, and QA — fast, consistent, and on‑brand.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => handleScrollTo('workflow')}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:shadow-white/10 dark:hover:bg-slate-100"
          >
            <Rocket className="h-5 w-5" />
            See the agent workflow
          </button>
          <button
            onClick={() => handleScrollTo('agents')}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300/70 bg-white/70 px-5 py-3 text-slate-900 backdrop-blur-md transition hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            Explore the team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
