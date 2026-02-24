import Image from "next/image";

export function EventsHero() {
    return (
        <section className="px-6 pt-10 pb-0">
            <div className="mx-auto max-w-4xl">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
                    {/* Portrait image */}
                    <div className="w-full flex-shrink-0 overflow-hidden rounded-sm md:w-[42%]">
                        <Image
                            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                            alt="Stand de marché de créateurs céramique"
                            width={600}
                            height={500}
                            className="h-[300px] w-full object-cover md:h-[380px]"
                            priority
                        />
                    </div>

                    {/* Text block */}
                    <div className="flex-1">
                        <h1 className="font-serif text-5xl italic text-primary md:text-6xl">
                            Évènements
                        </h1>
                        <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-4xl">
                            Rencontres, marchés
                            <br />
                            et expositions
                        </h2>

                        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground">
                            <p>
                                Découvrez les marchés de créateurs et
                                événements dédiés à la céramique dans notre
                                région. Rencontrez les artisans locaux, admirez
                                leurs créations uniques et trouvez la pièce
                                parfaite pour votre intérieur.
                            </p>
                            <p>
                                Des rendez-vous conviviaux pour célébrer le
                                savoir-faire bourguignon et la beauté de la
                                terre cuite.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}