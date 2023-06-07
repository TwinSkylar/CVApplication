import "./../styles/form.css";
import uniqueId from "uniqueid";
const ExperienceForm = () => {
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
          <input id="addTask" type="text" placeholder="Type your task here" />
          <button type="button">Add more tasks</button>
        </div>
        <JobTask />
        <JobTask />
        <div className="experienceBtns">
          <button type="button">Add more experience</button>
          <button type="submit">Update Experience</button>
        </div>
      </form>
    </>
  );
};

const JobTask = () => {
  return <li key={uniqueId}>Task1 <button type='button'>delete</button></li>;
};

export default ExperienceForm;
