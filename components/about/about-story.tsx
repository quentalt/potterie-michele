import Image from "next/image";

export function AboutStory() {
    return (
        <section className="px-6 py-16 md:py-20">
            <div className="mx-auto max-w-4xl">
                {/* Two-column layout: editorial block left, text right — matching PDF */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                    {/* Left: newspaper-style editorial encart */}
                    <div className="border border-foreground/25 p-5">
                        {/* Header */}
                        <div className="mb-4 border-b border-foreground/25 pb-3">
                            <p className="font-serif text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                                Rencontre avec
                            </p>
                            <h3 className="font-serif text-2xl font-black uppercase leading-tight text-foreground">
                                Michèle Rey,
                            </h3>
                            <p className="font-serif text-[11px] font-semibold uppercase tracking-wide text-foreground/80">
                                céramiste artisanale à Auxonne
                            </p>
                        </div>

                        {/* Two-column text inside the encart */}
                        <div className="grid grid-cols-2 gap-3">
                            <p className="text-[11px] leading-relaxed text-foreground/75">
                                Michèle Rey s'est installée à Auxonne il y a 45
                                ans, dans une maison avec un atelier qu'elle
                                partage avec son mari ébéniste. Michèle dessine,
                                peint, brode, et ramasse de la terre du Mont
                                Roland avec ses filles. «Au début, nous nous
                                amusions avec cette argile dans la maison.»
                            </p>
                            <p className="text-[11px] leading-relaxed text-foreground/75">
                                Alors octobrane de vie, Michèle se met à
                                fabriquer des objets en grès et s'oriente à
                                suivre une formation de céramiste pendant 4 ans.
                                «Au fil des années, j'ai perfectionné ma
                                pratique et intégré des associations de poterie.
                                Si j'ai pu développer ma technique et affirmer
                                mon approche artistique.»
                            </p>
                        </div>

                        {/* Small portrait photo inside the encart */}
                        <div className="mt-4 overflow-hidden rounded-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                                alt="Michèle Rey dans son atelier"
                                width={600}
                                height={280}
                                className="h-[140px] w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: story text column */}
                    <div className="space-y-5 text-justify text-[15px] leading-relaxed text-foreground">
                        <p>
                            Mon approche se démarque résolument des productions
                            en série : ici, chaque pièce est pensée et façonnée
                            à la main, ce qui en fait un objet véritablement
                            unique. Le modelage manuel est au cœur de ma
                            pratique et me permet de donner vie à des créations
                            authentiques, adaptées à vos envies et à votre
                            sensibilité, qu'il s'agisse d'illuminer votre
                            intérieur avec une lampe chaleureuse, d'apporter une
                            touche d'élégance avec un vase aux formes
                            travaillées, ou de sublimer un espace grâce à une
                            sculpture expressive.
                        </p>
                        <p>
                            Parce que l'argile garde en elle la trace des mains
                            qui l'ont pétrie, chaque objet porte en lui une âme
                            et une valeur singulière.
                        </p>
                        <p>
                            Je vous accueille dans mon atelier d'Auxonne, un
                            espace de création et de partage où vous pourrez
                            découvrir mes collections et échanger autour de vos
                            projets. Mon objectif est de vous proposer des
                            créations sur mesure, pensées en harmonie avec votre
                            style et votre univers décoratif.
                        </p>
                    </div>
                </div>

                {/* Decorative image bottom-right — ceramic lamp/sculpture like PDF */}
                <div className="mt-10 flex justify-end">
                    <div className="w-full overflow-hidden md:w-2/5">
                        <Image
                            src="https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&q=80"
                            alt="Sculpture céramique décorative"
                            width={600}
                            height={420}
                            className="h-[300px] w-full object-cover md:h-[380px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}