var customData = {
  polls: [
    {
      id: 1,
      title: 'Is bitcoin worth the time and money that mining requires?',
      publishedDate: 1516605447,
      answer: {
        type: 'Single',
        options: [
          {
            id: 1,
            label: 'Yes',
            vote: 10
          },
          {
            id: 2,
            label: 'No',
            vote: 20
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Should chatbots replace humans in customer service jobs?',
      publishedDate: 1516000647,
      answer: {
        type: 'Single',
        options: [
          {
            id: 3,
            label: 'Yes',
            vote: 30
          },
          {
            id: 4,
            label: 'No',
            vote: 40
          }
        ]
      }
    },
    {
      id: 3,
      title: 'How are we feeling about 2018?',
      publishedDate: 1515568647,
      answer: {
        type: 'Single',
        options: [
          {
            id: 5,
            label: 'Hopeful',
            vote: 50
          },
          {
            id: 6,
            label: 'Doubtful',
            vote: 60
          }
        ]
      }
    },
    {
      id: 4,
      title:
        'Which country/region have you ever visited? (Select all that applies)',
      publishedDate: 1515482247,
      answer: {
        type: 'Multi',
        options: [
          {
            id: 7,
            label: 'Hong Kong',
            vote: 70
          },
          {
            id: 8,
            label: 'China',
            vote: 80
          },
          {
            id: 9,
            label: 'Australia',
            vote: 90
          },
          {
            id: 10,
            label: 'Thailand',
            vote: 100
          },
          {
            id: 11,
            label: 'Korea',
            vote: 110
          },
          {
            id: 12,
            label: 'Japan',
            vote: 120
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Will new benefits encourage you to study or work in mainland?',
      publishedDate: 1515309447,
      answer: {
        type: 'Single',
        options: [
          {
            id: 13,
            label: 'Yes',
            vote: 120
          },
          {
            id: 14,
            label: 'No',
            vote: 100
          }
        ]
      }
    }
  ]
}

module.exports = customData
