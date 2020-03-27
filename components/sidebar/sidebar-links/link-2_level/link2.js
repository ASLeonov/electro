import Link from 'next/link'
// import { useState } from 'react'

export default function Link_2(props) {

    const items = []

    for (const key in props.level_2) {
        items.push(
            <div key={key} style={{paddingLeft:10, paddingBottom:6}}>
                <Link href="/photos/[id]" as={`/photos/${key}`}>
                    <a style={{textDecoration:'none'}}>{props.level_2[key]}</a>
                </Link>                       
            </div>
            )
    }

    return (
        <div>
            {items}
        </div>
    )

}
