import "./../styles/window.css";
import uniqid from "uniqid";

const ExperienceWindow = ({ experienceInfo }) => {

  const DisplayTasks = (form) => {
    return (
      <>
        {form.tasks.map((tasks) => {
          return (
            <li className="task" key={uniqid()}>
              {tasks}
            </li>
          );
        })}
      </>
    );
  };

  return (
    <>
      {experienceInfo.map((form) => {
        return (
          <div className="experiencePreview" key={form.id}>
            <div className="companyName">{form.companyName}</div>
            <div className="jobTitle">{form.jobTitle}</div>
            <div className="startDate">{form.StartDate}</div>
            <div className="endDate">{form.endDate}</div>
            <ul>{DisplayTasks(form)}</ul>
          </div>
        );
      })}
    </>
  );
};

export default ExperienceWindow;
