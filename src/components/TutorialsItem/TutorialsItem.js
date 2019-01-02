import React from 'react';
import PropTypes from 'prop-types';

import tutorialShape from '../../helpers/propz/tutorialsShape';

import './TutorialsItem.scss';
import authRequests from '../../helpers/data/authRequests';

class TutorialsItem extends React.Component {
  static propTypes = {
    tutorial: tutorialShape,
    deleteSingleTutorial: PropTypes.func,
    passTutorialtoEdit: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleTutorial, tutorial } = this.props;
    deleteSingleTutorial(tutorial.id);
  }

  editEvent = (e) => {
    e.preventDefault();
    const { passTutorialToEdit, tutorial } = this.props;
    passTutorialToEdit(tutorial.id);
  }

  render() {
    const { tutorial } = this.props;
    const uid = authRequests.getCurrentUid();
    const makeButtons = () => {
      if (tutorial.uid === uid) {
        return (
            <div className="buttons">
              <span className="col">
                <button className="btn btn-info">
                 <i className="far fa-edit" onClick={this.editEvent}></i>
                </button>
              </span>
              <span className="col">
                <button className="btn btn-danger">
                  <i className="far fa-trash-alt" onClick={this.deleteEvent}></i>
                </button>
              </span>
                  <input type="checkbox" aria-label="Checkbox for following text input" />
            </div>
        );
      }
      return <span className="col-2"></span>;
    };
    return (
      <li className="tutorials-item text-center">
        <span className="col-4">{tutorial.title}</span>
        <span className="col-4">{tutorial.url}</span>
        <span className="col-4">{makeButtons()}</span>
      </li>
    );
  }
}

export default TutorialsItem;
