import React from 'react';
import PropTypes from 'prop-types';
import './TutorialsForm.scss';
import authRequests from '../../helpers/data/authRequests';

const defaultTutotial = {
  title: '',
  url: '',
  uid: '',
};

class TutorialsForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state ={
    newTutorial: defaultTutotial,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempTutorial = { ...this.state.newTutorial };
    tempTutorial[name] = e.target.value;
    this.setState({ newTutorial: tempTutorial });
  }

  titleChange = e => this.formFieldStringState('title', e);

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const myTutorial = { ...this.state.newTutorial };
    myTutorial.uid = authRequests.getCurrentUid();
    onSubmit(myTutorial);
    this.setState({ newTutorial: defaultTutotial });
  }

  render() {
    const { newTutorial } = this.state;
    return (
      <div className="tutorials-form col">
        <h2>Add New Tutorial:</h2>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="titleHelp"
              placeholder="Wes Bos- Javascript 30"
              value={newTutorial.title}
              onChange={this.titleChange}
            />
          </div>
          <button className="btn btn-success">Save Tutorial</button>
        </form>
      </div>
    );
  }
}

export default TutorialsForm;
