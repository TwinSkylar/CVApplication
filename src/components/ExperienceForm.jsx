import "./../styles/form.css";
import { useState } from "react";

 /*
 Purpose:  Creates a form  to input experience information
 Parameters: 
   props.addTask: Callback function to add tasks to a particular form
   props.formId: The form id that is being manipulated
   props.tasks: An array of tasks that belong to this form
   props.onChange: Callback function to handle changes to the input
   props.deleteTask: Callback function to delete tasks from the form
 */

const ExperienceForm = (props) => {
  const { addTask, formId, tasks, onChange, deleteTask } = props;
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
            <li className="formTask" key={tasks.id} >
              {tasks.task}
              <button type="button" onClick={deleteTask} data-formid={formId} data-taskid={tasks.id}>
                Delete
              </button>
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
          data-id={formId}
        />
        <label htmlFor="jobTitle">Enter the job title:</label>
        <input
          id="jobTitle"
          type="text"
          placeholder="last name"
          onChange={onChange}
          data-id={formId}
        />
        <label htmlFor="startDate">Enter start year:</label>
        <input
          id="startDate"
          type="text"
          placeholder="startDate"
          onChange={onChange}
          data-id={formId}
        />
        <label htmlFor="endDate">Enter end year:</label>
        <input
          id="endDate"
          type="text"
          placeholder="endDate"
          onChange={onChange}
          data-id={formId}
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
