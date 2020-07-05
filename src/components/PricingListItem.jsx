import React from "react";
import "../styles/pricingListItem.css";

const PricingListItem = ({ currentPricing, plan }) => {
  let card = null;

  if (currentPricing !== undefined) {
    if (currentPricing.isRecommended === false) {
      card = (
        <div className="card card-false">
          <h3>{currentPricing.type}</h3>
          <div className="price-false">
            <span> $ </span>
            {plan === "monthly" ? <p>{currentPricing.priceMonthly}</p> : <p>{currentPricing.priceAnually}</p>}
          </div>
          <div className="features-false-div">
            <hr />
            <p className="features-false">{currentPricing.features[0]}</p>
            <hr />
            <p className="features-false">{currentPricing.features[1]}</p>
            <hr />
            <p className="features-false">{currentPricing.features[2]}</p>
            <hr />
          </div>
          <button className="btn-false">LEARN MORE</button>
        </div>
      );
    } else {
      card = (
        <div className="card card-true">
          <h3>{currentPricing.type}</h3>
          <div className="price-true">
            <span> $ </span>
            {plan === "monthly" ? <p>{currentPricing.priceMonthly}</p> : <p>{currentPricing.priceAnually}</p>}
          </div>
          <div className="features-true-div">
            <hr />
            <p className="features-true">{currentPricing.features[0]}</p>
            <hr />
            <p className="features-true">{currentPricing.features[1]}</p>
            <hr />
            <p className="features-true">{currentPricing.features[2]}</p>
            <hr />
          </div>
          <button className="btn-true">LEARN MORE</button>
        </div>
      );
    }
  }
  return card;
};

export default PricingListItem;
