export function AboutStory() {
    return (
        <section className="px-6 py-16 md:py-20">
            <div className="mx-auto max-w-4xl">
                {/* Two-column text layout */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                    {/* Left column */}
                    <p className="text-justify text-[15px] leading-relaxed text-foreground">
                        Mon approche se démarque résolument des productions en
                        série : ici, chaque pièce est pensée et façonnée à la
                        main, ce qui en fait un objet véritablement unique. Le
                        modelage manuel est au cœur de ma pratique et me permet
                        de donner vie à des créations authentiques, adaptées à
                        vos envies et à votre sensibilité, qu'il s'agisse
                        d'illuminer votre intérieur avec une lampe chaleureuse,
                        d'apporter une touche d'élégance avec un vase aux formes
                        travaillées, ou de sublimer un espace grâce à une
                        sculpture expressive.
                    </p>

                    {/* Right column */}
                    <div className="space-y-6 text-justify text-[15px] leading-relaxed text-foreground">
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
            </div>
        </section>
    );
}