import Layout from '../layouts/layout_photo'

const contentStyle = {
  paddingLeft: 60
}

function Photos() {
  return (
      <Layout>
        <div style={contentStyle}>
            <h1 style={{marginTop:10}}>Photo bank</h1>
            {/* <img src='../photo_about.jpg' style={{width:'100%'}}/> */}
        </div>
      </Layout>

  )
}

export default Photos
