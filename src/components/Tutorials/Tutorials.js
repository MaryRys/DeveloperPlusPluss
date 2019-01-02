import React from 'react';
import PropTypes from 'prop-types';
import tutorialShape from '../../helpers/propz/tutorialsShape';

import TutorialsItem from '../TutorialsItem/TutorialsItem';
import './Tutorials.scss';

class Tutorials extends React.Component {
  static propTypes = {
    tutorials: PropTypes.arrayOf(tutorialShape),
    deleteSingleTutorial: PropTypes.func,
    passTutorialToEdit: PropTypes.func,
  }

  render() {
    const { tutorials, deleteSingleTutorial, passTutorialToEdit } = this.props;
    const tutorialsItemComponents = tutorials.map(tutorial => (
      <TutorialsItem
      tutorial={tutorial}
      key={tutorial.id}
      deleteSingleTutorial={deleteSingleTutorial}
      passTutorialToEdit={passTutorialToEdit}
      />
    ));
    return (
      <div className="tutorials col">
        <h2>Tutorials</h2>
        <ul>{tutorialsItemComponents}</ul>
      </div>
    );
  }
}

export default Tutorials;
