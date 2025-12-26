import PromoVideo from "@/components/PromoVideo";

export default function Home() {
  const features = [
    {
      title: "Camera-first accountability",
      description:
        "Secure computer vision verifies every check-in so you know the habit happened, not just that it was logged.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 text-sky-300"
          aria-hidden
        >
          <path
            d="M4 9a6 6 0 0 1 16 0c0 3-2.24 7-8 11-5.76-4-8-8-8-11Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M7 19h10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Adaptive AI coaching",
      description:
        "Daily micro-learning nudges and personalised routines are generated from your streak data and commitment style.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 text-indigo-300"
          aria-hidden
        >
          <path
            d="M12 3v18m0-18c4.418 0 8 3.582 8 8 0 3.527-2.29 6.525-5.474 7.6M12 3C7.582 3 4 6.582 4 11c0 3.527 2.29 6.525 5.474 7.6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 15c-1.657 0-3-1.567-3-3.5S10.343 8 12 8s3 1.567 3 3.5S13.657 15 12 15Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Verified reward marketplace",
      description:
        "Turn proof of consistency into gift cards, cash-out vouchers, or partner perks from wellness brands.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 text-amber-300"
          aria-hidden
        >
          <path
            d="M4 7.5h16m-15 0 2.2 11.17A1 1 0 0 0 8.187 19.5h7.626a1 1 0 0 0 .987-.83L19 7.5M9.5 7.5V5a2.5 2.5 0 0 1 5 0v2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Accountability circles",
      description:
        "Invite friends or mentors to monitor your feed, react to wins, and step in when a check-in is missed.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 text-emerald-300"
          aria-hidden
        >
          <path
            d="M7.5 7a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 7a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 19.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v.5H4v-.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 18.5c0-2.485 2.343-4.5 5.25-4.5H20c2.21 0 4 1.79 4 4v2h-9.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const phases = [
    {
      step: "01",
      title: "Capture proof",
      detail:
        "Schedule a check-in and NoSkip guides your framing. Computer vision validates lighting, motion, and action in real-time.",
    },
    {
      step: "02",
      title: "AI verifies",
      detail:
        "The habit engine compares the footage against your commitment signature, flags anomalies, and scores consistency.",
    },
    {
      step: "03",
      title: "Reward & learn",
      detail:
        "Pass the verification and unlock rewards, micro-lessons, and accountability updates delivered to your squad.",
    },
  ];

  const stats = [
    {
      title: "94% adherence",
      detail: "Beta testers improved their follow-through after 14 days of verified routines.",
    },
    {
      title: "12k sessions",
      detail: "Camera check-ins completed with automated fraud detection and human escalation.",
    },
    {
      title: "48 partner perks",
      detail: "Reward marketplace spanning wellness, nutrition, and productivity brands.",
    },
  ];

  const microLearn = [
    {
      heading: "Widget that trains your brain",
      body: "Lightweight micro-lessons surface on your phone, watch, or desktop with 60-second habit science prompts.",
    },
    {
      heading: "Feedback loops that adapt",
      body: "Every success updates the lesson plan. Momentum dips trigger accountability nudges and new streak challenges.",
    },
    {
      heading: "Community backed insights",
      body: "Friends see summarised streak dashboards and can drop encouragement videos that play inside the widget.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-[-280px] h-[520px] bg-[radial-gradient(ellipse_at_top,_rgba(88,113,255,0.28),_transparent_65%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.07),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.08),transparent_50%),linear-gradient(180deg,rgba(10,12,32,0.95),rgba(2,6,23,1))]" />

      <header className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-24 lg:pt-28">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200 shadow-lg shadow-sky-500/10">
            NoSkip Habit Intelligence
          </span>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                The habit coach that demands proof and delivers rewards.
              </h1>
              <p className="max-w-xl text-lg leading-7 text-slate-300">
                NoSkip blends camera-based verification, AI habit guidance, and incentive design so
                you can finally eliminate start-stop cycles. Every commitment is captured, scored,
                and celebrated.
              </p>
              <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row">
                <a
                  href="#get-access"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
                >
                  Join the early access waitlist
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-white/40"
                >
                  Experience the flow
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.35em] text-slate-400">
                <span>Proof-first</span>
                <span>Adaptive coaching</span>
                <span>Rewards economy</span>
                <span>Accountability</span>
              </div>
            </div>
            <PromoVideo />
          </div>
        </div>
      </header>

      <main className="relative space-y-24 pb-28">
        <section id="experience" className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Built for commitments you cannot skip.
              </h2>
              <p className="text-base text-slate-300">
                Secure verification replaces self-reporting so you can hold yourself and your
                collaborators to higher standards. The NoSkip engine makes sure momentum stays real.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40 transition hover:-translate-y-1 hover:border-sky-400/60 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/70 ring-1 ring-white/10">
                    {feature.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/50 to-slate-900/80 p-8 shadow-2xl shadow-slate-900/50 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.title} className="rounded-2xl bg-slate-900/60 p-6 ring-1 ring-white/8">
                <p className="text-3xl font-semibold text-sky-300">{stat.title}</p>
                <p className="mt-3 text-sm text-slate-300">{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                From capture to celebration in three deliberate phases.
              </h2>
              <p className="text-base text-slate-300">
                Each stage is designed to keep you honest, reinforce progress, and bring your circle
                along for the journey.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {phases.map((phase) => (
                <div
                  key={phase.step}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/60 transition hover:-translate-y-1 hover:border-sky-400/50"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
                    {phase.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                  <p className="text-sm text-slate-300">{phase.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-900/60 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Micro-learning that keeps the promise top of mind.
              </h2>
              <p className="text-base text-slate-300">
                The NoSkip widget sits on your home screen delivering science-backed nudges, friend
                shout-outs, and new streak goals right when you need them.
              </p>
              <ul className="space-y-4">
                {microLearn.map((area) => (
                  <li
                    key={area.heading}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
                  >
                    <h3 className="text-lg font-semibold text-white">{area.heading}</h3>
                    <p className="mt-2 text-sm text-slate-300">{area.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex h-full min-h-[360px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/90 p-10 shadow-inner shadow-sky-900/50">
              <div className="absolute inset-6 rounded-3xl border border-white/10" />
              <div className="relative z-10 flex flex-col gap-5 text-left">
                <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 px-6 py-4 text-sm font-medium text-sky-100 shadow-lg shadow-sky-900/30 backdrop-blur">
                  <p className="uppercase tracking-[0.35em] text-xs text-sky-300">Daily prompt</p>
                  <p className="mt-2 text-lg font-semibold">
                    “Record proof within 5 minutes of task completion to reinforce automaticity.”
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-slate-300 shadow-lg shadow-slate-900/40 backdrop-blur">
                  <p className="uppercase tracking-[0.35em] text-xs text-slate-200">
                    Squad response
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    Alex sent a 10 second hype video after your verified workout.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
                  <div className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-center">
                    21 day streak
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-center">
                    3 skips left
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-center">
                    12 boosts
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-center">
                    $25 reward
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="get-access"
          className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-slate-900/70 to-slate-950 p-10 shadow-2xl shadow-sky-900/40 md:p-14">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Ready to build an unbreakable habit system?
                </h2>
                <p className="text-base text-slate-100/90">
                  Be first in line for the NoSkip beta. We are onboarding athletes, creators, and
                  coaching teams who want verified routines and accountability that cannot be gamed.
                </p>
                <ul className="space-y-3 text-sm text-slate-100/80">
                  <li>· Priority access to camera tools and AI habit maps</li>
                  <li>· Early marketplace rewards with boosted payouts</li>
                  <li>· Invite-only accountability circles for your crew</li>
                </ul>
              </div>
              <form className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-lg shadow-slate-900/50 backdrop-blur">
                <label className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Jordan Brooks"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  />
                </label>
                <label className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  />
                </label>
                <label className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Primary habit focus
                  <select
                    name="habit"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-base text-slate-100 focus:border-sky-400 focus:outline-none"
                    defaultValue="consistency"
                  >
                    <option value="consistency" className="text-slate-900">
                      Consistency boost
                    </option>
                    <option value="team" className="text-slate-900">
                      Team accountability
                    </option>
                    <option value="wellness" className="text-slate-900">
                      Wellness tracking
                    </option>
                    <option value="learning" className="text-slate-900">
                      Skill learning
                    </option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
                >
                  Secure your invite
                </button>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  Launching Q4 · Spots limited
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-12 text-sm text-slate-400">
        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-inner shadow-slate-900/60 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-slate-200">NoSkip</p>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
              Proof that you showed up.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.35em]">
            <a className="text-slate-300 transition hover:text-sky-300" href="#experience">
              Platform
            </a>
            <a className="text-slate-300 transition hover:text-sky-300" href="#get-access">
              Waitlist
            </a>
            <a className="text-slate-300 transition hover:text-sky-300" href="#">
              Press kit
            </a>
            <a className="text-slate-300 transition hover:text-sky-300" href="#">
              Careers
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.4em] text-slate-600">
          © {new Date().getFullYear()} NoSkip Labs. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
