const pluginTester = require("babel-plugin-tester");
const plugin = require("babel-plugin-macros");
const path = require("path");

pluginTester({
  plugin,
  fixtures: path.join(__dirname, "fixtures"),
  filename: __filename,
});
