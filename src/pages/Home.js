import React from 'react';
import ArticleCard from '../components/ArticleCard';

const Home = () => {
  return (
    <main>
      <h2>Welcome to Suvachanam</h2>
      <p>Insightful articles on various topics that matter to you.</p>
      <div className="articles">
        <ArticleCard title="Article 1" summary="Summary of article 1" />
        <ArticleCard title="Article 2" summary="Summary of article 2" />
        <ArticleCard title="Article 3" summary="Summary of article 3" />
      </div>
    </main>
  );
};

export default Home;
