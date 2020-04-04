import Head from 'next/head'

export default function MyHead_photo(props) {

  const current_photo = (props.title) ? props.title : '***unknown_object***'

  return (
    <Head>
        <title>{`Photo bank - ${current_photo}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport"       content="initial-scale=1.0, width=device-width" />
        <meta name="Description"    content={`This is photo of ${current_photo}`}/>
        <meta name="Keywords"       content={`photo, image, ${current_photo}`}/>
    </Head>
  )

}