import Image from "next/image";
import Link from "next/link";
import {BigTitle} from "@/components/bigtitle";
import {ArrowRight} from "lucide-react";

const categories = [
  {
    name: "Luminaires",
    description:
        "Integer mauris sem, convallis ut, consequat in, sollicitudin sed, leo. Cras purus elit, hendrerit ut, egestas eget, sagittis at, nulla. Integer justo dui, faucibus dictum, convallis sodales, accumsan id, risus. Aenean risus. Vestibulum scelerisque placerat sem.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
    href: "/galerie?category=Luminaires",
  },
  {
    name: "Vases et objets décoratifs",
    description:
        "Integer mauris sem, convallis ut, consequat in, sollicitudin sed, leo. Cras purus elit, hendrerit ut, egestas eget, sagittis at, nulla. Integer justo dui, faucibus dictum, convallis sodales, accumsan id, risus. Aenean risus. Vestibulum scelerisque placerat sem.",
    image: "https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?w=600&q=80",
    href: "/galerie?category=Vases",
  },
  {
    name: "Sculptures",
    description:
        "Integer mauris sem, convallis ut, consequat in, sollicitudin sed, leo. Cras purus elit, hendrerit ut, egestas eget, sagittis at, nulla. Integer justo dui, faucibus dictum, convallis sodales, accumsan id, risus. Aenean risus. Vestibulum scelerisque placerat sem.",
    image: "https://plus.unsplash.com/premium_photo-1672287578309-2a2115000688?q=80&w=742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/galerie?category=Sculptures",
  },
];

export function FeaturedCollection() {
  return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-8">
              <h1 className="text-6xl mb-4 text-[#ff6600] font-['Kufam'] font-semibold text-left">
                Galerie
              </h1>
          <Link
              href="/galerie"
              className="text-gray-700 hover:text-orange-600 flex items-center gap-2 transition-colors"
          >
            Voir tout <ArrowRight size={20} />
          </Link>
        </div>
        <p className="mt-1 text-xs font-manrope font-medium uppercase tracking-[0.1em] text-muted-foreground">SAISON 2025 / 2026</p>


        {/* 3-column category grid */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 font-manrope">
            {categories.map((cat) => (
                <Link key={cat.name} href={cat.href} className="group">
                  {/* Image carrée */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>

                  {/* Category name */}
                  <h3 className="mt-4 font-manrope text-brown text-base font-bold">
                    {cat.name}
                  </h3>

                  {/* Description */}
                  <p className=" font-manrope font-medium mt-2 text-[12px] leading-snug text-foreground">
                    {cat.description}
                  </p>
                </Link>
            ))}
          </div>
      </section>
  );
}