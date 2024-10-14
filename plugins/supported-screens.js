const { withAndroidManifest } = require("@expo/config-plugins")

function addAttributesToManifest(androidManifest) {
  const { manifest } = androidManifest;

  const supportsScreens = {};
  supportsScreens.$ = {
    ...supportsScreens.$,
    ...{
      "android:smallScreens": true,
      "android:normalScreens": true,
      "android:largeScreens": false,
      "android:xlargeScreens": false,
    },
  };

  manifest["supports-screens"] = supportsScreens;

  return androidManifest
}

module.exports = function withSupportsScreens(config) {
  return withAndroidManifest(config, (config) => {
    config.modResults = addAttributesToManifest(config.modResults);
    return config;
  });
};