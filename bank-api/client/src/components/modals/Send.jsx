import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import './send.css';
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter } from 'mdb-react-ui-kit';

export default function Send({ showModal, sender, setShowModal, item }) {
  const toggleShow = () => setShowModal(!showModal);
  const [amount, setAmount] = useState("");
  const [transactionInfo, setTransactionInfo] = useState(null);

  const handleTransaction = () => {
    const transactionData = {
      sender_id: sender[0].id,
      recipient_id: item.id,
      amount: parseInt(amount),
      sender_before_balance: sender[0].account_balance,
      recipient_before_balance: item.account_balance,
    };

    fetch('https://nene-bank.onrender.com/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transactionData),
    })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            setTransactionInfo(data);
            message.success('Transaction successful');
          });
        } else if (response.status === 422) {
          response.json().then(data => {
            message.error(data.error);
          });
        } else {
          message.error('Failed to complete the transaction');
        }
      })
      .catch(error => {
        message.error('Failed to complete the transaction');
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    if (transactionInfo) {
      const timer = setTimeout(() => {
        setTransactionInfo(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [transactionInfo]);

  return (
    <>
      <MDBModal show={showModal} tabIndex='-1' className='send-modal'>
        <MDBModalDialog className='modal-dialog-centered'>
          <MDBModalContent>
            <MDBModalHeader>
              {sender && (
                <MDBModalTitle>
                  Sending cash as: {sender[0].name}<br/>
                  Acc-number: {sender[0].account_number}<br/>
                  Balance: {sender[0].account_balance}<br/>
                </MDBModalTitle>
              )}

              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>

            <MDBModalBody>
              {item && (
                <React.Fragment>
                  <p>Send money to: <b>{item.name}</b></p>
                  <p>Email: <b>{item.email}</b></p>
                  <p>Account_number: <b>{item.account_number}</b></p>
                </React.Fragment>
              )}
              <input 
                type="number" 
                placeholder='Enter amount...' 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
              />

              {transactionInfo && (
                <div className="transaction-info">
                  <p>Succefully sent {transactionInfo.amount} Ksh to {transactionInfo.recipient.name}</p>
                </div>
              )}
            </MDBModalBody>

            <MDBModalFooter>
              <div className="modal-buttons">
                <MDBBtn onClick={handleTransaction} color='success'>Send</MDBBtn>
              </div>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
