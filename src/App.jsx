import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [fact, setFact] = useState('');
  const [image, setImage] = useState(1);

  useEffect(() => {
    getCatFact();

    const intervalId = setInterval(() => {
      getCatFact();
      setImage((prevImage) => (prevImage === 1 ? 2 : 1)); 
    }, 5000);

    return () => clearInterval(intervalId); 
  }, []);

  const getCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    setFact(data.fact);
  };

  return (
    <div className="container">
      <h1 className="title">Cat Fact</h1>
      <img src={`cat${image}.jpeg`} alt="Cat" className="cat-image" />
      <p className="fact">{fact}</p>
    </div>
  );
}

export default App;
