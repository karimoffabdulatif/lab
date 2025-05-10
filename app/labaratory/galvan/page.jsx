import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Galvanometer = () => {
  return (
    <div className='container'>
      <div className="bg-white text-gray-800">
        <div className='justify-center mt-4 px-7 py-5 rounded-2xl bg-blue-100 items-center gap-5'>
          <h1 className="text-3xl justify-center flex font-bold mb-4">Objective:</h1>
          <p className="mb-4 text-[20px]">
            A galvanometer is an electromechanical instrument used to detect and measure small electric currents. It operates by deflecting a pointer in response to an electric current flowing through a coil in a magnetic field. The deflection is proportional to the current passing through the coil.
          </p>
        </div>

        <div className='video flex bg-blue-100 rounded-2xl p-4 justify-center mt-6'>
          <iframe
            width="1500"
            height="315"
            src="https://www.youtube.com/embed/9YQ9irb1FxM"
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
            A galvanometer can detect only small currents. To measure larger currents, it is converted into an ammeter by connecting a low resistance, known as a shunt resistance, in parallel with the galvanometer. This allows the majority of the current to bypass the galvanometer, enabling it to measure higher currents without damage.
          </p>

          <p className="mb-4 text-[18px]">
            Let <strong>G</strong> be the resistance of the galvanometer and <strong>I<sub>g</sub></strong> be the current for full-scale deflection. To convert the galvanometer into an ammeter capable of measuring up to <strong>I</strong> amperes, the required shunt resistance <strong>S</strong> is given by:
          </p>

          <div className="bg-gray-100 flex justify-center p-3 rounded mb-2">
            <BlockMath math="S = \frac{I_g \times G}{I - I_g}" />
          </div>

          <p className="mb-5 text-[18px]">
            The current <strong>I<sub>g</sub></strong> can be calculated using the formula:
          </p>

          <div className="bg-gray-100 flex justify-center p-3 rounded mb-2">
            <BlockMath math="I_g = n \times k" />
          </div>

          <p className="mb-5 text-[18px]">
            Here, <strong>n</strong> is the number of divisions on the galvanometer scale, and <strong>k</strong> is the figure of merit of the galvanometer, defined as the current required to produce a unit deflection.
          </p>

          <p className="mb-4 text-[18px]">
            The figure of merit <strong>k</strong> can be determined using the equation:
          </p>

          <div className="bg-gray-100 flex justify-center p-3 rounded mb-2">
            <BlockMath math="k = \frac{E}{R + S_0}" />
          </div>

          <p className="mb-5 text-[18px]">
            Where <strong>E</strong> is the electromotive force (emf) of the battery, <strong>R</strong> is the resistance in series with the galvanometer, and <strong>S<sub>0</sub></strong> is the shunt resistance connected in parallel.
          </p>

          <h3 className='text-[25px] font-bold pt-[50px] pb-[20px]'>Learning Outcomes:</h3>
          <ul className="list-disc text-2xl pl-5 pb-[20px]">
            <li>Understand the construction and working principle of a galvanometer.</li>
            <li>Learn how to convert a galvanometer into an ammeter using a shunt resistance.</li>
            <li>Calculate the figure of merit and shunt resistance for a galvanometer.</li>
            <li>Apply the concepts to measure larger currents accurately.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Galvanometer;
