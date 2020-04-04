import { useState }   from 'react'
import Layout         from '../../layouts/layout_photo'
import { useRouter }  from 'next/router'
import { photoMenu }  from '../../public/fixtures'
import ImgBlock       from '../../components/img-block/img-block'

const names = {catalogName:'', itemName:''}

const getCatalogNames = value => {
    for (const key1 in photoMenu) {
      for (const key2 in photoMenu[key1]) {
        if (key2 === value) {
          names.catalogName = key1
          names.itemName = photoMenu[key1][key2]
        }
      }
    }
  return names
}

function Photos() {

  const [saveChanges, setSaveChanges] = useState(true)

  const router = useRouter()
  const names = getCatalogNames(router.query.id)

  const h2 = router.query.id ? `${names.catalogName} / ${names.itemName}` : ''
  const img_path = router.query.id ? `../${names.catalogName.toLowerCase()}/${router.query.id}.jpg` : ''

  const checkboxHandleCLick = () => { setSaveChanges(!saveChanges) }

  return (
      <Layout title={names.itemName}>
        <div style={{position:'relative', paddingLeft:60, width:'100%'}}>
          <h1 style={{marginTop:10}}>Photo bank</h1>
          <h2>{h2}</h2>
          <ImgBlock imgPath={img_path} saveChanges={saveChanges}/>
          <div style={{position:'absolute', bottom:0}}>
            <label>
                <input type="checkbox" defaultChecked={saveChanges} onClick={checkboxHandleCLick} />
                Save size of photo between pages
            </label>
          </div>
        </div>
      </Layout>
  )
}

Photos.getInitialProps = async function() { return {tmp:'tmp'} }

export default Photos
