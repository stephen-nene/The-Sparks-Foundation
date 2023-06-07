import './App.css'
import { useState,useEffect } from 'react'
import {  Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Transactions from '../components/pages/Transactions'
import {message} from 'antd'

function App() {
  const [users, setUsers] = useState(null)
  const [transactions, setTransactions] = useState(null)

  useEffect(() => {
    if (transactions === null) {
      fetch('https://nene-bank.onrender.com/transactions')
        .then(response => response.json())
        .then(data => {  
          setTransactions(data);
        })
        .catch(error => {
          message.error('Failed to fetch transactions');
        });
  
      fetch('https://nene-bank.onrender.com/users')
        .then(response => response.json())
        .then(data => {  
          setUsers(data);
        })
        .catch(error => {
          message.error('Failed to fetch users');
        });
    }
  }, []);
  


  return (
    <Routes>
      <Route path='/' element={<Home users={users} />} />
      <Route path='/transactions' element={<Transactions transactions={transactions} />} />
      <Route path='/about' element={<About />} />
    </Routes>
    
  
  )
}

export default App
