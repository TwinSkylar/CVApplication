import { Component, useState } from "react";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import GeneralWindow from "./components/GeneralWindow";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        CVFirstName: "argument sake",
        CVLastName: "",
        CVEmail: "",
        CVPhone: "",
      },
      eduInfo: [],
      experienceInfo: [],
    };
  }

  render() {
    const { generalInfo } = this.state;

    const onChangeGeneral = (id,value) => {
      generalInfo[id]=value;
      this.setState({
        generalInfo:generalInfo
        },
      );
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
            <EducationForm />
          </div>
          <div className="experienceSection formSection">
            <h2>Experience</h2>
            <ExperienceForm />
          </div>
        </div>
        <this.PreviewWindow generalInfo={generalInfo}/>
      </>
    );
  }

  PreviewWindow({generalInfo}) {
    return (
      <>
        <div className="resumeWindow">
          <div className="generalWindow windowSection">
            <h2>General Information</h2>
            <GeneralWindow generalInfo={generalInfo}/>
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
