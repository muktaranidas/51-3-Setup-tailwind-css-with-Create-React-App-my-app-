import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center ">
      <CheckCircleIcon className="h-6 w-6 text-blue-500" />
      <p className="ml-2">{feature}</p>
    </div>
  );
};

export default Feature;
