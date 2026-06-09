'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Creation {
  id: string;
  title: string;
  description: string;
  image: string;
  contactParam: string;
}

const creations: Creation[] = [
  {
    id: '1D2yVnH',
    title: 'Ensemble Royal Frangé',
    description: 'Un ensemble pantalon en maille ajourée et haut dos nu assorti avec franges et perles en bleu royal étincelant.',
    image: 'https://i.imgur.com/1D2yVnH.jpeg',
    contactParam: 'Ensemble Bleu Royal Frangé',
  },
  {
    id: 'fqnYaOA',
    title: 'Gilet Bébé Granny Vert',
    description: 'Un adorable gilet sans manches pour bébé avec des motifs de carrés granny squares en vert forêt et blanc.',
    image: 'https://i.imgur.com/fqnYaOA.jpeg',
    contactParam: 'Gilet Bébé Granny Vert',
  },
  {
    id: 'gEKaoo1',
    title: 'Short Bébé Granny Vert',
    description: 'Short assorti pour bébé en motifs granny squares blanc et vert forêt, doux et extensible.',
    image: 'https://i.imgur.com/gEKaoo1.jpeg',
    contactParam: 'Short Bébé Granny Vert',
  },
  {
    id: 'tJAUPZA',
    title: 'Ensemble Fillette Rose Bonbon',
    description: "Un charmant ensemble pour enfant composé d'un haut court à bretelles croisées et d'une petite jupe plissée rose et blanc.",
    image: 'https://i.imgur.com/tJAUPZA.jpeg',
    contactParam: 'Ensemble Fillette Rose Bonbon',
  },
  {
    id: '4M7sOIt',
    title: 'Maillot Mandarine Lacé',
    description: 'Ensemble bikini dos nu orange vif avec des brides croisées à enrouler autour de la jambe pour un look estival audacieux.',
    image: 'https://i.imgur.com/4M7sOIt.jpeg',
    contactParam: 'Maillot Mandarine Lacé',
  },
  {
    id: 'SbnbkWK',
    title: 'Ensemble Top Bandana et Short',
    description: 'Top court blanc en forme de bandana et short bleu en mailles avec de jolies franges.',
    image: 'https://i.imgur.com/SbnbkWK.jpeg',
    contactParam: 'Ensemble Top Bandana et Short',
  },
  {
    id: 'EINMQCd',
    title: 'Robe Fourreau Sunset',
    description: 'Robe longue ajustée en tricot dégradé jaune, orange et rose avec une découpe élégante au niveau de la poitrine.',
    image: 'https://i.imgur.com/EINMQCd.jpeg',
    contactParam: 'Robe Fourreau Sunset',
  },
  {
    id: 'Tp9KyEZ',
    title: 'Ensemble Asymétrique Vert',
    description: 'Haut asymétrique vert orné de fleurs au crochet et jupe à rayures horizontales vertes et blanches.',
    image: 'https://i.imgur.com/Tp9KyEZ.jpeg',
    contactParam: 'Ensemble Asymétrique Vert',
  },
  {
    id: '0FCzia9',
    title: 'Ensemble Prune Ajouré',
    description: 'Haut dos nu violet aux liserés blancs et pantalon évasé assorti en mailles ajourées violettes.',
    image: 'https://i.imgur.com/0FCzia9.jpeg',
    contactParam: 'Ensemble Prune Ajouré',
  },
  {
    id: '6tucfzY',
    title: 'Bikini et Short Fuchsia',
    description: 'Haut de bikini fuchsia vibrant et short de plage assorti en mailles ajourées légères.',
    image: 'https://i.imgur.com/6tucfzY.jpeg',
    contactParam: 'Bikini et Short Fuchsia',
  },
  {
    id: 'dzO2q7z',
    title: 'Ensemble Dos Nu Bleu de Prusse',
    description: 'Haut dos nu bleu profond orné de perles en bois naturelles et short en crochet assorti.',
    image: 'https://i.imgur.com/dzO2q7z.jpeg',
    contactParam: 'Ensemble Dos Nu Bleu de Prusse',
  },
  {
    id: 'jDPhFxI',
    title: 'Ensemble Granny Enfant Soleil',
    description: "Ensemble d'été pour enfant jaune et vert composé d'un top dos nu en granny squares et d'un short assorti.",
    image: 'https://i.imgur.com/jDPhFxI.jpeg',
    contactParam: 'Ensemble Granny Enfant Soleil',
  },
  {
    id: 'J1V7YFi',
    title: 'Robe Cut-out Pastel Space-Dye',
    description: 'Robe en fil multicolore pastel dégradé, avec découpes à la taille et détails de franges sur les côtés.',
    image: 'https://i.imgur.com/J1V7YFi.jpeg',
    contactParam: 'Robe Cut-out Pastel Space-Dye',
  },
  {
    id: 'LZdMj8e',
    title: 'Robe Patineuse Rayée',
    description: "Robe d'été évasée de style patineuse avec de larges rayures horizontales roses, rouges et blanches.",
    image: 'https://i.imgur.com/LZdMj8e.jpeg',
    contactParam: 'Robe Patineuse Rayée',
  },
  {
    id: 'c8xXR0a',
    title: 'Ensemble Bébé Pêche Rétro',
    description: 'Petite robe couleur pêche avec dos lacé croisé et son chapeau à volants assorti pour bébé.',
    image: 'https://i.imgur.com/c8xXR0a.jpeg',
    contactParam: 'Ensemble Bébé Pêche Rétro',
  },
  {
    id: 'pIpFuDF',
    title: 'Short Homme Granny Automne',
    description: 'Short pour homme en motifs granny squares vintage aux nuances chaudes de marron, jaune moutarde et beige.',
    image: 'https://i.imgur.com/pIpFuDF.png',
    contactParam: 'Short Homme Granny Automne',
  },
  {
    id: 'Aw2OjfS',
    title: 'Robe wax et bustier vert',
    description: 'Haut en tricot vert forêt boutonné associé à une magnifique jupe longue évasée en pagne wax africain vert et jaune.',
    image: 'https://i.imgur.com/Aw2OjfS.png',
    contactParam: 'Robe wax et bustier vert',
  },
  {
    id: '8pSplKF',
    title: 'Robe de Plage Filet Blanche',
    description: 'Robe longue blanche en maille filet ouverte avec dos nu, idéale pour superposer sur un maillot de bain.',
    image: 'https://i.imgur.com/8pSplKF.jpeg',
    contactParam: 'Robe de Plage Filet Blanche',
  },
  {
    id: 'HUfcms3',
    title: 'Ensemble Prune Coquette Enfant',
    description: 'Haut à col montant prune, short en motifs de carrés granny squares et bandeau à volants assorti pour petite fille.',
    image: 'https://i.imgur.com/HUfcms3.jpeg',
    contactParam: 'Ensemble Prune Coquette Enfant',
  },
  {
    id: 'rS8CcIH',
    title: 'Ensemble Enfant Rose Framboise',
    description: "Haut dos nu rose framboise avec franges et perles, short assorti et chapeau d'été à volants.",
    image: 'https://i.imgur.com/rS8CcIH.jpeg',
    contactParam: 'Ensemble Enfant Rose Framboise',
  },
  {
    id: '8r5IscB',
    title: 'Ensemble Tailleur Bordeaux',
    description: "Haut boutonné à manches courtes et col polo prune assorti d'une jupe crayon en maille bordeaux.",
    image: 'https://i.imgur.com/8r5IscB.jpeg',
    contactParam: 'Ensemble Tailleur Bordeaux',
  },
  {
    id: 'SEhrYyT',
    title: 'Ensemble Cut-out Écru',
    description: 'Haut blanc à col montant avec des découpes circulaires élégantes sur la poitrine et son short assorti.',
    image: 'https://i.imgur.com/SEhrYyT.jpeg',
    contactParam: 'Ensemble Cut-out Écru',
  },
  {
    id: 'ZTtlq6B',
    title: 'Jupe Fillette Octobre Rose',
    description: "Jupe blanche en crochet pour fillette avec d'adorables poches roses ornées du ruban de sensibilisation.",
    image: 'https://i.imgur.com/ZTtlq6B.jpeg',
    contactParam: 'Jupe Fillette Octobre Rose',
  },
  {
    id: 'ofLAquj',
    title: 'Ensemble Enfant Rose Fluo',
    description: 'Haut dos nu rose vif à franges et perles de bois, short en maille et chapeau cloche à volants assorti.',
    image: 'https://i.imgur.com/ofLAquj.jpeg',
    contactParam: 'Ensemble Enfant Rose Fluo',
  },
  {
    id: 'zlQxNwf',
    title: "Poncho d'Été Frangé",
    description: "Poncho blanc en maille ajourée aux bordures rayées multicolores et franges, avec son bonnet assorti.",
    image: 'https://i.imgur.com/zlQxNwf.jpeg',
    contactParam: "Poncho d'Été Frangé",
  },
  {
    id: 'xGr6p1t',
    title: 'Robe Asymétrique Rayée',
    description: 'Robe asymétrique à une épaule présentant des rayures bleues, grises et blanches avec une ceinture délicate.',
    image: 'https://i.imgur.com/xGr6p1t.jpeg',
    contactParam: 'Robe Asymétrique Rayée',
  },
  {
    id: 'lB0NEgA',
    title: 'Robe Ajustée Rayée Rose',
    description: 'Robe fourreau à fines bretelles avec des rayures blanches et roses et un ourlet à volants blancs.',
    image: 'https://i.imgur.com/lB0NEgA.jpeg',
    contactParam: 'Robe Ajustée Rayée Rose',
  },
  {
    id: 'pbX0X3W',
    title: 'Ensemble Plage Jaune Néon',
    description: 'Ensemble bikini dos nu vert néon ajouré et son short assorti décoré de fines chaînettes scintillantes.',
    image: 'https://i.imgur.com/pbX0X3W.jpeg',
    contactParam: 'Ensemble Plage Jaune Néon',
  },
  {
    id: 'A33a9E1',
    title: 'Bustier Crochet & Pagne Africain',
    description: 'Bustier en tricot vert croisé sur le devant avec une jupe longue fendue en wax imprimé bleu, blanc et vert.',
    image: 'https://i.imgur.com/A33a9E1.jpeg',
    contactParam: 'Bustier Crochet & Pagne Africain',
  },
  {
    id: 'lYvJv7d',
    title: 'Ensemble Bébé Rose à Fleurs',
    description: "Haut dos nu rose à volants orné d'une fleur sur l'épaule et short en crochet assorti avec fleur à la taille.",
    image: 'https://i.imgur.com/lYvJv7d.jpeg',
    contactParam: 'Ensemble Bébé Rose à Fleurs',
  },
  {
    id: 'hxjSfFe',
    title: 'Ensemble Shorts et Crop Top Rose',
    description: 'Top court dos nu rose avec découpes horizontales effet échelle sur la poitrine et son short assorti.',
    image: 'https://i.imgur.com/hxjSfFe.jpeg',
    contactParam: 'Ensemble Shorts et Crop Top Rose',
  },
  {
    id: 'hZXGO6h',
    title: 'Ensemble Jupe et Top Bourgogne',
    description: 'Haut boutonné ajusté prune à manches courtes associé à sa jupe crayon en maille assortie.',
    image: 'https://i.imgur.com/hZXGO6h.png',
    contactParam: 'Ensemble Jupe et Top Bourgogne',
  },
  {
    id: 'qm3T2O5',
    title: 'Chemise Violette Granny',
    description: 'Polo à manches courtes en mailles granny violettes et blanches avec col classique.',
    image: 'https://i.imgur.com/qm3T2O5.jpeg',
    contactParam: 'Chemise Violette Granny',
  },
  {
    id: 'LiqLupH',
    title: 'Polo Rayé Vintage',
    description: 'Polo en tricot à rayures verticales marron, crème et bleu marine avec un col polo blanc épuré.',
    image: 'https://i.imgur.com/LiqLupH.jpeg',
    contactParam: 'Polo Rayé Vintage',
  },
  {
    id: 'Y50z1Cr',
    title: "Chemise d'Été Bleu Ciel",
    description: 'Chemise légère ouverte à manches courtes et boutons bleue ciel, rayée de blanc.',
    image: 'https://i.imgur.com/Y50z1Cr.jpeg',
    contactParam: "Chemise d'Été Bleu Ciel",
  },
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const visibleCreations = creations.slice(0, visibleCount);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            <Sparkles className="h-4 w-4" />
            Artisanat & Passion
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground/90">
            Nos Créations Artisanales
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque pièce est unique, pensée et réalisée à la main avec amour et savoir-faire.
          </p>
        </div>

        {/* Creations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {visibleCreations.map((item) => (
            <CreationCard key={item.id} creation={item} />
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < creations.length && (
          <div className="text-center mt-10 md:mt-12">
            <Button
              onClick={handleShowMore}
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 text-primary transition-all duration-300 rounded-full px-8 w-full sm:w-auto"
            >
              Voir plus de créations
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function CreationCard({ creation }: { creation: Creation }) {
  const message = `Bonjour HopeSphere Crochet ! 🧶\n\nJe souhaite me renseigner / commander la création : *${creation.contactParam}*.`;
  const contactHref = `https://wa.me/2290161746169?text=${encodeURIComponent(message)}`;

  return (
    <div
      id={`gallery-card-${creation.id}`}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-md border border-border/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Image with zoom on hover */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={creation.image}
          alt={creation.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradient overlay — always on mobile, hover on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

        {/* Overlay details — always visible on mobile, hover on desktop */}
        <div className="absolute inset-x-0 bottom-0 p-2 sm:p-4 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
          <p className="text-white text-xs sm:text-sm leading-relaxed mb-2 hidden sm:block">{creation.description}</p>
          <a
            href={contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            Me renseigner
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </a>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-2 sm:p-4">
        <h3 className="font-headline text-xs sm:text-lg font-bold text-foreground/90 mb-1 leading-snug line-clamp-2">
          {creation.title}
        </h3>
        {/* Description always visible */}
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{creation.description}</p>
        <Button asChild variant="outline" size="sm" className="mt-2 sm:mt-3 w-full group/btn text-xs sm:text-sm">
          <a href={contactHref} target="_blank" rel="noopener noreferrer">
            <span className="hidden sm:inline">Commander / Renseigner</span>
            <span className="sm:hidden">Commander</span>
            <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  );
}
