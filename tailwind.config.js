/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "blue-galaxy": "blue-galaxy 10s ease infinite",
        "background-shine": "background-shine 2s linear infinite"
      },
      keyframes: {
        "blue-galaxy": {
          "0%": {"background": "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)", "backgroundSize": "100% 100%", "backgroundPosition": "0% 100%", "backgroundBlendMode": "color-dodge, color-burn, color-burn, normal"},
          "20%": {"background": "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)", "backgroundSize": "105% 105%", "backgroundPosition": "10% 100%", "backgroundBlendMode": "color-dodge, color-burn, color-burn, normal"},
          "40%": {"background": "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)", "backgroundSize": "110% 300%", "backgroundPosition": "20% 80%", "backgroundBlendMode": "color-dodge, color-burn, color-burn, normal"},
          "60%": {"background": "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)", "backgroundSize": "115% 115%", "backgroundPosition": "30% 70%", "backgroundBlendMode": "color-dodge, color-burn, color-burn, normal"},
          "80%": {"background": "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)", "backgroundSize": "250% 120%", "backgroundPosition": "40% 60%", "backgroundBlendMode": "color-dodge, color-burn, color-burn, normal"},
          "100%": {"background": "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)", "backgroundSize": "100% 100%", "backgroundPosition": "0% 100%", "backgroundBlendMode": "color-dodge, color-burn, color-burn, normal"}
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