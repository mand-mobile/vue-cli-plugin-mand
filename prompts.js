module.exports = [
  {
    name: 'version',
    type: 'list',
    description: 'Which version of mand mobile do you want to use?',
    choices: [
      { value: 1, name: '1.x' },
      { value: 2, name: '2.x' }
    ],
    default: 2
  },
  {
    name: 'theme',
    type: 'confirm',
    description: 'Do you want to customize the theme?',
    default: false,
  }
]