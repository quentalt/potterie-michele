import { Mail, Instagram, Facebook, PhoneCall } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* ✅ was grid-cols-3 */}
                    <div className="flex flex-col justify-end">
                        <Link href="/" className="font-bold !font-[Saira] text-[#93471C] mb-2 text-[18px] hover:text-[#ff6600] transition-colors inline-block"> {/* ✅ was `to` */}
                            O'GRÈS DE LA TERRE
                        </Link>
                        <p className="text-[16px] text-[#000000]">
                            Céramiste passionnée, un travail façonné par les mains de l'artisan et le souffle de la terre.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-gray-600">Contact</h4>
                        <div className="flex gap-4">
                            <a href="mailto:rey.michele@hotmail.com" className="text-gray-600 hover:text-orange-600 transition-colors">
                                <Mail size={24} />
                            </a>
                            <a href="https://www.instagram.com/rey.michele" className="text-gray-600 hover:text-orange-600 transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="https://www.facebook.com/michele.rey.338/" className="text-gray-600 hover:text-orange-600 transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="tel:+33675666626" className="text-gray-600 hover:text-orange-600 transition-colors">
                                <PhoneCall size={24} />
                            </a>
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=9+rue+basse+21130+Auxonne"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] text-gray-600 hover:text-[#ff6600] transition-colors"
                            >9 rue basse, 21130 Auxonne, France</a>

                        <Link href="/mentions-legales" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                            Mentions Légales
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-left text-sm text-gray-500">
                © 2026 O'Grèsdelaterre. Tous droits réservés.
            </div>
        </div>
</footer>
);
}