module.exports = [
  {
    type: 'list',
    name: 'version',
    message: 'Which version of mand mobile do you want to use?',
    choices: [
      { value: 1, name: '1.x' },
      { value: 2, name: '2.x' }
    ],
    default: 2
  }
]