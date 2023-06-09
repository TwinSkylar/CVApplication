import "./../styles/form.css";
import { useState } from "react";
import uniqid from "uniqid";
const ExperienceForm = (props) => {
  
  const {addTask,formId} = props;
  const [task, setTask] = useState('');

  const handleClick = () => {
    addTask(task,formId);
  };
  
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <form className="experienceForm">
        <label htmlFor="companyName">Enter company name:</label>
        <input id="companyName" type="text" placeholder="first name" />
        <label htmlFor="jobTitle">Enter the job title:</label>
        <input id="jobTitle" type="text" placeholder="last name" />
        <label htmlFor="startDate">Enter start year:</label>
        <input id="startDate" type="text" placeholder="startDate" />
        <label htmlFor="endDate">Enter end year:</label>
        <input id="endDate" type="text" placeholder="endDate" />
        <label htmlFor="addTask">Main tasks:</label>
        <div className="addingTasks">
          <input id="addTask" type="text" name="addTask" onChange={handleChange} placeholder="Type your task here" />
          <button htmlFor="addTask" type="button" onClick={handleClick}>Add more tasks</button>
        </div>
      </form>
    </>
  );
};

export default ExperienceForm;
