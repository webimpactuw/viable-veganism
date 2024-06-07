import { client } from '@/sanity/lib/client';

export const revalidate = 5;

export default async function Home() {
  async function getPosts() {
    const query = `*[_type == "contact"]`;
    const posts = await client.fetch(query);
    return posts;
  }

  const allPost = await getPosts();

  return (
    <div className='flex flex-row justify-center space-x-12'>
      {allPost.map((post) => (
          <div key={post.location} className="">
            {post.time}
            </div>

        ))}
      </div>
  )

}