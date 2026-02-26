import React from "react"
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Manrope } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Saira } from "next/font/google";
import { Kufam } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    weight: ['400', '500', '600', '700'],
});

const saira = Saira({
    subsets: ['latin'],
    variable: '--font-saira',
    weight: ['400', '500', '600', '700'],
});

const kufam = Kufam({
    subsets: ['latin'],
    variable: '--font-kufam',
    style: 'italic',
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: "Ogredelaterre | Ceramique Artisanale",
    description:
        "Céramiques intentionnelles conçues avec amour",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`${manrope.variable} ${montserrat.variable} ${saira.variable} ${kufam.variable}`}>
        <body className="bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
