import TeamMemberThumbnail from '../components/TeamMemberThumbnail'
import AboutPanel from '../components/about/AboutPanel'
import styles from './page.module.css'


export default function TheTeam() {
    return (
        <main>
            <AboutPanel title={"MEET THE TEAM"}
                subtxt={"Explore more about the vegan world with us"} />
            <article className={styles.content}>
                <h1 class='text-5xl mb-14'>
                    OUR TEAM
                </h1>
                <p class='text-2xl mb-14'>Viable Veganism is a highly collaborative group that relies on the engagement of diverse individuals to work towards our mission. We consist of five leadership members who help coordinate and plan club logistics and events, as well as general members who can participate in whatever capacity they can!</p>
                <div class="flex justify-between w-full mb-28">
                    <img src='/the-team/team.svg' className={styles.headerImg} />
                    <img src='/the-team/founder.svg' className={styles.headerImg} />
                </div>
                <div class="flex justify-center mb-14 w-full gap-16">
                    <TeamMemberThumbnail imgSrc={'/the-team/ashley.svg'}
                        name={"Ashley Sciocchetti"} title={"President"}/>
                    <TeamMemberThumbnail imgSrc={'/the-team/leila.svg'}
                        name={"Leila Donyaei"} title={"Vice-President"}/>
                    <TeamMemberThumbnail imgSrc={'/the-team/carsen.svg'}
                        name={"Carsen Lenthall"} title={"Outreach coordinator"}/>
                </div>
                <div class="flex justify-center mb-18 w-full gap-16">
                    <TeamMemberThumbnail imgSrc={'/the-team/hannah.svg'}
                        name={"Hannah Grant"} title={"Events coordinator"}/>
                    <TeamMemberThumbnail imgSrc={'/the-team/emma.svg'}
                        name={"Emma Gruby"} title={"Graphic designer"}/>
                </div>
            </article>
        </main>
    )
}