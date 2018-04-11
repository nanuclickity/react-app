module.exports = [
  {
    id: 1,
    name: 'Level 1',
    children: [
      {
        id: 11,
        name: 'Level 1-1',
        children: [
          {id: 111, name: 'Level 3-1'},
          {id: 112, name: 'Level 3-2'}
        ]
      },
      {
        id: 12,
        name: 'Level 1-2'
      },
      {
        id: 13,
        name: 'Level 1-3'
      }
    ]
  }, {
    id: 2,
    name: 'Level 2',
    children: [
      {
        id: 21,
        name: 'Level 2-1'
      }, {
        id: 22,
        name: 'Level 2-2'
      }, {
        id: 23,
        name: 'Level 2-3'
      }
    ]
  }
]
