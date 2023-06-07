import "./../styles/form.css";
const GeneralForm = ({ onChangeGeneral }) => {
  function handleChange(e) {
    onChangeGeneral(e.target.id, e.target.value);
  }

  function onSubmitForm(e) {
    console.log(`someone keeps pressing buttons:  ${e}`);
  }
  return (
    <>
      <form className="generalForm" onSubmit={onSubmitForm}>
        <label htmlFor="CVFirstName">Enter the first name:</label>
        <input
          id="CVFirstName"
          onChange={handleChange}
          type="text"
          placeholder="first name"
        />
        <label htmlFor="CVLastName">Enter the last name:</label>
        <input
          id="CVLastName"
          onChange={handleChange}
          type="text"
          placeholder="last name"
        />
        <label htmlFor="CVEmail">Enter an email:</label>
        <input
          id="CVEmail"
          onChange={handleChange}
          type="email"
          placeholder="e-mail"
        />
        <label htmlFor="CVPhone">Enter an phone number:</label>
        <input
          id="CVPhone"
          onChange={handleChange}
          type="tel"
          placeholder="phone number"
        />
        <button type="submit">Update Information</button>
      </form>
    </>
  );
};
export default GeneralForm;
