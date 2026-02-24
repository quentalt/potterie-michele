import Image from "next/image";
/* ─────────────────────────────────────────────
   3. ATELIER SECTION – big image + overlapping
      small image + text
───────────────────────────────────────────── */
export function ContactAtelier() {
    return (
        <section className="px-6 pb-16">
            <div className="mx-auto max-w-4xl">
                {/* Images: large building left, small workshop overlapping bottom-right */}
                <div className="relative">
                    {/* Main large image */}
                    <div className="overflow-hidden rounded-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80"
                            alt="Bâtisse de l'atelier O Grès de la Terre à Auxonne"
                            width={1200}
                            height={500}
                            className="h-[260px] w-full object-cover md:h-[360px]"
                        />
                    </div>

                    {/* Small overlapping image bottom-right */}
                    <div className="absolute -bottom-10 right-0 w-[38%] overflow-hidden rounded-sm border-4 border-background shadow-lg md:w-[32%]">
                        <Image
                            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80"
                            alt="Mains façonnant l'argile dans l'atelier"
                            width={400}
                            height={280}
                            className="h-[140px] w-full object-cover md:h-[180px]"
                        />
                    </div>
                </div>

                {/* Text below images — left column only to leave space for overlapping image */}
                <div className="mt-14 max-w-[55%]">
                    <h3 className="font-serif text-lg font-semibold text-primary">
                        L'atelier
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-foreground">
                        Integer mauris sem, convallis ut, consequat in,
                        sollicitudin sed, leo. Cras purus elit, hendrerit ut,
                        egestas eget, sagittis at, nulla. Integer justo dui,
                        faucibus dictum, convallis sodales, accumsan id, risus.
                        Aenean risus. Vestibulum scelerisque placerat sem.
                    </p>
                    <p className="mt-4 text-[13px] leading-relaxed text-foreground">
                        In eget sapien vitae massa rhoncus lacinia. Nullam at
                        leo nec metus aliquam semper. Phasellus tincidunt, ante
                        nec lacinia ultrices, quam mi dictum libero, vitae
                        bibendum turpis elit ut lectus. Sed diam ante, lobortis
                        sed, dignissim sit amet, condimentum in.
                    </p>
                </div>
            </div>
        </section>
    );
}
