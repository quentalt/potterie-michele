import { NextRequest, NextResponse } from "next/server";
import {prisma}  from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");
        const featured = searchParams.get("featured");

        const where: Record<string, unknown> = {};

        if (category && category !== "Voir Tout") {
            where.category = category;
        }

        if (featured === "true") {
            where.featured = true;
        }

        const products = await prisma.product.findMany({
            where,
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, description, price, category, image, badge, slug, stock, featured } = body;

        if (!name || !description || !category || !slug) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const product = await prisma.product.create({
            data: {
                name,
                description,
                price: price ? parseFloat(price) : null,
                category,
                image: image || "/images/placeholder.jpg",
                badge: badge || null,
                slug,
                stock: stock ? parseInt(stock) : 0,
                featured: featured || false,
            },
        });

        return NextResponse.json(product, { status: 201 });
    } catch (error: unknown) {
        console.error("Error creating product:", error);

        if (
            typeof error === "object" &&
            error !== null &&
            "code" in error &&
            (error as { code: string }).code === "P2002"
        ) {
            return NextResponse.json(
                { error: "Product with this slug already exists" },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { error: "Failed to create product" },
            { status: 500 }
        );
    }
}