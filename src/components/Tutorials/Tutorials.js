import React from 'react';
import PropTypes from 'prop-types';
import tutorialsShape from '../../helpers/propz/tutorialsShape';
import './Tutorials.scss';

class Tutorials extends React.Component {
  static propTypes = {
    tutorials: PropTypes.arrayOf(tutorialsShape),
  }

  render() {
    return (
      <div className="Tutorials">
        <h2>Tutorials</h2>
      </div>
    );
  }
}

export default Tutorials;
