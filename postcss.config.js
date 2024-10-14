// postcss.config.js
module.exports = {
  plugins: [
    'postcss-import',        // Use plugin names as strings
    'postcss-nesting',       // Use postcss-nesting instead of tailwindcss/nesting
    'tailwindcss',
    'autoprefixer',
  ],
};
