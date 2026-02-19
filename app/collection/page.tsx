import {prisma} from "@/lib/prisma";
import CollectionContent from "@/components/collection-content";

export default async function CollectionPage({
                                                 searchParams,
                                             }: {
    searchParams: { category?: string };
}) {
    const { category } = searchParams;
    const activeCategory = category || "Voir Tout";

    const [rawCategories, products] = await Promise.all([
        prisma.product.groupBy({
            by: ["category"],
            _count: { category: true },
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

    const categories = rawCategories.map((p: { category: string; _count: { category: number } }) => ({
        name: p.category,
        productCount: p._count.category,
    }));

    const formattedProducts = products.map((p: {
        id: string;
        name: string;
        description: string | null;
        image: string | null;
        category: string;
        badge: string | null;
        price: number | null;
        slug: string;
    }) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        image: p.image,
        category: p.category,
        badge: p.badge,
        price: p.price,
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