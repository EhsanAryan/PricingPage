import React from 'react';
import CutsomButton from './customized-components/CutsomButton';

const ImagedCard = () => {
    return (
        <div className="trial-card">
            <div>
                <h3 className="purple-color">Still not convinced? Start with a 14-day FREE trial!</h3>
                <p>You will get full access to with all the features for 14 days.</p>
                <CutsomButton
                backgroundColor="#7367f0"
                color="#fff"
                hoverBackgroundColor="#655adc"
                href="https://google.com"
                >
                    Sent 14-day FREE trial
                </CutsomButton>
            </div>
            <img src="assets/pics/girl-with-laptop.png"
             alt="Girl with laptop" className="trial-img" />
        </div>
    );
}

export default ImagedCard;
