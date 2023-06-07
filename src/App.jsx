import { Component, useState } from "react";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      eduInfo: [],
      experienceInfo: [],
    };
  }

  render() {
    return (
      <div className="resume">
        <div className="generalSection formSection">
          <h2>General Information</h2> 
          <GeneralForm />
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
    );
  }
}
