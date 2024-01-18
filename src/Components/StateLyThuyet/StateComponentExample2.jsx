import React from 'react';
import { useState } from 'react';

const StateComponentExample2 = () => {
  const [backgroundColor, setBackgroundColor] = useState('orange');
  //   đề bài thay đổi giá trị màu sắc cho hình vuông khi click vào button đôỉ màu

  /**
   * 1.UI + CSS (Done)
   * 2.màu sắc hình vuông thay đổi => màu sắc vô state (done)
   * 3.Đưa cái state màu sắc vào styles hình vuông (done)
   * 4.THực hiện thay đổi màu sắc
   */
  const stylesForSquare = {
    border: '5px solid black',
    width: '100px',
    height: '100px',
    background: backgroundColor,
    margin: '10px',
  };

  const stylesForButton = {
    border: '1px solid black',
    padding: '10px 40px',
    background: 'blue',
    margin: '10px',
    color: 'white',
    borderRadius: '20px',
  };

  //   rest params
  const stylesForYellowButton = {
    //lấy toàn bộ key trong stylesForButton
    ...stylesForButton,
    // cập nhật những key mới => nếu trùng thì sẽ lấy key mới đè lên
    background: 'yellow',
    color: 'black',
  };

  const stylesForRedButton = {
    ...stylesForButton,
    background: 'red',
  };

  const handleChangeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <>
      <h1>Bài tập thay đổi màu sắc hình vuông</h1>
      <div className='square' style={stylesForSquare}></div>
      <button style={stylesForButton} onClick={() => handleChangeColor('blue')}>
        Đổi màu xanh
      </button>
      <button
        style={stylesForYellowButton}
        onClick={() => handleChangeColor('yellow')}
      >
        Đổi màu vàng
      </button>
      <button
        style={stylesForRedButton}
        onClick={() => handleChangeColor('red')}
      >
        Đổi màu đỏ
      </button>
    </>
  );
};

export default StateComponentExample2;
