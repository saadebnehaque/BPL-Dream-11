import { useEffect, useState } from "react"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/navBar/Navbar"
// import PlayerCard from "./components/playerContainer/PlayerCard"
import Players from "./components/playerContainer/Players"
import { useDaisyTheme } from "./components/themes/DaisyTehme"
import { toast, ToastContainer } from "react-toastify"
// import AvailablePlayers from "./components/playerContainer/availablePlayers/AvailablePlayer"




function App() {

  const [coin, setCoin] = useState(5000000);


  const [playersData, setPlayers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setError(null);
        setLoading(true);

        const res = await fetch('/playerData.json');

        if (!res.ok) {
          throw new Error('Faild to Load Player Data');
        }
        const data = await res.json();
        setPlayers(data);


      } catch (err) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }

    };

    fetchPlayers();
  }, [])


  const { toggoleDaisyTheme } = useDaisyTheme()
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <>
      <header>
        <Navbar coin={coin} toggoleDaisyTheme={toggoleDaisyTheme}></Navbar>
        <Banner coin={coin} setCoin={setCoin}></Banner>
      </header>
      <main>
        <Players
          isLoading={isLoading}
          error={error}
          playersData={playersData}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></Players>
      </main>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
