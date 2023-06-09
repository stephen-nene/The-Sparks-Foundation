import { useState } from 'react';
import Navigation from '../navigation/Navigation';
// import aboutImage from '../images/about-image.jpg';
import './About.css';

export default function About() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <div className="aboutcontent">
        <div className="about-container">
          {/* <div className="about-image">
          </div> */}
          <div className="about-text">
          <h1>About</h1>
            <p>Welcome to Our Bank Transaction Web App</p>
          <img src='https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt="About" />
            <p>
              At Our Bank, we strive to provide you with a seamless and secure platform for managing your financial transactions. Whether you need to send money to friends or family, request payments, or simply keep track of your account balance, our web app has got you covered.
            </p>
            <p>
              With our user-friendly interface and robust security measures, you can have peace of mind knowing that your transactions are protected and your personal information is kept confidential.
            </p>
            <u>
            <p>Key Features:</p>
            </u>
            <ul>
              <li>Easily transfer funds to other users within seconds.</li>
              <li>Send payment requests to individuals or groups.</li>
              <li>View detailed records of your past transactions.</li>
              <li>Keep track of your account balance in real-time.</li>
              <li>We employ industry-standard encryption to safeguard your data.</li>
              <li>Our intuitive design ensures a seamless user experience.</li>
            </ul>
            <p>
              Whether you're a frequent user or new to our platform, our dedicated team is here to assist you every step of the way. If you have any questions or need assistance, please don't hesitate to reach out to our customer support.
            </p>
            <p>Thank you for choosing Our Bank for your financial needs. We look forward to serving you!</p>
          </div>
        </div>
      </div>
    </>
  );
}
