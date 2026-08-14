/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: "#050505",
        surface: "#0D0D0D",
        surface2: "#121212",
        primary: "#F47B0B",
        primaryDark: "#C95F05",
        secondary: "#0878B9",
        heading: "#C8C5B8",
        body: "#D6D6D6",
        muted: "#85837A",
        offwhite: "#F5F5F5",
      },
      fontFamily: {
        teko: ["Teko", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at center, rgba(244,123,11,0.15) 0%, rgba(5,5,5,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(244,123,11,0.25)",
        glowBlue: "0 0 30px rgba(8,120,185,0.2)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 1s ease-out forwards",
        floatSlow: "floatSlow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};