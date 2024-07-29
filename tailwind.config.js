/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        borderAnimation: {
          "0%": { borderColor: "#ff0000", borderWidth: "2px" },
          "25%": { borderColor: "#00ff00", borderWidth: "4px" },
          "50%": { borderColor: "#0000ff", borderWidth: "6px" },
          "75%": { borderColor: "#ffff00", borderWidth: "8px" },
          "100%": { borderColor: "#ff0000", borderWidth: "2px" },
        },
      },
      animation: {
        borderAnimation: "borderAnimation 3s linear infinite",
      },
      borderWidth: {
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      borderColor: {
        transparent: "transparent",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 70%)",
      },
      spacing: {
        "16rem": "16rem",
        "200%": "200%",
      },
    },
  },
  plugins: [],
};
