// import { useState, useEffect } from "react";
// import { Dumbbell, UserCheck, ClipboardList, Clock, ArrowRight } from "lucide-react";

// const stats = [
//   { number: "150+", label: "Expert Trainers" },
//   { number: "5,000+", label: "Happy Members" },
//   { number: "50+", label: "Fitness Programs" },
//   { number: "10+", label: "Awards Won" },
// ];

// const benefits = [
//   { icon: Dumbbell, title: "Premium Equipment" },
//   { icon: UserCheck, title: "Certified Trainers" },
//   { icon: ClipboardList, title: "Personalized Plans" },
//   { icon: Clock, title: "Open 24/7" },
// ];

// export default function Hero() {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setLoaded(true), 80);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen bg-bg overflow-hidden">
//       <style>{`
//         @keyframes pulseDash { to { stroke-dashoffset: -240; } }
//         .pulse-path { stroke-dasharray: 5 9; animation: pulseDash 2.6s linear infinite; }
//         @media (prefers-reduced-motion: reduce) { .pulse-path { animation: none; } }
//       `}</style>

//       {/* Full-bleed banner image */}
//       <div className="absolute inset-0">
//         <img
//           src="/banner2.png"
//           alt="Athlete training at Anyday Fitness"
//           className={`w-full h-full object-cover object-center transition-all duration-[1600ms] ease-out ${
//             loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
//           }`}
//         />
    
//       </div>

//       {/* floating signature badge — echoes the diagonal clip used in the footer */}
//       {/* <div
//         className={`hidden lg:flex absolute top-28 right-10 xl:right-20 z-20 items-center bg-primary clip-diagonal px-8 py-5 shadow-xl transition-all duration-700 delay-500 ${
//           loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
//         }`}
//       >
//         <p className="font-teko text-3xl font-semibold text-black uppercase leading-none text-right">
//           Since 2015 <br /> Greater Noida
//         </p>
//       </div> */}

//       {/* content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-28 sm:pt-40 pb-8 flex flex-col h-full">
//         <div className="flex-1 flex flex-col justify-center max-w-2xl">
//           <div
//             className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
//               loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
//             }`}
//           >
//             <span className="h-px w-8 bg-primary" />
//             <span className="eyebrow">Premium Fitness Experience</span>
//           </div>

//           <h1
//             className={`font-teko font-black uppercase leading-[0.85] text-6xl sm:text-7xl lg:text-7xl text-heading transition-all duration-700 delay-100 ${
//               loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//             }`}
//           >
//             Train Without <br />
//             <span className="text-primary">Limits</span>
//           </h1>

//           <p
//             className={`mt-6 font-inter text-body text-base sm:text-lg max-w-md transition-all duration-700 delay-200 ${
//               loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//             }`}
//           >
//             Premium equipment, expert trainers, and personalized programs —
//             everything you need to become the strongest version of yourself.
//           </p>

//           <div
//             className={`flex flex-wrap gap-4 mt-9 transition-all duration-700 delay-300 ${
//               loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//             }`}
//           >
//             <a
//               href="#membership"
//               className="group inline-flex items-center gap-2 bg-primary hover:opacity-90 text-black font-rajdhani font-bold uppercase text-sm tracking-wide px-7 py-4 rounded-sm transition"
//             >
//               Get Started
//               <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//             </a>
//             <a
//               href="#programs"
//               className="inline-flex items-center gap-2 border border-white/25 hover:border-primary hover:text-primary text-heading font-rajdhani font-bold uppercase text-sm tracking-wide px-7 py-4 rounded-sm transition-colors"
//             >
//               Explore Programs
//             </a>
//           </div>
//         </div>

//         {/* pulse-line signature divider */}
//         <div
//           className={`mt-10 transition-opacity duration-700 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}
//         >
       
//         </div>

