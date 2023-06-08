import "./../styles/form.css";

const EducationForm = (props) => {
  const formId = props.id;

  function addForm() {
    console.log("time to add another form");
    console.log (props);
    console.log (props.addEduForm)

  }

  return (
    <form className="educationForm">
      <label htmlFor="schoolName">Enter a school name:</label>
      <input
        id={`schoolName_${formId}`}
        type="text"
        placeholder="Education Institution"
      />
      <label htmlFor="studySubject">Enter the area of study:</label>
      <input id={`subject_${formId}`} type="text" placeholder="Area of study" />
      <label htmlFor="studyYear">Enter year of study:</label>
      <input
        id={`studyYear_${formId}`}
        type="text"
        placeholder="year of study"
      />
      <div className="educationBtns">
        <button type="button" onClick={props.addEduForm}>
          Add another institution
        </button>
        <button type="submit">Update Education</button>
      </div>
    </form>
  );
};

export default EducationForm;
