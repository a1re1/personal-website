import React from 'react';

const resumeComponent = (props) => {
  return (
    <div className='Component Light' id='Resume'>
      <h1>Resume</h1>
      <embed src="/resources/updated_resume.pdf" type='application/pdf' />
    </div>
  );
};

export default resumeComponent;
