'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Bonjour ! 🧶 Je suis **Hope**, votre assistante créative pour **HopeSphere Crochet**.\n\nComment puis-je vous guider aujourd'hui ?\n- 📚 Vous présenter nos **formations en présentiel** (Module A & B)\n- 💻 Vous parler de nos **formations en ligne**\n- 🤔 Vous conseiller sur le choix de votre module selon vos objectifs\n- ✨ Vous suggérer des **idées de projets** selon votre niveau ! 🧶",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isLoading, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (hasUnread) {
      setHasUnread(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      // Build history in the format: { role: 'user' | 'model', text: string }
      const history = messages.map((msg) => ({
        role: msg.role,
        text: msg.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userText,
          history: history,
        }),
      });

      if (!res.ok) {
        throw new Error('Erreur de communication avec le serveur.');
      }

      const data = await res.json();
      const reply = data.reply || "Désolé, je rencontre des difficultés pour répondre. Réessayez dans quelques instants.";

      setMessages((prev) => [...prev, { role: 'model', text: reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: "Désolé, je rencontre un problème technique. Veuillez vérifier votre connexion ou réessayer plus tard. Vous pouvez également nous contacter directement via le formulaire ci-dessous. 🧶",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to format custom bold text and breaks
  const formatMessageText = (text: string) => {
    return text.split('\n').map((line, lineIdx) => {
      // Parse **bold** markers
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const elements = parts.map((part, partIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={partIdx} className="font-bold text-[#b45309]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      return (
        <span key={lineIdx} className="block min-h-[0.5rem]">
          {elements}
        </span>
      );
    });
  };

  // Quick action buttons to guide users
  const handleQuickAction = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {/* Floating Chat Bubble Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-tr from-[#FFB347] to-[#FFE5B4] text-amber-950 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-[#FFB347]/50 flex items-center justify-center focus:outline-none`}
        aria-label="Ouvrir le chat assistant"
      >
        {isOpen ? (
          <X className="h-6 w-6 animate-spin-once" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-6 w-6" />
            {hasUnread && (
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border border-white"></span>
              </span>
            )}
          </div>
        )}
      </button>

      {/* Chat Window Panel */}
      <div
        className={`fixed bottom-24 right-6 w-[360px] md:w-[400px] h-[540px] max-h-[80vh] flex flex-col bg-background/95 backdrop-blur-md border border-primary/20 rounded-2xl shadow-2xl z-50 overflow-hidden transition-all duration-300 ease-in-out origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FFE5B4]/90 to-[#FFB347]/90 px-4 py-3 flex items-center justify-between border-b border-[#FFB347]/20 shadow-sm shrink-0">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border border-primary/20 bg-background">
              <AvatarImage src="https://i.imgur.com/xAIcGXa.jpeg" alt="Hope" />
              <AvatarFallback className="bg-amber-100 text-[#b45309] font-bold">HP</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-headline font-bold text-amber-950">Hope</span>
                <Sparkles className="h-3.5 w-3.5 text-amber-700 animate-pulse" />
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-amber-900/70 font-medium">Assistante HSC - En ligne</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-amber-950/70 hover:text-amber-950 hover:bg-amber-950/10 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Message Area */}
        <ScrollArea ref={scrollRef} className="flex-1 p-4 bg-amber-50/20">
          <div className="flex flex-col gap-3.5">
            {messages.map((msg, index) => {
              const isAssistant = msg.role === 'model';
              return (
                <div
                  key={index}
                  className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 max-w-[85%] text-sm shadow-sm transition-all duration-200 ${
                      isAssistant
                        ? 'bg-card text-foreground border border-primary/10 rounded-tl-none leading-relaxed'
                        : 'bg-[#FFB347] text-amber-950 rounded-tr-none font-medium leading-relaxed'
                    }`}
                  >
                    {formatMessageText(msg.text)}
                  </div>
                </div>
              );
            })}
            
            {/* Loading typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-card text-foreground border border-primary/10 rounded-2xl rounded-tl-none px-3.5 py-3 shadow-sm flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-amber-700 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-amber-700 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-amber-700 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Suggestions (Horizontal scroll if needed) */}
        {messages.length === 1 && !isLoading && (
          <div className="px-4 py-2 bg-amber-50/10 border-t border-primary/5 flex flex-wrap gap-1.5 shrink-0">
            <button
              onClick={() => handleQuickAction("Quels sont les tarifs des formations ?")}
              className="text-xs bg-amber-100/60 hover:bg-[#FFE5B4]/60 text-amber-900 border border-amber-200/50 rounded-full px-2.5 py-1 transition"
            >
              💰 Tarifs & inscriptions ?
            </button>
            <button
              onClick={() => handleQuickAction("Quelle est la différence entre Module A et B ?")}
              className="text-xs bg-amber-100/60 hover:bg-[#FFE5B4]/60 text-amber-900 border border-amber-200/50 rounded-full px-2.5 py-1 transition"
            >
              🤔 Module A ou B ?
            </button>
            <button
              onClick={() => handleQuickAction("Des idées de projets pour débutant ?")}
              className="text-xs bg-amber-100/60 hover:bg-[#FFE5B4]/60 text-amber-900 border border-amber-200/50 rounded-full px-2.5 py-1 transition"
            >
              🧶 Projets débutant ?
            </button>
          </div>
        )}

        {/* Input Form */}
        <form
          onSubmit={handleSend}
          className="p-3 bg-background border-t border-primary/10 flex items-center gap-2 shrink-0"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez votre message..."
            disabled={isLoading}
            className="flex-1 bg-amber-50/10 focus-visible:ring-primary border-primary/20 rounded-full px-4"
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
            className="bg-[#FFB347] hover:bg-[#FFB347]/80 text-amber-950 rounded-full shrink-0"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>

        {/* Footer Disclaimer */}
        <div className="bg-amber-50/30 text-center py-1 border-t border-primary/5 shrink-0">
          <p className="text-[10px] text-muted-foreground flex items-center justify-center gap-1">
            <HelpCircle className="h-2.5 w-2.5" />
            Besoin d'aide ? Posez vos questions à Hope.
          </p>
        </div>
      </div>
    </>
  );
}
