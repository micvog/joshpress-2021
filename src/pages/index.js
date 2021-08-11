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
                Josh Pollock
              </h1>
              <h2 className="text-lg text-gray-500">
                JavaScript & PHP Engineer, Dog Enthusiast, Super Nerd.
              </h2>
            </div>
            <div className="prose max-w-none text-gray900">
              <p>
                I make commerical open source products with Laravel, WordPress and React. Right, now
                I am working on
                <a href="https://pluginmachine.app" target="_blank" rel="noopener noreferrer">
                  Plugin Machine
                </a>{' '}
                and work as a lead web engineer at{' '}
                <a href="https:/10up.com" target="_blank" rel="noopener noreferrer">
                  10up
                </a>
                .
              </p>
            </div>
          </div>
        </main>
      </SectionContainer>
    </>
  )
}
