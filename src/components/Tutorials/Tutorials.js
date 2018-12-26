import React from 'react';
import PropTypes from 'prop-types';
import tutorialsShape from '../../helpers/propz/tutorialsShape';

import TutorialsItem from '../TutorialsItem/TutorialsItem';
import './Tutorials.scss';

class Tutorials extends React.Component {
  static propTypes = {
    tutorials: PropTypes.arrayOf(tutorialsShape),
  }

  render() {
    const { tutorials } = this.props;
    // console.log(tutorials);
    const tutorialsItemComponents = tutorials.map(tutorial => (
      <TutorialsItem
      tutorial={tutorial}
      key={tutorial.id}
      />
    ));
    return (
      <div className="Tutorials">
        <h2>Tutorials</h2>
        <div>{tutorialsItemComponents}</div>
      </div>
    );
  }
}

export default Tutorials;
