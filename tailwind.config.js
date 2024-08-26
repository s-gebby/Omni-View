/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "black-swoosh":"black-swoosh 2s ease infinite",
        "background-shine": "background-shine 2s linear infinite"
      },
      keyframes: {
        "black-swoosh":{"0%":{"background-size":"600% 100%","background-position":"left center","background-image":"linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8))"},"50%":{"background-size":"600% 100%","background-position":"right center","background-image":"linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8))"},"100%":{"background-size":"600% 100%","background-position":"left center","background-image":"linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8))"}
        },
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      }
    }
  }
};