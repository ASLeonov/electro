import Link from 'next/link'
import { useState } from 'react'

export default function Link_2(props) {

    const [activeLink, setActiveLink] = useState(false)

    const items = []

    const onHandleClick = () => {
        setActiveLink(!activeLink)
    }

    const linkStyle = activeLink ? {fontWeight:'bold', textDecoration:'none'} : {textDecoration:'none'}

    for (const key in props.level_2) {
        items.push(
            <div key={key} style={{paddingLeft:10, paddingBottom:6}}>
                <Link href="/photos/[id]" as={`/photos/${key}`}>
                    <a style={linkStyle} onClick={onHandleClick}>{props.level_2[key]}</a>
                </Link>                       
            </div>
        )
    }

    console.log('render Link_2', props.level_2)

    return (
        <div>
            {items}
        </div>
    )

}
