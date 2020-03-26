import Layout from '../layouts/layout_all'


function About() {
  return (
      <Layout>
        <div style={{width:'100%'}}>
            <h1 style={{marginTop:10}}>About page</h1>
            <div style={{width:'100%', textAlign:'center'}}>
              <img src='../about.jpg' style={{width:'auto'}}/>
            </div>
        </div>
      </Layout>

  )
}

export default About