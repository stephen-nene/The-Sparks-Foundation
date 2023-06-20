import React from 'react';
import { MDBBtn, MDBContainer, MDBSpinner, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';
import { message } from 'antd';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider2, provider3 } from './firebase-config';
import './App.css';



function App() {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const handleClick = (name) => {
    message.success(name + 'oath coming soon');
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider2)
      .then((result) => {        
        setUser(result.user)
        message.success('Google login successful');
      })
      .catch((error) => {
        console.log(error)
        message.error('Google login failed');
      })
  }

  const handleGithub = (response) => {
    signInWithPopup(auth, provider3)
      .then((result) => {
        setUser(result.user)
        message.success('Github login successful');
      })
      .catch((error) => {
        console.log(error)
        message.error('Github login failed');
      })
  };

  const handleSignout = () => {
    setUser(null)
    message.success("logged out successfully")
  }

  return (
    <>
      {user ? (
        <>
        <div className="profile">
          <h2>Welcome {user.displayName}</h2>
          <p>{user.email}</p>
          <div className="photo">
            <img src={user.photoURL} alt="dp" referrerPolicy="no-referrer" />
          </div>
          <MDBBtn className="sign-up-btn" onClick={handleSignout}>
            Sign-Out
          </MDBBtn>
        </div>
        </>
      ) : (
        <>

          <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
            <MDBRow>
              <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
                <h1 className='my-5 display-3 fw-bold ls-tight px-3' style={{ color: 'hsl(218, 81%, 95%)' }}>
                  STeve NEne <br />
                  <span style={{ color: 'hsl(218, 81%, 75%)' }}>oAth app</span>
                </h1>
                <p className='px-3' style={{ background: 'linear-gradient(45deg, #FFFFFF, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Welcome to STeve NEne oAth app! Get ready to experience the power of authentication.
                  Currently, only <b>Google</b> and <b>GitHub</b> login options are available. But don't worry, we're constantly upgrading our app
                  to bring you more exciting login methods. Stay tuned for <b>Facebook</b>, <b>Twitter</b>, and many more!
                  In the meantime, grab your favorite beverage, sit back, and enjoy the seamless login experience with Google and GitHub.
                  Remember, laughter is the best authentication. So, prepare yourself for a fun-filled journey ahead!
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
                        <>
                          <MDBBtn tag='a' color='secondary' className='mx-3 google' onClick={handleGoogle}>
                            <MDBIcon fab icon='google' size='sm' /> Google
                          </MDBBtn>
                          <MDBBtn tag='a' color='secondary' className='mx-3 github' onClick={handleGithub}>
                            <MDBIcon fab icon='github' size='sm' /> Github
                          </MDBBtn>
                          <MDBBtn tag='a' color='secondary' className='mx-3 twitter' onClick={() => handleClick('twitter')}>
                            <MDBIcon fab icon='twitter' size='sm' /> Twitter
                          </MDBBtn>
                          <MDBBtn tag='a' color='secondary' className='mx-3 facebook' onClick={() => handleClick('facebook')}>
                            <MDBIcon fab icon='facebook-f' size='sm' /> Facebook
                          </MDBBtn>
                        </>
                      )}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </>

      )}
    </>
  );
}

export default App;
