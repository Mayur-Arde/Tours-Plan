import React, { useState, useEffect, Component } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // remove particular tour
  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  // fetch the data from api
  const fecthTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // load the once with useEffect when web page loaded
  useEffect(() => {
    fecthTours();
  }, []);

  // loading Component
  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );

  // when all tours are deleted
  if (tours.length === 0)
    return (
      <main>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
          <button className="btn" onClick={() => fecthTours()}>
            Refresh
          </button>
        </div>
      </main>
    );

  // main tours Component
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
