import React from 'react';
import './Ochidoma.css';
import Image from '../assets/king4.svg';
import Imag from '../assets/king3.svg';
import Ima from '../assets/king2.svg';
import Im from '../assets/king1.svg';

const Ochidoma = () => {
  return (
    <>
    <div className="bigdiv">
      <h1>Traditional Council</h1>
      <h4>The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit.</h4>
      
      <div className="main-card">
        {[{ img: Image, name: "HRH. Agabaidu Elaigwu Odogbo John", title: "Och'Idoma 4 (2017 - Present)" },
          { img: Imag, name: "HRH. Agabaidu Late Elias Ikoyi Obekpa", title: "Och'Idoma 3 (1996 - 2017)" },
          { img: Ima, name: "HRH. Agabaidu Late Edwin Ogbede Ogbu", title: "Och'Idoma 2 (1979 - 1995)" },
          { img: Im, name: "HRH. Agabaidu Late Abraham Ajene Okpabi", title: "Och'Idoma 1 (1947 - 1974)" }
        ].map((ruler, index) => (
          <div key={index}>
            <img src={ruler.img} alt={ruler.name} />
            <div className="details"></div>
            <p className="name">{ruler.name}</p>
            <p className="title">{ruler.title}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Ochidoma;
