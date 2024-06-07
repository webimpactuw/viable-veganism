import { client } from '@/sanity/lib/client';
import Image from "next/image";
import giraffe from "../../public/william/giraffe.png"
import { urlForImage } from '@/sanity/lib/image';
import Link from "next/link";
import rt from "../../public/william/rt.png";
import rb from "../../public/william/rb.png";
import rm from "../../public/william/rm.png";
export const revalidate = 5;

export default async function Home() {
  async function getPosts() {
    const query = `*[_type == "post"]`;
    const posts = await client.fetch(query);
    return posts;
  }

  const allPost = await getPosts();


  return (
    <body className='bg-white'>
    <div><Image src={giraffe} alt="giraffe image"></Image></div>

    <h1 className='relative font-medium text-5xl pt-16 pb-2 mb-24 text-center'>MEDIA</h1>
    <div className='flex flex-row justify-center gap-x-32'>
      <div style={{backgroundImage: "url('william/blue_bg.png')", padding: 20, margin: 10, borderRadius: 20}}>
        <Image className='relative left-48 bottom-12' src="/william/cl.png" alt="leaf" width={50} height={50} style={{width: 50}}></Image>
          <Image className='relative -top-16' src="/william/animal.png" alt="animal" width={200} height={200} style={{width: 200, borderRadius: 10}}></Image>
          <h2 className='relative -top-12 left-6 text-center text-2xl text-wrap w-36'>Animal Understanding</h2>
          <button className="relative -top-4 left-11 px-8 py-2 font-semibold bg-white text-black rounded-3xl shadow-sm opacity-100 text-lg self-center">
          <Link href="https://www.theguardian.com/news/2023/may/30/can-humans-ever-understand-how-animals-think" target="_blank">View</Link>
          </button>
        </div>
        <div style={{backgroundImage: "url('/william/blue_bg.png')", padding: 20, margin: 10, borderRadius: 20}}>
        <Image className='relative left-48 bottom-12' src="/william/cl.png" alt="leaf" width={50} height={50} style={{width: 50}}></Image>
          <Image className='relative -top-16' src="/william/agriculture.png" alt="agriculture" width={200} height={200} style={{width: 200, borderRadius: 10}}></Image>
          <h2 className='relative -top-12 left-6 text-center text-xl text-wrap w-36'>Agricultural Exceptionalism</h2>
          <button className="relative -top-4 left-11 px-8 py-2 font-semibold bg-white text-black rounded-3xl shadow-sm opacity-100 text-lg self-center">
          <Link href="https://www.vox.com/future-perfect/2023/8/31/23852325/farming-myths-agricultural-exceptionalism-pollution-labor-animal-welfare-laws" target="_blank">View</Link>
          </button>
        </div>
        <div style={{backgroundImage: "url('/william/blue_bg.png')", padding: 20, margin: 10, borderRadius: 20}}>
        <Image className='relative left-48 bottom-12' src="/william/cl.png" alt="leaf" width={50} height={50} style={{width: 50}}></Image>
          <Image className='relative -top-16' src="/william/dog.png" alt="dog" width={200} height={200} style={{width: 200, borderRadius: 10}}></Image>
          <h2 className='relative -top-12 left-12 text-center text-xl text-wrap w-24'>What Cody Saw</h2>
          <button className="relative -top-4 left-11 px-8 py-2 font-semibold bg-white text-black rounded-3xl shadow-sm opacity-100 text-lg self-center">
          <Link href="https://www.youtube.com/watch?v=VTjtN0XnuDQ" target="_blank">View</Link>
          </button>
        </div>
    </div>







    <div className=""><Image className="object-none" src={rt} width={1600} height={200} alt="yellow-top"></Image></div>
    <h1 className='relative font-medium text-5xl pt-16 pb-2 mb-24 text-center h-0 z-10'>UPCOMING EVENTS</h1>
    <div className='flex flex-row justify-center h-4'>
    <iframe className="relative border:solid 1px #777 rounded-3xl w-4/6 h-300 z-10 top-8" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%231b53b4&showPrint=0&showTitle=0&src=dHNhaTcyNkB1dy5lZHU&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=dXcuZWR1X2xycmNvaXN1b3Q2YWw2aGpxNmpvY3FzcmprQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%23795548&color=%230B8043" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
    <div className="relative -top-48 z-1"><Image src={rm}  alt="yellow-mid"></Image></div>
    <div className="relative -top-48"><Image className="object-none" src={rb} width={1600} height={200}  alt="yellow-mid"></Image></div>

    <div className='relative -top-48'>
      <h1 className='font-medium text-5xl pt-16 pb-2 mb-24 text-center'>RECENT POSTS</h1>
      <div className='flex flex-row justify-center space-x-12'>
      {allPost.map((post) => (
          <div key={post._id} className="">
            <div className='relative w-52 h-52 mb-10 rounded-3xl'>
              <Image src={urlForImage(post.image)} alt={post.name} fill className=' rounded-xl'/>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center pt-12 '>
      <button className="px-8 py-2 font-semibold bg-blue-800 text-white rounded-3xl shadow-sm opacity-100 text-lg self-center">
          <Link href="https://www.instagram.com/viableveganismuw/" target="_blank">View More</Link>
          </button>
      </div>
    </div>

    </body>
  );

}