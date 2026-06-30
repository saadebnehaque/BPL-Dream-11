import { ImFilesEmpty } from "react-icons/im";
import SelecledPlayerCard from "../ui/SelecledPlayerCard";



const SelectetPlayers = () => {
    return (
        <div className="container mx-auto min-h-screen text-center flex items-center justify-center">
            {/* <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                <ImFilesEmpty className="text-5xl"></ImFilesEmpty>
                <h1 className="font-bold text-4xl">No player has been selected yet</h1>
                <p>Go to available tab to select players</p>
            </div> */}
            <SelecledPlayerCard></SelecledPlayerCard>
        </div>
    );
};

export default SelectetPlayers;