//         {/* scoreboard stats strip */}
//         <div
//           className={`relative border-t border-white/10 transition-all duration-700 delay-500 ${
//             loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="grid grid-cols-2 sm:grid-cols-4">
//             {stats.map((s, i) => (
//               <div key={s.label} className={`py-6 px-2 sm:px-6 ${i !== 0 ? "sm:border-l border-white/10" : ""}`}>
//                 <div className="font-teko text-3xl sm:text-4xl font-bold text-heading tabular-nums">
//                   {s.number}
//                 </div>
//                 <div className="font-rajdhani text-[11px] uppercase tracking-[0.15em] text-muted mt-1">
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* benefits row */}
//         <div
//           className={`flex flex-wrap gap-x-8 gap-y-3 py-6 border-t border-white/10 transition-opacity duration-700 delay-700 ${
//             loaded ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {benefits.map((b) => (
//             <div key={b.title} className="flex items-center gap-2.5">
//               <b.icon size={18} className="text-primary shrink-0" strokeWidth={2} />
//               <span className="font-rajdhani text-xs sm:text-sm font-semibold text-body uppercase tracking-wide">
//                 {b.title}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect } from "react";
import { Dumbbell, UserCheck, ClipboardList, Clock, ArrowRight } from "lucide-react";

const stats = [
  { number: "150+", label: "Expert Trainers" },
  { number: "5,000+", label: "Happy Members" },
  { number: "50+", label: "Fitness Programs" },
  { number: "10+", label: "Awards Won" },
];

const benefits = [
  { icon: Dumbbell, title: "Premium Equipment" },
  { icon: UserCheck, title: "Certified Trainers" },
  { icon: ClipboardList, title: "Personalized Plans" },
  { icon: Clock, title: "Open 24/7" },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-screen  bg-bg overflow-hidden">
      {/* Full-bleed banner image */}
      <div className="absolute inset-0">
        <img
          src="/banner2.png"
          alt="Athlete training at Anyday Fitness"
          className={`w-full h-full object-cover object-center transition-all duration-[1600ms] ease-out ${
            loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/10" />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-40 sm:pt-36 lg:pt-40 pb-6 flex flex-col min-h-[100svh]">
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <div
            className={`flex items-center gap-3 mb-5 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="h-px w-8 bg-primary" />
            <span className="eyebrow">Premium Fitness Experience</span>
          </div>

          <h1
            className={`font-teko font-black uppercase leading-[0.85] text-5xl sm:text-7xl text-heading transition-all duration-700 delay-100 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Train Without <br />
            <span className="text-primary">Limits</span>
          </h1>

          <p
            className={`mt-6 font-inter text-body text-sm sm:text-base max-w-md transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Premium equipment, expert trainers, and personalized programs —
            everything you need to become the strongest version of yourself.
          </p>

          <div
            className={`flex flex-wrap gap-4 mt-9 transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#membership"
              className="group inline-flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-black font-rajdhani font-bold uppercase text-sm tracking-wide px-7 py-4 rounded-sm transition"
            >
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-primary hover:text-primary text-heading font-rajdhani font-bold uppercase text-sm tracking-wide px-7 py-4 rounded-sm transition-colors"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* scoreboard stats strip */}
        <div
          className={`border-t border-white/10 mt-10 transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid grid-cols-2 xs:grid-cols-4 divide-x divide-y xs:divide-y-0 divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="py-4 sm:py-6 px-3 sm:px-6">
                <div className="font-teko text-xl sm:text-2xl lg:text-3xl font-bold text-heading tabular-nums">
                  {s.number}
                </div>
                <div className="font-rajdhani text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] text-muted mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* benefits row */}
        <div
          className={`flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-5 py-5 sm:py-6 px-1 sm:px-6 border-t border-white/10 transition-opacity duration-700 delay-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {benefits.map((b) => (
            <div key={b.title} className="flex items-center gap-2.5">
              <b.icon size={18} className="text-primary shrink-0" strokeWidth={2} />
              <span className="font-rajdhani text-xs sm:text-sm font-semibold text-body uppercase tracking-wide">
                {b.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}