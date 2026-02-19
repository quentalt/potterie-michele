import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Product {
    id: number;
    name: string;
    description: string;
    price?: number | null;
    category: string;
    image?: string | null;
    badge?: string | null;
    stock: number;
}

async function getProduct(id: number): Promise<Product | null> {
    try {
        const product = await prisma.product.findUnique({
            where: { id },
        });

        if (!product) return null;

        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            image: product.image,
            badge: product.badge,
            stock: product.stock,
        };
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

async function getRelatedProducts(category: string, excludeId: number): Promise<Product[]> {
    try {
        const related = await prisma.product.findMany({
            where: {
                category,
                id: { not: excludeId },
            },
            orderBy: { createdAt: "desc" },
            take: 6,
        });

        return related.map((product) => ({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            image: product.image,
            badge: product.badge,
            stock: product.stock,
        }));
    } catch (error) {
        console.error("Error fetching related products:", error);
        return [];
    }
}

// Next.js 15 : params est une Promise
interface Props {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const productId = parseInt(id, 10);

    // Gérer un id invalide (NaN)
    if (isNaN(productId)) {
        notFound();
    }

    const product = await getProduct(productId);

    if (!product) {
        notFound();
    }

    const relatedProducts = await getRelatedProducts(product.category, product.id);

    return (
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image du produit */}
                <div>
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={600}
                            height={600}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    ) : (
                        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">No Image Available</span>
                        </div>
                    )}
                </div>

                {/* Détails du produit */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

                    {product.badge && (
                        <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full mb-4">
                            {product.badge}
                        </span>
                    )}

                    <p className="text-gray-700 mb-4">{product.description}</p>

                    {/* Fix : != null couvre null ET undefined */}
                    {product.price != null && (
                        <p className="text-xl font-semibold mb-6">
                            ${product.price.toFixed(2)}
                        </p>
                    )}

                    {product.stock > 0 ? (
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                            // TODO: brancher l'action panier (ex: onClick={handleAddToCart})
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <span className="text-red-500 font-semibold">Out of Stock</span>
                    )}
                </div>
            </div>

            {/* Produits liés */}
            {relatedProducts.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {relatedProducts.map((related) => (
                            <Link
                                key={related.id}
                                href={`/product/${related.id}`}
                                className="group block rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition"
                            >
                                <div className="relative h-48">
                                    {related.image ? (
                                        <Image
                                            src={related.image}
                                            alt={related.name}
                                            fill
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500">No Image</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{related.name}</h3>

                                    {/* Fix : != null couvre null ET undefined */}
                                    {related.price != null && (
                                        <p className="text-sm text-gray-700 mt-1">
                                            ${related.price.toFixed(2)}
                                        </p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}