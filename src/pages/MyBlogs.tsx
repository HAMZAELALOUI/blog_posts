// src/pages/my-blogs.tsx
import React from 'react';
import UserBlogs from '../components/UserBlogs';

const MyBlogs: React.FC = () => {
  return (
    <div className="pt-16">
      <UserBlogs />
    </div>
  );
};

export default MyBlogs;
