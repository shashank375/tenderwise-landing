export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
        playpen: ['"Playpen Sans"', 'cursive'],
      },
      
  colors: {
    primary: "#3F3591",
    accent: "#6C63FF",
    lavender: "#F0EEF9",
  },
  backgroundImage: {
    "hero-gradient": "linear-gradient(135deg, #FCF8F3 0%, #D9D0FF 100%)",
    "before-gradient": "radial-gradient(ellipse at center, #EEE9FF 85%, #F8F6FF 100%)",
  },
}
  },
  plugins: [],
}