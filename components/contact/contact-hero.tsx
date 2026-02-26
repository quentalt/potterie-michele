"use client";

import Image from "next/image";
import { Mail, Instagram, Facebook } from "lucide-react";

/* ─────────────────────────────────────────────
   1. HERO – photo left, contact info right
───────────────────────────────────────────── */
export function ContactHero() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-20 bg-background">
                <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
                    {/* Portrait */}
                    <div className="relative w-full md:w-1/2">
                        <div className="aspect-[3/4] overflow-hidden rounded-sm bg-muted">
                            <Image
                                src="/images/hero-vase.png"
                                alt="Vase en ceramique blanc fait main"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Text block */}
                    <div className="flex-1 pt-2">
                        <h1 className="font-serif text-5xl italic text-primary md:text-6xl">
                            Contact
                        </h1>
                        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-chart-5 md:text-4xl">
                            L'atelier est ouvert
                            <br />
                            sur rendez-vous.
                        </h2>

                        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground">
                            <p>
                                Niché au cœur d'Auxonne, petite ville bourguignonne
                                bordée par la Saône, l'atelier{" "}
                                <span className="font-semibold text-chart-5">
                                    O GRÈS DE LA TERRE
                                </span>{" "}
                                    est un espace
                                calme et lumineux où la terre prend vie loin de
                                l'agitation. J'y travaille le grès et l'argile
                                chamottée à la main, dans le silence que l'on trouve
                                ici, à deux pas des berges et des grandes plaines.
                            </p>
                            <p>
                                Pour une commande, un projet ou simplement échanger
                                autour de la céramique, écrivez-moi.
                            </p>
                        </div>

                        {/* Social icons */}
                        <div className="mt-6 flex items-center gap-5">
                            <a
                                href="mailto:rey.michele@ogresdelaterre.fr"
                                aria-label="Email"
                                className="text-foreground transition-colors hover:text-primary"
                            >
                                <Mail className="h-6 w-6" strokeWidth={1.5} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-foreground transition-colors hover:text-primary"
                            >
                                <Instagram className="h-6 w-6" strokeWidth={1.5} />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-foreground transition-colors hover:text-primary"
                            >
                                <Facebook className="h-6 w-6" strokeWidth={1.5} />
                            </a>
                        </div>

                        {/* Address */}
                        <p className="mt-4 text-[15px] text-foreground">
                            9 rue basse 21130 Auxonne
                        </p>
                    </div>
                </div>
        </section>
    );
}
