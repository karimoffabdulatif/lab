import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const AC = () => {
  return (
    <div className='container'>
      <div className="bg-white text-gray-800">
        <div className='justify-center mt-4 px-7 py-5 rounded-2xl bg-blue-100 items-center gap-5'>
          <h1 className="text-3xl justify-center flex font-bold mb-4">Objective:</h1>
          <p className="mb-4 text-[20px]">
            Determining the frequency of electric current using an AC sonometer.
          </p>
        </div>

        <div className='video flex bg-blue-100 rounded-2xl p-4 justify-center mt-6'>
          <iframe
            width="1500"
            height="315"
            src="https://www.youtube.com/embed/tVfG5jLsOpo"
            title="AC Sonometer Experiment"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className='rounded-xl'
          ></iframe>
        </div>

        <div className='bg-blue-100 mt-6 px-7 py-4 rounded-2xl mb-8'>
          <h2 className="text-3xl flex justify-center font-bold mb-2">Theory:</h2>

          <p className="mb-4 text-[18px]">
            An AC sonometer is a device designed to measure the frequency of sound waves. It observes the resonance phenomenon using AC current flowing through a strong magnetic field and iron wires.
          </p>

          <p className="mb-4 text-[18px]">
            The wire will vibrate only if the frequency of the current matches its natural frequency — this is called <strong>resonance</strong>. In resonance, the wire vibrates maximally.
          </p>

          <p className="mb-4 text-[18px]">
            The natural frequency (f) of the vibrating wire is determined using the following formula:
          </p>

          <div className="bg-gray-100 flex justify-center p-3 rounded mb-2">
            <BlockMath math={'f = \\frac{1}{2L} \\sqrt{\\frac{T}{\\mu}}'} />
          </div>

          <p className="mb-5 text-[18px]">
            Here: <br />
            <strong>L</strong> – wire length,  
            <strong>T</strong> – tension (force),
            <strong>μ</strong> – mass per unit length of the wire.
          </p>

          <p className="mb-4 text-[18px]">
            When the wire is in resonance, it vibrates strongly. This allows the determination of the frequency of the AC current, as the natural frequency of the wire is controlled by specific parameters.
          </p>

          <p className="mb-4 text-[18px]">
            The AC sonometer is used in laboratories to determine the frequency, test physical laws, and understand resonance.
          </p>

          <h2 className="text-3xl flex justify-center font-bold mt-10 mb-2">Extended Theory (English):</h2>

          <p className="mb-4 text-[18px]">
            The AC sonometer is an apparatus used to study the phenomenon of <strong>resonance</strong> in a stretched wire carrying alternating current. When AC passes through the wire placed in a magnetic field, it experiences vibrations due to the Lorentz force.
          </p>

          <p className="mb-4 text-[18px]">
            If the frequency of the AC matches the natural frequency of the wire, it enters into resonance and the vibration amplitude becomes maximum.
          </p>

          <p className="mb-4 text-[18px]">
            The natural frequency <em>f</em> of a stretched wire is calculated using the formula:
          </p>

          <div className="bg-gray-100 flex justify-center p-3 rounded mb-2">
            <BlockMath math={'f = \\frac{1}{2L} \\sqrt{\\frac{T}{\\mu}}'} />
          </div>

          <p className="mb-4 text-[18px]">
            Where: <br />
            <strong>f</strong> = frequency, <strong>L</strong> = length of the wire, <strong>T</strong> = tension, and <strong>μ</strong> = mass per unit length.
          </p>

          <p className="mb-4 text-[18px]">
            By adjusting the length or tension of the wire and finding the condition when maximum vibration occurs, we can determine the AC frequency.
          </p>

          <p className="mb-4 text-[18px]">
            The AC sonometer is widely used in physics labs to study wave motion, resonance, and the characteristics of alternating current.
          </p>

          <h3 className='text-[25px] font-bold pt-[50px] pb-[20px]'>Learning Outcomes:</h3>
          <ul className="list-disc text-2xl pl-5 pb-[20px]">
            <li>Students will understand the phenomenon of resonance.</li>
            <li>Students will learn how to calculate the natural frequency of a wire.</li>
            <li>Students will gain practical experience in determining the frequency of current using the AC sonometer.</li>
          </ul>

          <h3 className='text-[25px] font-bold pt-[20px] pb-[20px]'>Additional Learning Outcomes (English):</h3>
          <ul className="list-disc text-xl pl-5 pb-[20px]">
            <li>Understand how alternating current and magnetic fields interact to cause vibrations in a conductor.</li>
            <li>Gain practical skills in identifying resonance and measuring frequency experimentally.</li>
            <li>Apply the formula for natural frequency using physical parameters.</li>
            <li>Develop a deeper understanding of wave phenomena and AC properties in physics.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AC;
