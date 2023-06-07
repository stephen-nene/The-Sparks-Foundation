import { useState, useEffect } from 'react';
import Navigation from '../navigation/Navigation';
import { MDBBtn } from 'mdb-react-ui-kit';
import profile from '../../assets/profile.jpg';
import { message } from 'antd'
import Send from '../modals/Send'

export default function Home({users}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    message.error("Search feature coming soon");
  }
  
  const handleSend = (item) => {
    setSelectedItem(item);
    setShowModal(true)
  };

  const handleReceive = (item) => {
    message.error("Request feature comming soon")

  }


  return (
    <div className='home'>
      <Navigation />
      <div className="content">


        <div className="search">
          <form onSubmit={handleSearch} className="d-flex" role="search">
            <input className="form-control me-4" type="search" placeholder="Search ...." aria-label="Search" />
            <button className="btn btn-info" type="submit">Search</button>
          </form>
        </div>

        <div className="cards">
          {users ? (
            users.slice(1).map((item, index) => (
              <div className="card" key={index}>
                <img src={profile} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Name: {item.name}</h5>
                  <p className="card-text">Acc_no: {item.account_number}</p>
                  <h3 className='card-text'>Balance: {item.account_balance}</h3>
                  <div className="buttons">
                    <MDBBtn color="success" onClick={() => handleSend(item)}>Send</MDBBtn>
                    <MDBBtn color='warning' onClick={() => handleReceive(item)}>Request</MDBBtn>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading users...</p>
          )}
        </div>
      </div>
      <Send showModal={showModal} setShowModal={setShowModal} sender={users} item={selectedItem}/>
    </div>
  );
}
