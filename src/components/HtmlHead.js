import Link from 'next/link'
import Head from 'next/head'
import twitterCard from '@/img/twitter-card.jpg'

const HtmlHead = () => {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@josh412" />
        <meta name="twitter:creator" content="@josh412" />
        <meta name="twitter:title" content="Josh Pollock" />
        <meta
          name="twitter:description"
          content="JavaScript & PHP Engineer, Dog Enthusiast, Super Nerd."
        />
        <meta name="twitter:image" content={`https://blog.tailwindcss.com${twitterCard}`} />
        <meta property="og:url" content="https://joshpress.net" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Josh Pollock" />
        <meta
          property="og:description"
          content="JavaScript & PHP Engineer, Dog Enthusiast, Super Nerd."
        />
        <meta property="og:image" content={`https://blog.tailwindcss.com${twitterCard}`} />
        <title>Blog – Tailwind CSS</title>
        <meta name="description" content="JavaScript & PHP Engineer, Dog Enthusiast, Super Nerd." />
      </Head>
    </>
  )
}

export default HtmlHead
