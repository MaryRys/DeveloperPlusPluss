import React from 'react';

import tutorialShape from '../../helpers/propz/tutorialsShape';

import './TutorialsItem.scss';

class TutorialsItem extends React.Component {
  static propTypes = {
    tutorial: tutorialShape,
  }

  render() {
    const { tutorial } = this.props;
    return (
      <li className="tutorials-item text-center">
        <span className="col-6">{tutorial.title}</span>
        <span className="col-6">{tutorial.url}</span>
      </li>
    );
  }
}

export default TutorialsItem;
