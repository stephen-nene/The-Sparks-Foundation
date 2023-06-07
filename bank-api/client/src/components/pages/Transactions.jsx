import { useState } from 'react'
import Navigation from'../navigation/Navigation'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


export default  function Transactions() {
  const [count, setCount] = useState(0)

  const Transactions = [
    {
      senderName: "John Smith",
      senderAccNumber: "123456789",
      recipientName: "Jane Doe",
      recipientAccNumber: "987654321",
      amount: 1000,
      date: "06/07/2023",
      time: "16:30 pm"
    },
    {
      senderName: "Mary Jones",
      senderAccNumber: "234567890",
      recipientName: "Peter Jackson",
      recipientAccNumber: "876543210",
      amount: 2000,
      date: "06/08/2023",
      time: "10:45 am"
    },
    {
      senderName: "Bill Gates",
      senderAccNumber: "123450987",
      recipientName: "Jeff Bezos",
      recipientAccNumber: "987651234",
      amount: 500,
      date: "06/15/2023",
      time: "19:20 pm"
    },
    {
      senderName: "Elon Musk",
      senderAccNumber: "1234567890",
      recipientName: "Warren Buffett",
      recipientAccNumber: "876543210",
      amount: 1000000,
      date: "06/22/2023",
      time: "10:45 am"
    },
    {
      senderName: "Mark Zuckerberg",
      senderAccNumber: "123450987",
      recipientName: "Larry Page",
      recipientAccNumber: "987651234",
      amount: 10000000,
      date: "06/29/2023",
      time: "19:20 pm"
    },
    {
      senderName: "Jack Ma",
      senderAccNumber: "1234567890",
      recipientName: "Jeff Bezos",
      recipientAccNumber: "876543210",
      amount: 100000000,
      date: "07/06/2023",
      time: "10:45 am"
    },
    {
      senderName: "Warren Buffett",
      senderAccNumber: "123450987",
      recipientName: "Elon Musk",
      recipientAccNumber: "987651234",
      amount: 1000000000,
      date: "07/13/2023",
      time: "19:20 pm"
    },
    {
      senderName: "Larry Page",
      senderAccNumber: "1234567890",
      recipientName: "Jack Ma",
      recipientAccNumber: "876543210",
      amount: 10000000000,
      date: "07/20/2023",
      time: "10:45 am"
    },
    {
      senderName: "steve nene",
      senderAccNumber: "123456789",
      recipientName: "Jane Doe",
      recipientAccNumber: "987654321",
      amount: "1,000,000",
      date: "06/07/2023",
      time: "16:30 pm"
    },
    {
      senderName: "Mary Smith",
      senderAccNumber: "234567890",
      recipientName: "Bill Jones",
      recipientAccNumber: "876543210",
      amount: "2,000",
      date: "06/08/2023",
      time: "10:45 am"
    },
    {
      senderName: "Sally Green",
      senderAccNumber: "345678901",
      recipientName: "Tom Brown",
      recipientAccNumber: "765432100",
      amount: "3,000",
      date: "06/09/2023",
      time: "14:15 pm"
    },
  ];
  
  

  return (
    <>
      <Navigation />
      <div className="content">

      <h1>Transactions</h1>
  
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>From</th>
            <th scope='col'>To</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Date</th>
            {/* <th scope='col'>Actions</th> */}
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {Transactions.map((transaction, index) => (
            <tr key={index}>
              <td>
                <div className=' align-items-center'>
                  {/* <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  /> */}
                  <div className='ms-2'>
                    <p className='fw-bold mb-1'>{transaction.senderName}</p>
                    <p className='text-muted mb-0'>{transaction.senderAccNumber}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className=' align-items-center'>
                  {/* <img
                    src='https://mdbootstrap.com/img/new/avatars/2.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  /> */}
                  <div className='ms-2'>
                    <p className='fw-bold mb-1'>{transaction.recipientName}</p>
                    <p className='text-muted mb-0'>{transaction.recipientAccNumber}</p>
                  </div>
                </div>
              </td>
              <td>
                <MDBBadge color='success' pill>
                  {transaction.amount}
                </MDBBadge>
              </td>
              <td>
                <p className='fw-normal mb-2'>{transaction.date}</p>
                <p className='text-muted mb-0'>{transaction.time}</p>
              </td>
              {/* <td>
                <MDBBtn color='link' rounded size='sm'>
                  View
                </MDBBtn>
              </td> */}
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      </div>
    </>
  );
  
}


