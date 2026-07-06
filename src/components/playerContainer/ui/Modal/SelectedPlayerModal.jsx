import { FaFlag } from 'react-icons/fa';



const SelectedPlayerModal = ({ selectedPlayer }) => {
    console.log(selectedPlayer);
     if (!selectedPlayer) return null;
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box ">
                    <div className="flex gap-4 items-center">

                        <div>
                            <img className="h-50 w-50 rounded-xl object-cover object-center" src={selectedPlayer.image} alt="" />
                        </div>
                        <div className="text-left space-y-1">

                            <h2 className="font-bold text-2xl">{selectedPlayer.name}</h2>
                            <span className='flex items-center gap-1'>
                                <FaFlag className="text-[#706f6f]"></FaFlag>
                                <p>{selectedPlayer.country}</p>
                            </span>
                            <p><strong>Role: </strong>{selectedPlayer.role}</p>
                            <p><strong>Role: </strong>{selectedPlayer.role}</p>
                            <p><strong>Batting Style: </strong>{selectedPlayer.battingStyle}</p>
                            <p><strong>Role: </strong>{selectedPlayer.role}</p>
                            <p><strong>Ratting: </strong>{selectedPlayer.rating}</p>
                            <p><strong>Price: </strong>${selectedPlayer.price}</p>

                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default SelectedPlayerModal;