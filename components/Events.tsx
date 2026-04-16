"use client";

import {ImageWithFallback} from "@/components/ImageWithFallback";
import {ScrollToTop} from "@/app/pages/ScrollToTop";


export function Events() {
  return (
    <div>
      {/* Section principale avec photo et présentation */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://ik.imagekit.io/4niiyg8ue/tmpc1z6dmwk_2.jpg?updatedAt=1774021946364"
              alt="Stand de céramiques lors d'un marché artisanal"
              className="w-full shadow-lg mx-[0px] mt-[0px] mb-[-2px] rounded-[5px]"
            />
          </div>
          
          <div>
            <h1 className="mb-4 text-[#ff6600] font-['Kufam'] font-semi bold italic font-[Kufam] font-bold text-left leading-tight text-[36px]">
              Événements
            </h1>
            <h2 className="text-[#93471C] font-['Kufam'] italic mx-[0px] mt-[0px] mb-[22px] text-[40px] leading-tight tracking-tight p-[0px]">
              Rencontres, marchés<br />
              et expositions
            </h2>
            <p className="mb-4 leading-relaxed text-[#000000] p-[0px]">
              Tout au long de l'année, je participe à des événements dédiés à la céramique dans notre région. Rencontrer le public, échanger et partager autour de mon travail est ce qui rend cette aventure encore plus enrichissante et parfaite pour votre intérieur.
            </p>
            <p className="mb-8 leading-relaxed text-[#000000] p-[0px]">
              Dans l'emploi du temps, vous trouverez pour célébrer le savoir-faire bourguignon et la beauté de la terre cuite.
            </p>
          </div>
        </div>
      </section>

      {/* Section Marchés et expositions */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="mb-2 text-[#ff6600] font-['Kufam'] font-semi bold italic font-[Kufam] font-bold text-left leading-tight text-[36px]">
          Marchés et expositions
        </h2>
        <p className="mb-12 text-[16px] font-bold text-[#93471c]">
          SAISON 2025 / 2026
        </p>

        {/* Grande affiche principale */}
        <div className="mb-6">
          <a href="https://www.jura-tourism.com/agenda/marche-de-lartisanat-de-saint-aubin-39/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
            <ImageWithFallback
              src="https://ik.imagekit.io/4niiyg8ue/marche%20de%20l_artisanat%20st%20aubin%2039.png"
              alt="Marché de l'artisanat - Saint-Aubin"
              className="w-full border-2 border-[#6D6E70] rounded-[0px]"
            />
          </a>
        </div>

        {/* Grille de 3 affiches/événements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 my-12">
          <div className="flex items-center justify-center">
            <ImageWithFallback
              src="https://ik.imagekit.io/4niiyg8ue/Marche%CC%81%20de%20Noel%2030%20nov.jpg"
              alt="Marché de Noël - Labergement-lès-Auxonne"
              className="w-full h-[450px] object-contain border-2 border-[#6D6E70] rounded-[0px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <ImageWithFallback
              src="https://ik.imagekit.io/4niiyg8ue/Screenshot_20251124_114112_2.jpg"
              alt="Jardin et poterie"
              className="w-full h-[450px] object-contain border-2 border-[#6D6E70] rounded-[0px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <ImageWithFallback
              src="https://ik.imagekit.io/4niiyg8ue/FB_IMG_1763404351352_2.jpg"
              alt="Boutique éphémère"
              className="w-full h-[450px] object-contain border-2 border-[#6D6E70] rounded-[0px]"
            />
          </div>
        </div>

        {/* Grande image finale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <ImageWithFallback
              src="https://ik.imagekit.io/4niiyg8ue/497621609_9772875746137995_1175090028178950053_n.jpg"
              alt="Marché de l'artisanat"
              className="w-full shadow-lg rounded-[5px] mx-[0px] mt-[-2px] mb-[0px]"
            />
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}