import tinytime from 'tinytime'
import Link from 'next/link'
import { getAllPosts } from '@/getAllPostPreviews'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import HtmlHead from '@/components/HtmlHead'

const posts = getAllPosts()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Blog() {
  return (
    <>
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <div className="divide-y divide-gray-200">
            <HtmlHead />
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-[4rem] md:leading-[3.5rem]">
                Latest Posts
              </h1>
              <p className="text-lg text-gray-500">Subitle</p>
            </div>
            <ul className="divide-y divide-gray-200">
              {posts.map(({ link, isExternal, module: { default: Component, meta } }) => {
                return (
                  <li key={link} className="py-12">
                    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium text-gray-500">
                          <time dateTime={meta.date}>
                            {postDateTemplate.render(new Date(meta.date))}
                          </time>
                        </dd>
                        {isExternal && (
                          <>
                            <dt className="sr-only">Published at</dt>
                            <dd className="text-base font-medium text-gray-500">
                              <a href={'https://dev.to/shelob9'} target="_blank">
                                Dev.to
                              </a>
                            </dd>
                          </>
                        )}
                      </dl>
                      {isExternal ? (
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight">
                              <a className="text-gray-900" href={link} target="_blank">
                                {meta.title}
                              </a>
                            </h2>
                            <div className="prose max-w-none text-gray-500">{meta.description}</div>
                          </div>
                          <div className="text-base font-medium">
                            <a
                              href={link}
                              target="_blank"
                              className="text-teal-600 hover:text-teal-700"
                              aria-label={`Read "${meta.title}"`}
                            >
                              Read more &rarr;
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight">
                              <Link href={link}>
                                <a className="text-gray-900">{meta.title}</a>
                              </Link>
                            </h2>
                            <div className="prose max-w-none text-gray-500">{meta.description}</div>
                          </div>
                          <div className="text-base font-medium">
                            <Link href={link}>
                              <a
                                className="text-teal-600 hover:text-teal-700"
                                aria-label={`Read "${meta.title}"`}
                              >
                                Read more &rarr;
                              </a>
                            </Link>
                          </div>
                        </div>
                      )}
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>
        </main>
      </SectionContainer>
    </>
  )
}
