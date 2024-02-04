import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './Components/Styles/styles.css';
import CampingProject from './Components/Camping/CampingProject';
import FashionProject from './Components/Fashion/FashionProject';
import StateComponent from './Components/StateLyThuyet/StateComponent';
import StateComponentExample2 from './Components/StateLyThuyet/StateComponentExample2';
import StateComponentExample3 from './Components/StateLyThuyet/StateComponentExample3';
import StateComponentExample4 from './Components/StateLyThuyet/StateComponentExample4';
import StateComponentShopee from './Components/StateLyThuyet/StateComponentShopee';
import ExampleProps from './Components/PropsLyThuyet/ExampleProps';
import { ChakraProvider } from '@chakra-ui/react';
import CarProject from './Components/CarProject/CarProject';
// Dom tới id là root ở html
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* Camping project */}
      {/* <CampingProject /> */}
      {/* <FashionProject /> */}
      {/* <StateComponent /> */}
      {/* <StateComponentExample2 /> */}
      {/* <StateComponentExample3 /> */}
      {/* <StateComponentExample4 /> */}
      {/* <StateComponentShopee /> */}
      {/* <ExampleProps /> */}
      <CarProject />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
