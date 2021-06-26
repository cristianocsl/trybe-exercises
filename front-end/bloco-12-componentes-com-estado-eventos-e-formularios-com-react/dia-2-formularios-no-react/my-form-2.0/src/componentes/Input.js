import React from 'react';

class Input extends React.Component {
  render () {
    const { inputLabel, name, value, handleChange } = this.props
    console.log(`Estou no filho com o valor: ${value}`);
    return(
      <div>
          <label>{inputLabel}
          <input
            name={name}
            value={value}
            onChange={handleChange}
            // type="text"
          />
          </label>
      </div>

    )
  }
}

export default Input;
