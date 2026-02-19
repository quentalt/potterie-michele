import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const PRODUCTS = [
    {
        id: "1",
        name: "Statuette boudha",
        description: "jolie pièce en terre cuite, façonnée à la main avec soin et passion. Chaque détail de cette statue de Bouddha a été minutieusement sculpté pour capturer l'essence de la sérénité et de la sagesse. Avec sa finition lisse et ses lignes élégantes, cette pièce unique apportera une touche de tranquillité et d'harmonie à votre espace de vie.",
        image: "https://ogresdelaterre.fr/wp-content/uploads/2021/12/IMG_1789-768x1024.jpg",
        category: "",
        badge: "Nouveau",
        price: 29.99,
        stock: 10,
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
        stock: 10,
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
        stock: 10,
        slug: "vase-ceramique-2",
    },
];

interface ProductPageProps {
    params: {
        slug: string;
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = PRODUCTS.find((p) => p.slug === params.slug);

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