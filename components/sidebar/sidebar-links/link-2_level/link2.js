import Link from 'next/link'
// import { useState } from 'react'

export default function Link_2(props) {

    const items = []

    const LinkReady = props => (
        <div>
            <Link href="/photos/[id]" as={`/photos/${props.id}`}>
                <a props={props.id} style={{textDecoration:'none'}}>{props.linkText}</a>
            </Link>
        </div>
    )

    for (const key in props.level_2) {
        items.push(
            <div key={key} style={{paddingLeft:10, paddingBottom:6}}>
                {/* <Link href="/photos/[id]" as={`/photos/${key}`}>
                    <a style={{textDecoration:'none'}}>{props.level_2[key]}</a>
                </Link>                        */}
                <LinkReady id={key} linkText={props.level_2[key]} />
            </div>
        )
    }

    return (
        <div>
            {items}
        </div>
    )

}
