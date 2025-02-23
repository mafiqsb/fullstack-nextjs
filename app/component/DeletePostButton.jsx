'use client';

import { useRouter } from 'next/navigation';

export default function DeletePostButton({ postId }) {
  const router = useRouter();

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`/api/delete-post/${postId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      router.refresh();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return <button onClick={handleDeleteClick}>Delete</button>;
}
