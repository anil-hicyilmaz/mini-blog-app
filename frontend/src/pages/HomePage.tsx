import { useEffect, useState } from 'react';
import API from '../services/api';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    API.get('posts/')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>All Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}
