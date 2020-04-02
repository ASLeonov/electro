import Link from 'next/link'

export default function Link_2(props) {

    const items = []

    const onHandleClick = () => {
        props.handleClick__level_2(props.level2_key)
    }

    const linkStyle = props.activeLink ? {fontWeight:'bold', textDecoration:'none'} : {textDecoration:'none'}

    for (const key in props.level_2) {
        items.push(
            <div key={key} style={{paddingLeft:10, paddingBottom:6}}>
                <Link href="/photos/[id]" as={`/photos/${key}`}>
                    <a style={linkStyle} onClick={onHandleClick}>{props.level_2[key]}</a>
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
