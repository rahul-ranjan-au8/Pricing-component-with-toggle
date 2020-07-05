import React, { Component } from "react";
import "./app.css";

// components
import Options from "./components/Options";
import PricingListItem from "./components/PricingListItem";

// images
import BgTop from "./images/bg-top.svg";
import BgBottom from "./images/bg-bottom.svg";

class App extends Component {
  state = {
    pricings: [
      {
        id: 1,
        type: "Basic",
        priceMonthly: "19.99",
        priceAnually: "199.99",
        features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
        isRecommended: false,
      },
      {
        id: 2,
        type: "Professional",
        priceMonthly: "24.99",
        priceAnually: "249.99",
        features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
        isRecommended: true,
      },
      {
        id: 3,
        type: "Master",
        priceMonthly: "39.99",
        priceAnually: "399.99",
        features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
        isRecommended: false,
      },
    ],
    plan: "anually",
  };

  handleChange = (event) => {
    if (this.state.plan === "monthly") {
      this.setState({ plan: "anually" });
    } else {
      this.setState({ plan: "monthly" });
    }
  };

  render() {
    return (
      <div className="app">
        <h1 className="heading">Our Pricing</h1>

        <Options onClick={this.handleChange} />

        <div className="pricingList">
          {this.state.pricings.map((pricing) => (
            <PricingListItem key={pricing.id} currentPricing={pricing} plan={this.state.plan} />
          ))}
        </div>

        <img src={BgTop} alt="bg-top" className="bg-top" />
        <img src={BgBottom} alt="bg-bottom" className="bg-bottom" />
      </div>
    );
  }
}

export default App;
