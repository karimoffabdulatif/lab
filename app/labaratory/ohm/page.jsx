import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Ohm = () => {
  return (
    <div className='container px-4'>
      <div className="bg-white text-gray-800">
        <div className='justify-center mt-4 px-7 py-5 rounded-2xl bg-blue-100 items-center gap-5'>
          <h1 className="text-3xl justify-center flex font-bold mb-4">Objective:</h1>
          <p className="mb-4 text-[20px]">
            To determine the resistance of a given wire by plotting a graph of potential difference versus current and thus calculating its resistance.
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
            To study the current-voltage relationship, we must show that the ratio V/I remains constant for a given resistor, which leads to a straight line graph between potential difference (V) and current (I).
          </p>

          <p className="mb-4 text-[18px]">
            The formula for resistance in a conductor of uniform cross-section and length:
          </p>

          <div className="bg-gray-100 p-3 rounded-2xl mb-4 flex justify-center">
            <BlockMath math="\frac{V}{I} = R" />
          </div>

          <p className="mb-5 text-[18px]">
            Resistance is not only dependent on the current and voltage but also on the conductor’s temperature, material, and physical dimensions. 
            At a given temperature, resistance is defined as:
          </p>

          <div className="bg-gray-100 p-3 rounded-2xl mb-4 flex justify-center">
            <BlockMath math="R = \rho \frac{L}{A}" />
          </div>

          <p className="mb-4 text-[18px]">
            where ρ (rho) represents the resistivity, L is the length of the conductor, and A is the cross-sectional area. 
            The resistivity ρ is a material property and varies from material to material.
          </p>

          <p className="mb-4 text-[18px]">
            If 'r' is the radius of the wire, then the area A = πr². Thus, the resistivity or specific resistance of the wire material can be expressed as:
          </p>

          <div className="bg-gray-100 p-3 rounded flex justify-center">
            <BlockMath math="\rho = \frac{\pi r^2 R}{L}" />
          </div>

          <p className="mb-4 pt-2 text-[18px]">
            This equation shows how resistance depends on the physical properties of the conductor, such as its length, cross-sectional area, and material composition.
          </p>

          <h3 className='text-[25px] font-bold pt-[50px] pb-[20px]'>Learning Outcomes:</h3>
          <ul className="list-disc text-2xl pl-5 pb-[20px]">
            <li>Students will understand Ohm's law and its application to electrical circuits.</li>
            <li>Students will learn how to determine the resistance of a material using its physical properties.</li>
            <li>Students will gain practical skills in measuring current, voltage, and resistance in a laboratory setting.</li>
            <li>Students will be able to interpret current-voltage (I-V) graphs and use them to calculate the resistance of a conductor.</li>
            <li>Students will understand how temperature and material properties affect resistance and conduct experiments to investigate these relationships.</li>
          </ul>

          <h3 className='text-[25px] font-bold pt-[20px] pb-[20px]'>Additional Information:</h3>

          <p className="mb-4 text-[18px]">
            **Resistivity (ρ)**: Resistivity is a fundamental property of materials that describes how strongly they resist the flow of electric current. Materials with high resistivity, such as rubber or glass, are insulators, while materials with low resistivity, such as copper and aluminum, are good conductors.
          </p>

          <p className="mb-4 text-[18px]">
            The **temperature dependence** of resistance can be understood using the formula:
          </p>

          <div className="bg-gray-100 p-3 rounded-2xl mb-4 flex justify-center">
            <BlockMath math="R_T = R_0 [1 + \alpha (T - T_0)]" />
          </div>

          <p className="mb-5 text-[18px]">
            Where: <br />
            - <strong>R_T</strong> is the resistance at temperature T, <br />
            - <strong>R_0</strong> is the resistance at the reference temperature T₀, <br />
            - <strong>α</strong> is the temperature coefficient of resistance for the material, and <br />
            - <strong>T</strong> and <strong>T₀</strong> are the temperatures at which the resistances R and R₀ are measured.
          </p>

          <p className="mb-4 text-[18px]">
            This equation shows that the resistance of most materials increases with temperature, although there are exceptions (like semiconductors).
          </p>

          <h3 className='text-[25px] font-bold pt-[30px] pb-[20px]'>Practical Applications:</h3>
          <ul className="list-disc text-2xl pl-5 pb-[20px]">
            <li>Understanding and using Ohm’s Law is essential in designing electrical circuits, resistors, and understanding the behavior of semiconductors.</li>
            <li>In electrical engineering, Ohm's law helps in the analysis of current flow in various electrical devices such as motors, lamps, and heating elements.</li>
            <li>Ohm’s law is used to design electrical equipment that safely handles specific amounts of current and voltage, including fuses and circuit breakers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ohm;
