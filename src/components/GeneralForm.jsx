import "./../styles/form.css";

/*
 Purpose:  Displays a form to input general information
 Parameters: 
  onChangeGeneral:  Call back function to handle input changes
 */

const GeneralForm = ({ onChangeGeneral }) => {

  return (
    <>
      <form className="generalForm">
        <label htmlFor="CVFirstName">Enter the first name:</label>
        <input
          id="CVFirstName"
          onChange={(e) => onChangeGeneral(e.target.id, e.target.value)}
          type="text"
          placeholder="first name"
        />
        <label htmlFor="CVLastName">Enter the last name:</label>
        <input
          id="CVLastName"
          onChange={(e) => onChangeGeneral(e.target.id, e.target.value)}
          type="text"
          placeholder="last name"
        />
        <label htmlFor="CVEmail">Enter an email:</label>
        <input
          id="CVEmail"
          onChange={(e) => onChangeGeneral(e.target.id, e.target.value)}
          type="email"
          placeholder="e-mail"
        />
        <label htmlFor="CVPhone">Enter an phone number:</label>
        <input
          id="CVPhone"
          onChange={(e) => onChangeGeneral(e.target.id, e.target.value)}
          type="tel"
          placeholder="phone number"
        />
      </form>
    </>
  );
};
export default GeneralForm;
