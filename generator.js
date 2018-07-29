module.exports = function (api, options) {
  api.extendPackage({
    dependencies: {
      "mand-mobile": "^1.5.2",
      "normalize.css": "^8.0.0"
    },
    devDependencies: {
      "babel-plugin-import": "^1.8.0",
      "postcss-pxtorem": "^4.0.1"
    },
    "babel": {
      "plugins": [
        ["import", {
          "libraryName": "mand-mobile",
          "libraryDirectory": "lib"
        }]
      ]
    },
    "postcss": {
      "plugins": {
        "autoprefixer": {},
        "postcss-pxtorem": {
          rootValue: 100,
          propWhiteList: []
        }
      }
    },
  })

  api.injectImports(api.entryFile, `import "normalize.css";`)

  api.render("./template")

  if (api.generator.pkg.dependencies["vue-router"]) {
    api.render("./router")
  }
}