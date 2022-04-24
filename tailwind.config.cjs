const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'mauve': "#7882bf"
      }
    },
  },

  plugins: [
    require('@tailwindcss/typography')
  ],
};

module.exports = config;
