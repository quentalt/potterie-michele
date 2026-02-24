import Image from "next/image";
import Link from "next/link";

export function EventsMarches() {
    return (
        <section className="px-6 pt-14 pb-0">
            <div className="mx-auto max-w-4xl">
                {/* Title row */}
                <div className="flex items-end justify-between">
                    <div>
                        <h2 className="font-serif text-5xl italic text-primary md:text-6xl">
                            Marchés
                        </h2>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Saison 2026
                        </p>
                    </div>
                    <Link
                        href="/evenements"
                        className="mb-1 flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors"
                    >
                        Voir tout <span aria-hidden>→</span>
                    </Link>
                </div>

                {/* Full-width market image */}
                <div className="mt-6 overflow-hidden rounded-sm">
                    <Image
                        src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=1200&q=80"
                        alt="Marché de créateurs céramique"
                        width={1200}
                        height={440}
                        className="h-[260px] w-full object-cover md:h-[380px]"
                    />
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   3. EVENT CARDS – 3-column poster grid
───────────────────────────────────────────── */
const events = [
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
