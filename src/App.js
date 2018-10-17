import React, { Component } from 'react';
import './App.css';
import { Input, Icon, Button} from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }
  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }
  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div style={{marginTop:100}}>
        <div className="App">
          <div style={{marginTop:10}}>
            <h2>Codefin Food Center</h2>
          </div>
        </div >
        <center>
          <b style={{marginTop:20}} className="App-intro">ข้อมูลลูกค้า</b>
        </center>
        <center>
        <div style={{marginTop:50}}>  
          <Input
            placeholder="Enter your username"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix}
            value={userName}
            onChange={this.onChangeUserName}
            ref={node => this.userNameInput = node}
          />
        </div>  
        <div>
        <Input
            placeholder="Enter Telephone"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix}
            value={userName}
            onChange={this.onChangeUserName}
            ref={node => this.userNameInput = node}
          />
        </div>
        <Button type="primary" onClick={this.onChangeUserName}>Primary</Button>
        </center>
      </div>
    );
  }
}
export default App;
