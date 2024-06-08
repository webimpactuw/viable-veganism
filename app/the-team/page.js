import TeamMemberThumbnail from '../component/TeamMemberThumbnail'
import AboutPanel from '../component/about/AboutPanel'
import styles from './page.module.css'
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
export const revalidate = 5;


export default async function TheTeam() {
    async function getMembers() {
        const query = `*[_type == "member"]`;
        const members = await client.fetch(query);
        return members;
      }

      const allMember = await getMembers();
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
                    <img src='Seongha/the-team/team.svg' className={styles.headerImg} />
                    <img src='Seongha/the-team/founder.svg' className={styles.headerImg} />
                </div>
                <div class="flex justify-center mb-14 w-full gap-16 flex-wrap">
                {allMember.map((member) => (
                    <TeamMemberThumbnail key={member._id} imgSrc={urlForImage(member.photo)}
                        name={member.name} title={member.position}/>
                    ))}
                </div>
            </article>
        </main>
    )
}