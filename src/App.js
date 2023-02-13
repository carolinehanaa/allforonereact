
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import SayHello from './components/pages/SayHello'
import Home from './components/pages/Home'
import AddTwoNumbers from './components/pages/AddTwoNumbers'
import AskingQuestions from './components/pages/AskingQuestions'
import GreatOrLess from './components/pages/GreatOrLess'
import Madlib from './components/pages/Madlib';
import OddOrEven from './components/pages/OddOrEven';
import ReverseIt from './components/pages/ReverseIt';
import StudentDirectory from './components/pages/StudentDirectory';
import RestaurantPicker from './components/pages/RestaurantPicker'; 

import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";






function App() {

  //      variable  function  Initial Value
  // const [count, setCount] = useState(0);
  // const [inputfield, setInputfield] = useState(' ');

  return (

  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sayhello" element={<SayHello />} />
            <Route path="addtwonumbers" element={<AddTwoNumbers />} />
            <Route path="askingquestions" element={<AskingQuestions />} />
            <Route path="greatorless" element={<GreatOrLess />} />
            <Route path="madlib" element={<Madlib />} />
            <Route path="oddoreven" element={<OddOrEven />} />
            <Route path="reverseit" element={<ReverseIt />} />
            <Route path="studentdirectory" element={<StudentDirectory />} />
            <Route path="restaurantpicker" element={<RestaurantPicker />} />

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
);
}


function Layout() {
  return (
    <div>
    <ul className='navbar'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sayhello">Say Hello</Link>
      </li>
      <li>
        <Link to="/addtwonumbers">Add Two Numbers</Link>
      </li>
      <li>
        <Link to="/askingquestions">Asking Questions</Link>
      </li>
      <li>
        <Link to="/greatorless">Greater Or Less</Link>
      </li>
      <li>
        <Link to="/madlib">MadLib</Link>
      </li>
      <li>
        <Link to="/oddoreven">Odd Or Even</Link>
      </li>
      <li>
        <Link to="/reverseit">Reverse It</Link>
      </li>
      <li>
        <Link to="/studentdirectory">Student Directory</Link>
      </li>
      <li>
        <Link to="/restaurantpicker">Restaurant Picker</Link>
      </li>
    </ul>

    <hr />
    <Outlet />
  </div>

  )
}
export default App;
