// 'use client';

// import Link from 'next/link';
// import Post from './component/post';
// import styles from './page.module.css';
// import prisma from '@/lib/prisma';

// async function getPost() {
//   const getData = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });

//   return getData;
// }

// export default async function Home() {
//   const posts = await getPost();
//   return (
//     <main className={styles.page}>
//       <Link href={'/add-post'}>Add</Link>

//       <h1>Feed</h1>

//       {posts.map((post) => {
//         return (
//           <Post
//             key={post.id}
//             id={post.id}
//             title={post.title}
//             content={post.content}
//             authorName={post.author.name}
//           />
//         );
//       })}
//     </main>
//   );
// }

'use client';

import Link from 'next/link';
import Post from './component/post';
import styles from './page.module.css';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: posts, mutate } = useSWR('/api/posts', fetcher);

  if (!posts) return <p>Loading...</p>;

  return (
    <main className={styles.page}>
      <Link href={'/add-post'}>Add</Link>

      <h1>Feed</h1>

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          authorName={post.author?.name}
        />
      ))}
    </main>
  );
}
