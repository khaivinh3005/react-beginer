import { Component } from 'react';

// Khi đi với class thì sẽ luôn luôn dùng con trỏ this
//2015 function() , ES const arrowFunction = () =>
class ClassComponent extends Component {
  //1
  //Nơi khởi tạo state
  constructor(props) {
    super(props);

    // nơi chứa state ban đầu
    this.state = {
      number: 2,
      isOn: false,
    };
  }

  handleChangeNumber() {
    this.setState({ number: this.state.number + 1 });
  }

  handleTurnOnOff(isTurnOn) {
    this.setState({ isOn: isTurnOn });
  }

  //2
  render() {
    return (
      <div>
        <h1>Class component</h1>
        <h2>Number: {this.state.number}</h2>
        <button
          style={{ border: '1px solid', padding: '10px' }}
          onClick={() => this.handleChangeNumber()}
        >
          Click
        </button>

        <div
          style={{
            width: '200px',
            height: '200px',
            border: '1px solid',
            backgroundColor: this.state.isOn ? 'yellow' : 'black',
          }}
        ></div>

        <button
          style={{ padding: '10px', border: '1px solid' }}
          onClick={() => this.handleTurnOnOff(true)}
        >
          Bật đèn
        </button>
        <button
          style={{ padding: '10px', border: '1px solid' }}
          onClick={() => this.handleTurnOnOff(false)}
        >
          Tắt đèn
        </button>
      </div>
    );
  }

  //Hàm componentDidmount 3 => call API
  componentDidMount

  componentDidUpdate

  componentWillUnmount
}

export default ClassComponent;
