import { useState, useEffect } from 'react'
import './img-block.css'

const imgWidthPX = 850
const maxImgWidth = 1
const minImgWidth = 0.2

export default function ImgBlock(props) {

  const [imgWidth, setImgWidth] = useState(maxImgWidth)
  const [imgPath, setImgPath] = useState(props.imgPath)
  const {saveChanges} = props

  const plusImg  = () => { (imgWidth !== maxImgWidth) && setImgWidth(Number((imgWidth+0.1).toFixed(1))) }
  const minusImg = () => { (imgWidth !== minImgWidth) && setImgWidth(Number((imgWidth-0.1).toFixed(1))) }

  const incrementStyle = (imgWidth === maxImgWidth) ? {opacity:0.1} : {}
  const decrementStyle = (imgWidth === minImgWidth) ? {opacity:0.1} : {}

  
  useEffect( () => {
    if (imgPath !== props.imgPath && !saveChanges) {
      setTimeout( () => {
        setImgWidth(maxImgWidth)
      }, 110)
      setImgPath(props.imgPath)
      return
    }
    if (imgPath !== props.imgPath && saveChanges) {
      setImgPath(props.imgPath)
      return
    }
  })

  return (
    <div style={{display:'flex', width:'100%'}}>
      <div className='imgSizeStyle'>
        <div>
          <img src='../increment.png' className='increment_decrement' style={incrementStyle} onClick={plusImg}/>
        </div>
        <div>
          <img src='../decrement.png' className='increment_decrement' style={decrementStyle} onClick={minusImg}/>
        </div>
      </div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:300}}>
        <img src={imgPath} className='imgClass' style={{width: `${imgWidthPX*imgWidth}px`}}/>
      </div>
      <div>
        <h3 style={{width:100}}>{`Size: ${imgWidth*100}%`}</h3>
      </div>
    </div>
  )
}
