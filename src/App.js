import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import FadeLoader from "react-spinners/FadeLoader";
import SingleCard from './components/SingleCard/SingleCard';
import HomePage from './components/HomePage/HomePage';


const App = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    })

  }, [])

  return (
    <>
      {
        loading ?
          <div className='loader'>
            <FadeLoader
              color={"#000"}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
          <div className="App">
            <Routes>
              <Route element={<Header/>}>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/nft-card/:contract_id/:token_id" element={<SingleCard />} />
              </Route>
            </Routes>
          </div>
      }

    </>

  );
}

export default App;
