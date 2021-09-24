import React from 'react';
import states from './statesData';

class Estado extends React.Component {
  render () {
    const { inputLabel, name, value, handleChange } = this.props
    console.log(`Escolheu o estado com o valor ${value}:`);
    return(
      <label>{inputLabel}
      <select
        name={name}
        value={value}
        onChange={handleChange}
      >
        {
          states.map((item) =>
            <option value={item.label} key={ item.id }>{ item.label }</option>)
        }
      </select>
      </label>
    )
  }
}

export default Estado;
