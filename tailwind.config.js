/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        xir: {
          bg: "#050608",
          surface: "#0D1116",
          panel: "#111721",
          border: "#1C2430",
          line: "#243040",
          text: "#EEF2F6",
          silver: "#C9D1DB",
          muted: "#8F9AAF",
          accent: "#1F7A5A",
          accentSoft: "#123426"
        }
      },
      fontFamily: {
        heading: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "28px"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.35)",
        card: "0 20px 50px rgba(0, 0, 0, 0.35)",
        glow: "0 0 0 1px rgba(255,255,255,0.03), 0 20px 80px rgba(18, 52, 38, 0.35)"
      },
      backgroundImage: {
        "xir-grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "xir-glow":
          "radial-gradient(800px circle at 20% 20%, rgba(31,122,90,0.10), transparent), radial-gradient(600px circle at 80% 0%, rgba(255,255,255,0.05), transparent)"
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem"
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.19, 1, 0.22, 1)"
      }
    }
  },
  plugins: []
};
