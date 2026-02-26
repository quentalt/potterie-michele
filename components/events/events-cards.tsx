import Image from "next/image";

const marchesImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&q=80",
        alt: "Marché de Noël de Labergement-lès-Auxonne",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
        alt: "Marché artisanal de Concarneau",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
        alt: "Boutique éphémère O Grès de la Terre",
    },
];

export function EventsCards() {
    return (
        <section className="px-6 py-14">
            <div className="mx-auto max-w-4xl">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {marchesImages.map((item) => (
                        <div key={item.id} className="relative aspect-[3/4] overflow-hidden">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}