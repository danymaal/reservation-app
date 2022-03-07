import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard:FC<CustomerCardType> = ({ id, name, food }) => {
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container">
      <h5>{name}</h5>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;