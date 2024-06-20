'use client'
import axios from 'axios';
import React, { useState } from 'react';

const UploadNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      setStatus('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('tags', tags);
    formData.append('note', file);

    try {
      setStatus('Uploading...');
      const response = await axios.post('/api/notes/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setStatus(`Note uploaded: ${response.data.verificationResult}`);
    } catch (error) {
      setStatus('Failed to upload note');
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Upload Note</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          type="file"
          className="w-full p-2"
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Upload</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};

export default UploadNote;
