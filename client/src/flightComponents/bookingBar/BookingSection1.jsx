import React from 'react'

const BookingSection1 = ({ tripType, classType, travelers, setClassType, setTravelers, setTripType}) => {
  
    
    const handleTripTypeChange = (event) => {
        setTripType(event.target.value);
      };

  
    return (
    <div className="mt-6 mx-2 lg:mx-4">
    <section className="flex flex-col xl:flex-row sm:h-auto gap-2 lg:mb-4">
      <div className="flex flex-col lg:mb-4">
        <label className="font-bold text-xl mb-2 text-white text-shadow-lg font-roboto">
          Trip:
        </label>
        <select
          className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          value={tripType}
          onChange={handleTripTypeChange}
        >
          <option value="Roundtrip">Roundtrip</option>
          <option value="One Way">One Way</option>
        </select>
      </div>
      <div className="flex flex-col lg:mb-4">
        <label className="mr-2 font-bold text-xl mb-2 text-white text-shadow-lg font-roboto">
          Travelers:
        </label>
        <div className="flex items-center">
          <button
            type="button"
            className="bg-gray-300 py-2 px-3 rounded-l-md"
            onClick={() =>
              travelers > 1 ? setTravelers(travelers - 1) : null
            }
          >
            -
          </button>
          <input
            type="text"
            className="w-8 text-center border-t border-b border-gray-300 py-1.5 px-3"
            value={travelers}
            readOnly
          />
          <button
            type="button"
            className="bg-gray-300 py-2 px-3 rounded-r-md"
            onClick={() => setTravelers(travelers + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col mb-4 sm:mb-0">
        <label className="font-bold text-xl mb-2 text-white text-shadow-lg font-roboto">
          Class:
        </label>
        <select
          className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          value={classType}
          onChange={(e) => setClassType(e.target.value)}
        >
          <option value="economy">Economy</option>
          <option value="premium">Premium Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select>
      </div>
    </section>
  </div>
  )
}

export default BookingSection1