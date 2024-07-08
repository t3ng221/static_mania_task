import React from "react";

const CabinDetails = () => {
  return (
    <div className="h-screen mt-20 bg-white">
      <div className="flex flex-col p-10 rounded-lg">
        <div className="flex space-x-40">
          <div className="flex flex-1 flex-col items-center">
            <div className="justify-items-start">
              <div className=" bg-green-400 rounded-full p-10 mb-6">
                <div className="text-6xl text-white font-serif">G</div>
                <div className="flex flex-col">
                  <div className="text-2xl text-white">🌲🌲🌲</div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 max-w-lg mt-4">
              Welcome to our cosy cabin in the woods! Our rental home, nestled
              in the heart of the forest, is the ideal retreat for nature lovers
              and anyone looking for a peaceful escape from the hustle and
              bustle of city life.
            </p>
          </div>

          <div className="flex-1">
            <div className=" space-y-8">
              <div className="text-center">
                <p className="text-gray-500">Dense forest</p>
                <p>
                  <span className="text-6xl text-gray-800 font-extrabold">
                    20,291
                  </span>
                  m²
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Living space</p>
                <p>
                  <span className="text-6xl text-gray-800 font-extrabold">
                    324
                  </span>
                  m²
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Proximity to nearest town</p>
                <p>
                  <span className="text-6xl text-gray-800 font-extrabold">
                    30
                  </span>
                  minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinDetails;
