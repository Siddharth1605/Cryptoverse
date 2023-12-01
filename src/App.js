import React from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {Navbar,  Homepage, CryptoDetails, Cryptocurrencies} from './components';
import './App.css'
export default function App() {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
              </Routes>
                </div>
            </Layout>
        <div className='footer' >
          <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
            Cryptoverse <br />
            All rights reserved @ 2023
          </Typography.Title>
          <Space >
            <Link to="/">Home</Link>

          </Space>
        </div>
        </div>

    </div>
  )
}
