import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find((p) => p.id === 'about');

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            {aboutImage && (
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </div>
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground/90 mb-6">
              À Propos de Hope 'Sphere Crochet
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Hope ´Sphere Crochet est une marque de création dédiée à la mode
                et à l’art du fait main. Née d’une passion pour la couture et
                le crochet, nous avons choisi d’exprimer notre art à travers
                des pièces uniques qui allient élégance, originalité et
                authenticité.
              </p>
              <p>
                Spécialisée dans la confection de vêtements et d’accessoires
                fait main tels que les tenues du quotidien, les robes de
                soirées, des pièces personnalisées pour hommes, femmes et
                enfants. Chaque création est pensé pour sublimer la silhouette
                et refléter la personnalité de celle ou celui qui la porte.
              </p>
              <p>
                Plus qu’une simple marque de mode, Hope ´Sphere Crochet est un
                univers où se rencontrent créativité, élégance et espoir. Elle
                ne se limite pas à la création mais aussi au partage des
                connaissances en la matière avec les amoureux du crochet
                désireux d’exprimer leur art avec des formations en présentiel
                ou en ligne. Ces différentes formations sont établies suivant
                des programmes bien définis permettant aux apprenants de bien
                assimiler les différentes notions abordées afin d’en tirer
                des revenus assez rapidement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
