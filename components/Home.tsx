import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {ImageWithFallback} from "@/components/ImageWithFallback";
import {ScrollToTop} from "@/app/pages/ScrollToTop";

export function Home() {
  const sculptureImage = "https://ik.imagekit.io/4niiyg8ue/IMG_20260220_Accueil_Artisanat.jpg";
  
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://ik.imagekit.io/4niiyg8ue/IMG_20260220_Accueil_Artisanat.jpg"
              alt="Céramique artisanale"
              className="w-full shadow-lg mx-[0px] mt-[0px] mb-[-2px] rounded-[5px]"
            />
          </div>
          
          <div>
            <h1 className="mb-4 text-[#ff6600] font-['Kufam'] font-semi bold italic font-[Kufam] font-bold text-left leading-tight text-[36px]">
              Artisanat
            </h1>
            <h2 className="text-[#93471C] font-['Kufam'] italic mx-[0px] mt-[0px] mb-[22px] text-[40px] leading-tight tracking-tight p-[0px]">
              Façonné à la main,<br />
              inspiré par la terre.
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed p-[0px]">
              Mon approche se distingue des productions industrielles : Le modelage manuel me permet de créer des pièces authentiques, personnalisées et adaptées à vos envies, que ce soit pour votre intérieur avec une lampe, apporter une touche de caractère avec un vase ou sublimer un espace grâce à une sculpture.
            </p>
            
            <div className="flex gap-4">
              <Link
                href="/galerie"
                className="flex items-center justify-center text-white px-6 py-3 rounded-md hover:bg-[#924519] transition-colors bg-[#924519] m-[0px]"
              ><span className="font-medium">Galerie</span></Link>
              <Link
                href="/a-propos"
                className="bg-[#ff6600] text-white rounded-md text-center ml-[47px] mr-[0px] my-[0px] px-[20px] py-[12px]"
              ><span className="font-medium">À propos</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[38px] font-bold italic text-[#ff6600] m-[0px] mt-[5mm] pt-[0px] pr-[0px] pb-[-1px] pl-[0px] leading-tight">Galerie</h2>
          <Link
            href="/galerie"
            className="text-gray-700 hover:text-orange-600 flex items-center gap-2 transition-colors"
          >
            Voir tout <ArrowRight size={20} />
          </Link>
        </div>
        <p className="mb-8 font-bold text-[#93471c]">SAISON 2025 / 2026</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GalleryCard
            image="https://ik.imagekit.io/4niiyg8ue/IMG_20260220_124149%20(2).jpg"
            title="Luminaires"
            description="Des créations lumineuses où l'art de la céramique révèle une atmosphère chaleureuse et intimiste. Chaque pièce est façonnée avec soin pour sublimer vos espaces de vie."
          />
          <GalleryCard
            image="https://ik.imagekit.io/4niiyg8ue/IMG_20260220_124144%20(6).jpg?updatedAt=1772814254108"
            title="Vases et objets décoratifs"
            description="Des pièces uniques qui célèbrent la beauté de la terre cuite et subliment votre quotidien. Formes organiques et textures travaillées se conjuguent pour créer des objets empreints de caractère et d'élégance."
          />
          <GalleryCard
            image="https://ik.imagekit.io/4niiyg8ue/IMG_20260220_124144%20(7).jpg"
            title="Sculptures"
            description="Des formes sculptées qui explorent la plasticité de la terre et révèlent l'essence de la matière, pour des pièces contemplatives et intemporelles."
          />
        </div>
      </section>

      {/* Featured Sculpture */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://ik.imagekit.io/4niiyg8ue/IMG_20260220_124149%20(9).jpg"
              alt="Sculpture du moment"
              className="w-full shadow-lg rounded-[5px]"
            />
          </div>
          
          <div>
            <p className="mb-2 px-[0px] pt-[0px] pb-[22px] text-[#000000] text-[21px]">— COUP DE PROJECTEUR —</p>
            <h2 className="text-[38px] font-bold mb-6 italic text-[#ff6600] leading-tight">
              Sculpture <br/> 
              du moment
            </h2>
            <p className="leading-relaxed text-[#000000] mx-[0px] mt-[0px] mb-[16px] p-[0px]">
              La sculpture du moment naît d'une rencontre entre la matière et l'instinct. La terre, encore fraîche, garde l'empreinte du geste, la mémoire du toucher.
            </p>
            <p className="mb-4 leading-relaxed text-[#000000] p-[0px]">
              Je travaille à l'écoute, de ce que la forme veut devenir, de ce que mes mains savent sans le dire. Il y a quelque chose d'intime dans ce dialogue silencieux avec l'argile.
            </p>
            <p className="leading-relaxed text-[#000000] p-[0px]">
              Chaque pièce porte en elle une tension douce entre contrôle et abandon. Ce que je cherche : une forme qui respire, qui semble avoir toujours existé.
            </p>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

interface GalleryCardProps {
  image: string;
  title: string;
  description: string;
}

function GalleryCard({ image, title, description }: GalleryCardProps) {
  // Déterminer le lien en fonction du titre
  const getLink = () => {
    if (title === "Luminaires") return "/luminaires";
    if (title === "Vases et objets décoratifs") return "/vases";
    if (title === "Sculptures") return "/sculptures";
    return "/galerie";
  };

  return (
    <Link href={getLink()} className="group block">
      <div className="overflow-hidden rounded-lg mb-4">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300 rounded-[5px]"
        />
      </div>
      <h3 className="text-xl font-semibold text-orange-700 mb-2 group-hover:text-[#ff6600] transition-colors">{title}</h3>
      <p className="text-sm leading-relaxed text-[#000000]">{description}</p>
    </Link>
  );
}