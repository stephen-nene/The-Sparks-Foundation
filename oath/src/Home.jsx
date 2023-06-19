import React from 'react';
import { MDBBtn, MDBContainer, MDBSpinner, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';
import { message } from 'antd';
import FacebookLogin from 'react-facebook-login';
import './App.css'; // Import the custom CSS file

function App() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = (name) => {
    message.success(name + 'oath coming soon');
  };

  const handleFacebook = (response) => {
    if (response.email) {
      message.success(`Logged in with Facebook: ${response.email}`);
    } else {
      message.error('Facebook login failed');
    }
  };

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className='my-5 display-3 fw-bold ls-tight px-3' style={{ color: 'hsl(218, 81%, 95%)' }}>
            STeve NEne <br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>oAth app</span>
          </h1>
          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
            description goes here
          </p>
        </MDBCol>

        <MDBCol md='6' className='position-relative'>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <div className='social-buttons text-center gap-2 d-flex flex-column justify-content-center'>
                <p>Sign up with:</p>
                {loading ? (
                  <MDBBtn disabled>
                    <MDBSpinner size='sm' role='status' tag='span' className='me-2' />
                    Loading...
                  </MDBBtn>
                ) : (
                  <FacebookLogin
                    appId="728148255982743"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={handleFacebook}
                    render={(renderProps) => (
                      <MDBBtn tag='a' color='secondary' className='mx-3 facebook' onClick={renderProps.onClick}>
                        <MDBIcon fab icon='facebook-f' size='sm' /> Facebook
                      </MDBBtn>
                    )}
                  />
                )}
                <MDBBtn tag='a' color='secondary' className='mx-3 google'>
                  <MDBIcon fab icon='google' size='sm' /> Google
                </MDBBtn>
                <MDBBtn tag='a' color='secondary' className='mx-3 twitter' onClick={() => handleClick('twitter')}>
                  <MDBIcon fab icon='twitter' size='sm' /> Twitter
                </MDBBtn>
                <MDBBtn tag='a' color='secondary' className='mx-3 github' onClick={() => handleClick('github')}>
                  <MDBIcon fab icon='github' size='sm' /> Github
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
