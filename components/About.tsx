import {ImageWithFallback} from "@/components/ImageWithFallback";
import {ScrollToTop} from "@/app/pages/ScrollToTop";


export function About() {
  const artisanImage = "https://images.unsplash.com/photo-1645833192082-b03fb2b83728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBjZXJhbWlzdCUyMGFydGlzYW4lMjBwb3J0cmFpdCUyMHdvcmtzaG9wfGVufDF8fHx8MTc3NDAwMjkzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const handsClay = "https://images.unsplash.com/photo-1772487488987-425a4a0c1499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHNoYXBpbmclMjBwb3R0ZXJ5JTIwY2xheXxlbnwxfHx8fDE3NzQwMDI5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const shelvesDisplay = "https://images.unsplash.com/photo-1760863264438-da5c48b16b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMHNoZWxmJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQwMDI5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  return (
    <div>
      {/* Section principale avec photo et présentation */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
                src="https://ik.imagekit.io/4niiyg8ue/IMG_20251130_122337.jpg"
              alt="Michèle Rey dans son atelier"
              className="w-full shadow-lg mx-[0px] mt-[0px] mb-[-2px] rounded-[5px]"
            />
          </div>
          
          <div>
            <h1 className="text-[38px] mb-4 text-[#ff6600] font-['Kufam'] font-semi bold italic font-[Kufam] font-bold text-left leading-tight">
              À propos
            </h1>
            <h2 className="text-[#93471C] font-['Kufam'] italic mx-[0px] mt-[0px] mb-[22px] text-[40px] leading-tight tracking-tight p-[0px]">
              Michèle Rey<br />
              céramiste à Auxonne
            </h2>
            <p className="mb-4 leading-relaxed text-[#000000] p-[0px]">
              Basée à Auxonne, je façonne à la main lampes, vases, miroirs et sculptures en grès et porcelaine. Chaque création naît d'un travail artisanal minutieux, sans tour grâce au modelage et au colombin. Mes pièces sont organiques et expressives.
            </p>
            <p className="mb-4 leading-relaxed text-[#000000] p-[0px]">
              Dans mon atelier <span className="font-bold font-[Saira] text-[#93471c]">O'GRÈS DE LA TERRE</span>, je conçois des objets décoratifs et utilitaires empreints de ma vision artistique : des pièces singulières où textures et volumes s'épanouissent au rythme du geste.
            </p>
            <p className="mb-8 leading-relaxed text-[#000000] p-[0px]">
              Le grès et la porcelaine, matériaux nobles et résistants, me permettent de donner vie à des créations aussi belles que durables.
            </p>
          </div>
        </div>
      </section>

      {/* Deux photos côte à côte */}
      <section className="max-w-7xl mx-auto mx-[215px] my-[-60px] px-[24px] py-[104px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageWithFallback
            src="https://ik.imagekit.io/4niiyg8ue/IMG_20260301_142738.jpg"
            alt="Travail de la terre"
            className="w-full shadow-lg rounded-[5px]"
          />
          <ImageWithFallback
            src="https://ik.imagekit.io/4niiyg8ue/IMG_20251130_103004.jpg"
            alt="Collections de céramiques"
            className="w-full shadow-lg rounded-[5px] mx-[10px] my-[0px]"
          />
        </div>
      </section>

      {/* Section Rencontre */}
      <section className="max-w-7xl mx-auto px-[24px] py-[4px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-[0px] py-[60px]">
          <div>
            <ImageWithFallback
              src="https://ik.imagekit.io/4niiyg8ue/Coupure%20presse%20Rey.jpg"
              alt="Article de presse - Michèle Rey céramiste"
              className="w-full border-2 border-[#6D6E70] rounded-[0px]"
            />
             <p className="text-sm text-gray-500 mt-2 font-['Manrope']">Source : Journal Le Bien Public, décembre 2025</p>

          </div>
          
          <div>
            <p className="leading-relaxed text-[#000000] mx-[0px] mt-[0px] mb-[16px] p-[0px]">
              Mon approche se démarque résolument des productions en série : ici, chaque pièce est pensée et façonnée à la main, ce qui en fait un objet véritablement unique. Le modelage manuel est au cœur de ma pratique et me permet de donner vie à des créations authentiques, adaptées à vos envies et à votre univers décoratif. Que ce soit pour illuminer votre intérieur avec une lampe, apporter une touche d'élégance avec un vase aux formes travaillées, ou de sublimer un espace grâce à une sculpture expressive.
            </p>
            <p className="mb-4 leading-relaxed text-[#000000] p-[0px]">
              Parce que l'argile garde en elle la trace des mains qui l'ont pétrie, chaque objet porte en lui une âme et une valeur singulière.
            </p>
            <p className="leading-relaxed text-[#000000] p-[0px]">
              Je vous accueille dans mon atelier d'Auxonne, un espace de création et de partage où vous pourrez découvrir mes collections et échanger autour de vos projets. Mon objectif est de vous proposer des créations sur mesure, pensées en harmonie avec votre style et votre univers décoratif.
            </p>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}