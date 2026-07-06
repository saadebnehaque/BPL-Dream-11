import { ImFilesEmpty } from "react-icons/im";
import SelecledPlayerCard from "../ui/SelecledPlayerCard";
import { useEffect, useState } from "react";
import SelectedPlayerModal from "../ui/Modal/SelectedPlayerModal";



const SelectetPlayers = ({ selectedPlayers }) => {
    const [modalPlayer, setModalPlayer] = useState(null);
    // console.log(selectedPlayers);
    useEffect(() => {
        modalPlayer && document.getElementById('my_modal_1').showModal()
    }, [modalPlayer])

    return (
        <>
            {selectedPlayers.length === 0
                ?
                <div className="flex flex-col items-center justify-center gap-4 text-gray-400 mb-25">
                    <ImFilesEmpty className="text-5xl"></ImFilesEmpty>
                    <h1 className="font-bold text-4xl">No player has been selected yet</h1>
                    <p>Go to available tab to select players</p>
                </div>
                :
                < div className="container mx-auto min-h-screen text-center space-y-6" >
                    {
                        selectedPlayers.map(selectedPlayer => <SelecledPlayerCard key={selectedPlayer.id} selectedPlayer={selectedPlayer} setModalPlayer={setModalPlayer}></SelecledPlayerCard>)
                    }
                    < SelectedPlayerModal selectedPlayer={modalPlayer}></SelectedPlayerModal>
                </div >}
        </>
    );
};

export default SelectetPlayers;