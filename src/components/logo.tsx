import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="Hope 'Sphere Crochet Home"
    >
      <Image
        src="https://i.imgur.com/xAIcGXa.jpeg"
        alt="Hope 'Sphere Crochet Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="font-headline text-xl font-bold tracking-tight hidden sm:inline">
        Hope 'Sphere Crochet
      </span>
      <span className="font-headline text-xl font-bold tracking-tight sm:hidden">
        HSC
      </span>
    </Link>
  );
}
