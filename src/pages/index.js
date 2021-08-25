import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'
import Header from '@/components/Header'
import HtmlHead from '@/components/HtmlHead'

import SectionContainer from '@/components/SectionContainer'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Home() {
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
                Hi I'm Josh 👋
              </h1>
              <h2 className="text-2xl text-gray-500">PHP & JavaScript Developer/ Dog Enthusiast</h2>
            </div>
            <div className="py-6">
              <h3 className="text-2xl text-gray-500">About Me</h3>

              <div className="prose w-full">
                <p>
                  I make commerical open source products and teach people how. Friendly nerd for
                  PHP, Javascript, ecology, crypto, caffeine, music, Laravel, React, Docker,
                  WordPress & sci-fi.
                </p>

                <p>
                  When I was a student of environmental studies, I loved to learn about plants and
                  complex and emergent systems. Also, I loved to plant trees and measure things, but
                  I always returned to my fascination with computers and the internet. Over time, I
                  became interested in how online communities, especially open source software
                  movements could provide a model for a more sustainable economy.
                </p>
                <p>
                  So, I started blogging with WordPress, developing WordPress themes and plugins,
                  contributing to WordPress core, speaking at WordCamps, co-founding and selling a
                  WordPress plugin company, etc.
                </p>
                <p>
                  Now, I'm focusing on understanding more about how people use, benefit from and
                  exploit the open web. I'm researching web3, building tools for WordPress
                  developers and experimenting with multiplayer writing tools.
                </p>
              </div>
              <div className="mx-auto py-6">
                <ul className="navigation" className="flex text-center pl-10">
                  <li className="pr-10   flex-col ">
                    <a href="https://twitter.com/josh412" target="_blank" rel="noopener norefer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </li>
                  <li className="pr-10  flex-col ">
                    <a href="https://github.com/shelob9" target="_blank" rel="noopener norefer">
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-6">
              <div className="mx-auto py-6">
                <h3 className="text-2xl text-gray-500">Some Things I've Helped Build</h3>
                <ul className="navigation" className="flex text-center pl-10">
                  <li className="pr-10 flex-col">
                    <a href="https://shelob9.github.io/testing-javascript-in-and-around-wordpress/">
                      WordPress Testing JavaScript In and Around WordPress
                    </a>
                  </li>
                  <li className="pr-10   flex-col ">
                    <a href="https://calderaforms.com" target="_blank" rel="noopener norefer">
                      Caldera Forms
                    </a>
                  </li>
                  <li className="pr-10   flex-col ">
                    <a href="https://calderaforms.com" target="_blank" rel="noopener norefer">
                      Ninja Forms
                    </a>
                  </li>
                  <li className="pr-10   flex-col ">
                    <a href="https://pods.io" target="_blank" rel="noopener norefer">
                      Pods
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </SectionContainer>
    </>
  )
}
