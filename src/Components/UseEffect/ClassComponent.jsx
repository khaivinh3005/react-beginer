// component React
/**
 * 1.Function component
 * //2018 => ES6
 * const FunctionComponent = () => {
 *  return (<div></div>)
 * }
 *
 *
 *
 * //2015
 * 2.Class component
 *
 *
 */

import { Component } from 'react';
import carBenz from '../Image/car-benz.jpeg';
import carBMW from '../Image/car-bmw.jpeg';
import carLexus from '../Image/car-lexus.jpeg';
import { Flex } from '@chakra-ui/react';
import { Button } from 'antd';

const listCarDefault = [
  {
    id: 1,
    nameCar: 'Xe Benz',
    imageCar: carBenz,
    price: '1000',
    isLike: false,
    isBuy: false,
    count: 0,
  },
  {
    id: 2,
    nameCar: 'Xe BMW',
    imageCar: carBMW,
    price: '3000',
    isLike: false,
    isBuy: false,
    count: 0,
  },
  {
    id: 3,
    nameCar: 'Xe Lexus',
    imageCar: carLexus,
    price: '1500',
    isLike: false,
    isBuy: false,
    count: 0,
  },
];

class ComponentClass extends Component {
  //state
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      carModalItem: listCarDefault[0],
    };
  }

  render() {
    return (
      <div>
        <h1>ClassCompoennt</h1>
        <h1>Danh Sach xe</h1>
        <Flex>
          <div>
            {listCarDefault.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() =>
                    this.setState({
                      //Cap nhat cho isOpen va carModalItem
                      isOpen: !this.state.isOpen,
                      carModalItem: item,
                    })
                  }
                >
                  <h2>{item.nameCar}</h2>
                  <span>{item.price}</span>
                  <img
                    src={item.imageCar}
                    alt={`${item.nameCar}`}
                    height={200}
                    width={150}
                  />
                </li>
              );
            })}
          </div>
          <div>
            <img
              src={listCarDefault[0].imageCar}
              alt={listCarDefault[0].nameCar}
              height={200}
              width={150}
            />
          </div>
        </Flex>
        <div
          style={{
            display: this.state.isOpen ? 'block' : 'none',
            color: 'red',
            border: '1px solid black',
          }}
        >
          <li key={this.state.carModalItem.id}>
            <h2>{this.state.carModalItem.nameCar}</h2>
            <span>{this.state.carModalItem.price}</span>
            <img
              src={this.state.carModalItem.imageCar}
              alt={`${this.state.carModalItem.nameCar}`}
              height={200}
              width={150}
            />
          </li>
          <Button onClick={() => this.setState({})}>Change Car</Button>
        </div>
      </div>
    );
  }
}

export default ComponentClass;
