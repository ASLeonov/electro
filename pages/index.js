import Layout from '../layouts/layout_all'
import './style.css'


function Index() {

  return (
      <Layout title='Home page'>
        <div style={{width:'100%'}}>
            <h1 style={{marginTop:10}}>Home page</h1>
            <div style={{width:'100%', textAlign:'center'}}>
              <img src='./home.jpg' style={{width:'50%', minWidth:800}}/>
            </div>
        </div>
      </Layout>

  )

}

export default Index
