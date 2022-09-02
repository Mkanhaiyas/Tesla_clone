import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        image="model-3.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        image="model-x.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        image="last-s.jpeg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />

      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-y.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        image="solar-panel.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        image="solar-roof.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        image="accessories.jpg"
        leftButton="Shop Now"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
