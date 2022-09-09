
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#C1609F",
              "@text-color": " #FFFFFF",
              "@border-color-base": "hsv(0, 0, 96%)",
              "@component-background": "#000000 ",
            }, // major text color
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
