import React from 'react';
import CustomBadge from './customized-components/CustomBadge';
import CutsomButton from './customized-components/CutsomButton';

const PriceCard = ({
    className,
    src,
    altImage,
    cardTitle,
    cardText,
    monthlyPrice,
    monthlyPrice2,
    annualPrice,
    options,
    btnBgColor,
    btnColor,
    btnBgColorHover,
    href,
    btnText,
    isAnnualPrice,
    isPopular
}) => {
    return (
        <div className={className}>
            <div className={`card price-card rounded-3 ${isPopular ? "popular-price-card" : ""}`}>
                {
                    isPopular ? (
                        <CustomBadge
                        backgroundColor="#eae8fd"
                        color="#7367f0"
                        fontSize="0.8rem"
                        className="popular-badge"
                        >
                            Popular
                        </CustomBadge>
                    ) : null
                }
                <div className="card-body">
                    <img src={src}
                        class="img-card" alt={altImage || "Pic"} />
                </div>
                <div className="card-body pb-4">
                    <h3 className="card-title mb-1">{cardTitle}</h3>
                    <p className="card-text">
                        {cardText}
                    </p>
                    <div className="d-flex justify-content-center align-content-center pt-3">
                        <sup className="purple-color mt-2 me-1 h5">$</sup>
                        <h1 className="price-amount">
                            {isAnnualPrice ? monthlyPrice2 || monthlyPrice : monthlyPrice}
                        </h1>
                        <sub className="mt-auto mb-3 h6 muted-text-color">/month</sub>
                    </div>
                    <small className={`price-yearly price-yearly-toggle muted-text-color
                            ${isAnnualPrice ? "" : "d-none"}`}>
                        $ {annualPrice || 0} / year
                    </small>
                    <ul className="text-start mt-4">
                        {options.map((opt, index) => {
                            return (
                                <li key={`${index}_${Math.random()}`}>{opt}</li>
                            );
                        })}
                    </ul>
                    <CutsomButton
                        backgroundColor={btnBgColor}
                        color={btnColor}
                        hoverBackgroundColor={btnBgColorHover || btnColor}
                        href={href}
                        className="mt-2 d-block w-100"
                    >
                        {btnText}
                    </CutsomButton>
                </div>
            </div>
        </div>
    );
}

export default PriceCard;
