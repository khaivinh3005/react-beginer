import { useState } from 'react';
import HeaderComponent from '../Camping/HeaderComponent';
import FashionProject from '../Fashion/FashionProject';

// Global variable
const className = '10A';
const colorRed = 'red';
const colorBlue = 'blue';

const StateComponent = () => {
  const [fullName, setFullName] = useState('Phuoc');
  const [age, setAge] = useState(1);

  const handleChangeState = () => {
    if (fullName === 'Phuoc') {
      // cập nhật giá trị mới có biến state fullName là wibu
      setFullName('Wibu');
    } else {
      setFullName('Phuoc');
    }

    setAge(age + 1);
  };

  return (
    <>
      {/* c2 */}
      <p
        style={{
          color: age >= 20 ? colorBlue : colorRed,
          backgroundColor: age >= 20 ? colorRed : colorBlue,
        }}
      >
        My name is {fullName}
      </p>

      <p>Age : {age}</p>

      <button
        style={{
          border: '1px solid black',
          padding: '10px 20px',
          borderRadius: '10px',
        }}
        onClick={handleChangeState}
      >
        Click
      </button>
    </>
  );
};

export default StateComponent;
