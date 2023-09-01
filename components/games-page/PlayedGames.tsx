import { useState } from "react";
import GamesDiv from "../home/GamesDiv";

const PlayedGames = () => {
  const startDate = new Date("2023-08-13T00:00:00");
  const [currentDate, setCurrentDate] = useState<Date>(startDate);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatFullDate = (date: Date) => {
    if (!date) {
      return ""; // Return an empty string if date is null
    }

    const formattedDate = formatDate(date);
    return ` Sun - ${formattedDate}`;
  };

  const getNextSunday = (date: Date) => {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + (7 - date.getDay()));
    return nextDate;
  };

  const getPreviousSunday = (date: Date) => {
    const prevDate = new Date(date);
    prevDate.setDate(date.getDate() - date.getDay() - 7);
    return prevDate;
  };

  const goToNextSunday = () => {
    const nextSunday = getNextSunday(currentDate || startDate);
    setCurrentDate(nextSunday);
  };

  const goToPreviousSunday = () => {
    if (currentDate) {
      const previousSunday = getPreviousSunday(currentDate);
      setCurrentDate(previousSunday);
    }
  };

  const isStartDate = currentDate?.getTime() === startDate.getTime();

  return (
    <>
      <div className="flex gap-3 justify-center items-center mt-8">
        {!isStartDate && (
          <button
            onClick={goToPreviousSunday}
            className="text-sm bg-[#EBDCCB] px-4 py-2 rounded-lg font-medium"
          >
            Prev
          </button>
        )}
        <div className="w-[200px] h-[60px] bg-[#EBDCCB] text-center flex items-center justify-center font-bold rounded-lg">
          <p>{formatFullDate(currentDate)}</p>
        </div>
        <button
          onClick={goToNextSunday}
          className="text-sm bg-[#EBDCCB] px-4 py-2 rounded-lg font-medium"
        >
          Next
        </button>
      </div>

      <div className="text-lg font-medium animate-bounce lg:text-2xl">
        Team Stats starts officially
      </div>

      <div className=" lg:flex lg:flex-wrap lg:justify-center lg:gap-4 xl:gap-6">
        <table className="border-collapse border border-gray-300 mt-4">
          <tbody className="">
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <GamesDiv teams={["Team A", "Team B"]} scores={[16, 9]} />
              </td>
              <td className="border border-gray-300 px-4 py-2">FINAL</td>
            </tr>
          </tbody>
        </table>

        <table className="border-collapse border border-gray-300 mt-4">
          <tbody className="">
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <GamesDiv teams={["Team A", "Team C"]} scores={[11, 7]} />
              </td>
              <td className="border border-gray-300 px-4 py-2">FINAL</td>
            </tr>
          </tbody>
        </table>

        <table className="border-collapse border border-gray-300 mt-4">
          <tbody className="">
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <GamesDiv teams={["Team A", "Team D"]} scores={[1, 11]} />
              </td>
              <td className="border border-gray-300 px-4 py-2">FINAL</td>
            </tr>
          </tbody>
        </table>

        <table className="border-collapse border border-gray-300 mt-4">
          <tbody className="">
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <GamesDiv teams={["Team D", "Team E"]} scores={[11, 9]} />
              </td>
              <td className="border border-gray-300 px-4 py-2">FINAL</td>
            </tr>
          </tbody>
        </table>

        <table className="border-collapse border border-gray-300 mt-4">
          <tbody className="">
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <GamesDiv teams={["Team D", "Team F"]} scores={[11, 8]} />
              </td>
              <td className="border border-gray-300 px-4 py-2">FINAL</td>
            </tr>
          </tbody>
        </table>

        <table className="border-collapse border border-gray-300 mt-4">
          <tbody className="">
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <GamesDiv teams={["Team F", "Team G"]} scores={[11, 6]} />
              </td>
              <td className="border border-gray-300 px-4 py-2">FINAL</td>
            </tr>
          </tbody>
        </table>

        <table className="border-collapse border border-gray-300 mt-4">
          <tbody className="">
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <GamesDiv teams={["Team F", "Team H"]} scores={[6, 11]} />
              </td>
              <td className="border border-gray-300 px-4 py-2">FINAL</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlayedGames;
