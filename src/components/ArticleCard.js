import React from 'react';

const ArticleCard = ({ title, summary }) => {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  );
};

export default ArticleCard;
