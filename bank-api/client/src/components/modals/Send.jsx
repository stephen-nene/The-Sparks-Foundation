import React, { useState } from 'react';
import { message } from 'antd'
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, } from 'mdb-react-ui-kit';


export default function Send({ showModal, setShowModal, item }) {
  const toggleShow = () => setShowModal(!showModal);

  const handleTransaction = () => {
    message.success(`transaction successfull`);

  }

  return (
    <>
      <MDBModal show={showModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                Sending cash as: Steve Nene<br/>
                Acc-number: 834283428342<br/>
                {/* acc-balance: 834283428342                 */}
              </MDBModalTitle>

              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {item && (
                <React.Fragment>
                  <p>Send money to: {item.name}</p>
                  <p>Account_number : {item.account_number}</p>
                  <input type="number" placeholder='enter amount.....' />
                </React.Fragment>
              )}
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='danger' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleTransaction} color='success'>Send</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
