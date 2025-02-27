const { createLoader } = require('simple-functional-loader')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withSyntaxHighlighting = require('./remark/withSyntaxHighlighting')
const withProse = require('./remark/withProse')
const legacyPosts = require('./src/legacyPosts')
module.exports = withBundleAnalyzer({
  async redirects() {
    let redirects = [
      {
        source: '/cv',
        destination:
          'https://docs.google.com/document/d/11aWg3N7ySk6D-luegGdLT6QIFUC7GoiabUsQW6a_wcA/export?format=pdf',
        permanent: false,
      },
      {
        source: '/js-testing',
        destination: 'https://shelob9.github.io/testing-javascript-in-and-around-wordpress',
        permanent: false,
      },
    ]
    legacyPosts.forEach((source) => {
      redirects.push({
        source,
        destination: `https://legacy.joshpress.net${source}`, // Matched parameters can be used in the destination
        permanent: true,
      })
      redirects.push({
        source: source.replace(/\/$/, ''),
        destination: `https://legacy.joshpress.net${source}`, // Matched parameters can be used in the destination
        permanent: true,
      })
    })
    return redirects
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  experimental: {
    modern: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    const mdx = [
      options.defaultLoaders.babel,
      {
        loader: '@mdx-js/loader',
        options: {
          remarkPlugins: [withProse, withSyntaxHighlighting],
        },
      },
    ]

    config.module.rules.push({
      test: /\.mdx$/,
      oneOf: [
        {
          test: /snippets/,
          use: mdx,
        },
        {
          resourceQuery: /preview/,
          use: [
            ...mdx,
            createLoader(function (src) {
              if (src.includes('<!--more-->')) {
                const [preview] = src.split('<!--more-->')
                return this.callback(null, preview)
              }

              const [preview] = src.split('<!--/excerpt-->')
              return this.callback(null, preview.replace('<!--excerpt-->', ''))
            }),
          ],
        },
        {
          resourceQuery: /rss/,
          use: mdx,
        },
        {
          use: [
            ...mdx,
            createLoader(function (src) {
              const content = [
                'import Post from "@/components/Post"',
                'export { getStaticProps } from "@/getStaticProps"',
                src,
                'export default Post',
              ].join('\n')

              if (content.includes('<!--more-->')) {
                return this.callback(null, content.split('<!--more-->').join('\n'))
              }

              return this.callback(null, content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, ''))
            }),
          ],
        },
      ],
    })

    if (!options.dev && options.isServer) {
      const originalEntry = config.entry

      config.entry = async () => {
        const entries = { ...(await originalEntry()) }
        entries['./scripts/build-rss.js'] = './scripts/build-rss.js'
        return entries
      }
    }

    return config
  },
})
