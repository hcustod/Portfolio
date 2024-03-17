import React, { useState } from 'react';
import { GrDocumentDownload } from "react-icons/gr";

const DownloadResumeButton = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleViewResume = () => {
    // Code to view the resume, perhaps open in a new tab
  };

  const handleDownloadResume = () => {
    // Code to download the resume.

  };

  return (

    <div className="relative flex flex-col items-center space-x-4 ml-8 mt-4 shadow-lg bg-gray-100 shadow-gray-500 font-bold rounded p-3">

      <button onClick={() => setDropdownVisible(!dropdownVisible)}>Download Resume</button>
      {dropdownVisible && (

        // Dropdown menu; view and download.
        <div className="origin-top-right absolute flex flex-col ring-1 ring-opacity-5 focus:outline-none divide-y">
          <button onClick={handleViewResume} className='text-gray-700 block w-full text-left px-4 py-2 text-sm'>View</button>
          <button onClick={handleDownloadResume} className='text-gray-700 block w-full text-left px-4 py-2 text-sm'>Download</button>
        </div>

      )}

    </div>
  );
};

export default DownloadResumeButton;
