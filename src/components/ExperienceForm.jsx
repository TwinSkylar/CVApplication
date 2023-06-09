import "./../styles/form.css";
import { useState } from "react";
import uniqid from "uniqid";
const ExperienceForm = (props) => {
  const { addTask, formId, tasks, onChange } = props;
  const [task, setTask] = useState("");

  const handleClick = () => {
    addTask(task, formId);
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const DisplayTasks = () => {
    return (
      <>
        {tasks.map((tasks) => {
          return (
            <li className="formTask" key={uniqid()}>
              {tasks} <button>Delete</button>
            </li>
          );
        })}
      </>
    );
  };

  return (
    <>
      <form className="experienceForm">
        <label htmlFor="companyName">Enter company name:</label>
        <input
          id="companyName"
          type="text"
          placeholder="first name"
          onChange={onChange}
          data-id ={formId}
        />
        <label htmlFor="jobTitle">Enter the job title:</label>
        <input
          id="jobTitle"
          type="text"
          placeholder="last name"
          onChange={onChange}
          data-id ={formId}

        />
        <label htmlFor="startDate">Enter start year:</label>
        <input
          id="startDate"
          type="text"
          placeholder="startDate"
          onChange={onChange}
          data-id ={formId}

        />
        <label htmlFor="endDate">Enter end year:</label>
        <input
          id="endDate"
          type="text"
          placeholder="endDate"
          onChange={onChange}
          data-id ={formId}

        />
        <div className="formTaskList">
          <p>List of Tasks:</p>
          <ul>{DisplayTasks()}</ul>
        </div>
        <label htmlFor="addTask">Main tasks:</label>
        <div className="addingTasks">
          <input
            id="addTask"
            type="text"
            name="addTask"
            onChange={handleChange}
            placeholder="Type your task here"
          />
          <button htmlFor="addTask" type="button" onClick={handleClick}>
            Add more tasks
          </button>
        </div>
      </form>
    </>
  );
};

export default ExperienceForm;
