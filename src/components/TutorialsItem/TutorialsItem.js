import React from 'react';

import './TutorialsItem.scss';

class TutorialsItem extends React.Component {
  render() {
    const { tutorial } = this.props;
    console.log(this.props);
    return (
      // console.log(tutorials)
      <h2>{tutorial.title}</h2>
    );
  }
}

export default TutorialsItem;
