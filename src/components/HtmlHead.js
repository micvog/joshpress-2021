import Head from 'next/head'
import twitterCard from '@/img/twitter-card.jpg'

const HtmlHead = ({ title, description, children, image }) => {
  const pageTitle = `${title ? `${title} | Josh Pollock` : 'Josh Pollock'}`
  const pageDescription = description
    ? description
    : 'JavaScript & PHP Engineer, Dog Enthusiast, Super Nerd.'
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@josh412" />
        <meta name="twitter:creator" content="@josh412" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content={image ? image : `https://joshpress.net${twitterCard}`}
        />
        <meta property="og:url" content="https://joshpress.net" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={image ? image : `https://joshpress.net${twitterCard}`} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {children && { children }}
      </Head>
    </>
  )
}

export default HtmlHead
