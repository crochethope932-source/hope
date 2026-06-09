'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { submitContactForm } from '@/lib/firestore';
import { MessageSquare, Mail, Sparkles } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères.'),
  email: z.string().email('Veuillez entrer une adresse e-mail valide.'),
  training: z.enum(['module_a', 'module_b', 'online', 'other']),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères.')
    .max(500, 'Le message ne peut pas dépasser 500 caractères.'),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [contactViaWhatsApp, setContactViaWhatsApp] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      training: 'module_a',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // 1. Toujours enregistrer dans Firestore (sauvegarde e-mail / base de données)
      await submitContactForm(values);

      // 2. Si l'option WhatsApp est cochée, rediriger l'utilisateur vers WhatsApp
      if (contactViaWhatsApp) {
        const trainingLabel = {
          module_a: 'Formation en présentiel - Module A (45 000 F CFA)',
          module_b: 'Formation en présentiel - Module B (75 000 F CFA)',
          online: 'Formation en ligne',
          other: 'Autre demande / Autre sujet',
        }[values.training];

        // Construction du message WhatsApp avec mise en forme
        const text = `Bonjour HopeSphere Crochet ! 🧶\n\nJe m'appelle *${values.name}*.\nJe souhaite m'inscrire / me renseigner pour :\n- *Formation* : ${trainingLabel}\n- *Email* : ${values.email}\n\n*Mon message* :\n${values.message}`;
        const encodedText = encodeURIComponent(text);
        
        // Numéro officiel HSC au Bénin
        const whatsappUrl = `https://wa.me/2290161746169?text=${encodedText}`;

        // Ouvrir dans un nouvel onglet
        window.open(whatsappUrl, '_blank');

        toast({
          title: '✅ Inscription enregistrée !',
          description: 'Redirection vers WhatsApp en cours pour finaliser votre demande...',
        });
      } else {
        // Soumission classique e-mail
        toast({
          title: '✅ Message envoyé !',
          description: 'Merci de nous avoir contactés. Nous vous répondrons par e-mail bientôt.',
        });
      }
      
      form.reset();
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
      toast({
        variant: 'destructive',
        title: '❌ Erreur',
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      });
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Contactez-nous
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Une question ? Une demande d'inscription ? Remplissez le
            formulaire ci-dessous.
          </p>
        </div>
        <Card className="border-primary/10 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom complet" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="votre@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="training"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Choix de la formation</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez une formation" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="module_a">
                            Formation en présentiel - Module A
                          </SelectItem>
                          <SelectItem value="module_b">
                            Formation en présentiel - Module B
                          </SelectItem>
                          <SelectItem value="online">
                            Formation en ligne
                          </SelectItem>
                          <SelectItem value="other">Autre demande</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Votre message..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* WhatsApp Prioritization Checkbox */}
                <div className="flex items-center space-x-3 bg-[#e8f5e9]/40 border border-[#c8e6c9] p-4 rounded-xl transition-all duration-300">
                  <Checkbox
                    id="whatsapp-contact"
                    checked={contactViaWhatsApp}
                    onCheckedChange={(checked) => setContactViaWhatsApp(!!checked)}
                    className="border-[#4caf50] data-[state=checked]:bg-[#4caf50] data-[state=checked]:border-[#4caf50]"
                  />
                  <label
                    htmlFor="whatsapp-contact"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-[#1b5e20] flex flex-wrap items-center gap-1.5"
                  >
                    <span>Contacter aussi par WhatsApp pour une réponse plus rapide</span>
                    <span className="text-[10px] bg-[#4caf50] text-white font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <Sparkles className="h-2.5 w-2.5" /> Recommandé
                    </span>
                  </label>
                </div>

                {/* Dynamic Submit Button */}
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className={`w-full py-6 font-bold text-base rounded-full shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
                    contactViaWhatsApp
                      ? 'bg-[#25D366] hover:bg-[#128C7E] text-white hover:shadow-lg active:scale-[0.98]'
                      : 'bg-[#FFB347] hover:bg-[#FFB347]/80 text-amber-950 hover:shadow active:scale-[0.98]'
                  }`}
                >
                  {form.formState.isSubmitting ? (
                    'Envoi en cours...'
                  ) : contactViaWhatsApp ? (
                    <>
                      <MessageSquare className="h-5 w-5" />
                      Envoyer et discuter sur WhatsApp 💬
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      Envoyer par E-mail
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
