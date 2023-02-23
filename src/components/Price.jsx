import React from 'react';
import { useState } from 'react';
import FAQSection from './FAQSection';
import ImagedCard from './ImagedCard';
import PlanTable from './PlanTable';
import PriceCardsSection from './PriceCardsSection';
import PriceHeader from './PriceHeader';
import PriceSwitch from './PriceSwitch';



const Price = () => {
    const [isAnnualPrice, setIsAnnualPrice] = useState(false);

    return (
        <div className="price-section mt-4 mb-3 text-center">
            <PriceHeader />
            <PriceSwitch setIsAnnualPrice={setIsAnnualPrice} />
            <PriceCardsSection isAnnualPrice={isAnnualPrice} />
            <ImagedCard />
            <PlanTable />
            <FAQSection />
        </div>
    );
}

export default Price;
