<%_ if (options.theme) { _%>
const path = require('path')
const poststylus = require('poststylus')
const pxtorem = require('postcss-pxtorem')

const resolve = file => path.resolve(__dirname, file)
<%_ } _%>
module.exports = {
  css: {
    loaderOptions: {
      <%_ if (options.theme) { _%>
      stylus: {
        use: [
          poststylus([
            pxtorem({
              rootValue: 100,
              propWhiteList: [],
              minPixelValue: 2
            }),
            'autoprefixer'
          ])
        ],
        import: [
          resolve('./src/assets/theme.custom')
        ]
      },
      <%_ } _%>
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100,
            propWhiteList: [],
            minPixelValue: 2
          }),
          require('autoprefixer')()
        ]
      }
    }
  },
  <%_ if (options.theme) { _%>
  transpileDependencies: [
    'mand-mobile'
  ]
  <%_ } _%>
}