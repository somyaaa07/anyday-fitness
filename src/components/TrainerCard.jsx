import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";

export default function TrainerCard({ trainer }) {
  return (
    <div className="group relative rounded-lg overflow-hidden border border-white/10 hover:border-primary/60 transition-all duration-500">
      <div className="relative h-96 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />

        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
          {[FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="social link"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-black/70 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-colors duration-300"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-teko text-2xl font-semibold text-offwhite uppercase leading-none">
          {trainer.name}
        </h3>
        <p className="font-rajdhani text-sm font-semibold text-primary uppercase tracking-wide mt-1">
          {trainer.specialization}
        </p>
        <p className="font-inter text-xs text-muted mt-1">{trainer.experience}</p>
      </div>
    </div>
  );
}
