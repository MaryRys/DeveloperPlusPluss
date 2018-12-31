import React from 'react';
import './TutorialsForm.scss';

class TutorialsForm extends React.Component {
  render() {
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
            />
          </div>
          <button className="btn btn-success">Save Tutorial</button>
        </form>
      </div>
    );
  }
}

export default TutorialsForm;
