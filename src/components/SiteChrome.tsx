import { Sparkles } from "lucide-react";

export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 10%, oklch(0.28 0.15 275 / 0.55), transparent 55%), radial-gradient(ellipse at 85% 90%, oklch(0.35 0.2 260 / 0.45), transparent 55%), linear-gradient(180deg, oklch(0.12 0.04 275), oklch(0.08 0.025 275))",
        }}
      />

      {/* Slow drifting orbs */}
      <div
        className="animate-orb-1 absolute -left-32 top-10 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl gpu"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.28 268 / 0.7), transparent 60%)" }}
      />
      <div
        className="animate-orb-2 absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl gpu"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.25 240 / 0.65), transparent 60%)" }}
      />
      <div
        className="animate-orb-1 absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl gpu"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.22 260 / 0.6), transparent 60%)", animationDelay: "-8s" }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Noise vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 50%, oklch(0.06 0.02 275 / 0.7) 100%)" }}
      />
    </div>
  );
}

export function PagePlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <main className="relative min-h-screen">
      <BackgroundFX />
      <section className="flex min-h-screen items-center justify-center px-6 py-24">
        <div className="glass-strong relative w-full max-w-xl rounded-3xl p-8 text-center sm:p-12">
          <div
            className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            <Sparkles className="h-7 w-7 text-white" />
          </div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">قريبًا</p>
          <h1 className="mb-4 font-display text-3xl font-black sm:text-4xl">
            <span className="text-gradient">{title}</span>
          </h1>
          <p className="leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </section>
    </main>
  );
}
