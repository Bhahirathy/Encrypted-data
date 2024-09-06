import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  selectedDate: Date | null;
  className?: string;
  onChange: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange, className }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => onChange(date as Date | null)}
      showTimeSelect
      dateFormat="MMM d, yyyy                                                                                  h:mm aa"
      className="px-3 py-2 w-full flex-1 justify-start text-left hover:bg-light-grey font-normal rounded-lg text-dark-grey h-10 w-30 border border-light-grey focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1"
      placeholderText="Select date and time"
    />
  );
}

export default CustomDatePicker;