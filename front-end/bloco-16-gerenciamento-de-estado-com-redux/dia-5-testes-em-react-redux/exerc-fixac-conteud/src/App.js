import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';
class App extends React.Component {
  render() {
    return (
      <div>
          <ButtonClicks />
          <NumberClicks />
      </div>
    );
  }
}
export default App;