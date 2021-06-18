const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "~": path.join(path.resolve(__dirname, "./src")),
    },
  },
};
