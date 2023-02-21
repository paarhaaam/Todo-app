
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Sidebar/sidebar';
import MarketingPlan from './Sidebar/MarketingPlan'
import Roadmap from './Sidebar/Roadmap'
// import {Provider} from 'react-redux'
// import Store from './Store';


function App() {
  const [open , setOpen]=useState(true)
  

  return (
    

      <div className="App flex ">
        <Routes>
          <Route path='/' element={App}></Route>
          <Route path='/MarketingPlan' element={<MarketingPlan/>}></Route>
          <Route path='/Roadmap' element={<Roadmap/>}></Route> 
        </Routes>
       <div className='w-1/5 absolute h-full'>
        <Sidebar open={open} setOpen={setOpen}/>
        </div>
        <div className='w-full h-screen '>
          <Header  open={open} />
          <Main  open={open} setOpen={setOpen}/>
         
          
        </div>
       
    </div>  
    
   ); 
}

export default App;
