import Layout from '../components/layout'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
// import {useState, useEffect} from 'react'

function Index() {

//   useEffect( () => {
//     if (isData.length === 0) {
//       fetch('https://cors-anywhere.herokuapp.com/http://xo.leonovlab.ru/api/results.php')
//       .then(res => res.json())
//       .then(res => {
//         console.log('RES =>', res)
//         setIsData(res)
//       })
//     }
//   })

//   const data = !isData ? null : 
//     <ul>
//       {isData.map(item => (
//         <li key={item.id_results}>
//           {item.player_name}
//         </li>
//       ))}
//     </ul>

  return (
      <Layout>
        <div>
            <h1>Home page</h1>
            <img src='./photo_home.jpg' style={{width:'100%'}}/>
        </div>
      </Layout>

  )


}

export default Index
