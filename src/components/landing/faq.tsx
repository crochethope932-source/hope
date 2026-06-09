'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Quels sont les tarifs des formations en présentiel ?",
    answer: "Les frais d'inscription généraux s'élèvent à 5 000 F CFA (donnant droit à un kit débutant complet et une attestation en fin de formation). Ensuite, deux formules s'offrent à vous : \n- **Module A (Débutant - 1 mois, 8 séances)** : 45 000 F CFA pour maîtriser les points de base et confectionner vos premiers vêtements (jupes simples, hauts granny, chouchous, etc.).\n- **Module B (Professionnel - 2 mois, 16 séances)** : 75 000 F CFA pour acquérir un niveau supérieur et réaliser des pièces complexes (corsets, bikinis, robes, ensembles pour enfants, etc.)."
  },
  {
    question: "Comment fonctionne l'accompagnement pour la formation en ligne ?",
    answer: "Notre formation en ligne (à partir de 25 000 F CFA) offre une flexibilité complète. Vous accédez à vie à une bibliothèque de tutoriels vidéos très détaillés. Pour vous assurer une réussite totale, vous bénéficiez également de sessions Zoom régulières de suivi personnalisé et d'un espace de discussion direct avec la formatrice pour poser toutes vos questions."
  },
  {
    question: "Est-il possible de commander des créations sur mesure ?",
    answer: "Absolument ! Toutes les créations de notre galerie sont réalisables sur mesure. Vous pouvez choisir la couleur, le type de fil, ainsi que vos mensurations pour un ajustement parfait. Remplissez le formulaire de contact ou écrivez-nous directement sur WhatsApp en indiquant le nom du modèle qui vous intéresse pour obtenir un devis rapide."
  },
  {
    question: "Où se déroulent les ateliers physiques et comment s'inscrire ?",
    answer: "Nos ateliers en présentiel se déroulent dans notre espace de création au Bénin. Pour vous inscrire, il vous suffit de remplir le formulaire de contact en bas du site (ou d'utiliser le bouton de contact rapide WhatsApp). Nous prendrons contact avec vous sous 24 heures pour valider votre inscription et planifier vos séances."
  },
  {
    question: "Quels sont les prérequis pour débuter le crochet ?",
    answer: "Aucun prérequis n'est nécessaire ! Nos formations sont conçues pour guider les débutants complets pas à pas. Si vous optez pour le présentiel, le kit de démarrage (crochets, fils de qualité, accessoires) vous est remis dès l'inscription pour que vous puissiez commencer immédiatement à pratiquer dans les meilleures conditions."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            <Sparkles className="h-4 w-4" />
            Des réponses à vos questions
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground/90">
            Questions Fréquentes (FAQ)
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez les réponses immédiates à propos de nos cours de crochet, de nos créations personnalisées et du suivi en ligne.
          </p>
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden bg-card transition-all duration-300 ${
                  isOpen
                    ? 'border-primary/30 shadow-md ring-1 ring-primary/15'
                    : 'border-border/50 hover:border-border hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors duration-200 select-none group min-h-[56px]"
                >
                  <span className="flex items-start sm:items-center gap-2 sm:gap-3 font-semibold text-foreground/90 text-sm sm:text-base md:text-lg group-hover:text-primary transition-colors pr-2">
                    <HelpCircle className={`h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 transition-transform duration-300 mt-0.5 sm:mt-0 ${isOpen ? 'scale-110' : ''}`} />
                    {item.question}
                  </span>
                  <div
                    className={`ml-2 sm:ml-4 p-1.5 rounded-full bg-secondary/50 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Smooth Expandable Content container */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-4 sm:p-5 md:p-6 pt-0 border-t border-border/20 text-muted-foreground text-sm md:text-base leading-relaxed space-y-2">
                    {item.answer.split('\n').map((paragraph, pIdx) => {
                      // Basic parsing for bold markers **text** in answers
                      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                      const parsedText = parts.map((part, partIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={partIdx} className="font-semibold text-foreground">
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        return part;
                      });

                      return (
                        <p key={pIdx} className="first:mt-0 mt-2">
                          {parsedText}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
