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
      experienceInfo: [
        {
          id: uniqid(),
          companyName: "Enter company name",
          jobTitle: "Enter job title",
          startDate: "Enter start date",
          endDate: "Enter end date",
          tasks: [],
        },
      ],
    };

    this.PreviewWindow = this.PreviewWindow.bind(this);
    this.addEduForm = this.addEduForm.bind(this);
    this.addExpForm = this.addExpForm.bind(this);
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
            {this.DisplayExpForms(experienceInfo)}
            <button type="button" onClick={this.addExpForm}>
              Add more experience
            </button>
          </div>
        </div>
        <this.PreviewWindow />
      </>
    );
  }

  addExpForm() {
    let cloneState = [...this.state.experienceInfo];
    cloneState.push({
      id: uniqid(),
      companyName: "Enter company name",
      jobTitle: "Enter job title",
      startDate: "Enter start date",
      endDate: "Enter end date",
      tasks: [],
    });
    this.setState({
      experienceInfo: cloneState,
    });
  }

  addTask = (task, formId) => {
    let cloneTask = this.state.experienceInfo.find(
      (expForm) => expForm.id === formId
    );
    cloneTask.tasks.push(task);

    let cloneExpList = [...this.state.experienceInfo];
    let index = cloneExpList.findIndex((elem) => elem.id === formId);
    cloneExpList[index] = cloneTask;
    this.setState({
      experienceInfo: cloneExpList,
    });
  };

  addEduForm() {
    let cloneState = [...this.state.eduInfo];
    cloneState.push({
      id: uniqid(),
      schoolName: "School Name",
      studySubject: "Area of Study",
      studyYear: "Year of Study",
    });
    this.setState({
      eduInfo: cloneState,
    });
  }

  DisplayEduForms(eduInfo) {
    const onChangeEdu = (e) => {
      const parsedInfo = e.target.id.split("_");
      let cloneEdu = this.state.eduInfo.find(
        (element) => element.id === parsedInfo[1]
      );
      cloneEdu[parsedInfo[0]] = e.target.value;
      let cloneEduInfo = [...this.state.eduInfo];
      let index = cloneEduInfo.findIndex((elem) => elem.id === parsedInfo[1]);
      cloneEduInfo[index] = cloneEdu;
      this.setState({
        eduInfo: cloneEduInfo,
      });
    };

    return (
      <>
        {eduInfo.map((form) => {
          return (
            <EducationForm key={form.id} id={form.id} onChange={onChangeEdu} />
          );
        })}
      </>
    );
  }

  DisplayExpForms(expInfo) {
    return (
      <>
        {expInfo.map((form) => {
          return (
            <ExperienceForm
              key={form.id}
              formId={form.id}
              experienceInfo={expInfo}
              addTask={this.addTask}
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
            <GeneralWindow generalInfo={generalInfo} />
          </div>
          <div className="educationWindow windowSection">
            <h2>Education</h2>
            <EduWindow eduInfo={eduInfo} />
          </div>
          <div className="experienceWindow windowSection">
            <h2>Experience</h2>
          </div>
        </div>
      </>
    );
  }
}
