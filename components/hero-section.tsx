import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
      <section className="px-6 pt-10 pb-0">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            {/* Left: hero image */}
            <div className="w-full flex-shrink-0 overflow-hidden rounded-sm md:w-[42%]">
              <Image
                  src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=600&q=80"
                  alt="Vase en céramique fait main"
                  width={600}
                  height={680}
                  className="h-[360px] w-full object-cover md:h-[460px]"
                  priority
                  sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>

            {/* Right: content */}
            <div className="flex-1 pt-2">
              {/* Italic orange label */}
              <h1 className="font-serif text-5xl italic text-primary md:text-6xl">
                Inspirations
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
        </div>
      </section>
  );
}