import React from 'react';

const CarItemComponent = (props) => {
  const { infor, setCarInfo } = props;
  const { id, imageCar, nameCar, price } = infor;

  const handleChangeCarInfo = () => {
    // c1: (ưu tiên)
    const newCarInfo = {
      id: id,
      nameCar: nameCar,
      imageCar: imageCar,
      price: price,
    };
    setCarInfo(newCarInfo);
  };

  return (
    <>
      <div className='carItem' key={id}>
        <h2>Component Con</h2>
        <img src={imageCar} width={300} height={300} />
        <h3>{nameCar}</h3>
        <span>{price}</span>
        <button onClick={handleChangeCarInfo}>Click</button>
      </div>
    </>
  );
};

export default CarItemComponent;
