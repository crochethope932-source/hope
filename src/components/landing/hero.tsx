import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((p) => p.id === 'hero');

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[420px] max-h-[700px] flex items-center justify-center text-center text-white">
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
      <div className="relative z-10 max-w-4xl px-5 mx-auto">
        <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tighter text-balance">
          Hope 'Sphere Crochet :
          <br />
          <span className="text-primary">
            Dans chaque maille une touche d'espoir
          </span>
        </h1>
        <p className="mt-3 md:mt-4 text-base md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Mode, Art du fait main & Formation
        </p>
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
          <Button asChild size="lg" className="w-full sm:w-auto font-bold rounded-full min-h-[52px]">
            <Link href="#on-site-training">Découvrir nos formations</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto font-bold rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white min-h-[52px]">
            <Link href="#gallery">Voir nos créations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
