import React from 'react';
import '../css/About.css';

export default function About() {
  return (
    <div id="content">
        <div id="mission-div">
            <h1>Our Mission</h1>
            <p>At Exotic Imports, our mission is to share the vibrant beauty of the underwater world with aquarists everywhere. We specialize in bringing rare and responsibly sourced exotic fish to your aquarium, ensuring every species is healthy, sustainable, and ethically cared for. Beyond just offering fish, we provide expert guidance and resources so that every customer — from beginner hobbyists to seasoned collectors</p>
        </div>
        <div className="aboutus-img">
            <img src="./../images/large1.png" alt="fish"/>
        </div>
        <div id="why-div">
            <h1>Why</h1>
            <p>At Exotic Imports, our work goes beyond selling rare fish — it’s about a shared love for aquatic life. We believe aquariums are living art, and every species has a story worth celebrating. This marketplace was built as more than a storefront; it’s a space where enthusiasts, collectors, and caretakers come together over a common passion.</p>
        </div>
        <div className="aboutus-img">
            <img src="./../images/large2.png" alt="fish"/>    
        </div>
            <h2>News & Updates</h2>
        <div id="news-div">
            <p>This autumn, Exotic Imports is introducing a curated collection of seasonal exotics selected for their rarity, striking coloration, and compatibility with advanced aquaria. These limited offerings are ideal for dedicated aquarists looking to expand or refine their collections with species not typically available year-round.</p>
        </div>
    </div>
  );
}