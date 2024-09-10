module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: [">0.2%", "not op_mini all", "ie 11"],
    }),
  ],
};
