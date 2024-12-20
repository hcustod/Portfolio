import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '/src/index.css';

const ResumeDropdown = () => {

  const resumeURL = '/assets/pdfs/henrique_custodio_resume.pdf';

  return (
    <Dropdown>
      <Dropdown.Toggle as="button" size="lg" id="dropdown-basic" className="shadow-md shadow-slate-400 ease-in duration-300 bg-opacity-80 px-4 p-3 border-black border-2 font-bold text-xl text-blue-600 bg-sky-50 hover:bg-sky-200  hover:text-white rounded-lg focus:outline-none">
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

