import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20 bg-background">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Hero Image */}
          <div className="relative w-full md:w-1/2">
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                  src="/images/hero-vase.png"
                  alt="Vase en ceramique blanc fait main"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            </div>


            {/* Right: content */}
            <div className="flex-1 pt-2">
              {/* Italic orange label */}
              <h1 className="font-serif text-5xl italic text-primary md:text-6xl">
                Artisanat
              </h1>

              {/* Main title */}
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-chart-5 md:text-4xl">
                Façonné à la main,
                <br />
                inspiré par la terre.
              </h2>

              {/* Description */}
              <p className="mt-6 text-[15px] leading-relaxed text-foreground">
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
                    className="rounded-sm bg-chart-5 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Explorer la collection
                </Link>
                <Link
                    href="/a-propos"
                    className="rounded-sm border border-chart-5 px-6 py-3 text-sm font-semibold text-chart-5 transition-colors hover:bg-chart-5 hover:text-white"
                >
                  À Propos
                </Link>
              </div>
            </div>
          </div>
      </section>
  );
}