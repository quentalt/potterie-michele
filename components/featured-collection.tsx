import Image from "next/image";
import Link from "next/link";

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
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-5xl italic text-primary md:text-6xl">
                Galerie
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Saison 2025 / 2026
              </p>
            </div>
            <Link
                href="/galerie"
                className="mb-1 flex items-center gap-1 text-sm text-foreground transition-colors hover:text-primary"
            >
              Voir tout <span aria-hidden>→</span>
            </Link>
          </div>

          {/* 3-column category grid */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {categories.map((cat) => (
                <Link key={cat.name} href={cat.href} className="group">
                  {/* Image — natural rectangle, not forced square */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                    <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>

                  {/* Category name */}
                  <h3 className="mt-4 font-serif text-sm font-semibold text-chart-5">
                    {cat.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[12px] leading-relaxed text-foreground">
                    {cat.description}
                  </p>
                </Link>
            ))}
          </div>
        </div>
      </section>
  );
}