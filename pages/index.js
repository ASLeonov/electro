import Layout from '../layouts/layout_all'

function Index() {

  return (
      <Layout>
        <div style={{width:'100%'}}>
            <h1 style={{marginTop:10}}>Home page</h1>
            <div style={{width:'100%', textAlign:'center'}}>
              <img src='./home.jpg' style={{width:'auto'}}/>
            </div>
        </div>
      </Layout>

  )

}

export default Index
