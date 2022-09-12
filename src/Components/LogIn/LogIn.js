import React from "react";

const LogIn = () => {
  return (
    <section class="text-gray-600 body-font relative max-w-5xl mx-auto">
      <div class="container px-5 py-10 md:py-20 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="md:w-1/2 lg:w-1/2 mx-auto  bg-white flex flex-col md:ml-auto w-full p-8 mt-8 md:mt-0 rounded-lg">
          <h2 class="text-gray-900 text-3xl pb-5 font-medium title-font">
            Log In
          </h2>

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
          <div class="text-xs text-gray-500 mb-4">
            <p className=" text-red-500 pb-2">Forget Password</p>
            <p>
              New here?{" "}
              <span className=" text-red-500">Create a New Account</span>
            </p>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Log In
          </button>
          <p class="text-xs text-gray-500 mt-3">Or, you may choose,</p>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
