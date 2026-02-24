import Image from "next/image";

export function SpotlightSection() {
  return (
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            {/* Left: featured image */}
            <div className="w-full flex-shrink-0 overflow-hidden rounded-sm md:w-[42%]">
              <Image
                  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&q=80"
                  alt="Sculpture du moment — céramique O Grès de la Terre"
                  width={600}
                  height={560}
                  className="h-[320px] w-full object-cover md:h-[420px]"
                  sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>

            {/* Right: text */}
            <div className="flex-1 pt-2">
              {/* Label */}
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                — Coup de projecteur —
              </p>

              {/* Title */}
              <h2 className="mt-3 font-serif text-5xl italic leading-tight text-primary md:text-6xl">
                Sculpture
                <br />
                du moment
              </h2>

              {/* Body */}
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground">
                <p>
                  La sculpture du moment naît d'une rencontre entre la matière
                  et l'instinct. La terre, encore fraîche, garde l'empreinte du
                  geste, la mémoire du toucher.
                </p>
                <p>
                  Je travaille à l'écoute, de ce que la forme veut devenir, de ce
                  que mes mains savent sans le dire. Il y a quelque chose
                  d'intime dans ce dialogue silencieux avec l'argile.
                </p>
                <p>
                  Chaque pièce porte en elle une tension douce entre contrôle
                  et abandon. Ce que je cherche : une forme qui respire, qui
                  semble avoir toujours existé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}