import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import OnSiteTraining from '@/components/landing/on-site-training';
import OnlineTraining from '@/components/landing/online-training';
import ContactForm from '@/components/landing/contact-form';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <OnSiteTraining />
        <OnlineTraining />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
