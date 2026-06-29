import PlayerCard from "../ui/PlayerCard";



const AvailablePlayers = ({ error, isLoading, playersData }) => {



  return (
    <>


      {/* card containter */}

      <div className=" flex flex-wrap justify-center gap-6">

        {error ? <p className="text-error text-center">{error}</p> :
          isLoading ?
            <div className="flex items-center justify-center w-fit mx-auto">
              <span className="loading loading-bars loading-xl"></span>
            </div>
            : playersData.map(player => <PlayerCard key={player.id} player={player}></PlayerCard>)
        }

      </div>
    </>
  );
};

export default AvailablePlayers;