module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'mand-mobile',
        <%_ if (options.theme) { _%>
        libraryDirectory: 'components'
        <%_ } else { _%>
        libraryDirectory: 'lib'
        <%_ } _%>
      }
    ]
  ]
}