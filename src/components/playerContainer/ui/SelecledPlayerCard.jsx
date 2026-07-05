import { RiDeleteBin6Line } from "react-icons/ri";





const SelecledPlayerCard = () => {
    return (
        <>
            <div className="border border-[#1313131a] p-6 rounded-2xl flex justify-between items-center gap-6 w-full hover:shadow-sm ">
                <div id="img" className=" bg-[#D9D9D9] w-20 h-20 rounded-2xl">
                    {/* <img src="./" alt="" /> */}
                </div>
                <div className="w-full text-left">
                    <h3 className="text-2xl font-semibold">Player Name</h3>
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