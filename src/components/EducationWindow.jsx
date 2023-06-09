import "./../styles/window.css";

const EducationWindow = ({eduInfo}) => {
  return (
    <>
      {eduInfo.map((form) => {
        return (
          <div className="educationPreview"key={form.id}>
            <div className='schoolName'>{form.schoolName}</div>
            <div className='studySubject'>{form.studySubject}</div>
            <div className='studyYear'>{form.studyYear}</div>
          </div>
        );
      })}
    </>
  );
};

export default EducationWindow;
