import './../styles/window.css';

/*
 Purpose:  Displays a preview of general information
 Parameters: 
  onChangeGeneral:  An object which contains general Information
 */

const GeneralWindow = ({ generalInfo })=>{
    const { CVFirstName, CVLastName, CVEmail,CVPhone} = generalInfo;

    return (
      <>
        <h1>{[CVFirstName,CVLastName].join(' ')}</h1>
        <h2>{CVEmail}</h2>
        <h3>{CVPhone}</h3>
      </>
    );
  
}

export default GeneralWindow;

