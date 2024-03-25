import React from 'react';
import Navbar from '../components/Navbar';
import Living from '../images/livingroom.png';
import Hover from './HoverArrow';

const LivingRoom = () => {
    return (
      <div>
        <Navbar />
        <Hover />
        <div className="w-screen h-screen flex justify-center items-center">
            <img src={Living} alt="livingroom" className="w-full h-full object-cover" />
        </div>
      </div>
    );
  }
  
  export default LivingRoom;
  