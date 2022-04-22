const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'mauve': "#7049BC"
      }
    },
  },

  plugins: [
    require('@tailwindcss/typography')
  ],
};

module.exports = config;
