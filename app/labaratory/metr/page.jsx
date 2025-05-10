import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Meter = () => {
  return (
    <div className='container'>
      <div className="bg-white text-gray-800">
        <div className='justify-center mt-4 px-7 py-5 rounded-2xl bg-blue-100 items-center gap-5'>
          <h1 className="text-3xl justify-center flex font-bold mb-4">Objective:</h1>
          <p className="mb-4 text-[20px]">
            To determine the resistance of a wire using the <strong>Meter Bridge</strong>, a device based on the principle of Wheatstone bridge. The method helps in finding unknown resistance by balancing lengths of wire segments in a bridge circuit.
          </p>
        </div>

        <div className='video flex bg-blue-100 rounded-2xl p-4 justify-center mt-6'>
          <iframe
            width="1500"
            height="315"
            src="https://www.youtube.com/embed/Rgknr1tDipA"
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
            The meter bridge works on the principle of a Wheatstone bridge. When the bridge is balanced (no deflection in the galvanometer), the ratio of the resistances in one side of the bridge equals the ratio in the other side.
          </p>

          <p className="mb-4 text-[18px]">
            The relation is given as:
          </p>

          <div className="bg-gray-100 p-3 rounded flex justify-center mb-3">
            <BlockMath math="\\frac{R}{X} = \\frac{l}{100 - l}" />
          </div>

          <p className="mb-4 text-[18px]">
            Where:
            <br />• R = Known resistance (Standard resistor)
            <br />• X = Unknown resistance
            <br />• l = Balancing length (cm) from one end where galvanometer shows no deflection
          </p>

          <p className="mb-4 text-[18px]">
            Rearranging the equation, the unknown resistance X is:
          </p>

          <div className="bg-gray-100 p-3 rounded flex justify-center mb-4">
            <BlockMath math="X = R \\times \\frac{100 - l}{l}" />
          </div>

          <p className="mb-4 text-[18px]">
            If we want to find the resistance of a uniform wire (same cross-section throughout), the resistance is proportional to the length of the wire:
          </p>

          <div className="bg-gray-100 p-3 rounded flex justify-center">
            <BlockMath math="R \\propto l" />
          </div>

          <p className="mb-4 pt-3 text-[18px]">
            For more accurate calculations, resistance is related to the physical dimensions of the wire:
          </p>

          <div className="bg-gray-100 p-3 rounded flex justify-center mb-3">
            <BlockMath math="R = \\rho \\frac{l}{A}" />
          </div>

          <p className="mb-4 text-[18px]">
            Where:
            <br />• ρ = Resistivity of the wire material
            <br />• l = Length of the wire
            <br />• A = Cross-sectional area
          </p>

          <div className="bg-gray-100 p-3 rounded flex justify-center mb-3">
            <BlockMath math="\\rho = \\frac{\\pi r^2 R}{l}" />
          </div>

          <h3 className='text-[25px] font-bold pt-[50px] pb-[20px]'>Learning Outcomes:</h3>
          <ul className="list-disc text-2xl pl-5 pb-[20px]">
            <li>Students will understand the working principle of a meter bridge.</li>
            <li>Students will learn how to measure unknown resistance using balancing length.</li>
            <li>Students will relate resistance with length, area, and resistivity of a wire.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Meter;
