import "./../styles/form.css";


 /*
 Purpose:  Creates a form  to input education information
 Parameters: 
   props.id: The id of the form.  Later changed to a data attribute
   onChange: Callback function to handle changes to any of the inputs
 */

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
    </form>
  );
};

export default EducationForm;
