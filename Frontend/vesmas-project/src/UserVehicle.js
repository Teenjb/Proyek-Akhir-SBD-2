import './index.css';
import React, {useState,setState, useEffect} from 'react';
const axios = require('axios');

function UserVehicle() {

  return (
  <section className="h-full gradient-form bg-slate-200 md:h-screen">
    <div className="container mx-auto py-12 px-6 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="xl:w-6/12">
          <div className="lg:flex lg:flex-wrap g-0">
            <div className="lg:w-full px-4 md:px-0">
              <div className="md:p-12 md:mx-6">
                <div className="text-center">
                  <h4 className="text-3xl text-sky-900 font-bold mt-1 mb-12 pb-1 ">Add Vehicle</h4>
                </div>
                <form>
                  <div className="mb-4 flex justify-center">
                    <input
                      type="text"
                      className="form-control block lg:w-3/4 sm:w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-solid border-4 border-orange-500 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg"
                      id="vin"
                      placeholder="Masukan VIN"
                    />
                  </div>
                  <div className="text-center pt-1 m-12 pb-1">
                    <button
                      className="inline-block px-6 py-2.5 bg-sky-900 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:bg-orange-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-48 mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default UserVehicle;
