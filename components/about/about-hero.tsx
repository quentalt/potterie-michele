import Image from "next/image";

export function AboutHero() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-20 bg-background">
                {/* Two-column layout: portrait left, title+text right — aligned at BOTTOM */}
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
                    {/* Portrait image */}
                    <div className="relative w-full md:w-1/2">
                        <div className="aspect-[3/4] overflow-hidden rounded-sm bg-muted">
                            <Image
                                src="/images/about-hero.jpg"
                                alt="Michèle Rey, céramiste à Auxonne dans son atelier"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Title + body block — aligns to bottom of portrait */}
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

                {/* Two images side by side — matching PDF layout (larger left ~60%, smaller right ~40%) */}
                <div className="mt-10 grid grid-cols-5 gap-4">
                    {/* Hands shaping clay — wider */}
                    <div className="col-span-3 overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=80"
                            alt="Mains d'artisan façonnant l'argile"
                            width={900}
                            height={500}
                            className="h-[240px] w-full object-cover md:h-[340px]"
                        />
                    </div>
                    {/* Ceramic figurines — narrower */}
                    <div className="col-span-2 overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=600&q=80"
                            alt="Figurines en céramique artisanale"
                            width={600}
                            height={500}
                            className="h-[240px] w-full object-cover md:h-[340px]"
                        />
                    </div>
                </div>
        </section>
    );
}