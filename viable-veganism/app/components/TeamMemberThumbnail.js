import styles from './team-member-thumbnail.module.css'

export default function TeamMemberThumbnail({ imgSrc, name, title }) {
    return (
        <div className={styles.container}>
            <img src={imgSrc} className={styles.img} />
            <div className={styles.name}>{name}</div>
            <div className='text-nowrap'>{title}</div>
        </div>
    )
}