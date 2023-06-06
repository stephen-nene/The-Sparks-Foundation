import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBNavbarBrand, MDBCollapse } from 'mdb-react-ui-kit';

export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand >
            <Link className="logo" to='/'>
              Nene Bank
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink>                  
                <NavLink className='links' to='/'>
                  Home
                </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink >                
                <NavLink className='links' activeClassName='active' to='/transactions'>Transactions</NavLink>
              </MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
              <MDBNavbarLink>                
                <NavLink className='links' activeClassName='active' to='/customers'>Customers</NavLink>
              </MDBNavbarLink>
              </MDBNavbarItem> */}
              <MDBNavbarItem>
              <MDBNavbarLink>                
                <NavLink className='links' activeClassName='active' to='/about'>About</NavLink>
              </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}