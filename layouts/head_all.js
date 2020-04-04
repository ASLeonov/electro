import Head from 'next/head'

export default function MyHead_all(props) {
  return (
    <Head>
      <title>123</title>
      {/* <title>{(props.title) ? `Next.js example - ${props.title}` : 'error_title'}</title> */}
      {/* <meta charSet="utf-8" />
      <meta name="viewport"       content="initial-scale=1.0, width=device-width" /> */}
      <meta name="Description"    content="Next.js - React framework etc..."/>
      <meta name="Keywords"       content="Next.js, React, SSR, Front-end development"/>
    </Head>
  )
}

MyHead_all.getInitialProps = async function() { return {tmp:'tmp'} }