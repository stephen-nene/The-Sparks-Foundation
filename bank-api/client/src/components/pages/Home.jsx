import { useState } from 'react';
import Navigation from '../navigation/Navigation';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { MDBBtn } from 'mdb-react-ui-kit';
import profile from '../../assets/profile.jpg';

export default function Home() {
  const [count, setCount] = useState(0);
  const cardInfo = [
    {
      name: 'John Doe',
      account_number: '1234567890',
    },
    {
      name: 'Jane Doe',
      account_number: '9876543210',
    },
    {
      name: 'Bill Smith',
      account_number: '0123456789',
    },
    {
      name: 'Susan Jones',
      account_number: '9012345678',
    },
    {
      name: 'Michael Brown',
      account_number: '8901234567',
    },
    {
      name: 'Sarah Green',
      account_number: '7890123456',
    },
    {
      name: 'David White',
      account_number: '6789012345',
    },
    {
      name: 'Nancy Black',
      account_number: '5678901234',
    },
    {
      name: 'Peter Grey',
      account_number: '4567890123',
    },
  ];

  return (
    <>
      <Navigation />
      <div className="search">
      <form class="d-flex" role="search">
        <input class="form-control me-4" type="search" placeholder="Search ...." aria-label="Search"/>
        <button class="btn btn-info" type="submit">Search</button>
      </form>
      </div>

      <div className="cards">
        {cardInfo.map((item, index) => (
          <div className="card" key={index}>
            {/* <img src={profile} className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Name: {item.name}</h5>
              <p className="card-text">Acc_no: {item.account_number}</p>
              <div className="buttons">
                <a href="#" className="btn btn-success">Send</a>
                <MDBBtn color='warning' href='#'>Request</MDBBtn>
              </div>
            </div>
          </div>
        ))}
      </div>
    </> 
  );
}
