import { Component, useState } from "react";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import GeneralWindow from "./components/GeneralWindow";
import EduWindow from "./components/EducationWindow";
import ExpWindow from "./components/ExperienceWindow";
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

    /*
    This is one way to ensure the state is changed at this level, there is another method
    which is done with the addTask function
    */
    this.PreviewWindow = this.PreviewWindow.bind(this);
    this.addEduForm = this.addEduForm.bind(this);
    this.addExpForm = this.addExpForm.bind(this);
  }

  render() {
    const { generalInfo, eduInfo, experienceInfo } = this.state;

    /*
    Purpose:  Updates the state of the general information onChange using text inputs.
    Parameters: 
      id: the name of object property
      value: the value for the new state
    Return:  none
    */
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

  /*
  Purpose:  Adds a new form object to the state with default values.
  Parameters: none
  Return:  none
  */

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

  /*
  Purpose:  Adds a task to the job experience
  Parameters: 
    task: a description of a job function
    formid: the id of the form to add the task
  Return:  none
  */

  addTask = (task, formId) => {
    const taskId = uniqid();
    let cloneTask = this.state.experienceInfo.find(
      (expForm) => expForm.id === formId
    );
    cloneTask.tasks.push({ id: taskId, task: task });

    let cloneExpList = [...this.state.experienceInfo];
    let index = cloneExpList.findIndex((elem) => elem.id === formId);
    cloneExpList[index] = cloneTask;
    this.setState({
      experienceInfo: cloneExpList,
    });
  };

  /*
  Purpose:  Adds a task to the job experience
  Parameters: 
    task: a description of a job function
    formid: the id of the form to add the task
  Return:  none
  */

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

  getForm = (formId) => {
    let formClone = this.state.experienceInfo.find(
      (form) => formId === form.id
    );
  };

  DisplayExpForms(expInfo) {
    const onChangeExp = (e) => {
      let cloneTasks = this.state.experienceInfo.find(
        (form) => form.id === e.target.dataset.id
      );
      cloneTasks[e.target.id] = e.target.value;
      let cloneExpInfo = [...this.state.experienceInfo];
      let index = cloneExpInfo.findIndex(
        (elem) => elem.id === e.target.dataset.id
      );
      cloneExpInfo[index] = cloneTasks;
      this.setState({
        experienceInfo: cloneExpInfo,
      });
    };

    const deleteTask = (e) => {
      let cloneForm = this.state.experienceInfo.find(
        (form) => form.id === e.target.dataset.formid
      );
      let cloneTasks = cloneForm.tasks.filter(
        (task) => task.id !== e.target.dataset.taskid
      );
      cloneForm.tasks = cloneTasks;
      let cloneExpInfo = [...this.state.experienceInfo];
      let index = cloneExpInfo.findIndex(
        (elem) => elem.id === e.target.dataset.id
      );
      cloneExpInfo[index] = cloneTasks;
      this.setState({
        experienceInfo: cloneExpInfo,
      });

      const hero = [
        { id: 1, name: "hero1" },
        { id: 2, name: "hero2" },
      ];
      //remove hero1
      const updatedHero = hero.filter((item) => item.id !== 1);
    };

    return (
      <>
        {expInfo.map((form) => {
          return (
            <ExperienceForm
              key={form.id}
              formId={form.id}
              experienceInfo={expInfo}
              addTask={this.addTask}
              tasks={form.tasks}
              onChange={onChangeExp}
              deleteTask={deleteTask}
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
            <ExpWindow experienceInfo={experienceInfo} />
          </div>
        </div>
      </>
    );
  }
}
