import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Today from './pages/Today'
import Home from './pages/Home'
import Header from './components/section/Header'
import Footer from './components/section/Footer'
import Main from './components/section/Main'
import Youtuber from './pages/Youtuber'
import Channel from './pages/Channel'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/youtuber" element={<Youtuber />} />
          <Route path="/channel/:channelId" element={<Channel />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App