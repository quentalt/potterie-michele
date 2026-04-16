"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {ScrollToTop} from "@/app/pages/ScrollToTop";
import {ImageWithFallback} from "@/components/ImageWithFallback";

export function Gallery() {
  const [selectedCategory] =
    useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    {
      id: "all",
      label: "Toutes les créations",
      path: "/galerie",
    },
    {
      id: "luminaires",
      label: "Luminaires",
      path: "/luminaires",
    },
    {
      id: "vases",
      label: "Vases et objets décoratifs",
      path: "/vases",
    },
    {
      id: "sculptures",
      label: "Sculptures",
      path: "/sculptures",
    },
  ];

  const items = [
    // Luminaires
    {
      id: 1,
      category: "luminaires",
      image:
        "https://ik.imagekit.io/4niiyg8ue/IMG_20260220_124149%20(2).jpg",
      title: "Lampe vague bleue",
    },
    {
      id: 2,
      category: "luminaires",
      image: "https://ik.imagekit.io/4niiyg8ue/tmpdq0v760h.jpg",
      title: "Lampe papillon",
    },
    {
      id: 3,
      category: "luminaires",
      image: "https://ik.imagekit.io/4niiyg8ue/tmpr30arsll.jpg",
      title: "Lampe ajourée",
    },
    // Vases et objets décoratifs
    {
      id: 5,
      category: "vases",
      image:
        "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0077.jpg",
      title: "Vase zébré",
    },
    {
      id: 6,
      category: "vases",
      image:
        "https://ik.imagekit.io/4niiyg8ue/IMG_20260220_124149%20(5).jpg",
      title: "Vases blancs",
    },
    {
      id: 7,
      category: "vases",
      image:
        "https://ik.imagekit.io/4niiyg8ue/IMG_20260220_124144%20(2).jpg",
      title: "Objet décoratif beige",
    },
    // Sculptures
    {
      id: 8,
      category: "sculptures",
      image:
        "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0062.jpg",
      title: "Sculpture",
    },
    {
      id: 8.5,
      category: "sculptures",
      image:
        "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0010.jpg",
      title: "Sculpture",
    },
    {
      id: 9,
      category: "sculptures",
      image:
        "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0015.jpg",
      title: "Sculpture",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter(
          (item) => item.category === selectedCategory,
        );

  // Organiser les éléments en colonnes par catégorie
  const organizeByCategory = () => {
    if (selectedCategory === "all") {
      return {
        luminaires: items.filter(
          (item) => item.category === "luminaires",
        ),
        vases: items.filter(
          (item) => item.category === "vases",
        ),
        sculptures: items.filter(
          (item) => item.category === "sculptures",
        ),
      };
    }
    return null;
  };

  const categorizedItems = organizeByCategory();

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://ik.imagekit.io/4niiyg8ue/IMG_20260220_124149%20(6).jpg"
              alt="Céramique décorative"
              className="w-full shadow-lg rounded-[5px]"
            />
          </div>

          <div>
            <h1 className="text-[38px] mb-4 text-[#ff6600] font-['Kufam'] font-bold italic leading-tight">
              Galerie
            </h1>
            <h2 className="text-[#93471C] font-['Kufam'] italic mx-[0px] mt-[0px] mb-[22px] text-[40px] leading-tight tracking-tight p-[0px]">
              Déambulation
              <br />
              dans mon univers
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed p-[0px]">
              Céramiste indépendante, je travaille l'argile avec
              patience et intuition, pièce après pièce.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed p-[0px]">
              Mon atelier est un espace de recherche autant
              qu'un lieu de création. On y croise idées nouées
              et formes en suspens, une forme trouve sa juste
              pièce.
            </p>
            <p className="text-gray-700 leading-relaxed p-[0px]">
              Chaque création porte l'empreinte de ce
              cheminement, où l'artisanat dialogue avec
              l'exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        {/* Desktop View - Centered */}
        <div className="hidden md:flex gap-8  justify-center">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.path}
              className={`pb-3 transition-colors relative ${
                selectedCategory === category.id
                  ? "text-[#ff6600] font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {category.label}
              {selectedCategory === category.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff6600]"></div>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile View - Hamburger Menu */}
        <div className="md:hidden">
          <div className="flex items-center justify-between pb-3">
            <span className="text-[#ff6600] font-semibold">
              {
                categories.find(
                  (cat) => cat.id === selectedCategory,
                )?.label
              }
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-[#ff6600] transition-colors"
              aria-label="Menu des catégories"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="absolute left-0 right-0 bg-white shadow-lg z-50">
              <div className="max-w-7xl mx-auto px-6 py-4">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={category.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left py-3 px-4 rounded transition-colors ${
                      selectedCategory === category.id
                        ? "bg-[#ff6600] text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {selectedCategory === "all" && categorizedItems ? (
          // Vue en trois colonnes par catégorie
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Colonne Luminaires */}
            <div>
              <Link
                href="/luminaires"
                className="text-xl font-bold text-[#93471C] mb-6 hover:text-[#ff6600] transition-colors inline-block"
              >
                Luminaires
              </Link>
              <div className="space-y-8">
                {categorizedItems.luminaires.map((item) => (
                  <div key={item.id}>
                    <div className="overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne Vases et objets décoratifs */}
            <div>
              <Link href="/vases">
                <h3 className="text-xl font-bold text-[#93471C] mb-6 hover:text-[#ff6600] transition-colors cursor-pointer">
                  Vases et objets décoratifs
                </h3>
              </Link>
              <div className="space-y-8">
                {categorizedItems.vases.map((item) => (
                  <div key={item.id}>
                    <div className="overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne Sculptures */}
            <div>
              <section className="mb-16">
                <Link
                  href="/sculptures"
                  className="hover:text-[#ff6600] transition-colors"
                >
                  <h3 className="text-xl font-bold text-[#93471C] mb-6 hover:text-[#ff6600] transition-colors">
                    Sculptures et divers
                  </h3>
                </Link>
                <div className="space-y-8">
                  {categorizedItems.sculptures.map((item) => (
                    <div key={item.id}>
                      <div className="overflow-hidden rounded-lg">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full aspect-square object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        ) : (
          // Vue filtrée en grille classique
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <ScrollToTop />
    </div>
  );
}