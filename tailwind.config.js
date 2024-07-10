/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "700px", // Override max-width for 700px screen width
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      backgroundImage: {
        heroImage: "url(/assets/HeroImage.jpg)",
      },
    },
    plugins: [],
  },
};
