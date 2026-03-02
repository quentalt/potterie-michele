import Image from "next/image";
import Link from "next/link";
import {BigTitle} from "@/components/bigtitle";

export function HeroSection() {
  return (
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-4 md:pt-20 md:pb-6 bg-background">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Hero Image */}
            <div className="flex-shrink-0">
                <Image
                    src="https://images.unsplash.com/photo-1687191883721-257d8cad5b54?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Artisan façonnant une pièce en céramique"
                    width={2000}
                    height={400}
                    className="w-full h-auto object-cover"
                />
          </div>


          {/* Right: content */}
          <div className="flex-1 pt-2">
            {/* Titre orange principal — référence pour toutes les pages */}
            <BigTitle>
              Artisanat
            </BigTitle>

            {/* Main title */}
            <h2 className="mt-4 font-kufam font-medium text-3xl leading-tight text-brown md:text-4xl">
              Façonné à la main,
              <br />
              inspiré par la terre.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed font-manrope">
              Mon approche se distingue des productions
              industrielles : ici, chaque objet est unique. Le modelage
              manuel me permet de créer des pièces authentiques,
              personnalisées et adaptées à vos envies, que ce soit
              pour illuminer votre intérieur avec une lampe, apporter
              une touche de caractère avec un vase ou sublimer un
              espace grâce à une sculpture.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                  href="/galerie"
                  className="rounded-sm bg-brown px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Explorer la galerie
              </Link>
              <Link
                  href="/a-propos"
                  className="rounded-sm border border-brown px-6 py-3 text-sm font-semibold text-brown transition-colors hover:bg-brown hover:text-white"
              >
                À propos
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}