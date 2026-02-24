"use client"

import { useState } from "react";

export function AboutClosing() {
    const [agreed, setAgreed] = useState(false);

    return (
        <section className="px-6 py-16 md:py-20">
            <div className="mx-auto max-w-4xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                    {/* Left: Map */}
                    <div className="overflow-hidden rounded-sm border border-border">
                        <iframe
                            width="100%"
                            height="500px"
                            frameBorder="0"
                            style={{border: 0}}
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=9%20Rue%20Basse%2C%20Auxonne%2C%20France&maptype=roadmap"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Atelier O Grès de la Terre - Auxonne"
                            className="block"
                        />
                    </div>


                    {/* Right: Contact form */}
                    <div className="rounded-sm border border-border p-6">
                        {/* Orange header button */}
                        <div className="mb-6 text-center">
                            <span
                                className="inline-block rounded-sm bg-chart-1 px-13 py-3 text-sm font-semibold text-white">
                                Formulaire de contact
                            </span>
                        </div>

                        <form className="space-y-3">
                            {/* Name row */}
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    placeholder="Nom*"
                                    className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Prénom*"
                                    className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder="Votre message*"
                                rows={3}
                                className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                            />

                            {/* Email + Phone row */}
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                <div
                                    className="flex items-center gap-2 rounded-sm border border-border bg-background px-3 py-2">
                                    <span className="text-sm">🇫🇷</span>
                                    <input
                                        type="tel"
                                        placeholder="Téléphone*"
                                        className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Checkbox */}
                            <label className="flex items-start gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="mt-0.5 accent-primary"
                                />
                                <span className="text-[11px] leading-relaxed text-muted-foreground">
                                    J'accepte les conditions générales fournies par l'entreprise.
                                    En fournissant mon numéro de téléphone, j'accepte de recevoir
                                    des messages textuels de la part de l'entreprise.
                                </span>
                            </label>

                            {/* Submit */}
                            <div className="pt-1">
                                <button
                                    type="submit"
                                    className="w-full rounded-sm bg-foreground py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-80"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}