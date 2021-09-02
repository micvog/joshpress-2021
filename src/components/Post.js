import PageTitle from '@/components/PageTitle'
import tinytime from 'tinytime'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import smallCard from '@/img/twitter-card-small.jpg'
import HtmlHead from './HtmlHead'
const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}')

const twitterShareLink = ({ slug, title }) => {
  let url = `https://joshpress.net${slug}`
  let text = `${title} by @josh412`
  return `http://twitter.com/share?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
}
export default function Post({ meta, children, posts }) {
  const router = useRouter()

  if (meta.private) {
    return (
      <>
        <SectionContainer>
          <main>
            <article className="py-16">
              <HtmlHead {...meta}>
                <meta name="twitter:title" content={`${meta.title} – Tailwind CSS`} />
                <meta name="twitter:description" content={meta.description} />
                {meta.image ? (
                  <>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:image" content={`https://joshpress.net${meta.image}`} />
                  </>
                ) : (
                  <>
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:image" content={`https://joshpress.net${smallCard}`} />
                  </>
                )}
                <meta property="og:url" content={`https://joshpress.net${router.pathname}`} />
                <meta property="og:type" content="article" />
              </HtmlHead>
              <header className="">
                <div className="text-center">
                  <div className="flex justify-center">
                    <Link href="/">
                      <a className="inline-flex">
                        <span className="sr-only">All posts</span>
                      </a>
                    </Link>
                  </div>
                  <dl className="mt-4 space-y-10">
                    <div>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium text-gray-500">
                        <time dateTime={meta.date}>
                          {postDateTemplate.render(new Date(meta.date))}
                        </time>
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-1">
                    <h1 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                      {meta.title.replace(/ ([^ ]+)$/, '\u00A0$1')}
                    </h1>
                  </div>
                  <dl className="mt-4">
                    <dt className="sr-only">Authors</dt>
                    <dd>
                      <ul className="flex items-center justify-center">
                        {meta.authors.map((author) => (
                          <li key={author.twitter} className="flex items-center space-x-2">
                            <img src={author.avatar} alt="" className="w-8 h-8 rounded-full" />
                            <dl className="text-sm font-medium whitespace-no-wrap">
                              <dt className="sr-only">Name</dt>
                              <dd className="text-gray-900">{author.name}</dd>
                            </dl>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </dl>
                </div>
              </header>
              <div className="mt-12">
                <div className="prose mx-auto">
                  <MDXProvider>{children}</MDXProvider>
                </div>
              </div>
            </article>
          </main>
        </SectionContainer>
      </>
    )
  }
  const slug = router.pathname;

  const postIndex = posts.findIndex((post) => post.link === router.pathname)
  const previous = posts[postIndex + 1]
  const next = posts[postIndex - 1]

  return (
    <>
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <article className="xl:divide-y xl:divide-gray-200">
            <HtmlHead {...meta} />
            <header className="pt-6 xl:pb-10">
              <div className="space-y-1 text-center">
                {!meta.asPage && (
                  <dl className="space-y-10">
                    <div>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500">
                        <time dateTime={meta.date}>
                          {postDateTemplate.render(new Date(meta.date))}
                        </time>
                      </dd>
                    </div>
                  </dl>
                )}

                <div>
                  <PageTitle>{meta.title}</PageTitle>
                </div>
              </div>
            </header>
            <div
              className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:gap-x-6 pb-16 xl:pb-20"
              style={{ gridTemplateRows: 'auto 1fr' }}
            >
              {!meta.asPage && (
                <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
                  <dt className="sr-only">Authors</dt>
                  <dd>
                    <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                      {meta.authors.map((author) => (
                        <li key={author.twitter} className="flex items-center space-x-2">
                          <img src={author.avatar} alt="" className="w-10 h-10 rounded-full" />
                          <dl className="text-sm font-medium whitespace-no-wrap">
                            <dt className="sr-only">Name</dt>
                            <dd className="text-gray-900">{author.name}</dd>
                            <dt className="sr-only">Twitter</dt>
                            <dd>
                              <a
                                href={`https://twitter.com/${author.twitter}`}
                                className="text-teal-600 hover:text-teal-700"
                              >
                                @{author.twitter}
                              </a>
                            </dd>
                          </dl>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
              )}
              <div
                className={
                  meta.asPage
                    ? 'divide-y divide-gray-200 xl:pb-0 xl:col-span-4 xl:row-span-4'
                    : 'divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2'
                }
              >
                <div className="max-w-none pt-10 pb-8">
                  <MDXProvider>{children}</MDXProvider>
                </div>
                {meta.footer && (
                  <div
                    className="pt-6 pb-16 meta-footer"
                    dangerouslySetInnerHTML={{ __html: meta.footer }}
                  />
                )}
                
                 <div className="pt-6 pb-16">
                 {!meta.asPage && (
                      <p>
                        Want to talk about this post?{' '}
                        <a
                          href={twitterShareLink({ slug, title: meta.title })}
                          className="font-medium text-teal-600 hover:text-teal-700"
                        >
                          Discuss this on Twitter &rarr;
                        </a>
                      </p>
                    
                  )}
                    <p>
                      Found a typo or want to suggest an edit?{' '}
                      <a
                        href={`https://github.com/Shelob9/joshpress-2021/edit/master/src/pages${slug}/index.mdx`}
                        className="font-medium text-teal-600 hover:text-teal-700"
                        target="_blank"
                      >
                        Open a pull request &rarr;
                      </a>
                    </p>
                  </div>
              </div>
              {!meta.asPage && (
                <footer className="text-sm font-medium divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
                  {(next || previous) && (
                    <div className="space-y-8 py-8">
                      {next && (
                        <div>
                          <h2 className="text-xs leading-5 tracking-wide uppercase text-gray-500">
                            Next Article
                          </h2>
                          <div className="text-teal-600 hover:text-teal-700">
                            <Link href={next.link}>
                              <a>{next.title}</a>
                            </Link>
                          </div>
                        </div>
                      )}
                      {previous && (
                        <div>
                          <h2 className="text-xs leading-5 tracking-wide uppercase text-gray-500">
                            Previous Article
                          </h2>
                          <div className="text-teal-600 hover:text-teal-700">
                            <Link href={previous.link}>
                              <a>{previous.title}</a>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="py-8">
                    <a
                      className="text-teal-600 hover:text-teal-700"
                      href={twitterShareLink({ pathname: router.pathname, title: meta.title })}
                    >
                      Share on Twitter
                    </a>
                  </div>
                  <div className="pt-8">
                    <Link href="/">
                      <a className="text-teal-600 hover:text-teal-700">&larr; Back to the blog</a>
                    </Link>
                  </div>
                </footer>
              )}
            </div>
          </article>
        </main>
      </SectionContainer>
    </>
  )
}
