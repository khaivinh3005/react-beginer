import React, { useState } from 'react';
import carBenz from '../Image/car-benz.jpeg';
import carBMW from '../Image/car-bmw.jpeg';
import carLexus from '../Image/car-lexus.jpeg';

const StateComponentExample4 = () => {
  // c1
  //   const [nameCar, setNameCar] = useState("Benz")
  //   const [colorCar, setColorCar] = useState("red")
  //   const [imageCar, setImageCar] = useState(carBenz)

  // c2
  const [infoCar, setInfoCar] = useState({
    nameCar: 'Benz',
    colorCar: 'Red',
    imageCar: carBenz,
  });

  const handleChangeCar = (nameCar) => {
    if (nameCar === 'benz') {
      const newInfoCar = {
        nameCar: 'Benz',
        colorCar: 'Red',
        imageCar: carBenz,
      };
      setInfoCar(newInfoCar);
    } else if (nameCar === 'bmw') {
      const newInfoCar = {
        nameCar: 'BMW',
        colorCar: 'Gray',
        imageCar: carBMW,
      };
      setInfoCar(newInfoCar);
    } else {
      const newInfoCar = {
        nameCar: 'LEXUS',
        colorCar: 'black',
        imageCar: carLexus,
      };
      setInfoCar(newInfoCar);
    }
  };

  return (
    <div>
      <div
        className='border border-primary d-flex justify-content-between align-items-center'
        style={{ width: '70%', margin: '0 auto' }}
      >
        <div>
          <img
            src={infoCar.imageCar}
            alt={infoCar.nameCar}
            height={300}
            width={400}
          />
          <h3>Xe {infoCar.nameCar}</h3>
          <h4>Màu: {infoCar.colorCar}</h4>
        </div>
        <div>
          <button
            className='btn btn-success'
            onClick={() => handleChangeCar('benz')}
          >
            Xe Benz
          </button>
          <button
            className='btn btn-danger'
            onClick={() => handleChangeCar('bmw')}
          >
            Xe BMW
          </button>
          <button
            className='btn btn-primary'
            onClick={() => handleChangeCar('lexus')}
          >
            Xe Lexus
          </button>
        </div>
      </div>
    </div>
  );
};

export default StateComponentExample4;
