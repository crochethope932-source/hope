import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((p) => p.id === 'hero');

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[700px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl px-4 mx-auto">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tighter">
          Hope 'Sphere Crochet :
          <br />
          <span className="text-primary">
            Dans chaque maille une touche d’espoir
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
          Mode, Art du fait main & Formation
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="#on-site-training">Découvrir nos formations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
