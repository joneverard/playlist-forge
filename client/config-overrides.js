const { override, addLessLoader } = require("customize-cra");

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#ff4500", "primary-color": "#ff4500" },
  })
);
