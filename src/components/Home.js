import React from 'react';
import Section from './Section';
import styled from "styled-components"
function Home() {
  return (
    <div className="home-div">
        <Section 
            title="Model S"
            description="Order Online for Touchlesss Delivery"
            backgroundImage= "model-3.jpg"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
        />
        <Section 
            title="Model X"
            description="Order Online for Touchlesss Delivery"
            backgroundImage= "model-x.jpg"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
        />
        <Section 
            title="Model Y"
            description="Order Online for Touchlesss Delivery"
            backgroundImage= "model-y.jpg"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
        />
        <Section 
            title="Model S"
            description="Order Online for Touchlesss Delivery"
            backgroundImage= "model-3.jpg"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
        /> 
        <Section 
            title="Solar Panels"
            description="Lowest cost solar panels in America"
            backgroundImage= "solar-panel.jpg"
            leftButton="Order now"
            rightButton="Learn more"
        /> 

        <Section 
            title="Solar Roof"
            description="Produce clean energy  from your roof"
            backgroundImage= "model-3.jpg"
            leftButton="Order now"
            rightButton="Learn more"
        /> 

        <Section 
            title="Accesseories"
            description=""
            backgroundImage= "model-3.jpg"
            leftButton="Shop Now"
            
        />
    </div>
  );
}

export default Home;

