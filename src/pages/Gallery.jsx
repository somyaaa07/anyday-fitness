import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import GalleryCard from "../components/GalleryCard";
import Lightbox from "../components/Lightbox";
import { galleryImages, galleryCategories } from "../data/gallery";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === active),
    [active]
  );

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((i) => (i + 1) % filtered.length);
  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <>
      <PageHero
        eyebrow="Inside The Gym"
        title="Our"
        highlight="Gallery"
        description="A look inside the space, the training, and the community that makes Anyday Fitness what it is."
        image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-rajdhani font-bold uppercase tracking-wide text-sm px-5 py-2.5 rounded-md border transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-black border-primary"
                    : "bg-transparent border-white/15 text-body hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((image, i) => (
              <div key={image.id} className="mb-5 break-inside-avoid">
                <GalleryCard
                  image={image}
                  onClick={() => openLightbox(i)}
                  className={i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-64" : "h-96"}
                />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted font-inter mt-10">
              No images found in this category.
            </p>
          )}
        </div>
      </section>

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
