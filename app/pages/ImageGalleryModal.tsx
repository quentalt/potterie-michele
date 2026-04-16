import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../../../../Documents/Downloads/projetartisan/components/figma/ImageWithFallback";

interface ImageGalleryModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function ImageGalleryModal({ images, isOpen, onClose, title }: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-5xl w-full">
        {/* Image Container */}
        <div className="relative rounded-lg overflow-hidden">
          <ImageWithFallback
            src={images[currentIndex]}
            alt={`${title} - Photo ${currentIndex + 1}`}
            className="w-full h-auto max-h-[80vh] object-contain bg-black"
          />

          {/* Close Button - Déplacé en bas à droite de la photo */}
          <button
            onClick={onClose}
            className="absolute bottom-4 right-4 text-white hover:text-[#ff6600] bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            aria-label="Fermer"
          >
            <X size={14} />
          </button>

          {/* Navigation Arrows - Réduites de 40% */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#ff6600] text-[#93471C] hover:text-white rounded-full p-2 transition-colors shadow-lg"
                aria-label="Photo précédente"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#ff6600] text-[#93471C] hover:text-white rounded-full p-2 transition-colors shadow-lg"
                aria-label="Photo suivante"
              >
                <ChevronRight size={14} />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex gap-2 justify-center mt-4 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-[#ff6600]"
                    : "border-white/50 hover:border-white"
                }`}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Miniature ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}