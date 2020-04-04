import MyHead_photo from  './head_photo'
import Header from        '../components/header/header'
import TopMenu from       '../components/topmenu/topmenu'
import Sidebar from       '../components/sidebar/sidebar'
import Footer from        '../components/footer/footer'
import                    './layout_photo.css'

export default function Layout(props) {

  return (
    
    <div className='layoutStyle'>

      <MyHead_photo title={props.title}/>

      <Header />

      <TopMenu />

      <div className='contentStyle'>
        <Sidebar />
        {props.children}
      </div>

      <Footer />

    </div>

  )

}
