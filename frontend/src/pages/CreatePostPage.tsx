import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function CreatePostPage() {
  const [form, setForm] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await API.post('posts/', form);
      alert('Post created!');
      navigate('/');
    } catch (err) {
      alert('Creation failed.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Blog Post</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} required />
      <button type="submit">Create</button>
    </form>
  );
}
