import CollectionContent from "@/components/collection-content";

const PRODUCTS = [
    {
        id: "1",
        name: "Statuette boudha",
        description: "jolie pièce en terre cuite, façonnée à la main avec soin et passion. Chaque détail de cette statue de Bouddha a été minutieusement sculpté pour capturer l'essence de la sérénité et de la sagesse. Avec sa finition lisse et ses lignes élégantes, cette pièce unique apportera une touche de tranquillité et d'harmonie à votre espace de vie.",
        image: "https://ogresdelaterre.fr/wp-content/uploads/2021/12/IMG_1789-768x1024.jpg",
        category: "",
        badge: "Nouveau",
        price: 29.99,
        slug: "statuette-boudha",
    },
    {
        id: "2",
        name: "Vase en céramique",
        description: "Description du produit 2",
        image: "https://ogresdelaterre.fr/wp-content/uploads/2021/11/IMG_1914-768x1024.jpg",
        category: "Catégorie B",
        badge: null,
        price: 49.99,
        slug: "vase-ceramique",
    },
    {
        id: "3",
        name: "Vase en céramique",
        description: "Description du produit 3",
        image: "https://ogresdelaterre.fr/wp-content/uploads/2021/06/1-photos-du-240219-058.jpg",
        category: "Catégorie A",
        badge: "Promo",
        price: 19.99,
        slug: "vase-ceramique-2",
    },
];

export default async function CollectionPage({
                                                 searchParams,
                                             }: {
    searchParams: { category?: string };
}) {
    const activeCategory = searchParams.category || "Voir Tout";

    // Filtrage par catégorie
    const products =
        activeCategory !== "Voir Tout"
            ? PRODUCTS.filter((p) => p.category === activeCategory)
            : PRODUCTS;

    // Catégories uniques extraites des produits
    const categories = [
        ...new Set(PRODUCTS.map((p) => p.category)),
    ].map((name) => ({ name, productCount: 0 }));

    return (
        <CollectionContent
            initialCategories={categories}
            initialProducts={products}
            initialCategory={activeCategory}
        />
    );
}