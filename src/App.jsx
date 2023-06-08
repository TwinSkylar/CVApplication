import { Component, useState } from "react";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import GeneralWindow from "./components/GeneralWindow";
import uniqid from "uniqid";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        CVFirstName: "First Name",
        CVLastName: "Last Name",
        CVEmail: "email@address.com",
        CVPhone: "123-456-789",
      },
      eduInfo: [
        {
          id: uniqid(),
          schoolName: "",
          studSubject: "",
          studyYear: "",
        },
      ],
      experienceInfo: [],
    };

    this.addEduForm = this.addEduForm.bind(this);
  }

  render() {
    const { generalInfo, eduInfo, experienceInfo } = this.state;

    const onChangeGeneral = (id, value) => {
      generalInfo[id] = value;
      this.setState({
        generalInfo: generalInfo,
      });
    };

    return (
      <>
        <div className="resumeForm">
          <div className="generalSection formSection">
            <h2>General Information</h2>
            <GeneralForm onChangeGeneral={onChangeGeneral} />
          </div>
          <div className="educationSection formSection">
            <h2>Education</h2>
            {this.DisplayEduForms(eduInfo)}
            <button type="button" onClick={this.addEduForm}>
              Add another institution
            </button>
          </div>
          <div className="experienceSection formSection">
            <h2>Experience</h2>
            <ExperienceForm />
          </div>
        </div>
        <this.PreviewWindow generalInfo={generalInfo} />
      </>
    );
  }

  addEduForm() {
    let cloneState = [...this.state.eduInfo];
    cloneState.push({
      id: uniqid(),
      schoolName: "",
      studSubject: "",
      studyYear: "",
    });
    this.setState({
      eduInfo: cloneState,
    });
  }

  DisplayEduForms(eduInfo) {
    console.log(eduInfo);
    return (
      <>
        {eduInfo.map((form) => {
          return (
            <EducationForm
              key={form.id}
              id={form.id}
              addEduForm={this.addEduForm}
            />
          );
        })}
      </>
    );
  }

  PreviewWindow({ generalInfo }) {
    return (
      <>
        <div className="resumeWindow">
          <div className="generalWindow windowSection">
            <h2>General Information</h2>
            <GeneralWindow generalInfo={generalInfo} />
          </div>
          <div className="educationWindow windowSection">
            <h2>Education</h2>
          </div>
          <div className="experienceWindow windowSection">
            <h2>Experience</h2>
          </div>
        </div>
      </>
    );
  }
}
