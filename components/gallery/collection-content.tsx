'use client';

import Image from "next/image";
import Link from "next/link";

export interface Product {
    id: string;
    name: string;
    description: string;
    longDescription?: string;
    image: string;
    category: string;
    badge?: string | null;
    price?: number | null;
    slug: string;
}

export interface Category {
    name: string;
    productCount: number;
}

interface Props {
    initialCategories: Category[];
    initialProducts: Product[];
    initialCategory: string;
}

/* ─────────────────────────────────────────────
   SHARED: Category tabs
───────────────────────────────────────────── */
function CategoryTabs({
                          tabs,
                          activeCategory,
                      }: {
    tabs: string[];
    activeCategory: string;
}) {
    return (
        <nav className="flex flex-wrap items-center justify-center gap-8 border-b border-border pb-0">
            {tabs.map((cat) => {
                const isActive = activeCategory === cat;
                const href = cat === "Tout voir" ? "/galerie" : `/galerie?category=${encodeURIComponent(cat)}`;
                return (
                    <Link
                        key={cat}
                        href={href}
                        className={`relative pb-3 text-sm transition-colors ${
                            isActive
                                ? "font-semibold text-primary"
                                : "text-foreground hover:text-primary"
                        }`}
                    >
                        {cat}
                        {isActive && (
                            <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-primary" />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}

/* ─────────────────────────────────────────────
   VIEW 1 — Hero + grouped overview grid
───────────────────────────────────────────── */
function GalleryOverview({
                             products,
                             categories,
                             tabs,
                         }: {
    products: Product[];
    categories: Category[];
    tabs: string[];
}) {
    // group products by category, max 4 per group
    const grouped: Record<string, Product[]> = {};
    products.forEach((p) => {
        if (!grouped[p.category]) grouped[p.category] = [];
        if (grouped[p.category].length < 4) grouped[p.category].push(p);
    });

    return (
        <>
            {/* HERO */}
            <section className="px-6 pt-10 pb-0">
                <div className="mx-auto max-w-4xl">
                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
                        <div className="w-full flex-shrink-0 overflow-hidden rounded-sm md:w-[42%]">
                            <Image
                                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80"
                                alt="Mains façonnant l'argile"
                                width={600}
                                height={520}
                                className="h-[320px] w-full object-cover md:h-[400px]"
                                priority
                            />
                        </div>
                        <div className="flex-1 pt-2">
                            <h1 className="font-serif text-5xl italic text-primary md:text-6xl">
                                Galerie
                            </h1>
                            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-primary md:text-4xl">
                                Déambulation dans
                                <br />
                                mon univers
                            </h2>
                            <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-foreground">
                                <p>Céramiste indépendante, je travaille l'argile avec patience et intuition, pièce après pièce.</p>
                                <p>Mon atelier est un espace de recherche autant que de création, où chaque série nourrit la suivante.</p>
                                <p>Ce qui m'anime : la matière, le geste, et ce moment où une forme trouve sa juste place.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TABS */}
            <section className="px-6 pt-12 pb-0">
                <div className="mx-auto max-w-4xl">
                    <CategoryTabs tabs={tabs} activeCategory="Tout voir" />
                </div>
            </section>

            {/* GROUPED GRID */}
            <section className="px-6 py-12">
                <div className="mx-auto max-w-4xl space-y-14">
                    {Object.entries(grouped).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="mb-5 font-serif text-base font-semibold text-chart-5">
                                {category === "Vases" ? "Vases et objets décoratifs" :
                                    category === "Sculptures" ? "Sculptures et divers" : category}
                            </h3>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
                                {items.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/galerie/${product.slug}`}
                                        className="group"
                                    >
                                        <div className="relative aspect-square overflow-hidden rounded-sm bg-muted">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 640px) 50vw, 33vw"
                                            />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

/* ─────────────────────────────────────────────
   VIEW 2 — Category grid (2-col + name/desc)
───────────────────────────────────────────── */
function GalleryCategoryView({
                                 category,
                                 products,
                                 tabs,
                             }: {
    category: string;
    products: Product[];
    tabs: string[];
}) {
    const filtered = products.filter((p) => p.category === category);

    return (
        <>
            <section className="px-6 pt-10 pb-0 text-center">
                <h1 className="font-serif text-5xl italic text-primary md:text-6xl">
                    Galerie
                </h1>
            </section>

            <section className="px-6 pt-8 pb-0">
                <div className="mx-auto max-w-4xl">
                    <CategoryTabs tabs={tabs} activeCategory={category} />
                </div>
            </section>

            <section className="px-6 py-12">
                <div className="mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                        {filtered.map((product) => (
                            <Link
                                key={product.id}
                                href={`/galerie/${product.slug}`}
                                className="group"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                    />
                                </div>
                                <h3 className="mt-3 font-serif text-sm font-semibold italic text-primary">
                                    {product.name},
                                </h3>
                                <p className="mt-1 text-[13px] leading-relaxed text-foreground">
                                    {product.description}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-14 flex justify-end">
                        <Link
                            href="/galerie"
                            className="rounded-sm border border-border bg-muted px-5 py-2 text-sm text-foreground transition-colors hover:bg-border"
                        >
                            Retour tout voir
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

/* ─────────────────────────────────────────────
   MAIN — orchestrates views based on URL
───────────────────────────────────────────── */
export function CollectionContent({
                                      initialCategories,
                                      initialProducts,
                                      initialCategory,
                                  }: Props) {
    const categories = initialCategories ?? [];
    const products = initialProducts ?? [];
    const tabs = ["Tout voir", ...categories.map((c) => c.name)];
    const activeCategory = initialCategory || "Tout voir";

    if (activeCategory !== "Tout voir") {
        return (
            <GalleryCategoryView
                category={activeCategory}
                products={products}
                tabs={tabs}
            />
        );
    }

    return (
        <GalleryOverview
            products={products}
            categories={categories}
            tabs={tabs}
        />
    );
}