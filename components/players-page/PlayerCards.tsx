import PlayerCard from "./PlayerCard";
import { playerData } from "./playerdata";

const PlayerCards: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {playerData.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
};

export default PlayerCards;
