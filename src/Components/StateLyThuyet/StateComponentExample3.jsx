import React, { useState } from 'react';
import Image1 from '../Image/product1.png';

const StateComponentExample3 = () => {
  const [count, setCount] = useState(0);
  const [percent, setPercent] = useState(1);
  const price = 100;
  const totalPrice =
    count > 5 ? price * count * percent * 0.9 : price * count * percent;

  const handleChangeCount = (isPlus) => {
    if (isPlus) {
      const newCount = count + 1;
      setCount(newCount);
    } else {
      if (count <= 0) {
        // c1
        setCount(0);
        //  c2:
        // setCount(count + 1);
      } else {
        setCount(count - 1);
      }
    }
  };

  const handleDiscount = () => {
    // c1
    if (percent < 1) {
      setPercent(1);
    } else {
      const percentDiscount = 0.8;
      setPercent(percentDiscount);
    }
  };

  return (
    <div>
      <img src={Image1} />
      <h5>Giá tiền sản phẩm : 100 vnđ</h5>
      <div>
        <button
          className='btn btn-success'
          onClick={() => handleChangeCount(false)}
        >
          -
        </button>
        <span className='mx-3'>{count}</span>
        <button
          className='btn btn-success'
          onClick={() => handleChangeCount(true)}
        >
          +
        </button>
        <button onClick={handleDiscount}>Add mã giảm giá 20%</button>
      </div>
      <h5>Giá tiền cần phải thanh toán : {totalPrice} vnđ</h5>
    </div>
  );
};

export default StateComponentExample3;
