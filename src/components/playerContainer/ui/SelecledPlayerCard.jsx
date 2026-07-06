import { RiDeleteBin6Line } from "react-icons/ri";





const SelecledPlayerCard = ({ selectedPlayer }) => {
    return (
        <>
            <div className="border border-[#1313131a] p-6 rounded-2xl flex justify-between items-center gap-6 w-full hover:shadow-sm ">
                
                    <img className="object-cover w-20 h-20 rounded-2xl" width={'100%'} src={selectedPlayer.image} alt={selectedPlayer.name} />
          
                <div className="w-full text-left">
                    <h3 className="text-2xl font-semibold"></h3>
                    <p className="text-[rgba(19,19,19,0.6)]">Batting Style</p>
                </div>
                <button className="btn btn-ghost btn-circle text-xl">
                    <RiDeleteBin6Line className="text-[#F14749]"></RiDeleteBin6Line>
                </button>
            </div>
        </>
    );
};

export default SelecledPlayerCard;