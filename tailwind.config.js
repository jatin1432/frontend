module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all source files are included
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#f9f1e7',
      'secondary':'#B88E2F',
      'tertiary':'#F4F5F7',
  }),
  plugins: [],
}
};
