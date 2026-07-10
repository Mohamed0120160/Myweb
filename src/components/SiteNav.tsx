import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Home, Radio, Trophy, Gamepad2, Code2, Info, Sparkles, Briefcase } from "lucide-react";

const items = [
  { to: "/", label: "الصفحة الرئيسية", icon: Home },
  { to: "/content", label: "المحتوى", icon: Radio },
  { to: "/services", label: "الخدمات", icon: Briefcase },
  { to: "/tournaments", label: "البطولات", icon: Trophy },
  { to: "/mobile-legends", label: "موبايل ليجند", icon: Gamepad2 },
  { to: "/software", label: "البرمجيات", icon: Code2 },
  { to: "/about", label: "حول", icon: Info },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Menu button — top-left */}
      <button
        onClick={() => setOpen(true)}
        aria-label="فتح القائمة"
        className="glass fixed left-4 top-4 z-50 grid h-11 w-11 place-items-center rounded-2xl transition hover:scale-105 hover:border-primary/40 sm:h-12 sm:w-12"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer — slides from the left */}
      <aside
        className={`fixed inset-y-0 left-0 z-[70] w-[85%] max-w-[340px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="glass-strong relative flex h-full flex-col overflow-hidden rounded-r-3xl">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.5 0.28 268 / 0.7), transparent 60%)" }}
          />

          <div className="relative flex items-center justify-between border-b border-white/5 px-5 py-5">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 font-display text-lg font-black">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="text-gradient">R∆yGumo</span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="إغلاق"
              className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 transition hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="relative flex-1 overflow-y-auto px-3 py-4">
            <ul className="flex flex-col gap-1">
              {items.map((item, i) => (
                <li key={item.to} style={{ animation: open ? `fade-in-up 0.5s ${i * 60}ms cubic-bezier(0.22,1,0.36,1) both` : "none" }}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: true }}
                    activeProps={{ className: "bg-white/10 text-foreground" }}
                    inactiveProps={{ className: "text-muted-foreground hover:bg-white/5 hover:text-foreground" }}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative border-t border-white/5 px-5 py-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} R∆yGumo
          </div>
        </div>
      </aside>
    </>
  );
}
