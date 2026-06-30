import { useState } from "react";
import { FaFlag, FaUser, } from "react-icons/fa";
import { toast } from "react-toastify";



const PlayerCard = ({ player, coin, setCoin }) => {

    const [isSelected, setIsSelected] = useState(false);


    const handleSelectedPlayers = () => {

        player.price <= coin ?
            (
                setIsSelected(!isSelected),
                setCoin(coin - player.price),
                toast.success(player.name + " selected succesfully")
            ) :
            (
                toast.error("insufficiant balance")
            )

    }

    return (
        <>
            <div className="card bg-base-100 w-fit shadow-xl rounded-2xl p-6 space-y-6 border border-[rgba(19,19,19,0.1)]">

                <img className="rounded-2xl h-60 object-cover " width={376} src={player.image} alt={player.name} />
                <div className="space-y-4">
                    <div>
                        <span className="flex items-center gap-4">
                            <FaUser className="text-xl"></FaUser>
                            <h2 className="text-[20px] font-semibold">{player.name}</h2>
                        </span>
                        <span className="flex justify-between items-center ">
                            <span className="flex items-center gap-3">
                                <FaFlag className="text-[#131313]"></FaFlag>
                                <p>{player.country}</p>
                            </span>
                            <span className="btn btn-active">{player.role}</span>
                        </span>
                    </div>
                    <div className="divider"></div>
                    <div className="space-y-4">
                        <span className="flex justify-between items-center">
                            <p className="text-[#131313] font-bold">Rating</p>
                            <span className="text-[#131313b2]">{player.rating}</span>
                        </span>
                        <div className="space-y-3">
                            <span
                                className="flex items-center justify-between">
                                <p className="text-[#131313] font-bold">{player.battingStyle}</p>
                                <p className="text-[#131313] font-bold">{player.bowlingStyle}</p>
                            </span>
                            <div className="flex items-center justify-between">
                                <p className="text-[#131313] font-bold">price:${player.price}</p>
                                <button
                                    onClick={handleSelectedPlayers}
                                    className="btn"
                                    disabled={isSelected} >{isSelected ? "Selected" : "Choose Player"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayerCard;