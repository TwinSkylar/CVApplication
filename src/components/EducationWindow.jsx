import "./../styles/window.css";

const ExperienceWindow = ({ eduInfo }) => {
  return (
    <>
      {eduInfo.map((form) => {
        return (
          <div key={form.id}>
            <div className='schoolName'>{form.schoolName}</div>
            <div className='studySubject'>{form.studySubject}</div>
            <div className='studyYear'>{form.studyYear}</div>
            <h2>hello World</h2>
          </div>
        );
      })}
    </>
  );
};

export default ExperienceWindow;
