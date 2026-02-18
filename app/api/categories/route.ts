import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const categories = await prisma.product.groupBy({
            by: ["category"],
            _count: {
                id: true,
            },
            orderBy: {
                category: "asc",
            },
        });

        const formatted = categories.map((cat: (typeof categories)[number]) => ({
            name: cat.category,
            count: cat._count.id,
        }));

        return NextResponse.json(formatted, { status: 200 });
    } catch (error) {
        console.error("[GET /api/categories]", error);
        return NextResponse.json(
            { error: "Erreur lors de la récupération des catégories." },
            { status: 500 }
        );
    }
}