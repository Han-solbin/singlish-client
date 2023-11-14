const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: `singlish-client/dist`,
  },
  alias: {
    react: path.resolve("./node_modules/react"),
  },
};
