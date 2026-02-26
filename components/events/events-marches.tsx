import Image from "next/image";

export function EventsMarches() {
    return (
        <section className="px-6 pt-14 pb-0">
            <div className="mx-auto max-w-4xl">
                {/* Title row — no "Voir tout" link, matching PDF */}
                <div>
                    <h2 className="font-kufam font-semibold text-5xl text-primary md:text-6xl">
                        Marchés et expositions
                    </h2>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Saison 2025 / 2026
                    </p>
                </div>

                {/* Full-width market image — no rounded corners */}
                <div className="mt-6 overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80"
                        alt="Marché de créateurs céramique artisanat"
                        width={1200}
                        height={440}
                        className="h-[260px] w-full object-cover md:h-[380px]"
                    />
                </div>
            </div>
        </section>
    );
}