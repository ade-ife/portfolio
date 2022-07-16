// import './App.css';
import React,  { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2620);
  }, []);

  return (

    <div className="container">
        {loading ? (
          <div className="loader-container">
           <div className='cook'> <h2>e fi si le, e je ko cook</h2> </div>
            <div className="spinner"></div>
          </div>
      ) : (


      <div>
        <Header />
        <Nav />
        <About />
        <Experience />
      

        <Contact />
        <Footer />
      </div>
      )}
    </div>
  )
}

export default App
