import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const PRODUCTS = [
    {
        id: "1",
        name: "Nom du produit 1",
        description: "Description du produit 1",
        image: "/images/produit1.jpg",
        category: "Catégorie A",
        badge: "Nouveau",
        price: 29.99,
        slug: "produit-1",
        stock: 5,
    },
    {
        id: "2",
        name: "Nom du produit 2",
        description: "Description du produit 2",
        image: "/images/produit2.jpg",
        category: "Catégorie B",
        badge: null,
        price: 49.99,
        slug: "produit-2",
        stock: 0,
    },
    {
        id: "3",
        name: "Nom du produit 3",
        description: "Description du produit 3",
        image: "/images/produit3.jpg",
        category: "Catégorie A",
        badge: "Promo",
        price: 19.99,
        slug: "produit-3",
        stock: 12,
    },
];

interface ProductPageProps {
    params: Promise<{ slug: string }>;  // ← Promise en Next.js 15
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;

    const product = PRODUCTS.find((p) => p.slug === slug);

    if (!product) {
        return notFound();
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <Link
                href="/collection"
                className="text-sm text-gray-500 hover:underline mb-6 inline-block"
            >
                ← Retour aux produits
            </Link>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Image */}
                <div className="relative w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            Pas d&apos;image
                        </div>
                    )}

                    {product.badge && (
                        <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                            {product.badge}
                        </span>
                    )}
                </div>

                {/* Infos */}
                <div className="flex flex-col justify-between">
                    <div>
                        <p className="text-sm text-gray-500 uppercase mb-2">
                            {product.category}
                        </p>

                        <h1 className="text-3xl font-bold mb-4">
                            {product.name}
                        </h1>

                        <p className="text-gray-600 mb-6">
                            {product.description}
                        </p>

                        {product.price !== null && product.price !== undefined && (
                            <p className="text-2xl font-semibold mb-4">
                                {product.price.toFixed(2)} €
                            </p>
                        )}

                        <p
                            className={`text-sm font-medium ${
                                product.stock > 0 ? "text-green-600" : "text-red-500"
                            }`}
                        >
                            {product.stock > 0
                                ? `En stock (${product.stock})`
                                : "Rupture de stock"}
                        </p>
                    </div>

                    <button
                        disabled={product.stock === 0}
                        className={`mt-6 px-6 py-3 rounded-xl font-medium transition ${
                            product.stock > 0
                                ? "bg-black text-white hover:bg-gray-800"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
}