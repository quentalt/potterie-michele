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

export const mockProducts: Product[] = [
    // ── Luminaires ──
    {
        id: "1",
        slug: "lampe-nuage",
        name: "Lampe nuage",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem. Curabitur hendrerit diam et mauris. Etiam porta nunc euismod dui. Maecenas a lectus. In hac habitasse platea dictumst. Suspendisse id massa. Nullam porta velit sed lacus.\n\nMaecenas condimentum tincidunt lorem. Vestibulum vel tellus. Sed vulputate. Morbi massa nunc, convallis a, commodo gravida, tincidunt sed, turpis. Aenean ornare viverra est. Maecenas vestibulum mollis diam.",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
        category: "Luminaires",
        price: null,
    },
    {
        id: "3",
        slug: "lampe-boule",
        name: "Lampe boule",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem. Curabitur hendrerit diam et mauris. Etiam porta nunc euismod dui.\n\nMaecenas condimentum tincidunt lorem. Vestibulum vel tellus. Sed vulputate.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        category: "Luminaires",
        price: null,
    },
    {
        id: "4",
        slug: "lampe-oeil",
        name: "Lampe œil",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem. Curabitur hendrerit diam et mauris.\n\nMaecenas condimentum tincidunt lorem. Vestibulum vel tellus.",
        image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80",
        category: "Luminaires",
        price: null,
    },
    {
        id: "5",
        slug: "lampe-grille-etoile",
        name: "Lampe grille motif étoile",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem. Curabitur hendrerit diam et mauris. Etiam porta nunc euismod dui.\n\nMaecenas condimentum tincidunt lorem. Vestibulum vel tellus. Sed vulputate. Morbi massa nunc.",
        image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80",
        category: "Luminaires",
        price: null,
    },
    {
        id: "6",
        slug: "lampe-nuage-2",
        name: "Lampe nuage",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem. Curabitur hendrerit diam et mauris.\n\nMaecenas condimentum tincidunt lorem. Vestibulum vel tellus.",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
        category: "Luminaires",
        price: null,
    },
    // ── Vases ──
    {
        id: "7",
        slug: "vase-zebre",
        name: "Vase zèbre",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem. Curabitur hendrerit diam et mauris.\n\nMaecenas condimentum tincidunt lorem. Vestibulum vel tellus.",
        image: "https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?w=800&q=80",
        category: "Vases",
        price: null,
    },
    {
        id: "8",
        slug: "vase-dentelle",
        name: "Vase dentelle",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.\n\nMaecenas condimentum tincidunt lorem.",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
        category: "Vases",
        price: null,
    },
    {
        id: "9",
        slug: "vase-colonne",
        name: "Vase colonne",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem. Curabitur hendrerit diam et mauris.\n\nMaecenas condimentum tincidunt lorem.",
        image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=800&q=80",
        category: "Vases",
        price: null,
    },
    {
        id: "10",
        slug: "vase-froisse",
        name: "Vase froissé",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.\n\nMaecenas condimentum tincidunt lorem. Vestibulum vel tellus.",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
        category: "Vases",
        price: null,
    },
    // ── Sculptures ──
    {
        id: "12",
        slug: "sculpture-lion",
        name: "Sculpture lion",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.\n\nMaecenas condimentum tincidunt lorem.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        category: "Sculptures",
        price: null,
    },
    {
        id: "13",
        slug: "sculpture-fleurs",
        name: "Sculpture fleurs",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem. Curabitur hendrerit diam.\n\nMaecenas condimentum tincidunt lorem.",
        image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&q=80",
        category: "Sculptures",
        price: null,
    },
    {
        id: "14",
        slug: "sculpture-visage",
        name: "Sculpture visage",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.\n\nMaecenas condimentum tincidunt lorem. Vestibulum vel tellus.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        category: "Sculptures",
        price: null,
    },
    // ── Divers ──
    {
        id: "15",
        slug: "miroir-argile",
        name: "Miroir argile",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.\n\nMaecenas condimentum tincidunt lorem.",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
        category: "Divers",
        price: null,
    },
    {
        id: "16",
        slug: "bol-gres",
        name: "Bol grès",
        description: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.",
        longDescription: "In sem ipsum, faucibus quis, varius tristique, porta eget, lorem.\n\nMaecenas condimentum tincidunt lorem.",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
        category: "Divers",
        price: null,
    },
];

export const mockCategories: Category[] = [
    { name: "Luminaires", productCount: 6 },
    { name: "Vases", productCount: 4 },
    { name: "Sculptures", productCount: 4 },
    { name: "Divers", productCount: 2 },
];

export function getProductBySlug(slug: string): Product | undefined {
    return mockProducts.find((p) => p.slug === slug);
}