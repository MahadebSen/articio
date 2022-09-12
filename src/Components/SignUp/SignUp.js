import React from "react";
import google from "../../images/Google.png";
import github from "../../images/Github.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section class="text-gray-600 body-font relative max-w-5xl mx-auto">
      <div class="container px-5 py-10 md:py-20 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="md:w-1/2 lg:w-1/2 mx-auto  bg-white flex flex-col md:ml-auto w-full p-8 mt-8 md:mt-0 rounded-lg">
          <h2 class="text-gray-900 text-3xl pb-5 font-medium title-font">
            Sign Up
          </h2>

          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPwd"
              name="confirmPwd"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="text-xs text-gray-500 mb-4">
            <p>
              Alrade have an account?{" "}
              <Link to="/login" className=" text-red-500">
                Login
              </Link>
            </p>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Log In
          </button>
          <p class="text-xs text-gray-500 mt-4">Or, you may choose,</p>
          <div className="flex flex-row gap-3 mt-4">
            <div onClick="" className="hover:shadow-2xl rounded-xl">
              <img className="w-[60px]" src={google} alt="" />
            </div>
            <div onClick="" className="hover:shadow-2xl rounded-xl">
              <img className="w-[60px]" src={github} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
