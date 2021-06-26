import React from 'react';
import states from './statesData';

class Estado extends React.Component {
  render () {
    const { inputLabel, name, value, handleChange } = this.props
    // console.log(`Estou no filho com o valor ${value}:`);
    return(
      <div>

        <label>{inputLabel}
        <select>
          name={name}
          value={value}
          onChange={handleChange}
          
            {
              states.map((item) => <option key={ item.id }>{ item.label }</option>)
            }
          
        </select>
        </label>
      </div>

    )
  }
}

export default Estado;
