import "./../styles/form.css";

const EducationForm = (props) => {
  const { id, onChange } = props;
  return (
    <form className="educationForm">
      <label htmlFor="schoolName">Enter a school name:</label>
      <input
        id={`schoolName_${id}`}
        type="text"
        placeholder="Education Institution"
        onChange={onChange}
      />
      <label htmlFor="studySubject">Enter the area of study:</label>
      <input
        id={`studySubject_${id}`}
        type="text"
        placeholder="Area of study"
        onChange={onChange}
      />
      <label htmlFor="studyYear">Enter year of study:</label>
      <input
        id={`studyYear_${id}`}
        type="text"
        placeholder="year of study"
        onChange={onChange}
      />
      <div className="educationBtns">
        <button type="submit">Update Education</button>
      </div>
    </form>
  );
};

export default EducationForm;
