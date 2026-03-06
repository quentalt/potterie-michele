import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
                src="https://images.unsplash.com/photo-1751914077095-1a832c1d0c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNlcmFtaWMlMjBwb3R0ZXJ5JTIwc2N1bHB0dXJlfGVufDF8fHx8MTc3Mjc4MzQ4OHww&ixlib=rb-4.1.0&q=40&w=1080&utm_source=figma&utm_medium=referral"
                alt="Céramique artisanale"
                className="w-full shadow-lg"
                width={1080}
                height={400}
                style={{ height: '725px' }}
            />
          </div>

          <div>
            <h1 className="text-6xl mb-4 text-[#ff6600] font-['Kufam'] font-semibold text-left">
              Artisanat
            </h1>
            <h2 className="text-[#93471C] font-['Kufam'] pl-[0px] pr-[50px] py-[0px] mx-[0px] mt-[0px] mb-[22px] text-[40px] leading-tight">
              Façonné à la main,<br/>
              inspiré par la terre.
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed font-manrope pr-[150px]">
              Mon approche se distingue des productions industrielles : Le modelage manuel me permet de créer des pièces authentiques, personnalisées et adaptées à vos envies, que ce soit pour votre intérieur avec une lampe, apporter une touche de caractère avec un vase ou sublimer un espace grâce à une sculpture.
            </p>

            <div className="flex gap-4">
              <Link
                  href="/galerie"
                  className="bg-brown text-white px-6 py-3 rounded-md"
              >
                Explorer la galerie
              </Link>
              <Link
                  href="/a-propos"
                  className="border-2 border-brown text-orange-700 px-6 py-3 rounded-md "
              >
                À propos
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}