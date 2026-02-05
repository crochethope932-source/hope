import Link from 'next/link';

const YarnIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 12c0-3.31 2.69-6 6-6s6 2.69 6 6a6 6 0 0 1-6 6" />
    <path d="M12 12c0 3.31-2.69 6-6 6s-6-2.69-6-6a6 6 0 0 1 6-6" />
    <path d="m18 6-3.38 3.38" />
    <path d="m6 18 3.38-3.38" />
    <path d="m17 17-5.8-5.8" />
    <path d="m7 7l5.8 5.8" />
    <path d="M12 12a1.414 1.414 0 0 1-2 0 1.414 1.414 0 0 1 0-2 1.414 1.414 0 0 1 2 0 1.414 1.414 0 0 1 0 2Z" />
    <path d="m18 12 3.46 3.46a2 2 0 0 1 0 2.83l-.71.71a2 2 0 0 1-2.83 0L14.46 15.54" />
    <path d="m6 12-3.46-3.46a2 2 0 0 1 0-2.83l.71-.71a2 2 0 0 1 2.83 0L9.54 8.46" />
  </svg>
);

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="Hope 'Sphere Crochet Home"
    >
      <YarnIcon className="h-8 w-8 text-primary" />
      <span className="font-headline text-xl font-bold tracking-tight hidden sm:inline">
        Hope 'Sphere Crochet
      </span>
      <span className="font-headline text-xl font-bold tracking-tight sm:hidden">
        HSC
      </span>
    </Link>
  );
}
