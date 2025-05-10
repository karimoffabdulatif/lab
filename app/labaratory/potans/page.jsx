import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Potans = () => {
  return (
    <div className='container'>
      <div className="bg-white text-gray-800">
        <div className='justify-center mt-4 px-7 py-5 rounded-2xl bg-blue-100 items-center gap-5'>
          <h1 className="text-3xl justify-center flex font-bold mb-4">Objective:</h1>
          <p className="mb-4 text-[20px]">
            To determine the <strong>internal resistance of a cell</strong> using a <strong>potentiometer</strong>.  
          </p>
        </div>

        <div className='video flex bg-blue-100 rounded-2xl p-4 justify-center mt-6'>
          <iframe
            width="1500"
            height="315"
            src="https://www.youtube.com/embed/W5D71qbiJ80"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className='rounded-xl'
          ></iframe>
        </div>

        <div className='bg-blue-100 mt-6 px-7 py-4 rounded-2xl mb-8'>
          <h2 className="text-3xl flex justify-center font-bold mb-2">Theory:</h2>

          <p className="mb-4 text-[18px]">
            A potentiometer is a device used to measure the potential difference accurately. It can also be used to determine the internal resistance (r) of a cell by comparing the terminal voltage (V) with the electromotive force (E) of the cell.
          </p>

          <p className="mb-4 text-[18px]">
            When the cell is connected directly (no external load), the potential difference across its terminals equals its EMF (E). When connected through a known resistance (R), the terminal voltage drops to V due to internal resistance.
          </p>

          <p className="mb-4 text-[18px]">The internal resistance <strong>r</strong> is calculated using:</p>

          <div className="bg-gray-100 p-3 rounded flex justify-center mb-4">
            <BlockMath math="r = R \\left(\\frac{l_1 - l_2}{l_2}\\right)" />
          </div>

          <p className="mb-4 text-[18px]">
            Where:
            <br />• R = Known external resistance
            <br />• l₁ = Balancing length without resistance (only cell) ⇒ corresponds to EMF (E)
            <br />• l₂ = Balancing length with resistance R ⇒ corresponds to terminal voltage (V)
          </p>

          <p className="mb-4 text-[18px]">
            Since EMF and terminal voltage are proportional to balancing lengths:
          </p>

          <div className="bg-gray-100 p-3 rounded flex justify-center mb-4">
            <BlockMath math="\\frac{E}{V} = \\frac{l_1}{l_2}" />
          </div>

          <h3 className='text-[25px] font-bold pt-[50px] pb-[20px]'>Learning Outcomes:</h3>
          <ul className="list-disc text-2xl pl-5 pb-[20px]">
            <li>Students understand the principle of potentiometer.</li>
            <li>Students learn how to calculate internal resistance of a cell.</li>
            <li>Students relate voltage drop to internal resistance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Potans;
