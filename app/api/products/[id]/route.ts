import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

// GET /api/products/[id]
export async function GET(
    _req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    try {
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id, 10) },
        });

        if (!product) {
            return NextResponse.json(
                { error: "Produit introuvable." },
                { status: 404 }
            );
        }

        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        console.error("[GET /api/products/[id]]", error);
        return NextResponse.json(
            { error: "Erreur lors de la récupération du produit." },
            { status: 500 }
        );
    }
}