import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../../images/Banner-no-bg.png";

const Banner = () => {
  const navigate = useNavigate();

  const handleCreateABlog = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center mx-10 my-12 md:my-28 gap-5">
      <div className="text-left flex-1">
        <p className="font-semibold text-4xl mb-4">
          The Most Creative Art School That Can Develop Your Talent
        </p>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
          minim veniam, quis nostrud exercitation dolore magna
        </p>
        <button
          onClick={handleCreateABlog}
          className="bg-[#7367f0] p-2 rounded-md text-sm border-2 border-[#7367f0] hover:bg-transparent"
        >
          GET STARTED
        </button>
      </div>
      <div className="flex-1">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
