import { useState, useEffect } from 'react'
import Navigation from '../navigation/Navigation'
import { message } from 'antd'
import  {Dna} from 'react-loader-spinner'
import { FcRightUp, FcRightDown } from 'react-icons/fc'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


export default function Transactions({transactions, fetchTransactions, fetching}) {


  const  handleOpenTransaction = ()=>{
message.info("feature comming soon")
  }


  return (
    <>
      <Navigation />
      <div className="content">

        <h1>Transactions</h1>
        {transactions ? (
          
          <MDBTable align='middle'>
              <MDBTableHead>
                <tr>
                  <th scope='col'>From</th>
                  <th scope='col'>To</th>
                  <th scope='col'>Amount</th>
                  <th scope='col'>Date</th>
                  <th scope='col'>Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>
                      <div className=' align-items-center'>
                        <img
                    src={transaction.sender.profile}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                        <div className='ms-2 sender'  >
                          <p className='fw-bold mb-1' ><FcRightUp /> {transaction.sender.name} </p>
                          <p className='text-muted mb-0'>{transaction.sender.account_number}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className=' align-items-center'>
                        <img
                    src={transaction.recipient.profile}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                        <div className='ms-2'>
                          <p className='fw-bold mb-1'><FcRightDown /> {transaction.recipient.name} </p>
                          <p className='text-muted mb-0'>{transaction.recipient.account_number}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <MDBBadge color='success' pill>
                        {transaction.amount}
                      </MDBBadge>
                    </td>
                    <td>
                    <p className='fw-normal mb-2'>{new Date(transaction.created_at).toLocaleDateString()}</p>
                    <p className='text-muted mb-0'>{new Date(transaction.created_at).toLocaleTimeString()}</p>
                  </td>
                    <td>
                <MDBBtn onClick={handleOpenTransaction} color='link' rounded size='sm'>
                  View
                </MDBBtn>
              </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>

        ) : (
          <div className='fetching'>
          {fetching ? (

            <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
            ):(
            <MDBBtn color="success" onClick={fetchTransactions}>fetch-Transactions</MDBBtn>
          )}
          </div>
        )}
      </div>
    </>
  );

}


