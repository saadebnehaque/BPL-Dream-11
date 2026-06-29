import PlayerCard from "./PlayerCard";



const Players = ({ error, isLoading, playersData }) => {
    console.log(playersData);


    return (
        <>
            <div className="container mx-auto mt-22 space-y-8">
                <div className="sticky top-16 p-4 z-9 bg-white shadow-sm flex flex-col md:flex-row items-center justify-between ">
                    <h2 className="text-[28px] font-bold">Availabale Players</h2>
                    <div className="space-x-0 ">
                        <button className="btn bg-[#E7FE29] border-r-0 rounded-[10px_0_0_10px]">Available</button>
                        <button className="btn border-l-0 rounded-[0_10px_10px_0]">Selected(0)</button>
                    </div>
                </div>

                {/* card containter */}
                <div className=" flex flex-wrap justify-center gap-6">
                    {error ? <p className="text-error text-center">{error}</p> :
                        isLoading ?
                            <div className="flex items-center justify-center w-fit mx-auto">
                                <span className="loading loading-bars loading-xl"></span>
                            </div>
                            : playersData.map(player => <PlayerCard key={player.id} player={player}></PlayerCard>)}
                </div>
            </div>
        </>
    );
};

export default Players;