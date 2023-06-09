import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import { Dna } from 'react-loader-spinner'
import { message } from 'antd';
import './send.css';

export default function Send({ showModal, sender, setShowModal, item }) {
  const toggleShow = () => setShowModal(!showModal);
  const [amount, setAmount] = useState("");
  const [transactionInfo, setTransactionInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTransaction = () => {
    setLoading(true)
    const transactionData = {
      sender_id: sender[0].id,
      recipient_id: item.id,
      amount: parseInt(amount),
      sender_before_balance: sender[0].account_balance,
      recipient_before_balance: item.account_balance,
    };

    fetch('http://127.0.0.1:8342/transactions', {
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
        setLoading(false)
      })
      .catch(error => {
        message.error('Failed to complete the transaction');
        console.error('Error:', error);
        setLoading(false)
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
                  Sending cash as: {sender[0].name}<br />
                  Acc-number: {sender[0].account_number}<br />
                  Balance: {sender[0].account_balance}<br />
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
              {/* {loading && (
                <div className="transaction-info">
                  <p>sending </p>
                </div>
              )} */}
            </MDBModalBody>

            <MDBModalFooter>
              <div className='fetching'>
                {loading ? (

<div className="modal-buttons">
<MDBBtn onClick={handleTransaction} color='success'><Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                  /></MDBBtn>
</div>

                  
                ) : (
                  <div className="modal-buttons">
                    <MDBBtn onClick={handleTransaction} color='success'>Send</MDBBtn>
                  </div>
                )}


              </div>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
