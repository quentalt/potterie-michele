import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const PRODUCTS = [
    {
        id: "1",
        name: "Statuette boudha",
        description: "jolie pièce en terre cuite, façonnée à la main avec soin et passion. Chaque détail de cette statue de Bouddha a été minutieusement sculpté pour capturer l'essence de la sérénité et de la sagesse. Avec sa finition lisse et ses lignes élégantes, cette pièce unique apportera une touche de tranquillité et d'harmonie à votre espace de vie.",
        image: "https://ogresdelaterre.fr/wp-content/uploads/2021/12/IMG_1789-768x1024.jpg",
        category: "Statuettes",
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
        category: "Vases",
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
        category: "Vases",
        badge: "Promo",
        price: 19.99,
        stock: 10,
        slug: "vase-ceramique-2",
    },
];

interface ProductPageProps {
    params: Promise<{ slug: string }>;
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
                href="/galerie"
                className="text-sm text-gray-500 hover:underline mb-6 inline-block"
            >
                ← Retour aux produits
            </Link>

            <section className="px-6 pt-10">
                <div className="mx-auto max-w-4xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 896px"
                            priority
                        />
                    </div>
                    <div className="mt-8 max-w-2xl">
                        <h2 className="font-serif text-xl font-semibold text-chart-5">
                            {product.name},
                        </h2>
                    </div>


                {/* Infos */}
                <div className="mt-1 max-w-2xl">
                    <div>
                        <p className="text-gray-600 mb-6">
                            {product.description}
                        </p>

                    </div>

                </div>
                </div>
            </section>
        </div>
    );
}
