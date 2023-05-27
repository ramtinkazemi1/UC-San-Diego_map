import './App.css';

import member1Image from './myloc.jpg';
import member2Image from './myloc.jpg';
import member3Image from './myloc.jpg';
import member4Image from './myloc.jpg';
import member5Image from './myloc.jpg';
import member6Image from './myloc.jpg';

import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Map from './components/Map.js';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="App">
    <nav className="navbar">
    <Link className="nav-link" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
    <Link className="nav-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
    <Link className="nav-link" to="map" spy={true} smooth={true} offset={-70} duration={500}>Mapbox</Link>
    <Link className="nav-link" to="team" spy={true} smooth={true} offset={-70} duration={500}>Team</Link>
  </nav>

      <section id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundImage: 'url(YOUR_BACKGROUND_IMAGE_URL)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 style={{ fontSize: '4em', color: '#fff', textAlign: 'center' }}>Welcome to Our Interactive Map Site</h1>
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

      <section id="about" style={{ backgroundColor: '#007BFF', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <div style={{ maxWidth: '60%', textAlign: 'center', background: 'rgba(255, 255, 255, 0.1)', padding: '50px', borderRadius: '10px' }}>
          <h2>About Our Map</h2>
          <p>
            Our map is a revolutionary tool for visualizing geospatial data. It provides users with an intuitive interface to interact and report issues, making the experience engaging and user-friendly. The map leverages the power of Mapbox, resulting in superior performance and reliability. Along with the map, a responsive form allows users to report location-based issues directly on the map. Join us in our quest to make geospatial data more accessible and useful.
          </p>
        </div>
      </section>

      <section id="map" style={{ width:'100%', margin: '0 auto', height: '100vh' }}>
        <Map style={{ width: '80%', margin: '0 auto' }} />
      </section>


      <section id="team" style={{ padding: '20px 0' }}>
        <h1>Our Team</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <img src={member1Image} alt="Member 1" style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
            <p>Description for member 1</p>
          </div>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <img src={member2Image} alt="Member 2" style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
            <p>Description for member 2</p>
          </div>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <img src={member2Image} alt="Member 2" style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
            <p>Description for member 3</p>
          </div>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <img src={member2Image} alt="Member 2" style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
            <p>Description for member 4</p>
          </div>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <img src={member2Image} alt="Member 2" style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
            <p>Description for member 5</p>
          </div>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <img src={member2Image} alt="Member 2" style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
            <p>Description for member 6</p>
          </div>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <img src={member2Image} alt="Member 2" style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
            <p>Description for member 7</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
