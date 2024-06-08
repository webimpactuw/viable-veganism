import Link from 'next/link'
import styles from './nav.module.css'

export default function HeaderNavLink({link, selectedLink, setSelectedLink, txt}) {

    const classNomen = link == selectedLink
        ? styles["current-tab"]
        : ""

    const onLinkClicked = () => setSelectedLink(link)
    return (
    <Link href={link} className={classNomen} onClick={onLinkClicked}>
        {txt}
    </Link>
    )

}