import React from 'react';
import CustomAccordion from './customized-components/CustomAccordion';

const accordions = [
    {
        summary: "What counts towards the 100 responses limit?",
        details: "We count all responses submitted through all your forms in a month. If you already received 100 responses this month, you won’t be able to receive any more of them until next month when the counter resets."
    },
    {
        summary: "How do you process payments?",
        details: "We accept Visa®, MasterCard®, American Express®, and PayPal®. So you can be confident that your credit card information will be kept safe and secure."
    },
    {
        summary: "What payment methods do you accept?",
        details: "2Checkout accepts all types of credit and debit cards."
    },
    {
        summary: "Do you have a money-back guarantee?",
        details: "Yes. You may request a refund within 30 days of your purchase without any additional explanations."
    },
    {
        summary: "I have more questions. Where can I get help?",
        details: "Please contact us if you have any other questions or concerns. We’re here to help!"
    },
];


const FAQSection = () => {
    return (
        <div className="faq-section">
            <div className="container">
                <div className="text-center mb-3">
                    <h2 className='main-title-text-color'>FAQs</h2>
                    <p className="main-text-color">
                        Let us help answer the most common questions.
                    </p>
                </div>

                <div>
                {accordions.map((a, index) => {
                        return (
                            <CustomAccordion
                            summary={a.summary}
                            details={a.details}
                            className="my-2 rounded-3 no-before text-start grey-box-shadow"
                            summaryClasses="main-title-text-color fw-bold"
                            detailsClasses="main-text-color"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FAQSection;

