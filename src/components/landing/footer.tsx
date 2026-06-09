import { Logo } from '@/components/logo';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { href: '#about', label: 'À Propos' },
  { href: '#gallery', label: 'Nos Créations' },
  { href: '#on-site-training', label: 'Formations Présentiel' },
  { href: '#online-training', label: 'Formations en Ligne' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/40">
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Dans chaque maille une touche d’espoir. Mode écoresponsable et formations professionnelles en crochet fait main au Bénin.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/hopespherewool?igsh=NXAwYjZrb2hzbDdk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Instagram"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full bg-background/50 border border-border hover:shadow-sm"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1C2nVxZ5fS/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Facebook"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full bg-background/50 border border-border hover:shadow-sm"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 font-headline text-lg tracking-tight text-foreground/90">Liens rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-semibold font-headline text-lg tracking-tight text-foreground/90">Contact & Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="tel:+2290161746169"
                  className="hover:text-primary transition-colors"
                >
                  +229 0161746169
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
                <MessageCircle className="h-4 w-4 text-green-500 shrink-0" />
                <a
                  href="https://wa.me/2290161746169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors font-medium text-green-600 dark:text-green-400"
                >
                  Discuter sur WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="mailto:hopespherecrochet@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  hopespherecrochet@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-border/50" />
        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Hope 'Sphere Crochet. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
