import { Component, useState } from "react";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import GeneralWindow from "./components/GeneralWindow";
import EduWindow from "./components/EducationWindow";
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
          schoolName: "School Name",
          studySubject: "Area of Study",
          studyYear: "Year of Study",
        },
      ],
      experienceInfo: [],
    };

    this.PreviewWindow = this.PreviewWindow.bind(this);
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
        <this.PreviewWindow />
      </>
    );
  }

  addEduForm() {
    let cloneState = [...this.state.eduInfo];
    cloneState.push({
      id: uniqid(),
      schoolName: "Education Institution",
      studSubject: "Area of study",
      studyYear: "2023",
    });
    this.setState({
      eduInfo: cloneState,
    });
  }

  DisplayEduForms(eduInfo) {
    const onChangeEdu = (e) => {
      const parsedInfo = e.target.id.split('_');
      let cloneEdu = this.state.eduInfo.find(element=>element.id === parsedInfo[1]);
      cloneEdu[parsedInfo[0]] = e.target.value;
      let cloneEduInfo = [...this.state.eduInfo];
      var index = cloneEduInfo.findIndex(elem => elem.id == parsedInfo[1]);
      cloneEduInfo[index] = cloneEdu;
      this.setState({
        eduInfo:cloneEduInfo
      });

      //find out which form
      //set the values of each form
      //change the form that is changing
    };


    return (
      <>
        {eduInfo.map((form) => {
          return (
            <EducationForm
              key={form.id}
              id={form.id}
              onChange={onChangeEdu}
            />
          );
        })}
      </>
    );
  }

  PreviewWindow() {
    const { generalInfo, eduInfo, experienceInfo } = this.state;
    return (
      <>
        <div className="resumeWindow">
          <div className="generalWindow windowSection">
            <h2>General Information</h2>
            <GeneralWindow generalInfo={generalInfo} />
          </div>
          <div className="educationWindow windowSection">
            <h2>Education</h2>
            <EduWindow eduInfo={eduInfo}/>
          </div>
          <div className="experienceWindow windowSection">
            <h2>Experience</h2>
          </div>
        </div>
      </>
    );
  }
}
