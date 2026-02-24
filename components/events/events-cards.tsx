import Image from "next/image";

const marchesData = [
    {
        id: 1,
        badge: "🎪 L'Étinbulle",
        title: "Marché des créateurs et des producteurs",
        detail: "Samedi 25 Avril — 10h à 18h",
        location: "La Mellerie · 35148 Pré en Pail",
        note: "Inscriptions ouvertes pour les stands via formulaire en ligne",
        color: "bg-yellow-50 border-yellow-300",
        accent: "text-yellow-700",
        image: null,
    },
    {
        id: 2,
        badge: "9ème édition · ENTRÉE GRATUITE",
        title: "Marché Artisanal",
        detail: "Samedi 13 Décembre 2025 — 10h / 20h",
        location: "En face des Halles, Place Jean Jaurès · 29 900 Concarneau",
        note: null,
        color: "bg-blue-50 border-blue-300",
        accent: "text-blue-700",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    },
    {
        id: 3,
        badge: "🏪 Boutique éphémère",
        title: "Boutique éphémère · O Grès de la Terre",
        detail: "Du 1er au 29 décembre — Ma-Sa 13h–18h",
        location: "Auxonne",
        note: "Michèle Rey, céramiste artisanale à Auxonne, présente ses pièces uniques fabriquées sans tour de potier.",
        color: "bg-orange-50 border-orange-200",
        accent: "text-primary",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80",
    },
];


export function EventsCards() {
    return (
        <section className="px-6 py-14">
            <div className="mx-auto max-w-4xl">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {marchesData.map((event) => (
                        <div
                            key={event.id}
                            className={`flex flex-col overflow-hidden rounded-sm border ${event.color}`}
                        >
                            {/* Optional image */}
                            {event.image && (
                                <div className="h-36 w-full overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={400}
                                        height={144}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            )}

                            <div className="flex flex-1 flex-col p-4">
                                {/* Badge */}
                                <span
                                    className={`text-[10px] font-bold uppercase tracking-wider ${event.accent}`}
                                >
                                    {event.badge}
                                </span>

                                {/* Title */}
                                <h3
                                    className={`mt-2 font-serif text-lg font-bold leading-snug ${event.accent}`}
                                >
                                    {event.title}
                                </h3>

                                {/* Date & location */}
                                <p className="mt-3 text-[12px] font-semibold text-foreground">
                                    {event.detail}
                                </p>
                                <p className="mt-1 text-[11px] text-muted-foreground">
                                    📍 {event.location}
                                </p>

                                {/* Optional note */}
                                {event.note && (
                                    <p className="mt-3 text-[11px] leading-relaxed text-foreground">
                                        {event.note}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}