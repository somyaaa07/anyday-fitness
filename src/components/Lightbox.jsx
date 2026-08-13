import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, index, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  if (index === null) return null;
  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 text-offwhite hover:text-primary transition-colors"
      >
        <X size={30} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 sm:left-8 text-offwhite hover:text-primary transition-colors"
      >
        <ChevronLeft size={36} />
      </button>

      <div
        className="max-w-4xl max-h-[80vh] rounded-lg overflow-hidden border border-primary/40 shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image.src} alt={image.alt} className="w-full h-full object-contain max-h-[80vh]" />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-3 sm:right-8 text-offwhite hover:text-primary transition-colors"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
}
