import Image from "next/image";

export function EventsHero() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-20 bg-background">
               <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
                    {/* Left image — aspect-ratio container, no rounded corners */}
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

                    {/* Text block */}
                    <div className="flex-1">
                        <h1 className="font-kufam font-semibold text-5xl text-primary md:text-6xl">
                            Événements
                        </h1>
                        <h2 className="mt-3 font-kufam font-medium text-3xl text-brown md:text-4xl">
                            Rencontres, marchés
                            <br />
                            et expositions
                        </h2>

                        <div className="mt-6 space-y-4 text-[15px] leading-relaxed font-manrope">
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
            </section>
    );
}