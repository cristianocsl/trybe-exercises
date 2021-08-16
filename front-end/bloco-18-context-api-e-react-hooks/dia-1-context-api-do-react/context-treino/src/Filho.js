import React from 'react';
import MyContext from './MyContext';

class Filho extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          (money, spend) => (
            <div>
              <h3>
                O filho possui herança de ${money}.
              </h3>
              <button type="button" onClick={spend}>Gastar R$</button>
            </div>
          )
        }
      </MyContext.Consumer>
    );
  }
}

export default Filho;
