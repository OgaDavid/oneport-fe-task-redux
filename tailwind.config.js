/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: "#1F2937",
          "deep-green": "#004800",
          green: "#139C33",
          black: "#111827",
          "text-black": "#1f2937",
          "border-grey": "#E5E7EB",
          grey: "#6b7280",
        },
      },
    },
  },
  plugins: [],
};
