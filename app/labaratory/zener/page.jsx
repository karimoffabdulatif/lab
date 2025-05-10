import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Zener = () => {
  return (
    <div className='container'>
      <div className="bg-white text-gray-800">
        <div className='justify-center mt-4 px-7 py-5 rounded-2xl bg-blue-100 items-center gap-5'>
          <h1 className="text-3xl justify-center flex font-bold mb-4">Objective:</h1>
          <p className="mb-4 text-[20px]">
            A Zener diode is a heavily doped silicon crystal diode that allows current to flow in the forward direction just like a regular diode. Additionally, it allows current to flow in the reverse direction if the voltage is above a certain value known as the breakdown voltage. The breakdown voltage is also known as the Zener knee voltage.

            The device is named after American physicist Clarence Zener, who described the property related to the breakdown of electrical insulators.

            The device consists of a reverse-biased, heavily doped PN junction diode that operates in the breakdown region. Conventional diodes and rectifiers never operate in the breakdown region, but the Zener diode can safely operate in this zone.
          </p>
        </div>

        <div className='video flex bg-blue-100 rounded-2xl p-4 justify-center mt-6'>
          <iframe
            width="1500"
            height="315"
            src="https://www.youtube.com/embed/XhQqtdTlRus"
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
            As the reverse voltage applied to a Zener diode increases, it reaches the breakdown voltage at which the Zener current rises significantly. In the breakdown region, further increase in reverse voltage does not increase the voltage across the Zener diode; it only increases the current. Thus, a constant voltage, called the Zener voltage (V<sub>z</sub>), is maintained across the Zener diode despite changes in supply voltage. Therefore, it acts as a voltage regulator.

            The reverse characteristic is obtained by plotting reverse voltage along the X-axis and reverse current along the Y-axis. When the reverse voltage reaches a certain value, the reverse current increases rapidly, but the voltage across the diode remains constant. This constant voltage is known as the breakdown voltage, V<sub>z</sub>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Zener;
