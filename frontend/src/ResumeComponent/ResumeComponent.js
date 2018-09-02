import React from 'react';

const resumeComponent = (props) => {
  return (
    <div className='Component Light' id='Resume'>
      <h1>Resume</h1>
      <embed src="/resources/updated_resume.pdf#view=FitH" type='application/pdf' width="95%"/>
    </div>
  );
};

export default resumeComponent;
