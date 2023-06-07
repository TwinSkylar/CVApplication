import './../styles/form.css';
const GeneralForm = ()=>{
    return (
      <>
        <form className="generalForm">
          <label htmlFor="CVFirstName">Enter the first name:</label>
          <input id="CVFirstName" type="text" placeholder="first name" />
          <label htmlFor="CVLastName">Enter the last name:</label>
          <input id="CVFirstName" type="text" placeholder="last name" />
          <label htmlFor="CVEmail"  >Enter an email:</label>
          <input id="CVEmail" type="email" placeholder="e-mail" />
          <label htmlFor="CVPhone">Enter an phone number:</label>
          <input id="CVPhone" type="tel" placeholder="phone number"/>
          <button type="submit">Update Information</button>
        </form>
      </>
    );
  
}

export default GeneralForm;
