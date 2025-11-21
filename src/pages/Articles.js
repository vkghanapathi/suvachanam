import React from 'react';
import ArticleCard from '../components/ArticleCard';

const Articles = () => {
  const articles = [
    {
      title: 'Welcome Note from Editorial Board',
      author: 'Chief Editor',
      description: 'Introduction to Vaasanti Patrikaa (Vasantaṛtu Issue 2025)'
    },
    {
      title: 'Subhaashitam - Good Word (सुभाषितम्)',
      author: 'Ramayana Sankshepah',
      description: 'Collection of profound Sanskrit verses from Ramayana'
    },
    {
      title: 'Vedic Wisdom ... 1 (वेदमन्त्र लक्षणम्)',
      author: 'A Chinmaya Datta Ghanapathi',
      description: 'Understanding the characteristics of Vedic mantras'
    },
    {
      title: 'Shaastra Vaakyam .. 1 - मीमांसा - मन्त्रब्राह्मणलक्षणम्',
      author: 'Jaimineeya Nyaya Mala Vistarah',
      description: 'Detailed exposition of Mimamsa philosophy principles'
    },
    {
      title: 'Upa Veda .. 1 आयुर्वेदः - Charaka Samhita Intro',
      author: 'Charaka Samhita',
      description: 'Introduction to the ancient Ayurvedic text'
    },
    {
      title: 'Vaidika Vishwa (वैदिक विश्व - हिन्दी)',
      author: 'Vid Arun Kumar Upadhyay',
      description: 'Vedic perspective on world affairs in Hindi'
    },
    {
      title: 'కామదహనం - హోలీకథ',
      author: 'Dr ABS Sastry',
      description: 'Telugu article on the story of Holi festival'
    },
    {
      title: 'Kaavya Rasa - कारीरमाख़ु धर्मसाधनम्',
      author: 'Kumara Sambhavam',
      description: 'Classical Sanskrit poetry appreciation'
    },
    {
      title: 'Chitram ... 1 & 2 - Shyena Chiti',
      author: 'Traditional',
      description: 'Vedic fire altar designs and symbolism'
    },
    {
      title: 'Audio/Video of the Issue (Pravargya Introduction in Sanskrit)',
      author: 'YouTube',
      description: 'Multimedia content on Pravargya ritual'
    },
    {
      title: 'Mangalam',
      author: 'Ramayana',
      description: 'Auspicious concluding verses from Ramayana'
    }
  ];

  return (
    <main>
      <h2>Articles - Vaasanti Patrikaa 2025</h2>
      <p>Latest Issue: <strong>Vasantaṛtu Issue 2025</strong></p>
      <p>Explore our collection of articles on Indology, Vedic wisdom, Sanskrit literature, and cultural heritage.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            author={article.author}
            description={article.description}
          />
        ))}
      </div>
    </main>
  );
};

export default Articles;
