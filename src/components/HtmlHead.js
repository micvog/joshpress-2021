import Head from 'next/head'
import twitterCard from '@/img/twitter-card.jpg'

const makeBannerSrc = ({ title, description, theme, images }) =>
  `https://banners.beyondco.de/${encodeURI(
    title
  )}.png?theme=${theme}&pattern=bamboo&style=style_1&description=${encodeURI(
    description
  )}&md=1&showWatermark=0&fontSize=100px&images=${
    images ? images : 'terminal'
  }&widths=250&heights=100&packageName=+Josh+Pollock+|+JoshPress.net+`
const HtmlHead = ({ title, description, children, image }) => {
  const imgSrc = image ? image : makeBannerSrc({ title, description, theme: 'dark' })
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
        <meta name="twitter:image" content={imgSrc} />
        <meta property="og:url" content="https://joshpress.net" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imgSrc} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {children && { children }}
      </Head>
    </>
  )
}

export default HtmlHead
