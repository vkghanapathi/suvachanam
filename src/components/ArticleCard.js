import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ title, summary, author, description, articleId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Create a URL-friendly slug from the title
    const slug = title.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .trim();
    
    navigate(`/article/${slug}`, { 
      state: { title, summary, author, description } 
    });
  };

  return (
    <div className="article-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h3>{title}</h3>
      {author && <p><strong>By:</strong> {author}</p>}
      <p>{summary || description}</p>
    </div>
  );
};

export default ArticleCard;
