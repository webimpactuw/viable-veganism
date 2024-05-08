import Link from 'next/link'
import HistoryCard from '../components/about/HistoryCard'
import ValueThumbnail from '../components/about/ValueThumbnail'
import styles from './page.module.css'
import AboutPanel from '../components/about/AboutPanel'

export default function AboutUs() {
    return (
        <main className={styles.main}>
            <AboutPanel title={"ABOUT US"}
                subtxt={"We are more about promoting veganism"}
            />
            <article className={styles["our-values"]}>
                <div class="text-5xl p-20">OUR KEY VALUES</div>
                <div className={styles['value-thumbnail-container']}>
                    <div className={`${styles['mini-value-thumbnail-container']} w-4/5`}>
                        <ValueThumbnail imgSrc={'/about/chicken.svg'} txt={'Non-vegan mental'} />
                        <ValueThumbnail imgSrc={'/about/loudspeaker.svg'} txt={'Advocacy focus'} />
                        <ValueThumbnail imgSrc={'/about/holding-hands.svg'} txt={'Communicative'} />
                    </div>
                    <div className={`${styles['mini-value-thumbnail-container']} w-1/2`}>
                        <ValueThumbnail imgSrc={'/about/conversation.svg'} txt={'Collaborative'} />
                        <ValueThumbnail imgSrc={'/about/brain.svg'} txt={'Open minded'} />
                    </div>

                </div>
            </article>
            <article className={styles['our-history']}>
                <div className={styles.content}>
                    <h1 className={`${styles.h1} text-5xl`}>OUR HISTORY</h1>
                    <div className={styles.timeline}>
                        <img src='/about/chevron-left.svg' className={styles.chevron} />
                        <HistoryCard photoSrc={'about/uno.svg'} date={'Autumn 2023'}
                            txt={'Tabled at Admitted Students Day 2023, finding it rewarding to meet and speak with prospective students.'} />
                        <HistoryCard photoSrc={'about/due.svg'} date={'Autumn 2023'}
                            txt={'Held the first Dawg Daze event on September 25th, filling an entire room and enjoying vegan goodies!'} />
                        <HistoryCard photoSrc={'about/tre.svg'} date={'Autumn 2023'}
                            txt={'Held a virtual food drive with the UW Food Pantry in December'} />
                        <HistoryCard photoSrc={'about/quattro.svg'} date={'Winter 2024'}
                            txt={'Now collaborated with several Registered Student Organizations (RSOs) on campus, including the ASUW Food Coop, the Lettuce Eating Club, Eat Together, and Net Impact.'} />
                        <HistoryCard photoSrc={'about/quinque.svg'} date={'Winter 2024'}
                            txt={'Currently have an in-person food drive Feb 12th-26th'} />
                        <img src='/about/chevron-right.svg' className={styles.chevron} />
                    </div>
                    <div class="flex justify-center w-full mt-12">
                        <Link href='the-team' >
                            <img src="about/teams-page-link.svg" />
                        </Link>
                    </div>
                </div>
                {/* <img src="about/history-bg.svg" className={styles.flowers} /> */}
                <img src='about/timeline-connecter.svg' className={styles['timeline-connecter']} />

            </article>
        </main>
    )
}