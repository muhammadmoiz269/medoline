const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#004D8B",
              "@secondary-color": "#00818F",
              "@heading-color": "#1D1C1C",
              "@text-color": "#929292",
              "@text-color-secondary": "#1D1C1C",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
