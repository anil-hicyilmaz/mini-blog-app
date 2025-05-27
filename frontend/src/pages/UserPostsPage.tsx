import { useEffect, useState } from 'react';
import API from '../services/api';

interface Post {
  id: number;
  title: string;
  content: string;
  author_username: string;
}

export default function UserPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    API.get('posts/')
      .then(res => {
        const currentUser = localStorage.getItem('access') ? JSON.parse(atob(localStorage.getItem('access')!.split('.')[1]))?.username : '';
        const userPosts = res.data.filter((post: Post) => post.author_username === currentUser);
        setPosts(userPosts);
      })
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await API.delete(`posts/${id}/`);
      setPosts(posts.filter(p => p.id !== id));
    } catch (err) {
      alert('Not authorized or failed.');
    }
  };

  return (
    <div>
      <h2>My Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.content.slice(0, 80)}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
