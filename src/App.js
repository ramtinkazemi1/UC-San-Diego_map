import { useEffect } from 'react';
import './App.css';
import fallenStar from './fallen_star.jpg';
import ramtinImage from './ramtin.jpg';
import member2Image from './myloc.jpg';


import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Map from './components/Map.js';
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
  //sets the browser's tab name
  useEffect(() => {
    document.title = 'UCSD MAPBOX';
  }, []);

  return (
    <div className="App">
    <nav className="navbar">
    <Link className="nav-link" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
    <Link className="nav-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
    <Link className="nav-link" to="map" spy={true} smooth={true} offset={-70} duration={500}>Mapbox</Link>
    <Link className="nav-link" to="team" spy={true} smooth={true} offset={-70} duration={500}>Team</Link>
  </nav>

      <section id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundImage: 'url(YOUR_BACKGROUND_IMAGE_URL)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 style={{ fontSize: '4em', color: '#fff', textAlign: 'center' }}>Welcome to <span style={{ color: '#0d3b66' }}>UCSD</span> Mapbox</h1>
        <p style={{ fontSize: '1.5em', maxWidth: '60%', textAlign: 'center', color: '#fff' }}>An innovative platform for visualizing and reporting geospatial data. Discover, interact and learn from our interactive map.</p>
        <Link
          to="map"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: 'pointer', marginTop: '20px', fontSize: '1.5em', color: '#fff', border: '2px solid white', borderRadius: '10px', padding: '10px 20px' }}
        >
          Get Started
        </Link>
      </section>

      <section id="about" style={{ backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <div style={{ maxWidth: '60%', textAlign: 'left', background: 'rgba(255, 255, 255, 0.1)', padding: '50px', borderRadius: '10px', display: 'flex' }}>
          <div style={{ flex: '1', backgroundImage: `url(${fallenStar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div style={{ flex: '1', padding: '20px' }}>
            <h2 style={{ color: '#ecca4d', fontSize: '2em', textAlign: 'center' }}>About This Map</h2>
            <h3 style={{ color: '#ecca4d', fontSize: '1.5em', textAlign: 'left' }}>
              This map is a revolutionary tool for visualizing geospatial data. It provides users with an intuitive interface to interact and report issues, making the experience engaging and user-friendly. The map leverages the power of Mapbox, resulting in superior performance and reliability. Along with the map, a responsive form allows users to report location-based issues directly on the map.
            </h3>
          </div>
        </div>
      </section>

      <section id="map" style={{ width: '100%', margin: '0 auto', height: '85vh' }}>
        <Map style={{ width: '80%', margin: '0 auto' }} />
      </section>



      <section id="team" style={{ padding: '20px 0' }}>
        <h1>Created by:</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <img src={ramtinImage} alt="Member 1" style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
            <h2>Ramtin Kazemi</h2>
              <p>Software Engineer</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
