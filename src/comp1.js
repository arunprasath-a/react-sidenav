import React from 'react';

import App from './App';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <App></App>
            </div>
            <div className='col-md-8'></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainComponent;
