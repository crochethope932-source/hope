import { Logo } from '@/components/logo';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const quickLinks = [
  { href: '#about', label: 'À Propos' },
  { href: '#on-site-training', label: 'Formations' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Dans chaque maille une touche d’espoir.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 font-headline">Liens rapides</h3>
            <ul className="space-y-2">
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
          <div>
            <h3 className="font-semibold mb-4 font-headline">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Contactez-nous :{' '}
              <a
                href="tel:+2290161746169"
                className="hover:text-primary transition-colors font-medium"
              >
                +229 0161746169
              </a>
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-border/50" />
        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Hope 'Sphere Crochet. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}
