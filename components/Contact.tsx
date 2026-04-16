import { Mail, Instagram, Facebook,PhoneCall } from "lucide-react";
import {ImageWithFallback} from "@/components/ImageWithFallback";
import {ScrollToTop} from "@/app/pages/ScrollToTop";

export function Contact() {
  return (
      <div>
        {/* Section principale avec photo et présentation */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                  src="https://ik.imagekit.io/4niiyg8ue/IMG_20260301_143032.jpg"
                  alt="Michèle Rey dans son atelier"
                  className="w-full shadow-lg mx-[0px] mt-[0px] mb-[-2px] rounded-[5px]"
              />
            </div>

            <div>
              <h1 className="text-[38px] mb-4 text-[#ff6600] font-['Kufam'] font-semi bold italic font-[Kufam] font-bold text-left leading-tight">
                Contact
              </h1>
              <h2 className="text-[#93471C] font-['Kufam'] italic mx-[0px] mt-[0px] mb-[22px] text-[40px] leading-tight tracking-tight p-[0px]">
                L'atelier est ouvert<br />
                sur rendez-vous.
              </h2>
              <p className="mb-4 leading-relaxed text-[#000000] p-[0px]">
                Niché au cœur d'Auxonne, petite ville bourguignonne bordée par la Saône, l'atelier <span className="font-bold font-[Saira] text-[#93471c]">O'GRÈS DE LA TERRE</span>, est un espace calme et lumineux où la terre prend vie loin de l'agitation. J'y travaille le grès et l'argile chamottée à la main, dans le silence que l'on trouve parfois à l'écart, entre geste et matière.
              </p>
              <p className="mb-8 leading-relaxed text-[#000000] p-[0px]">
                Pour une commande, un projet ou simplement échanger autour de la céramique, écrivez-moi.
              </p>

              {/* Icônes de réseaux sociaux */}
              <div className="flex gap-6 p-[0px] mx-[0px] mt-[0px] mb-[15px]">
                <a
                    href="mailto:contact@ogresdelaterre.fr"
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <Mail size={48} strokeWidth={1.5} />
                </a>
                <a
                    href="https://www.instagram.com/rey.michele"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <Instagram size={48} strokeWidth={1.5} />
                </a>
                <a
                    href="https://www.facebook.com/michele.rey.338/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <Facebook size={48} strokeWidth={1.5} />
                </a>

                <a href="tel:+33675666626" className="text-gray-600 hover:text-orange-600 transition-colors">
                  <PhoneCall size={45} strokeWidth={1.5} />
                </a>
              </div>

              <a
                  href="https://www.google.com/maps/search/?api=1&query=9+rue+basse+21130+Auxonne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-[24px] hover:text-[#ff6600] transition-colors"
              >9 rue basse, 21130 Auxonne, France</a>
            </div>
          </div>
        </section>

        {/* Grande photo de l'atelier */}
        <section className="max-w-7xl mx-auto px-[24px] py-[34px]">
          <ImageWithFallback
              src="https://ik.imagekit.io/4niiyg8ue/IMG_20260324_164217.jpg"
              alt="Atelier O'grès de la terre à Auxonne"
              className="w-full"
          />
        </section>

        {/* Section L'atelier */}
        <section className="max-w-7xl mx-auto px-[24px] py-[44px]">
          <h2 className="text-[#93471C] text-2xl font-semibold mx-[0px] mt-[0px] mb-[6px]">L'atelier</h2>
          <div className="max-w-4xl">
            <p className="leading-relaxed text-[#000000] mx-[0px] mt-[0px] mb-[16px]">
              Dans une vieille demeure d'Auxonne, un atelier de céramiste a pris ses quartiers là où résonnaient autrefois les outils d'un ébéniste. Les murs gardant la mémoire de ces deux artisanats complémentaires, où le travail de la terre a succédé à celui du bois.
            </p>
            <p className="leading-relaxed text-[#000000] m-[0px]">
              L'espace conserve cette âme d'atelier ancestral, avec ses poutres patinées et ses pierres usées par le temps. La poussière d'argile a remplacé la sciure de bois dans cette vieille bâtisse bourguignonne, donnant ainsi lieu à une atmosphère unique, chargée d'histoire et de créativité.
            </p>
          </div>
        </section>
        <ScrollToTop />
      </div>
  );
}