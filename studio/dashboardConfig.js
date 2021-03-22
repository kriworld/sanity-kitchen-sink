export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6058c200521bdc0faa44be1c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9r34joto',
                  apiId: 'ed22d3fe-e801-4d65-90e3-112423ffeb80'
                },
                {
                  buildHookId: '6058c2008b0d0510b437084f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wpqd8jba',
                  apiId: '67166fd6-ff5b-444a-b154-d951513bd9d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kriworld/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wpqd8jba.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
