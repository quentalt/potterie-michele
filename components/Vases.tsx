import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
import { Menu, X, Images } from "lucide-react";
import { ScrollToTop } from "../components/ScrollToTop";
import { ImageGalleryModal } from "../components/ImageGalleryModal";

export function Vases() {
  const [selectedCategory, setSelectedCategory] = useState("vases");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ images: string[]; title: string } | null>(null);

  const categories = [
    { id: "all", label: "Toutes les créations", path: "/galerie" },
    { id: "luminaires", label: "Luminaires", path: "/luminaires" },
    { id: "vases", label: "Vases et objets décoratifs", path: "/vases" },
    { id: "sculptures", label: "Sculptures", path: "/sculptures" },
  ];

  const items = [
    {
      id: 1,
      images: [
        "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0035.jpg",
        "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0033.jpg",
      ],
      title: "Vase zébré",
      link: "/vases/vase-zebre",
    },
    {
      id: 2,
      images: [
        "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0021.jpg?updatedAt=1775566321850"],
      title: "Vases blancs",
      link: "/vases/vases-blancs",
    },
    {
      id: 3,
      images: ["https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0023.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0022.jpg"
      ],
      title: "Objet décoratif beige",
      link: "/vases/objet-decoratif-beige",
    },
    {
      id: 4,
      images: ["https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0038.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0040b.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0039b.jpg"
      ],
      title: "Vase céramique 1",
      link: "/vases/vase-ceramique-1",
    },
    {
      id: 5,
      images: ["https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0048.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0042.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0045.jpg"
      ],
      title: "Vase céramique 2",
      link: "/vases/vase-ceramique-2",
    },
    {
      id: 6,
      images: ["https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0060.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0056.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0057.jpg"
      ],
      title: "Vase céramique 3",
      link: "/vases/vase-ceramique-3",
    },
    {
      id: 7,
      images: ["https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0072.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0070.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0074.jpg"
      ],
      title: "Vase céramique 4",
      link: "/vases/vase-ceramique-4",
    },
    {
      id: 8,
      images: ["https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0069.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0065.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0068.jpg"
      ],
      title: "Vase céramique 5",
      link: "/vases/vase-ceramique-5",
    },
    {
      id: 9,
      images: ["https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0077.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0075.jpg",
              "https://ik.imagekit.io/4niiyg8ue/IMG-20260227-WA0078.jpg"
      ],
      title: "Vase céramique 6",
      link: "/vases/vase-ceramique-6",
    },
  ];

  const handleImageClick = (item: { images: string[]; title: string }) => {
    if (item.images.length > 1) {
      setSelectedItem(item);
      setModalOpen(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Category Filter */}
      <section className="mb-24">
        {/* Desktop View */}
        <div className="hidden md:flex gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className={`pb-3 transition-colors relative text-lg ${
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
            <span className="text-[#ff6600] font-semibold text-lg">
              {categories.find(cat => cat.id === selectedCategory)?.label}
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-[#ff6600] transition-colors"
              aria-label="Menu des catégories"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                    className={`block w-full text-left py-3 px-4 rounded transition-colors text-lg ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className={`overflow-hidden rounded-lg relative ${item.images.length > 1 ? 'group cursor-pointer' : ''}`}
            onClick={() => handleImageClick(item)}
          >
            <ImageWithFallback
              src={item.images[0]}
              alt={item.title}
              className={`w-full aspect-square object-cover ${item.images.length > 1 ? 'group-hover:scale-105 transition-transform duration-300' : ''}`}
            />
            {item.images.length > 1 && (
              <div className="absolute bottom-3 right-3 bg-white/90 rounded-full p-2 shadow-lg group-hover:bg-[#ff6600] transition-colors">
                <Images size={20} className="text-[#93471C] group-hover:text-white transition-colors" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Return Button aligned to the right */}
      <div className="flex justify-end">
        <Link
          to="/galerie"
          className="bg-[#ff6600] hover:bg-[#93471C] text-white text-sm px-4 py-2 rounded transition-colors inline-block"
        >
          Retour toutes créations
        </Link>
      </div>
      <ScrollToTop />
      <ImageGalleryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={selectedItem?.images || []}
        title={selectedItem?.title || ""}
      />
    </div>
  );
}