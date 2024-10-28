"use client";
import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { HiArrowRightCircle } from "react-icons/hi2";


export default function Home() {

  const handleCardClick1 = () => {
    window.open(
      "https://cp.tradejini.com/Ox1Ux9?_gl=1*aampo0*_ga*MTU2MTkwMTcyNi4xNzI1MjcxMzEx*_ga_PYZ3N13XX4*MTcyOTg1NjM3OC41MC4xLjE3Mjk4NTY2NDYuMC4wLjA",
      "_blank"
    );
  };

 

  return (
    <main>
      {/* <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Software
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
         
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800  transform transition duration-500 hover:scale-105 text-center cursor-pointer"
                onClick={() => handleCardClick("/path/to/pdf1.pdf")}
              >
                <HiArrowRightCircle className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">CUBEPLUS</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
       
          <div className="flex flex-wrap justify-center">
            {/* Card 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center cursor-pointer hover:bg-gradient-to-br hover:from-green-200 hover:to-transparent"
                onClick={handleCardClick1}
              >
                <HiArrowRightCircle className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">CUBEPLUS</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
