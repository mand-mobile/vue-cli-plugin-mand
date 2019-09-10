module.exports = function (api, options) {
  api.extendPackage({
    dependencies: {
      'mand-mobile': options.version === 2 ? '^2.5.1' : '^1.6.8',
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

  if (options.theme) {
    api.injectImports(api.entryFile, `import "mand-mobile/components/_style/global.styl";`)
  }
  api.injectImports(api.entryFile, `import "normalize.css";`)

  api.render('./template')

  if (api.generator.pkg.dependencies['vue-router']) {
    api.render('./router')
  }
}