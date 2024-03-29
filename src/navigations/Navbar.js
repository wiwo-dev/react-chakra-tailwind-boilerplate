import React from "react";

const Navbar = () => {
  return (
    <div className="container items-center">
      <div className="text-blueGray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
        <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
          <nav className="flex flex-wrap items-center justify-start text-base ">
            <ul className="items-center inline-block list-none lg:inline-flex">
              <li>
                <a
                  href="#"
                  className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
                  Now
                </a>
              </li>
            </ul>
          </nav>
          <a href="/" className="justify-center focus:outline-none md:ml-auto md:mr-auto">
            <div className="inline-flex items-center">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
              <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8">
                {" "}
                Cześć{" "}
              </h2>
            </div>
          </a>
          <button className="w-auto px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md lg:ml-auto focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 ">
            Button{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
