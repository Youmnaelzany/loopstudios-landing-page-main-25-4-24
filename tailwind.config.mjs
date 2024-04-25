/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      'Alata': ['Alata', 'sans-serif'],
      'Josefin-Sans': ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'desktop-hero-pattern': "url('/images/desktop/image-hero.jpg')",
        'mobile-hero-pattern': "url('/images/mobile/image-hero.jpg')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}