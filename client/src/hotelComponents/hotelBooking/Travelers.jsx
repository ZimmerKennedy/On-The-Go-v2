import React from "react";

const Travelers = ({
  showGuestsDropdown,
  setShowGuestsDropdown,
  adults,
  setAdults,
  children,
  setChildren,
  rooms,
  setRooms,
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-bold text-sm lg:text-xl lg:pt-4 mb-2 text-white text-shadow-lg font-roboto">
        Guests
      </label>
      <div className="relative">
        <input
          className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2 cursor-pointer"
          type="text"
          value={`Adults: ${adults}, Children: ${children}, Rooms: ${rooms}`}
          onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
          readOnly
        />
        {showGuestsDropdown && (
          <div className="absolute z-40 bg-white border border-gray-300 mt-2 py-2 w-full rounded-md shadow-lg">
            <div className="px-4">
              <div className="flex justify-between items-center mb-2">
                <label className="font-bold text-sm lg:text-xl">Adults</label>
                <div className="flex items-center">
                  <button type="button" 
                  className="bg-light-blue text-white font-bold text-sm lg:text-xl p-1 rounded-md hover:bg-opacity-80"
                  onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}>-</button>
                  <span className="mx-2">{adults}</span>
                  <button type="button" 
                  className="bg-light-blue text-white font-bold text-sm lg:text-xl p-1 rounded-md hover:bg-opacity-80"
                  onClick={() => setAdults(adults + 1)}>+</button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-bold text-sm lg:text-xl">Children</label>
                <div className="flex items-center">
                  <button type="button" 
                  className="bg-light-blue text-white font-bold text-sm lg:text-xl p-1 rounded-md hover:bg-opacity-80"
                  onClick={() => setChildren(children > 0 ? children - 1 : 0)}>-</button>
                  <span className="mx-2">{children}</span>
                  <button type="button" 
                  className="bg-light-blue text-white font-bold text-sm lg:text-xl p-1 rounded-md hover:bg-opacity-80"
                  onClick={() => setChildren(children + 1)}>+</button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <label className="font-bold text-sm lg:text-xl">Rooms</label>
                <div className="flex items-center">
                  <button type="button" 
                  className="bg-light-blue text-white font-bold text-sm lg:text-xl p-1 rounded-md hover:bg-opacity-80"
                  onClick={() => setRooms(rooms > 1 ? rooms - 1 : 1)}>-</button>
                  <span className="mx-2">{rooms}</span>
                  <button type="button" 
                  className="bg-light-blue text-white font-bold text-sm lg:text-xl p-1 rounded-md hover:bg-opacity-80"
                  onClick={() => setRooms(rooms + 1)}>+</button>
                </div>
              </div>
              <button type="button" 
              className="bg-blue-600 text-white font-bold text-sm lg:text-xl p-2 rounded-md mt-2 hover:bg-navy-blue lg:mx-16"
              onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}>Done</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Travelers;