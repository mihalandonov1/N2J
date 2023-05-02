/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "15px",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "7xl": "4.5rem",
    },
    fontFamily: {
      sans: "'Josefin Sans', sans-serif;",
      alata: "'Alata', sans-serif;",
    },
    width: {
      main: "68.75rem",
      menu: "23.75rem",
      herobox: "40.625rem",
      whitebox: "33.75rem",
      icons: "100%",
      half: "50%",
      hamburger: "1rem",
    },
    height: {
      hero: "40.625rem",
      20: "11.5rem",
      18: "10rem",
      22: "4.5rem",
      interactive: "45.625",
      icons: "1.5rem",
    },

    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/pages/page1/images/image-hero.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
        "deep-earth":
          "url('/src/pages/page1/images/desktop/image-deep-earth.jpg')",
        ecommerse: "url('/src/pages/page2/images/image-product-1.jpg')",
      },

      padding: {
        24: "7rem",
      },
      right: {
        26: "7rem",
      },
      borderWidth: {
        hamburgerborder: "1.5px",
      },
    },
  },
  plugins: [],
};
