import Layout from '../layouts/layout_photo'
import { useRouter } from 'next/router'

const contentStyle = {
  paddingLeft: 60
}

function Photoss() {

  const router = useRouter()

  const h2 = router.query.town ? `${router.query.title} / ${router.query.town}` : router.query.title

  const img_path = router.query.title ? 
    `../${router.query.title.toLowerCase()}/${router.query.i}.jpg` : 
      null

  // console.log(img_path)

  return (
      <Layout>
        <div style={contentStyle}>
            <h1 style={{marginTop:10}}>Photo bank</h1>
            <h2>{h2}</h2>
            <div style={{textAlign:'center'}}>
              <img src={img_path} style={{width:'50%'}}/>
            </div>

        </div>
      </Layout>

  )
}

export default Photoss
