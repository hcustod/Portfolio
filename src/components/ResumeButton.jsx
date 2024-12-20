import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '/src/index.css';

const ResumeDropdown = () => {

  const resumeURL = '/assets/pdfs/henrique_custodio_resume.pdf';

  return (
    <Dropdown>
      <Dropdown.Toggle as={Button} variant="primary" size="lg" id="dropdown-basic" className="bg-opacity-70 shadow-inner hover-for-resume-button bg-sky-50 text-blue-600 border-2 border-black py-2 rounded hover:bg-sky-300 hover:text-white">
        My Resume
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: '100%' }} size="lg" id="dropdown-basic">
        <Dropdown.Item as="a" href={resumeURL} target='_blank'> View </Dropdown.Item>
        <Dropdown.Item as="a" href={resumeURL} download="Henrique_Custodio_resume.pdf"> Download </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ResumeDropdown;

