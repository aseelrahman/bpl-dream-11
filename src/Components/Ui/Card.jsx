
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({player}) => {
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
                  <button className="btn btn-normal">
                    {player.playerType}
                  </button>
                </div>
                <div className="divider"></div>
                <h2 className="font-bold">({player.rating})</h2>
                <div className="flex justify-between">
                  <span className="font-bold">{player.battingStyle}</span>
                  <span className="font-bold">{player.ballingStyle}</span>
                </div>

                <div className="card-actions justify-between items-center">
                  <p className="font-semibold">Price: $13400</p>
                  <button className="btn">Choose Player</button>
                </div>
              </div>
            </div>
    );
};

export default Card;