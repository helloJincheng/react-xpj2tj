import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Button } from 'antd'
import 'antd/dist/antd.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div style= { {margin: '20px'} }>
        <Button> antd </Button>
        <Hello />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
