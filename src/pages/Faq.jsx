import React from 'react';
import '../css/Faq.css';
import {useState} from 'react';
import FaqItem from '../components/FaqItem.jsx';


export default function Faq() {

    const [result, setResult] = useState("");

        const onSubmit = async(event) => {
            event.preventDefault();
            setResult("Fishing for Response...");

            const formData = new FormData(event.target);

    
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data= await response.json();

            if (data.success) {
                setResult("Question Delivered.");
                event.target.reset();
            }
            else {
                console.log("error", data);
                setResult(data.message);
            }
        }



  return (
    <div id="content">
                <div id="faq-submit">
                    <h2>Have a Question?</h2>
                    <p>Contact Us</p>
                    <form method="POST" id="faq-form" onSubmit={onSubmit}>
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

                        <div id="contact-result">{result}</div>
                    </form>

                </div>  

                <h1 id="faq-header">Frequently Asked Questions:</h1>
                <FaqItem 
                question="What is Exotic Imports?" 
                answer="Exotic Imports is a small business that specializes in importing and selling unique and hard-to-find products from around the world. We offer a wide range of items, including food, beverages, home decor, and more"/>
             
                <FaqItem 
                question="Where do you source your products?" 
                answer="We work with a network of trusted suppliers and artisans from various countries to ensure that we bring you authentic and high-quality products. Our team travels extensively to discover new items and build relationships with our partners."/>  
                
                <FaqItem 
                question="Do you offer international shipping?" 
                answer="Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary depending on the destination. Please refer to our shipping policy for more details."/>  
                
                <FaqItem 
                question="What is your return policy?" 
                answer="We want you to be completely satisfied with your purchase. If you are not happy with your order, please contact us within 30 days of receiving it to initiate a return. Items must be in their original condition and packaging. Please refer to our return policy for more information."/>
    </div>
  );
}