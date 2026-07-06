
import { useState } from "react";
import AvailablePlayers from "./availablePlayers/AvailablePlayer";
import SelectetPlayers from "./selectedPlayers/SelectetPlayers";


const Players = ({ isLoading, error, playersData, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {

    const [btnType, setBtnType] = useState('available');


    return (
        <>
            <div className="container mx-auto mt-22 space-y-8">
                <div className="sticky top-16 p-4 z-9 bg-white shadow-sm flex flex-col md:flex-row items-center justify-between ">
                    <h2 className="text-[28px] font-bold">{btnType === 'available' ? 'Availabale Players' : `Selected Players (${selectedPlayers.length + '/' + playersData.length})`}</h2>
                    <div className="space-x-0 ">
                        <button
                            onClick={() => setBtnType('available')}
                            className={`btn ${btnType === 'available' && 'bg-[#E7FE29]'} border-r-0 rounded-r-none rounded-l-[10px]`}
                        >Available</button>
                        <button
                            onClick={() => setBtnType('selected')}
                            className={`btn ${btnType === 'selected' && 'bg-[#E7FE29]'} border-l-0 rounded-l-none rounded-r-[10px]`}
                        >Selected({selectedPlayers.length})</button>
                    </div>
                </div>

                {/* card containter */}

                {
                    btnType === 'available'
                        ?
                        <AvailablePlayers
                            isLoading={isLoading}
                            playersData={playersData}
                            error={error} coin={coin}
                            setCoin={setCoin}
                            setSelectedPlayers={setSelectedPlayers}
                            selectedPlayers={selectedPlayers}
                        ></AvailablePlayers>
                        :
                        <SelectetPlayers playersData={playersData} selectedPlayers={selectedPlayers}></SelectetPlayers>
                }


            </div>
        </>
    );
};

export default Players;