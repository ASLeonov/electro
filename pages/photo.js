import Layout from '../layouts/layout_photo'

const contentStyle = {
  paddingLeft: 60
}

function Photo() {
  return (
      <Layout>
        <div style={contentStyle}>
            <h1 style={{marginTop:10}}>Photo bank</h1>
        </div>
      </Layout>

  )
}

export default Photo
