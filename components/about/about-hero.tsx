import Image from "next/image";

export function AboutHero() {
    return (
        <section className="px-6 pt-10 pb-0">
            <div className="mx-auto max-w-4xl">
                {/* Two-column layout: portrait left, title right */}
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
                    {/* Portrait image */}
                    <div className="w-full flex-shrink-0 md:w-[42%]">
                        <div className="overflow-hidden rounded-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80"
                                alt="Michèle Rey, céramiste à Auxonne"
                                width={600}
                                height={500}
                                className="h-[300px] w-full object-cover md:h-[380px]"
                                priority
                            />
                        </div>
                    </div>

                    {/* Title block */}
                    <div className="flex-1">
                        <h1 className="font-serif text-5xl italic text-primary md:text-6xl">
                            À propos
                        </h1>
                        <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-4xl">
                            Michèle Rey
                            <br />
                            céramiste à Auxonne
                        </h2>

                        {/* Body text */}
                        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground">
                            <p>
                                Basée à Auxonne, je façonne à la main lampes,
                                vases, miroirs et sculptures en grès et
                                porcelaine. Chaque création naît d'un travail
                                artisanal minutieux, sans tour, grâce au
                                modelage qui offre des formes uniques,
                                organiques et expressives.
                            </p>
                            <p>
                                Dans mon atelier{" "}
                                <strong>O GRÈS DE LA TERRE</strong>, je conçois
                                des objets décoratifs et utilitaires empreints
                                de ma vision artistique : des pièces singulières
                                où textures et volumes s'épanouissent au rythme
                                du geste.
                            </p>
                            <p>
                                Le grès et la porcelaine, matériaux nobles et
                                résistants, me permettent de donner vie à des
                                créations à la fois robustes et raffinées.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Full-width clay hands image below */}
                <div className="mt-10 overflow-hidden rounded-sm">
                    <Image
                        src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80"
                        alt="Mains d'artisan façonnant l'argile"
                        width={1200}
                        height={480}
                        className="h-[280px] w-full object-cover md:h-[400px]"
                    />
                </div>
            </div>
        </section>
    );
}