import Card from "../../../Ui/Card";

const AvailablePlayers = ({ players }) => {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => {

          return (
            <>
              <Card player={player} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default AvailablePlayers;
