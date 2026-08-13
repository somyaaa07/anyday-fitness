export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
}) {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] pt-10 pb-20 sm:pt-48 sm:pb-24 overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/60" /> */}
        </>
      )}
      <div className="container-x relative text-left flex flex-col items-start gap-4">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="font-teko text-5xl sm:text-6xl lg:text-7xl font-semibold uppercase text-heading leading-[0.95]">
          {title} {highlight && <span className="text-primary">{highlight}</span>}
        </h1>
        {description && (
          <p className="font-inter text-body max-w-xl">{description}</p>
        )}

        {(primaryBtnText || secondaryBtnText) && (
          <div className="flex flex-wrap items-center gap-4 mt-4">
            {primaryBtnText && (
              <a
                href={primaryBtnLink || "#"}
                className="font-inter font-semibold px-6 py-3 rounded-md bg-primary text-white hover:opacity-90 transition"
              >
                {primaryBtnText}
              </a>
            )}
            {secondaryBtnText && (
              <a
                href={secondaryBtnLink || "#"}
                className="font-inter font-semibold px-6 py-3 rounded-md border border-heading text-heading hover:bg-heading hover:text-bg transition"
              >
                {secondaryBtnText}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}