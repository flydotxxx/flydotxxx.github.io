import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const brandLinks = [
    { label: "Charlotte Telecommunications", url: "https://charlottetelecom.com" },
    { label: "spy.lu", url: "https://spy.lu" },
    { label: "snow.gg", url: "https://snow.gg" },
  ];

  const pageLinks = [
    { label: t.nav.brands, to: "/brands" },
    { label: t.nav.founders, to: "/founders" },
    { label: t.nav.about, to: "/about" },
  ];

  return (
    <footer
      data-testid="main-footer"
      className="relative z-10 bg-[#050505] border-t border-white/10 py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-display font-bold tracking-tight text-2xl text-white flex items-center gap-2 w-fit"
            >
              <span className="inline-block w-2.5 h-2.5 bg-white rotate-45" />
              Charlotte <span className="text-zinc-500 font-light">LLC</span>
            </Link>
            <p className="font-body text-zinc-500 text-sm leading-relaxed mt-5 max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono-label uppercase tracking-[0.2em] text-[10px] text-zinc-600">
              {t.footer.brands}
            </h4>
            <ul className="mt-5 space-y-3">
              {brandLinks.map((b) => (
                <li key={b.url}>
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`footer-link-${b.url}`}
                    className="group inline-flex items-center gap-1.5 font-body text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    {b.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono-label uppercase tracking-[0.2em] text-[10px] text-zinc-600">
              {t.footer.company}
            </h4>
            <ul className="mt-5 space-y-3">
              {pageLinks.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    data-testid={`footer-page-${p.to}`}
                    className="font-body text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-body text-xs text-zinc-600 max-w-2xl leading-relaxed">
            {t.footer.legal}
          </p>
          <p className="font-mono-label text-[10px] tracking-[0.15em] text-zinc-600 uppercase whitespace-nowrap">
            © {year} Charlotte LLC · {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
