import { use } from 'react';

const Players = ({playersPromise}) => {
    const data = use(playersPromise)
    console.log(data);
    return (
        <div>
            Players: {data.length}
        </div>
    );
};

export default Players;