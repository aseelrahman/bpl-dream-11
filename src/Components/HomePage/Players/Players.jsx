import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);
  const [selectedType, setSelectedType] = useState("available");
  return (
    <div className="container mx-auto my-15">
      <div className="flex justify-between gap-4 items-center mb-5">
        <h2 className="font-bold text-3xl">{selectedType === "available" ? "Available Players" : "Selected Players (2/6)"}</h2>
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : "btn-neutral"} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : "btn-neutral"} rounded-l-none rounded-r-xl`}
          >
            Selected (0)
          </button>

        </div>
      </div>
      {
        selectedType === 'available'? <AvailablePlayers setCoin={setCoin} coin={coin} players={players} /> : <SelectedPlayers />
      }
      
    </div>
  );
};

export default Players;
