import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Galvan = () => {
  return (
    <div className='container'>
      <div className="bg-white text-gray-800">
        <div className='justify-center mt-4 px-7 py-5 rounded-2xl bg-blue-100 items-center gap-5'>
          <h1 className="text-3xl justify-center flex font-bold mb-4">Objective:</h1>
          <p className="mb-4 text-[20px]">
           Galvanometr - kontaktlarning zanglashiga olib keladigan zaif elektr toklarini aniqlash uchun ishlatiladigan qurilma. U kuchli laminatlangan ot poyafzal magnitining konkav qutb yuzlari orasiga aylantirilgan (yoki to'xtatilgan) lasanga ega. Elektr toki g'altakdan o'tganda, u burilib ketadi. Burilish o'tgan oqimga proportsionaldir. Galvanometr bobini o'rtacha qarshilikka ega (taxminan 100 ohm) va galvanometrning o'zi kichik oqim o'tkazish qobiliyatiga ega (1 mA).
          </p>
        </div>

        <div className='video flex bg-blue-100 rounded-2xl p-4 justify-center mt-6'>
          <iframe
            width="1500"
            height="315"
            src="https://www.youtube.com/embed/ob4F2SiSWa8"
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
            According to Ohm’s law, "The current passing through a conductor is directly proportional to the potential difference across its ends,
            provided the physical conditions of the conductor (temperature, dimensions, pressure) remain unchanged." If the current through a conductor is I and
            the potential difference across it is V, then by Ohm’s law:
          </p>

          <div className="bg-gray-100 flex justify-center p-3 rounded mb-2">
            <BlockMath math="I \propto V" />
            <BlockMath math="V \propto I \quad \text{or} \quad V = RI" />
            <BlockMath math="\frac{V}{I} = R" />
          </div>

          <p className="mb-5 text-[18px]">
            where R is the constant of proportionality, known as the resistance of the conductor.
          </p>

          <p className="mb-4 text-[18px]">
            R depends on the material, temperature, and dimensions of the conductor.
            In SI units, the potential difference V is in volts, the current I in amperes, and the resistance R in ohms.
          </p>

          <p className="mb-4 text-[18px]">
            How do we study the current-voltage relationship?
            To study this relationship, we must show that the ratio V/I remains constant for a given resistor,
            thus the graph between potential difference (V) and current (I) should be a straight line.
          </p>

          <p className="mb-4 text-[18px]">
            How do we determine unknown values of resistance?
            The ratio that gives the value of unknown resistance is:
          </p>

          <div className="bg-gray-100 p-3 rounded-2xl mb-4 flex justify-center">
            <BlockMath math="\frac{V}{I} = R" />
          </div>

          <p className="mb-5 text-[18px]">
            For a wire of uniform cross-section, resistance depends on its length l and area of cross-section A. It also depends on the conductor’s temperature.
            At a given temperature, the resistance is given by:
          </p>

          <div className="bg-gray-100 p-3 rounded-2xl mb-4 flex justify-center">
            <BlockMath math="\frac{V}{I} = R" />
          </div>

          <p className="mb-4 text-[18px]">
            Here, ρ (rho) is the specific resistance or resistivity and depends on the material of the wire.
            Therefore, the resistivity or specific resistance of the wire material is:
          </p>

          <div className="bg-gray-100 p-3 rounded flex justify-center">
            <BlockMath math="\rho = \frac{RA}{l}" />
          </div>

          <p className="mb-4 pt-2 text-[18px]">
            If 'r' is the radius of the wire, then the area A = πr². Thus, the resistivity or specific resistance of the wire material is:
          </p>

          <div className="bg-gray-100 p-3 rounded flex justify-center">
            <BlockMath math="\rho = \frac{\pi r^2 R}{l}" />
          </div>

          <h3 className='text-[25px] font-bold pt-[50px] pb-[20px]'>Learning Outcomes:</h3>
          <ul className="list-disc text-2xl pl-5 pb-[20px]">
            <li>Students will understand Ohm's law.</li>
            <li>Students will understand the relationship between voltage, current, and resistance.</li>
            <li>Students will learn how to determine the resistance of a wire material.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Galvan;
