import React from 'react';
import PriceCard from './PriceCard';

const options_card1 = [
    "100 responses a month",
    "Unlimited forms and surveys",
    "Unlimited fields",
    "Basic form creation tools",
    "Up to 2 subdomains"
];

const options_card2 = [
    "Up to 5 users",
    "120+ components",
    "Basic support on Github",
    "Monthly updates",
    "Integrations"
];

const options_card3 = [
    "Up to 10 users",
    "150+ components",
    "Basic support on Github",
    "Monthly updates",
    "Speedy build tooling"
];

const PriceCardsSection = ({ isAnnualPrice }) => {
    return (
        <div className="row px-3 px-lg-5">
                <PriceCard
                    className="col-12 col-lg-4 my-2"
                    src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/page-pricing-basic.png"
                    altImage="Piggy bank"
                    cardTitle="Basic"
                    cardText="A simple start for everyone"
                    monthlyPrice="0"
                    options={options_card1}
                    btnBgColor="#cdebda"
                    btnColor="#28c76f"
                    btnBgColorHover="#b6e1c8"
                    href="https:/google.com"
                    btnText="Your Current Plan"
                    isAnnualPrice={isAnnualPrice}
                />

                <PriceCard
                    className="col-12 col-lg-4 my-2"
                    src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/page-pricing-standard.png"
                    altImage="Metal safe"
                    cardTitle="Pro"
                    cardText="For small to medium businesses"
                    monthlyPrice="9"
                    monthlyPrice2="7"
                    annualPrice="90"
                    options={options_card2}
                    btnBgColor="#7367f0"
                    btnColor="#fff"
                    btnBgColorHover="#655bd5"
                    href="https:/google.com"
                    btnText="Upgrade"
                    isAnnualPrice={isAnnualPrice}
                    isPopular={true}
                />

                <PriceCard
                    className="col-12 col-lg-4 my-2"
                    src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/page-pricing-enterprise.png"
                    altImage="Rocket"
                    cardTitle="Enterprise"
                    cardText="Solution for big organizations"
                    monthlyPrice="19"
                    monthlyPrice2="16"
                    annualPrice="190"
                    options={options_card3}
                    btnBgColor="#e3e1fa"
                    btnColor="#7367f0"
                    btnBgColorHover="#d6d5f0"
                    href="https:/google.com"
                    btnText="Upgrade"
                    isAnnualPrice={isAnnualPrice}
                />
            </div>
    );
}

export default PriceCardsSection;
