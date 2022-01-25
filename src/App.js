import React from 'react';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {

  return (

    <BrowserRouter>
      <div className="app-wrapper">

        <Header />
        
        <div className="mainContent">
          <Navbar />
          <Route path='/profile' component={Profile} />
          <Route path='/message' component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>





  );
}







export default App;