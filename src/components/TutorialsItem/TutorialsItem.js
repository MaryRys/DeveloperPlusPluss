import React from 'react';
import PropTypes from 'prop-types';

import tutorialShape from '../../helpers/propz/tutorialsShape';

import './TutorialsItem.scss';
import authRequests from '../../helpers/data/authRequests';

class TutorialsItem extends React.Component {
  static propTypes = {
    tutorial: tutorialShape,
    deleteSingleTutorial: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleTutorial, tutorial } = this.props;
    deleteSingleTutorial(tutorial.id);
  }

  render() {
    const { tutorial } = this.props;
    const uid = authRequests.getCurrentUid();
    const makeButtons = () => {
      if (tutorial.uid === uid) {
        return (
            <div>
              <span className="col">
                <button className="btn btn-danger">
                  <i className="far fa-trash-alt" onClick={this.deleteEvent}></i>
                </button>
              </span>
            </div>
        );
      }
      return <span className="col-2"></span>;
    };
    return (
      <li className="tutorials-item text-center">
        <span className="col-6">{tutorial.title}</span>
        <span className="col-6">{tutorial.url}</span>
        {makeButtons()}
      </li>
    );
  }
}

export default TutorialsItem;
