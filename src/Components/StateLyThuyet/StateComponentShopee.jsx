import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import hinh1 from '../Image-shopee/hinh1.jpeg';
import hinh2 from '../Image-shopee/hinh2.jpeg';
import hinh3 from '../Image-shopee/hinh3.jpeg';
import hinh4 from '../Image-shopee/hinh4.jpeg';

/**
 * 1.UI
 * 2.State =>
 * 2.1 Hinhf ảnh chính đặt state
 * 2.2 Số lượng
 * 2.3 Mã giảm giá
 *
 *  */

const StateComponentShopee = () => {
  const listImage = [hinh2, hinh3, hinh4];
  const [imageShopee, setImageShopee] = useState(hinh1);
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);

  const notify = () => toast.error('Bạn vui lòng chọn số lượng');

  //Hàm chuyển đổi tiền VNĐ
  const handleConvertMoneyVND = (money) => {
    const result = money.toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND',
    });
    return result;
  };

  const handleChangeCount = (isPlus) => {
    if (isPlus) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
      if (count <= 0) {
        setCount(0);
      }
    }
  };

  const handleDiscount = (money) => {
    setDiscount(money * count);
  };

  const money = 74000 * count - discount;

  return (
    <div className='d-flex'>
      <div className='componentImage'>
        <img src={imageShopee} alt='hinh1' width={200} height={200} />
        <div className='d-flex mt-3'>
          {listImage.map((item, index) => {
            return (
              <img
                src={item}
                alt={`${item}`}
                width={90}
                height={90}
                className='border border-primary'
                key={item}
                style={{ cursor: 'pointer' }}
                onClick={() => setImageShopee(item)}
              />
            );
          })}
        </div>
      </div>
      <div className='componentInfo ml-3'>
        <h3>
          Áo thun Raglan chữ G, áo thun Nam Nữ Unisex Cotton Retro Hàn Quốc GTM
          2023
        </h3>
        <del>{handleConvertMoneyVND(500000)}</del>
        <strong className='text-danger ml-2'>
          {handleConvertMoneyVND(money)}
        </strong>
        <div className='d-flex align-items-center' style={{ gap: '10px' }}>
          <span>Mã giảm giá của Shop</span>
          <button
            className='btn btn-danger'
            onClick={() => handleDiscount(5000)}
          >
            Giảm 5k
          </button>
          <button
            className='btn btn-danger'
            onClick={() => handleDiscount(10000)}
          >
            Giảm 10k
          </button>
          <button
            className='btn btn-danger'
            onClick={() => handleDiscount(20000)}
          >
            Giảm 20k
          </button>
        </div>
        <div className='d-flex align-items-center'>
          <span>Số Lượng</span>
          <button
            className='btn btn-sucess border border-primary ml-2'
            onClick={() => handleChangeCount(false)}
          >
            -
          </button>
          <span className='mx-2'>{count}</span>
          <button
            className='btn btn-sucess border border-primary'
            onClick={() => handleChangeCount(true)}
          >
            +
          </button>
        </div>
        <button className='btn btn-danger mt-3' onClick={notify}>
          Mua Ngay
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default StateComponentShopee;
