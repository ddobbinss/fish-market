import React from 'react';
import '../css/Faq.css';
export default function Faq() {
  return (
    <div id="content">
                <div id="faq-submit">
                    <h2>Have a Question?</h2>
                    <p>Contact Us</p>
                    <form method="POST" id="faq-form">
                        <input type="hidden" name="access_key" value="5219852a-c7b2-4b0b-bc51-2d2c10f9a505" />
                    
                                <p>
                                    <label htmlFor="name">Name:</label>
                                    <input id="name" type="text" name="name" required />
                                </p>
                                <p>
                                    <label htmlFor="email">Email:</label>
                                    <input id="email" type="email" name="email" required />
                                </p>  
                            
                            
                                <p>
                                    <label htmlFor="question">Question:</label>
                                </p>
                                <textarea id="question" name="question" required></textarea>
                        
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                        <p><button type="submit">Submit</button></p>

                        <div id="contact-result"></div>
                    </form>

                </div>  
                <h1 id="faq-header">Frequently Asked Questions:</h1>
                <div className="faq-item">
                    <h2 className="faq-question">What is Exotic Imports?</h2>
                    <p className="faq-answer">Exotic Imports is a small business that specializes in importing and selling unique and hard-to-find products from around the world. We offer a wide range of items, including food, beverages, home decor, and more.</p>
                </div>
                <div className="faq-item">
                    <h2 className="faq-question">Where do you source your products?</h2>
                    <p className="faq-answer">We work with a network of trusted suppliers and artisans from various countries to ensure that we bring you authentic and high-quality products. Our team travels extensively to discover new items and build relationships with our partners.</p>
                </div>
                <div className="faq-item">
                    <h2 className="faq-question">Do you offer international shipping?</h2>
                    <p className="faq-answer">Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary depending on the destination. Please refer to our shipping policy for more details.</p>
                </div>
                <div className="faq-item">
                    <h2 className="faq-question">What is your return policy?</h2>
                    <p className="faq-answer">We want you to be completely satisfied with your purchase. If you are not happy with your order, please contact us within 30 days of receiving it to initiate a return. Items must be in their original condition and packaging. Please refer to our return policy for more information.</p>
                </div>
    </div>
  );
}