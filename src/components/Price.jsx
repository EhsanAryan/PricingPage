import React from 'react';
import { useState } from 'react';
import ImagedCard from './ImagedCard';
import PlanTable from './PlanTable';
import PriceCardsSection from './PriceCardsSection';
import PriceHeader from './PriceHeader';
import PriceSwitch from './PriceSwitch';



const Price = () => {
    const [isAnnualPrice, setIsAnnualPrice] = useState(false);

    return (
        <div className="price-section my-4 text-center">
            <PriceHeader />
            <PriceSwitch setIsAnnualPrice={setIsAnnualPrice} />
            <PriceCardsSection isAnnualPrice={isAnnualPrice} />
            <ImagedCard />

            <PlanTable />
        </div>
    );
}

export default Price;
