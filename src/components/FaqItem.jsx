import react from 'react';
import '../css/FaqItem.css';

const FaqItem = (props) => {
    return (
        <div className="faq-item">
            <h2 className="faq-question">{props.question}</h2>
            <p className="faq-answer">{props.answer}</p> 
        </div>

    )
};

export default FaqItem;