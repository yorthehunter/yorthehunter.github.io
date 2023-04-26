var ghpages = require('gh-pages');

ghpages.publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'git@github.com:yorthehunter/yorthehunter.github.io.git',
        user: {
            name: 'yorthehunter',
            email: 'boru.design@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)