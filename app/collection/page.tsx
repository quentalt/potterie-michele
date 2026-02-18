import { prisma } from "@/lib/prisma";
import CollectionContent from "@/components/collection-content";

export default async function CollectionPage({
                                                 searchParams,
                                             }: {
    searchParams: { category?: string };
}) {
    const activeCategory = searchParams.category || "Voir Tout";

    const [rawCategories, products] = await Promise.all([
        prisma.product.findMany({
            select: { category: true },
            distinct: ["category"],
            orderBy: { category: "asc" },
        }),
        prisma.product.findMany({
            where:
                activeCategory !== "Voir Tout"
                    ? { category: activeCategory }
                    : undefined,
            orderBy: { createdAt: "desc" },
        }),
    ]);

    const categories = rawCategories.map((p) => ({
        name: p.category,
        productCount: 0, // optionnel, à remplir si besoin
    }));

    const formattedProducts = products.map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        image: p.image,
        category: p.category,
        badge: p.badge,
        price: p.price ?? null,
        slug: p.slug,
    }));

    return (
        <CollectionContent
            initialCategories={categories}
            initialProducts={formattedProducts}
            initialCategory={activeCategory}
        />
    );
}