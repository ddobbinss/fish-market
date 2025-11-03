import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import Fish from '../components/Fish.jsx';
import RefreshButton from '../components/RefreshButton.jsx';

export default function Home() {
  return (
    <div id="content">
        <div id="mission-div">
            <h1>Our Mission</h1>
            <p>At Exotic Imports, our mission is to share the vibrant beauty of the underwater world with aquarists everywhere. We specialize in bringing rare and responsibly sourced exotic fish to your aquarium, ensuring every species is healthy, sustainable, and ethically cared for. Beyond just offering fish, we provide expert guidance and resources so that every customer — from beginner hobbyists to seasoned collectors</p>
        </div>
        <div id="img-banner">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ky5JWS9WuYM?si=lqPNA-0oZjAlxBXG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h1>Featured Fish</h1>
        <RefreshButton />
        <div id="featured-div" className="columns">   
            <Fish name="Mandarinfish" species="Synchiropus splendidus" region="Western Pacific" price="$150.00" />
            <Fish name="Clown Triggerfish" species="Balistoides conspicillum" region="Indo-Pacific" price="$200.00" />
            <Fish name="Royal Gramma" species="Gramma loreto" region="Caribbean Sea" price="$80.00" />        
        
        </div>
        <h1 id="news-header">News & Announcents</h1>
        <div id="news-div">
            <p>This autumn, Exotic Imports is introducing a curated collection of seasonal exotics selected for their rarity, striking coloration, and compatibility with advanced aquaria. These limited offerings are ideal for dedicated aquarists looking to expand or refine their collections with species not typically available year-round.</p>
            <Link to="/about" className="btn">Read More</Link> 
        </div>
    </div>
  );
}