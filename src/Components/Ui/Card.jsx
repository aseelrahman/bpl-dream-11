import { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player, setCoin, coin }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleChoosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      alert(`${player.playerName} is selected`);
      setIsSelected(true);
      setCoin(newCoin);
    } else {
      alert("Not enough coin to purchase this player");
    }
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="w-full aspect-4/3 object-cover">
        <img src={player.playerImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser /> {player.playerName}
        </h2>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FaFlag />
            <p>{player.playerCountry}</p>
          </div>
          <button className="btn btn-normal">{player.playerType}</button>
        </div>
        <div className="divider"></div>
        <h2 className="font-bold">({player.rating})</h2>
        <div className="flex justify-between">
          <span className="font-bold">{player.battingStyle}</span>
          <span className="font-bold">{player.ballingStyle}</span>
        </div>

        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price: {player.price}</p>
          <button
            onClick={() => handleChoosePlayer()}
            className="btn"
            disabled={isSelected}
          >
            {isSelected === false ? "Choose Player" : "Selected"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
