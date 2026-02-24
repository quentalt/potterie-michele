import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { mockProducts, mockCategories, getProductBySlug } from "@/lib/mock-data";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return mockProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    return {
        title: product ? `${product.name} | Galerie | O Grès de la Terre` : "Galerie",
    };
}

function CategoryTabs({ activeCategory }: { activeCategory: string }) {
    const tabs = ["Tout voir", ...mockCategories.map((c) => c.name)];
    return (
        <nav className="flex flex-wrap items-center justify-center gap-8 border-b border-border pb-0">
            {tabs.map((cat) => {
                const isActive = activeCategory === cat;
                const href =
                    cat === "Tout voir"
                        ? "/galerie"
                        : `/galerie?category=${encodeURIComponent(cat)}`;
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

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) notFound();

    const paragraphs = (product.longDescription || product.description).split("\n\n");

    return (
        <>
            {/* Title */}
            <section className="px-6 pt-10 pb-0 text-center">
                <h1 className="font-serif text-5xl italic text-primary md:text-6xl">
                    Galerie
                </h1>
            </section>

            {/* Tabs */}
            <section className="px-6 pt-8 pb-0">
                <div className="mx-auto max-w-4xl">
                    <CategoryTabs activeCategory={product.category} />
                </div>
            </section>

            {/* Full-width product image */}
            <section className="px-6 pt-10">
                <div className="mx-auto max-w-4xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-muted">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 896px"
                            priority
                        />
                    </div>

                    {/* Name + description */}
                    <div className="mt-8 max-w-2xl">
                        <h2 className="font-serif text-xl font-semibold italic text-primary">
                            {product.name},
                        </h2>
                        <div className="mt-4 space-y-4">
                            {paragraphs.map((p, i) => (
                                <p key={i} className="text-[14px] leading-relaxed text-foreground">
                                    {p}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Back button bottom-right */}
                    <div className="mt-14 flex justify-end pb-16">
                        <Link
                            href={`/galerie?category=${encodeURIComponent(product.category)}`}
                            className="rounded-sm border border-border bg-muted px-5 py-2 text-sm text-foreground transition-colors hover:bg-border"
                        >
                            Retour {product.category.toLowerCase()}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}