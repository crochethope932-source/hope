import { Button } from '@/components/ui/button';
import { PlaySquare, Users, Target } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: PlaySquare,
    title: 'Vidéos de formation détaillées',
    description: 'Accessibles 24h/24 pour apprendre à votre rythme.',
  },
  {
    icon: Users,
    title: 'Accompagnement personnalisé',
    description: 'Via des séances Zoom pour répondre à toutes vos questions.',
  },
  {
    icon: Target,
    title: 'Suivi pas à pas',
    description:
      'Nous vous guidons pour garantir votre autonomie et votre succès.',
  },
];

export default function OnlineTraining() {
  return (
    <section id="online-training" className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground/90 mb-4 md:mb-6">
              Apprenez le crochet depuis chez vous
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              Notre formation en ligne est conçue pour vous offrir une
              flexibilité totale tout en bénéficiant d'un support expert.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto min-h-[52px]">
              <Link href="#contact">Acheter la formation en ligne</Link>
            </Button>
          </div>
          <div className="space-y-6 md:space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary/20 text-primary rounded-full p-2.5 md:p-3">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
