import React from 'react';
import ArticleCard from '../components/ArticleCard';

const Home = () => {
  return (
    <main>
      <h1>SUVACHANAM सुवचनम्</h1>
      <h2>Online Indology Journal (Half-Yearly) षाण्मासिकी भारतीय पत्रिका</h2>
      <p>An online Indology Journal to disseminate content promoting good values across the cultural, heritage, language, indology spectrum with the inspiration of our Sadguru Sri Ganapathy Sachchidananda Swamiji.</p>
      <p>ISSN 2998-7075 | First Edition was inaugurated during Navaratri 2024.</p>
      
      <h3>Latest Issue: Vaasanti Patrikaa (Vasantaṛtu Issue 2025)</h3>
      
      <div className="articles">
        <ArticleCard 
          title="Subhaashitam - Good Word (सुभाषितम्)" 
          summary="Ramayana Sankshepah - Traditional wisdom from ancient texts"
        />
        <ArticleCard 
          title="Vedic Wisdom (वेदमन्त्र लक्षणम्)" 
          summary="By A Chinmaya Datta Ghanapathi - Exploring Vedic mantras"
        />
        <ArticleCard 
          title="Shaastra Vaakyam - मीमांसा" 
          summary="Jaimineeya Nyaya Mala Vistarah - मन्त्रब्राह्मणलक्षणम्"
        />
        <ArticleCard 
          title="Upa Veda - आयुर्वेदः" 
          summary="Charaka Samhitaa Introduction - Ancient medical wisdom"
        />
        <ArticleCard 
          title="Vaidika Vishwa (वैदिक विश्व)" 
          summary="By Vid Arun Kumar Upadhyay - Vedic world perspectives"
        />
        <ArticleCard 
          title="కామదహనం - హోలీకథ" 
          summary="By Dr ABS Sastry - Story of Holi in Telugu"
        />
      </div>
      
      <p>Feel fresh to come across some ever useful information from this journal.</p>
    </main>
  );
};

export default Home;
