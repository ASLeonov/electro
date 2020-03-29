import { useState } from 'react'
import Link_2 from '../link-2_level/link2'

export default function Link_1(props) {

    const [active, setActive] = useState(false)

    const activeStyle = active ? { paddingBottom:5, fontWeight:'bold', cursor:'pointer' } : { paddingBottom:5, cursor:'pointer' }

    const onHandleClick = () => {
        setActive(!active)
    }

    const level_2Style = active ? { display:'block' } : { display:'none' }

    return (
        <div>
            <div style={activeStyle} onClick={onHandleClick}>
                {props.level_1}
            </div>
            <div style={level_2Style}>
                <Link_2 level_2={props.level_2}/>
            </div>            
        </div>
    )

}
