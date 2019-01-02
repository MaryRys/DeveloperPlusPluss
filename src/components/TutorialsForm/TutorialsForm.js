import React from 'react';
import PropTypes from 'prop-types';
import './TutorialsForm.scss';
import authRequests from '../../helpers/data/authRequests';
import tutorialsRequsts from '../../helpers/data/tutorialsRequests';

const defaultTutotial = {
  title: '',
  url: '',
  uid: '',
};

class TutorialsForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    isEditing: PropTypes.bool,
    editId: PropTypes.string,
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

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      tutorialsRequsts.getSingleTutorial(editId)
        .then((tutorial) => {
          this.setState({ newTutorial: tutorial.data });
        })
        .catch(err => console.error('error in getSingleTutorial', err));
    }
  }

  render() {
    const { newTutorial } = this.state;
    const { isEditing } = this.props;
    const title = () => {
      if (isEditing) {
        return <h2>Edit Tutorial:</h2>;
      }
      return <h2>Add New Tutorial:</h2>;
    };

    return (
      <div className="tutorials-form col">
      {title()}
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
