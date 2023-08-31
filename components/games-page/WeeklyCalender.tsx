"use client";

import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../../public/assets/icons/calendar.svg";
import Image from "next/image";
import React from "react";

const getSundays = (year: number, month: number) => {
  const sundays = [];
  const date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    if (date.getDay() === 0) {
      sundays.push(new Date(date));
    }
    date.setDate(date.getDate() + 1);
  }
  return sundays;
};

const Calender = ({ year, month }: { year: number; month: number }) => {
  const sundaysInMonth = getSundays(year, month);

  const [selectedSunday, setSelectedSunday] = useState<Date | null>(
    sundaysInMonth[4] || null
  );

  const datePickerRef = useRef<any>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedSunday(date);
  };

  const handleImageClick = () => {
    if (datePickerRef && datePickerRef.current) {
      datePickerRef.current.focus();
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center w-[368px] mt-8 bg-[#EBDCCB]">
          <div onClick={handleImageClick}>
            <Image src={CalendarIcon} alt="a calendar Icon" />
          </div>
          <div>
            <DatePicker
              className="bg-[#EBDCCB] h-[57px] text-black text-center font-semibold"
              selected={selectedSunday}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              filterDate={(date) =>
                sundaysInMonth.some(
                  (sunday) => sunday.toDateString() === date.toDateString()
                )
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;
