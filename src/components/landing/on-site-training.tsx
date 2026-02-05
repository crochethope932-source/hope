import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const moduleA = [
  'Les bases',
  'Serre-tête',
  'Chouchou',
  'Chapeau volant',
  'Haut simple',
  'Haut granny',
  'Jupe droite',
];

const moduleB = [
  'Tout le contenu du Module A',
  'Haut corset',
  'Jupe droite',
  'Robe',
  'Culotte',
  'Bikinis',
  'Ensemble enfant granny',
];

export default function OnSiteTraining() {
  return (
    <section id="on-site-training" className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Formations en Présentiel
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Rejoignez nos ateliers pour apprendre le crochet dans une ambiance
            conviviale et créative.
          </p>
          <div className="mt-6 bg-accent/50 border border-primary/20 rounded-lg p-4 inline-block">
            <p className="font-semibold">Frais d'inscription : 5000F</p>
            <p className="text-sm text-muted-foreground">
              Donne droit à une attestation et un kit débutant.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TrainingCard
            title="Module A"
            price="45 000 F"
            duration="1 mois (8 séances)"
            program={moduleA}
          />
          <TrainingCard
            title="Module B"
            price="75 000 F"
            duration="2 mois (16 séances)"
            program={moduleB}
            isPopular={true}
          />
        </div>

        <div className="text-center mt-8">
          <p className="font-bold text-primary">
            Début des cours : APD 07 FEV
          </p>
        </div>
      </div>
    </section>
  );
}

interface TrainingCardProps {
  title: string;
  price: string;
  duration: string;
  program: string[];
  isPopular?: boolean;
}

function TrainingCard({
  title,
  price,
  duration,
  program,
  isPopular = false,
}: TrainingCardProps) {
  return (
    <Card
      className={`flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
        isPopular ? 'border-primary shadow-lg' : ''
      }`}
    >
      <CardHeader className="items-center text-center">
        {isPopular && (
          <Badge className="mb-2 bg-primary text-primary-foreground">
            Place très limitée
          </Badge>
        )}
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        <CardDescription>{duration}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-semibold mb-4 text-center">Programme :</p>
        <ul className="space-y-2">
          {program.map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex-col items-center mt-4">
        <p className="text-3xl font-bold mb-4">{price}</p>
        <Button asChild className="w-full">
          <Link href="#contact">S'inscrire</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
