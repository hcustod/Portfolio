import React, { useState } from 'react';

const DownloadResumeButton = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleViewResume = () => {
    // Code to view the resume, perhaps open in a new tab
  };

  const handleDownloadResume = () => {
    // Code to download the resume

  };

  return (

    <div className="flex justify-start items-center space-x-4 pt-6 pl-8">
      <button onClick={() => setDropdownVisible(!dropdownVisible)}>Download Resume</button>
      {dropdownVisible && (
        <div className="flex justify-start items-center space-x-4 pt-6 pl-8">
          <button onClick={handleViewResume}>View</button>
          <button onClick={handleDownloadResume}>Download</button>
        </div>
      )}
    </div>
  );
};

export default DownloadResumeButton;
