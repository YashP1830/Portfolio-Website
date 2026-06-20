import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="font-mono text-xs uppercase tracking-widest2 text-stone">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="font-mono text-xs uppercase tracking-widest2 text-stone hover:text-clay"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="font-mono text-xs uppercase tracking-widest2 text-stone hover:text-clay"
          >
            X
          </a>
          <a
            href="#"
            className="font-mono text-xs uppercase tracking-widest2 text-stone hover:text-clay"
          >
            Field Notes
          </a>
        </div>
      </div>
    </footer>
  );
}
