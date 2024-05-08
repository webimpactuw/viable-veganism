import styles from './value-thumbnail.module.css'

export default function ValueThumbnail({imgSrc, txt}){
    return(
        <span className={styles.main}>
            <img src={imgSrc}/>
            <div>{txt}</div>
        </span>
    )
}