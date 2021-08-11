import devToPosts from '../data/dev-to.json'
function importAll(r) {
  return r.keys().map((fileName) => ({
    link: `/blog${fileName.substr(1).replace(/\/index\.mdx$/, '')}`,
    module: r(fileName),
  }))
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export default function getAllPostPreviews() {
  return importAll(require.context('./pages/blog/?preview', true, /\.mdx$/))
    .filter((p) => !p.link.includes('/snippets/'))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}

export function getAllPosts() {
  return importAll(require.context('./pages/blog/?rss', true, /\.mdx$/))
    .filter((p) => !p.link.includes('/snippets/'))
    .filter((p) => p.module.meta.private !== true)
    .concat(
      devToPosts.map((post) => {
        let meta = {
          title: post.title,
          description: post.description,
          date: post.published_timestamp,
        }
        return {
          link: post.url,
          isExternal: 'dev-to',
          title: post.title,
          description: post.description,
          meta,
          module: {
            meta,
          },
        }
      })
    )
    .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}
