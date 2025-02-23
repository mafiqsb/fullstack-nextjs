import Link from 'next/link';
import Post from './component/post';
import styles from './page.module.css';
import prisma from '@/lib/prisma';

async function getPost() {
  const getData = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return getData;
}

export default async function Home() {
  const posts = await getPost();
  return (
    <main className={styles.page}>
      <Link href={'/add-post'}>Add</Link>

      <h1>Feed</h1>

      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        );
      })}
    </main>
  );
}
