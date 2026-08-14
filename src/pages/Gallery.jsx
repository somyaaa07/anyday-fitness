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
    const btn = containerRef.current?.children[idx + 1];
    if (btn) setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [active, categories]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex flex-wrap items-center justify-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mx-auto max-w-full"
    >
      <span
        className="absolute top-1.5 bottom-1.5 rounded-full bg-primary transition-all duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
      />
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`relative z-10 font-rajdhani font-bold uppercase tracking-wide text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors duration-300 whitespace-nowrap ${
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
  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  // Responsive height cycle: shorter on mobile, taller as screen grows
  const heightClasses = [
    "h-56 sm:h-72 lg:h-80",
    "h-48 sm:h-60 lg:h-64",
    "h-64 sm:h-80 lg:h-96",
  ];

  return (
    <>
      <PageHero
        eyebrow="Inside The Gym"
        title="Our"
        highlight="Gallery"
        description="Take a closer look inside Anyday Fitness — from high-energy workouts and modern training spaces to the people, passion, and community that make every session worth showing up for."
        image="/gallerybanner.png"
        primaryBtnText="Start Your Journey"
        primaryBtnLink="/contact"
        secondaryBtnText="Discover Our Story"
        secondaryBtnLink="/about"
      />

      <section className="py-10 sm:py-16 md:py-24">
        <div className="container-x px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <CategoryTabs
              categories={galleryCategories}
              active={active}
              setActive={setActive}
            />
            <p className="font-rajdhani text-xs uppercase tracking-wide text-muted text-center">
              Showing {filtered.length} of {galleryImages.length} photos
            </p>
          </div>

          <div className="columns-1 xs:columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4 lg:gap-5 [column-fill:_balance]">
            {filtered.map((image, i) => (
              <div
                key={image.id}
                className="mb-3 sm:mb-4 lg:mb-5 break-inside-avoid animate-fadeIn"
              >
                <GalleryCard
                  image={image}
                  onClick={() => openLightbox(i)}
                  className={heightClasses[i % 3]}
                />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center gap-3 py-12 sm:py-16 px-4 text-center">
              <p className="font-teko text-2xl sm:text-3xl text-heading uppercase">
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