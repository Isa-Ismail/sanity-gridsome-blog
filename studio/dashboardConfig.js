export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '61de7bee50297ed3a796d1a5',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-6345grfp',
                  apiId: 'dbbcfe92-6000-4227-b4bf-f7ed3303bfab'
                },
                {
                  buildHookId: '61de7bee78f171c73dc5635a',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-z47fvzk7',
                  apiId: '476f58bd-308e-4a2e-8135-96e1255dd3af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Isa-Ismail/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-z47fvzk7.netlify.app', category: 'apps'}
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
