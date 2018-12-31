import React from 'react';
import './TutorialsForm.scss';

const defaultTutotial = {
  title: '',
  url: '',
  uid: '',
};

class TutorialsForm extends React.Component {
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

  render() {
    const { newTutorial } = this.state;
    return (
      <div className="tutorials-form col">
        <h2>Add New Tutorial:</h2>
        <form>
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
