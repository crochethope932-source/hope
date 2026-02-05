import { Yarn } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="Hope 'Sphere Crochet Home"
    >
      <Yarn className="h-8 w-8 text-primary" />
      <span className="font-headline text-xl font-bold tracking-tight hidden sm:inline">
        Hope 'Sphere Crochet
      </span>
      <span className="font-headline text-xl font-bold tracking-tight sm:hidden">
        HSC
      </span>
    </Link>
  );
}
