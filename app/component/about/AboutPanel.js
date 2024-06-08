import styles from './about-panel.module.css'

export default function AboutPanel({title, subtxt}) {
    return (
        <article class="relative top-0 left-0">
            <img src="Seongha/about/team.png" class="relative top-0 left-0" />
            <div className={styles.filter} />
            <div className={styles.title}>
                <div class="text-5xl">
                    {title}
                </div>
                <img src="Seongha/about/leaf-underline.svg" />
                <div class="text-xl">
                    {subtxt}
                </div>
            </div>
        </article>
    )
}