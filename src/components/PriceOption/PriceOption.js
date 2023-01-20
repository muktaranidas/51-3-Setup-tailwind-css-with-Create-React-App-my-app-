import React from "react";
import Feature from "../Feature/Feature";
// import { CheckCircleIcon } from "@heroicons/react/24/solid";

const PriceOption = ({ option }) => {
  const { features } = option;
  return (
    <div className="bg-indigo-300 m-3 rounded-md p-5">
      <div>
        <h3>
          <span className="text-6xl font-bold text-white">{option.price}</span>
          <span className="text-2xl text-gray-200 ">/mon</span>
        </h3>
        <p>{option.name}</p>
      </div>
      {features.map((feature, idx) => (
        <Feature feature={feature} key={idx}></Feature>
      ))}
      <button class=" mt-4 bg-green-600 w-full rounded-md py-2 text-white font-bold">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
