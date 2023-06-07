import './../styles/window.css';

const GeneralWindow = ({ generalInfo })=>{
    const { CVFirstName, CVLastName, CVEmail,CVPhone} = generalInfo;

    return (
      <>
        <h1>{CVFirstName}</h1>
        <h2>Email</h2>
        <h3>Phone Number</h3>
      </>
    );
  
}

export default GeneralWindow;

