'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Show a small tooltip notification shortly after mounting to draw attention, then hide it
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClick = () => {
    const defaultText = "Bonjour HopeSphere Crochet ! 🧶 Je visite votre site et j'aimerais en savoir plus sur vos créations et vos formations.";
    window.open(`https://wa.me/2290161746169?text=${encodeURIComponent(defaultText)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center">
      {/* Tooltip text */}
      <div
        className={`absolute left-16 bg-card text-foreground border border-border text-xs px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap transition-all duration-500 ease-in-out pointer-events-none ${
          showTooltip
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-4'
        }`}
      >
        <span className="font-semibold text-green-600 dark:text-green-400">Une question ?</span> Discutez avec nous ! 💬
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-card"></div>
        {/* Underlay border arrow */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-[7px] border-transparent border-r-border -z-10"></div>
      </div>

      {/* Floating Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="p-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-green-400/30 flex items-center justify-center focus:outline-none group relative"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-white text-[#25D366] group-hover:text-[#128C7E] transition-colors" />
        
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </button>
    </div>
  );
}
