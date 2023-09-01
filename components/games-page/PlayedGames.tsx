import { useState, useEffect } from "react";
import GamesDiv from "../home/GamesDiv";

const PlayedGames = () => {
  const startDate = new Date("2023-08-13T00:00:00");
  const [currentDate, setCurrentDate] = useState<Date>(startDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(startDate);
  const [stats, setStats] = useState<any[]>([]);
  const [showStats, setShowStats] = useState(true);

  useEffect(() => {
    const sampleStats = [
      {
        date: "2023-08-13",
        games: [
          { teams: ["Team A", "Team B"], scores: [16, 9] },
          { teams: ["Team A", "Team C"], scores: [11, 7] },
          { teams: ["Team A", "Team D"], scores: [1, 11] },
          { teams: ["Team D", "Team E"], scores: [11, 9] },
          { teams: ["Team D", "Team F"], scores: [8, 11] },
          { teams: ["Team F", "Team G"], scores: [11, 6] },
          { teams: ["Team F", "Team H"], scores: [6, 11] },
        ],
      },
      {
        date: "2023-08-20",
        games: [
          { teams: ["Team A", "Team B"], scores: [12, 16] },
          { teams: ["Team B", "Team C"], scores: [11, 9] },
        ],
      },
      {
        date: "2023-08-27",
        games: [
          { teams: ["Team A", "Team B"], scores: [7, 11] },
          { teams: ["Team B", "Team C"], scores: [11, 7] },
          { teams: ["Team B", "Team D"], scores: [11, 7] },
          { teams: ["Team B", "Team E"], scores: [11, 7] },
          { teams: ["Team B", "Team F"], scores: [11, 7] },
          { teams: ["Team F", "Team A"], scores: [11, 7] },
          { teams: ["Team F", "Team C"], scores: [11, 7] },
          { teams: ["Team C", "Team D"], scores: [11, 7] },
        ],
      },
    ];

    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const selectedStats = sampleStats.find(
        (stat) => stat.date === formattedDate
      );
      if (selectedStats) {
        setStats(selectedStats.games);
      }
    }
  }, [selectedDate]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatFullDate = (date: Date) => {
    if (!date) {
      return "";
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
    setSelectedDate(nextSunday);
  };

  const goToPreviousSunday = () => {
    if (currentDate) {
      const previousSunday = getPreviousSunday(currentDate);
      setCurrentDate(previousSunday);
      setSelectedDate(previousSunday);
    }
  };

  const isStartDate = currentDate?.getTime() === startDate.getTime();

  const handleDateClick = () => {
    setSelectedDate(currentDate);
    setShowStats(true);
  };

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
        <div
          className={`w-[200px] h-[60px] bg-[#EBDCCB] text-center flex items-center justify-center font-bold rounded-lg ${
            showStats ? "cursor-pointer" : ""
          }`}
          onClick={handleDateClick}
        >
          <p>{formatFullDate(currentDate)}</p>
        </div>
        <button
          onClick={goToNextSunday}
          className="text-sm bg-[#EBDCCB] px-4 py-2 rounded-lg font-medium"
        >
          Next
        </button>
      </div>

      {showStats && selectedDate && (
        <div className="text-lg font-medium animate-bounce lg:text-2xl">
          Team Stats for {formatDate(selectedDate)}:
        </div>
      )}

      {showStats && (
        <div className="lg:flex lg:flex-wrap lg:justify-center lg:gap-4 xl:gap-6">
          {stats.map((game, index) => (
            <table
              key={index}
              className="border-collapse border border-gray-300 mt-4"
            >
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    <GamesDiv teams={game.teams} scores={game.scores} />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">FINAL</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )}
    </>
  );
};

export default PlayedGames;
