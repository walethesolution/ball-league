import GamesDiv from "../home/GamesDiv";
import UnplayedGames from "./UnplayedGames";

const PlayedGames = () => {
  return (
    <>
      <div className="w-[200px] h-[60px] bg-[#EBDCCB] mt-8 text-center flex items-center justify-center font-bold rounded-lg">
        <p>August 13, 2023</p>
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
