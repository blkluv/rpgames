import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from 'components/Elements/MDXComponents'
import Tabs from 'components/Elements/Tabs'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'

const REDIRECT_URL = 'https://rpgadventures.io/mirage.pdf'

const TITLE = 'Mirage'
const DESCRIPTION = 'Mirage is a game for people who love storytelling, improvisation, and freeform roleplay.'
const THUMBNAIL = 'https://rpgadventures.io/img/storytellers.jpg'

export default function Mirage({ pages }) {
  return (
    <Layout>
      <Tabs tabTitles={['About', 'Create your Character', 'Play the Game', 'Run the Game']}>
        <div className="post text">
          <MDXRemote {...tabMdx('mirage-1-about')} components={MDXComponents} />
        </div>
        <div className="post text">
          <MDXRemote {...tabMdx('mirage-2-character')} components={MDXComponents} />
          <MDXRemote {...tabMdx('mirage-3-abilities')} components={MDXComponents} />
          {/* <MDXRemote {...tabMdx('mirage-31-character-optional')} components={MDXComponents} /> */}
        </div>
        <div className="post text">
          <MDXRemote {...tabMdx('mirage-4-dice')} components={MDXComponents} />
          <MDXRemote {...tabMdx('mirage-5-roleplaying')} components={MDXComponents} />
        </div>
        <div className="post text">
          <MDXRemote {...tabMdx('mirage-6-gming')} components={MDXComponents} />
        </div>
      </Tabs>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} key="ogtitle" />
        <meta property="og:description" content={DESCRIPTION} key="ogdesc" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta property="og:image" content={THUMBNAIL} key="ogimage" />
        <meta name="twitter:image" content={THUMBNAIL} />
      </Head>
    </Layout>
  )
}

function tabMdx(slug) {
  const page = pages.find((page) => page.slug == slug)
  return page.body
}

import pages from 'backend/json/pages/posts.json'

export async function getServerSideProps({ params }) {
  return {
    redirect: {
      permanent: false,
      destination: REDIRECT_URL,
    },
    props: { props: { pages } },
  }
  return { props: { pages } }
}
