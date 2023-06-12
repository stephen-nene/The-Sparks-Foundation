import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import tests from './tests';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [screenshotSrc, setScreenshotSrc] = useState('');

  const handleButtonClick = async (buttonText) => {
    console.log(`Button clicked: ${buttonText}`);

    // switch (buttonText) {
    //   case 'links':
    //     await tests.testLinks();
    //     break;
    //   case 'contact-page':
    //     await tests.testContactPage();
    //     break;
    //   case 'Policies':
    //     await tests.testPolicies();
    //     break;
    //   case 'programs':
    //     await tests.testPrograms();
    //     break;
    //   default:
    //     break;
    // }
  };

  const takeScreenshot = async () => {
    const screenshotData = await tests.takeScreenshot();
    setScreenshotSrc(screenshotData);
  };

  return (
    <>
      <h3>test these pages</h3>
      <div className="buttons">
        <MDBBtn className='me-1' color='success' onClick={() => handleButtonClick('links')}>
          links
        </MDBBtn>
        <MDBBtn className='me-1' color='danger' onClick={() => handleButtonClick('contact-page')}>
          contact-page
        </MDBBtn>
        <MDBBtn className='me-1' color='warning' onClick={() => handleButtonClick('Policies')}>
          Policies
        </MDBBtn>
        <MDBBtn className='me-1' color='info' onClick={() => handleButtonClick('programs')}>
          programs
        </MDBBtn>
        <MDBBtn className='me-1' color='primary' onClick={takeScreenshot}>
          Take Screenshot
        </MDBBtn>
      </div>
      {screenshotSrc && (
        <div>
          <h4>Screenshot:</h4>
          <img src={screenshotSrc} alt="Screenshot" />
        </div>
      )}
    </>
  );
}

export default App;
