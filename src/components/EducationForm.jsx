import "./../styles/form.css";

const EducationForm = () => {
  return (
    <form className="educationForm">
      <label htmlFor="schoolName">Enter a school name:</label>
      <input id="schoolName" type="text" placeholder="Education Institution" />
      <label htmlFor="studySubject">Enter the area of study:</label>
      <input id="CVFirstName" type="text" placeholder="Area of study" />
      <label htmlFor="studyYear">Enter year of study:</label>
      <input id="studYear" type="text" placeholder="year of study" />
      <div className="educationBtns">
        <button type="button">Add another institution</button>
        <button type="submit">Update Education</button>
      </div>
    </form>
  );
};

export default EducationForm;
