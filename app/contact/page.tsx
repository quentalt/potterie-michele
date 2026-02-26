import type { Metadata } from "next";
import {ContactHero} from "@/components/contact/contact-hero";
import {ContactAtelier} from "@/components/contact/contact-atelier";

export const metadata: Metadata = {
    title: "L'Artisanat | Ogresdelaterre",
    description:
        "In the quiet dance between earth and hand, we find the soul of every vessel. Discover our story.",
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactAtelier />
        </>
    );
}
