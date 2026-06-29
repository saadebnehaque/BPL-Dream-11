import { useEffect, useState } from "react"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/navBar/Navbar"
// import PlayerCard from "./components/playerContainer/PlayerCard"
import Players from "./components/playerContainer/Players"
import { useDaisyTehme } from "./components/themes/DaisyTehme"
import { toast, ToastContainer } from "react-toastify"




function App() {
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


  useDaisyTehme()
  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <Players isLoading={isLoading} error={error} playersData={playersData}></Players>

      </main>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
