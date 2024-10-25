import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(new Date('2020-11-16'));
    const [endDate, setEndDate] = useState(new Date('2020-12-16'));
    const [openCalendar, setOpenCalendar] = useState(false);

    const toggleCalendar = () => setOpenCalendar(!openCalendar);

    return (
        <div className="relative">
            <div className="flex items-center text-sm text-gray-600 cursor-pointer" onClick={toggleCalendar}>
                {/* <CalendarIcon className="h-5 w-5 mr-2 text-gray-600" /> */}
                <span>{startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</span>
            </div>

            {openCalendar && (
                <div className="absolute z-10 bg-white border rounded-lg shadow-lg mt-2 right-4">
                    <DatePicker
                        selected={startDate}
                        onChange={(dates) => {
                            const [start, end] = dates;
                            setStartDate(start);
                            setEndDate(end);
                        }}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline
                        className="p-4"
                    />
                </div>
            )}
        </div>
    );
};

export default DateRangePicker;
