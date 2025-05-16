import React from 'react';

const BlogPostsList = ({ blogPosts, activeSection, setActiveSection, setIsMobileMenuOpen }) => {
  return (
    <>
      <li className="section-title">Blog Posts</li>
      {blogPosts.map(post => (
        <li key={post.id}>
          <button 
            className={activeSection === post.id ? 'active' : ''}
            onClick={() => {
              setActiveSection(post.id);
              setIsMobileMenuOpen(false);
            }}
          >
            {post.title}
          </button>
        </li>
      ))}
    </>
  );
};

export default BlogPostsList;