import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.pokemon;

    return (
      <div className="order" style={{border:'solid 1px', borderRadius:'5px'}}>
        <img src={image} alt={moreInfo}/>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;