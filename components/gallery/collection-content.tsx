'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    badge?: string | null;
    price?: number | null;
    slug: string;
}

interface Category {
    name: string;
    productCount: number;
}

interface Props {
    initialCategories: Category[];
    initialProducts: Product[];
    initialCategory: string;
}

export default function CollectionContent({
                                              initialCategories,
                                              initialProducts,
                                              initialCategory,
                                          }: Props) {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [isPending, startTransition] = useTransition();

    const tabs = ["Tout Voir", ...initialCategories.map((c) => c.name)];

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        startTransition(() => {
            if (category === "Tout Voir") {
                router.push("/galerie");
            } else {
                router.push(`/galerie?category=${encodeURIComponent(category)}`);
            }
        });
    };

    return (
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
            {/* Page Header */}
            <div className="text-center">
                <h1 className="font-kufam font-semibold text-4xl text-primary md:text-5xl lg:text-6xl ">
                    Galerie
                </h1>
            </div>

            {/* Category Tabs */}
            <nav
                className="mt-10 flex flex-wrap items-center justify-center gap-6 border-b border-border pb-4"
                aria-label="Filtrer par catégorie"
            >
                {tabs.map((cat) => (
                    <button
                        key={cat}
                        type="button"
                        onClick={() => handleCategoryChange(cat)}
                        disabled={isPending}
                        className={`text-sm transition-colors disabled:opacity-50 ${
                            activeCategory === cat
                                ? "border-b-2 border-chart-5 pb-[14px] font-medium text-chart-5"
                                : "pb-[16px] text-muted-foreground hover:text-chart-5"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </nav>

            {/* Active Filter Display */}
            {activeCategory !== "Tout Voir" && (
                <div className="mt-6 flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground">
                        Catégorie active :{" "}
                        <strong className="text-foreground">{activeCategory}</strong>
                    </span>
                    <button
                        onClick={() => handleCategoryChange("Tout Voir")}
                        className="text-xs text-primary underline underline-offset-2 hover:text-primary/80"
                    >
                        Réinitialiser
                    </button>
                </div>
            )}

            {/* Loading State */}
            {isPending && (
                <div className="mt-12 text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-foreground border-r-transparent" />
                    <p className="mt-4 text-sm text-muted-foreground">
                        Chargement des produits...
                    </p>
                </div>
            )}

            {/* Product Grid */}
            {!isPending && (
                <>
                    {initialProducts.length === 0 ? (
                        <div className="mt-12 text-center">
                            <p className="text-sm text-muted-foreground">
                                Aucun produit trouvé dans cette catégorie.
                            </p>
                        </div>
                    ) : (
                        <>
                            <p className="mt-8 text-center text-sm text-muted-foreground">
                                {initialProducts.length} produit
                                {initialProducts.length > 1 ? "s" : ""} trouvé
                                {initialProducts.length > 1 ? "s" : ""}
                            </p>
                            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                                {initialProducts.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/galerie/${product.slug}`}  // ← slug au lieu de id
                                        className="group"
                                    >
                                        <div className="relative aspect-square overflow-hidden bg-muted">
                                            <Image
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            {product.badge && (
                                                <span className="absolute left-3 top-3 rounded-sm bg-primary px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                                                    {product.badge}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="mt-4 font-serif text-base font-medium text-foreground">
                                            {product.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {product.description}
                                        </p>
                                        {product.price && (
                                            <p className="mt-2 text-sm font-medium text-foreground">
                                                {product.price.toFixed(2)} €
                                            </p>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}