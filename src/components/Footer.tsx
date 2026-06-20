import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="font-mono text-xs uppercase tracking-widest2 text-stone">
          © {new Date().getFullYear()} {profile.name}
        </p>
        
        {/* Social Media Buttons */}
        <div className="flex gap-4">
          
          {/* LinkedIn Button */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-stone text-stone transition-colors hover:border-clay hover:text-clay"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* X (Twitter) Button */}
          <a
            href="#"
            aria-label="X (Twitter)"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-stone text-stone transition-colors hover:border-clay hover:text-clay"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.1419 2.00098H21.5709L14.0739 10.5703L22.9059 22.001H15.9869L10.5669 14.9304L4.36892 22.001H0.938922L8.94892 12.8465L0.449921 2.00098H7.55092L12.4579 8.44199L18.1419 2.00098ZM16.9369 20.0005H18.8359L6.50592 3.86498H4.46992L16.9369 20.0005Z" />
            </svg>
          </a>

          {/* Field Notes Button */}
          <a
            href="#"
            aria-label="Field Notes"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-stone text-stone transition-colors hover:border-clay hover:text-clay"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
          </a>
          
        </div>
      </div>
    </footer>
  );
}