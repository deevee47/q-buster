import React from "react";
import CafeCard from "./sub/CafeCard";
import FoodCard from "./sub/FoodCard";
import { cafes } from "./utils/data"; // Importing the cafes data

const OrderMenu = ({ cafe }) => {
  const selectedCafe = cafes.find((item) => item.name === cafe); // Find the selected cafe from the data

  if (!selectedCafe) {
    return <div>No menu available for {cafe}</div>; // Render a message if the cafe is not found
  }

  const { name, menu } = selectedCafe;

  return (
    <div className="font-Poppins p-12">
      <CafeCard
        name={`${name} Order Menu`}
        color={`text-primary-${selectedCafe.color}`}
        gradient={`from-${selectedCafe.gradient}`}
      >
        {menu.map((item, index) => (
          <FoodCard
            key={index} // Ensure unique key for each item
            name={item.name}
            price={item.price}
            buttonColor={item.buttonColor}
            image={item.image}
          />
        ))}
      </CafeCard>
    </div>
  );
};

export default OrderMenu;
