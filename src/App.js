import React from 'react';
import Map from './components/Map.js';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <Map />
    </div>
  );
}

export default App;
