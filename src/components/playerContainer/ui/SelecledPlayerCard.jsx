import { RiDeleteBin6Line } from "react-icons/ri";

const SelecledPlayerCard = ({ selectedPlayer,setModalPlayer }) => {
    return (
        <div className="border border-[#1313131a] p-6 rounded-2xl flex justify-between items-center gap-6 w-full hover:shadow-sm">

            <img
                className="object-cover w-20 h-20 rounded-2xl"
                src={selectedPlayer.image}
                alt={selectedPlayer.name}
            />

            <div className="w-full text-left">
                <h3
                    className="w-fit text-2xl font-semibold cursor-pointer hover:underline"
                    onClick={() => {
                        setModalPlayer(selectedPlayer);
                    }}
                >
                    {selectedPlayer.name}
                </h3>

                <p className="text-[rgba(19,19,19,0.6)]">
                    {selectedPlayer.role}
                </p>
            </div>

            <button className="btn btn-ghost btn-circle text-xl">
                <RiDeleteBin6Line className="text-[#F14749]" />
            </button>

        </div>
    );
};

export default SelecledPlayerCard;