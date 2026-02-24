import type { Metadata } from "next";
import { CollectionContent } from "@/components/gallery/collection-content";
import { mockProducts, mockCategories } from "@/lib/mock-data";

export const metadata: Metadata = {
    title: "Galerie | O Grès de la Terre",
    description: "Céramiste indépendante, je travaille l'argile avec patience et intuition, pièce après pièce.",
};

interface SearchParams {
    category?: string;
}

export default function GalleryPage({
                                        searchParams,
                                    }: {
    searchParams: SearchParams;
}) {
    const initialCategory = searchParams.category || "Tout voir";

    return (
        <CollectionContent
            initialCategories={mockCategories}
            initialProducts={mockProducts}
            initialCategory={initialCategory}
        />
    );
}