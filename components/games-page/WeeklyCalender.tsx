import React from "react";

const WeeklyCalender = () => {
  const currentDate = new Date();
  const daysUntilNextSunday = 7 - currentDate.getDay();
  const nextSunday = new Date(
    currentDate.getTime() + daysUntilNextSunday * 24 * 60 * 60 * 1000
  );

  const formattedNextSunday = nextSunday.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-[200px] h-[60px] bg-[#EBDCCB] mt-8 text-center flex items-center justify-center font-bold rounded-lg">
      {formattedNextSunday}
    </div>
  );
};

export default WeeklyCalender;
