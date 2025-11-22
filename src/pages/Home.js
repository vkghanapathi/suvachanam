import React from 'react';
import ArticleCard from '../components/ArticleCard';

const Home = () => {
  return (
    <main>
      <div className="hero-section">
        <h1>SUVACHANAM सुवचनम्</h1>
        <h2>Online Indology Journal (Half-Yearly) षाण्मासिकी भारतीय पत्रिका</h2>
        <p>An online Indology Journal to disseminate content promoting good values across the cultural, heritage, language, indology spectrum with the inspiration of our Sadguru Sri Ganapathy Sachchidananda Swamiji.</p>
        <p><strong>ISSN 2998-7075</strong> | First Edition was inaugurated during Navaratri 2024.</p>
      </div>
      
      <div className="featured-section">
        <h3 className="section-title">Latest Issue: Vaasanti Patrikaa (Vasantaṛtu Issue 2025)</h3>
        
        <div className="magazine-grid">
          <ArticleCard 
            title="Subhaashitam - Good Word (सुभाषितम्)" 
            summary="Traditional wisdom from ancient texts - Ramayana Sankshepah"
            author="Traditional Sanskrit"
          />
          <ArticleCard 
            title="Vedic Wisdom (वेदमन्त्र लक्षणम्)" 
            summary="Exploring the characteristics and significance of Vedic mantras"
            author="A Chinmaya Datta Ghanapathi"
          />
          <ArticleCard 
            title="Shaastra Vaakyam - मीमांसा" 
            summary="Jaimineeya Nyaya Mala Vistarah - मन्त्रब्राह्मणलक्षणम्"
            author="Classical Mimamsa"
          />
          <ArticleCard 
            title="Upa Veda - आयुर्वेदः" 
            summary="Charaka Samhitaa Introduction - Ancient medical wisdom and healing practices"
            author="Charaka Tradition"
          />
          <ArticleCard 
            title="Vaidika Vishwa (वैदिक विश्व)" 
            summary="Vedic perspectives on world affairs and contemporary relevance"
            author="Vid Arun Kumar Upadhyay"
          />
          <ArticleCard 
            title="కామదహనం - హోలీకథ" 
            summary="The sacred story of Holi festival in Telugu tradition"
            author="Dr ABS Sastry"
          />
        </div>
      </div>
      
      <p style={{textAlign: 'center', marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-medium)'}}>
        Feel fresh to come across some ever useful information from this journal.
      </p>
    </main>
  );
};

export default Home;
