import type { Metadata } from "next";
import {EventsHero} from "@/components/events/events-hero";
import {EventsMarches} from "@/components/events/events-marches";
import {EventsCards} from "@/components/events/events-cards";

export const metadata: Metadata = {
    title: "Evenements | Ogresdelaterre",
    description:
        "A curated archival record documenting the evolution of texture, silhouette, and technique through a decade of handmade ceramics.",
};

export default function ArchivePage() {
    return (
        <>
            <EventsHero />
            <EventsMarches/>
            <EventsCards/>
        </>
    );
}
