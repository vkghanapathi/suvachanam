import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ArticleDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, summary, author, description } = location.state || {};

  if (!title) {
    return (
      <main>
        <h2>Article Not Found</h2>
        <p>The requested article could not be found.</p>
        <button onClick={() => navigate('/articles')}>Back to Articles</button>
      </main>
    );
  }

  return (
    <main>
      <button onClick={() => navigate('/articles')} style={{ marginBottom: '20px' }}>
        ← Back to Articles
      </button>
      
      <article>
        <h1>{title}</h1>
        {author && <p><strong>Author:</strong> {author}</p>}
        
        <div style={{ marginTop: '20px', lineHeight: '1.6' }}>
          <p>{description || summary}</p>
          
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
            <p><em>Full article content would be displayed here. This is a placeholder for the complete article text.</em></p>
            <p>This article is part of the <strong>Vaasanti Patrikaa (Vasantaṛtu Issue 2025)</strong> - SUVACHANAM Online Indology Journal.</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ArticleDetail;
