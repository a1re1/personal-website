import React from 'react';

const resumeComponent = (props) => {
  return (
    <div className='Component Light' id='Resume'>
      <div className='Content'>
        <h1>Resume</h1>
        <embed src="/resources/updated_resume.pdf#view=FitV" type='application/pdf' width="95%"/>
      </div>
    </div>
  );
};

export default resumeComponent;
