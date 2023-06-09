import './App.css'
import { useState,useEffect } from 'react'
import {  Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Transactions from '../components/pages/Transactions'
import {message} from 'antd'

function App() {
  const [users, setUsers] = useState(null)
  const [fetching,setFetching] = useState(false)
  const [transactions, setTransactions] = useState(null)

  const handleFetchUsers = () => {
    setFetching(true);
    fetch('https://nene-bank.onrender.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFetching(false); // Set fetching to false after successful fetch
      })
      .catch((error) => {
        message.error('Failed to fetch users');
        setFetching(false); // Set fetching to false after fetch error
      });
  };
  
  const handleFetchTransactions = () => {
    setFetching(true);
    fetch('https://nene-bank.onrender.com/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFetching(false); // Set fetching to false after successful fetch
      })
      .catch((error) => {
        message.error('Failed to fetch transactions');
        setFetching(false); // Set fetching to false after fetch error
      });
  };
  

  return (
    <Routes>
      <Route path='/' element={<Home fetching={fetching} fetchUsers={handleFetchUsers} users={users} />} />
      <Route path='/transactions' element={<Transactions fetching={fetching} fetchTransactions={handleFetchTransactions} transactions={transactions} />} />
      <Route path='/about' element={<About />} />
    </Routes>
    
  
  )
}

export default App
