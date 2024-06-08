import styles from './history-card.module.css'

export default function HistoryCard({photoSrc, date, txt}){
    return (
        <section className={styles.main}>
            <img src={photoSrc} className={styles.photo}/>
            <div className={styles.date}>{date}</div>
            <p className={styles.txt}>{txt}</p>
        </section>
    )
}