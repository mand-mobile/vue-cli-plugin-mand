module.exports = function (api, options) {
  api.extendPackage({
    dependencies: {
      'mand-mobile': options.version === 2 ? '^2.4.0' : '^1.6.8',
      "reset.css": "^2.0.2",
      'normalize.css': '^8.0.0'
    },
    devDependencies: {
      'babel-plugin-import': '^1.8.0',
      'postcss-pxtorem': '^4.0.1',
      ...(options.theme ? {
        "nib": "^1.1.2",
        "poststylus": "^1.0.0",
        "stylus-loader": "^3.0.2",
      } : {})
    }
  })

  api.injectImports(api.entryFile, `import "reset.css";`)
  api.injectImports(api.entryFile, `import "normalize.css";`)

  api.render('./template')

  if (api.generator.pkg.dependencies['vue-router']) {
    api.render('./router')
  }
}