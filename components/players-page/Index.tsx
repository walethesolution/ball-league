import PlayerCards from "./PlayerCards";
import PlayerSubNavBar from "./PlayerSubNavBar";
import Roster from "./Roster";

const Index = () => {
  return (
    <div>
      <PlayerSubNavBar />
      <div className="flex flex-col gap-4">
        <Roster />
        <PlayerCards />
      </div>
    </div>
  );
};

export default Index;
