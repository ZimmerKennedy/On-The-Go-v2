import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ label, minDate, selected, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="font-bold text-sm lg:text-xl lg:pt-4 mb-2 text-white text-shadow-lg font-roboto">
        {label}
      </label>
      <DatePicker
        minDate={minDate}
        selected={selected}
        onChange={onChange}
        className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
      />
    </div>
  );
};

export default DatePickerComponent;