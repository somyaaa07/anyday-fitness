import { useMemo, useRef, useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import GalleryCard from "../components/GalleryCard";
import Lightbox from "../components/Lightbox";
import { galleryImages, galleryCategories } from "../data/gallery";

function CategoryTabs({ categories, active, setActive }) {
  const containerRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const idx = categories.indexOf(active);
    const btn = containerRef.current?.children[idx+1];
    if (btn) setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [active, categories]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex flex-wrap items-center justify-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mx-auto"
    >
      <span
        className="absolute top-1.5 bottom-1.5 rounded-full bg-primary transition-all duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
      />
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`relative z-10 font-rajdhani font-bold uppercase tracking-wide text-sm px-5 py-2.5 rounded-full transition-colors duration-300 ${
            active === cat ? "text-black" : "text-body hover:text-heading"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

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
  const nextImage = () => setLightboxIndex((i) => (i + 1) % filtered.length);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <>
      <PageHero
        eyebrow="Inside The Gym"
        title="Our"
        highlight="Fitness Gallery"
        description="Take a closer look inside Anyday Fitness — from high-energy workouts and modern training spaces to the people, passion, and community that make every session worth showing up for."
        image="/gallerybanner.png"
        primaryBtnText="Start Your Journey"
        primaryBtnLink="/contact"
        secondaryBtnText="Discover Our Story"
        secondaryBtnLink="/about"
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="flex flex-col items-center gap-4 mb-12">
            <CategoryTabs
              categories={galleryCategories}
              active={active}
              setActive={setActive}
            />
            <p className="font-rajdhani text-xs uppercase tracking-wide text-muted">
              Showing {filtered.length} of {galleryImages.length} photos
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((image, i) => (
              <div
                key={image.id}
                className="mb-5 break-inside-avoid animate-fadeIn"
              >
                <GalleryCard
                  image={image}
                  onClick={() => openLightbox(i)}
                  className={i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-64" : "h-96"}
                />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center gap-3 py-16">
              <p className="font-teko text-3xl text-heading uppercase">
                No Photos Found
              </p>
              <p className="text-center text-muted font-inter text-sm">
                Try a different category to see more of the gym.
              </p>
              <button
                onClick={() => setActive("All")}
                className="font-rajdhani font-bold uppercase text-sm text-primary mt-2 hover:underline"
              >
                View All Photos
              </button>
            </div>
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