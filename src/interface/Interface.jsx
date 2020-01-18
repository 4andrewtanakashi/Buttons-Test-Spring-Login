import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './Header.jsx';
import Main from './Main.jsx';

import Popup from "reactjs-popup";
import Content from "../component/Content";

import "./css/Interface.css";

function App() {
  
  return (
    <React.Fragment>
        <Header/>


        <Main lambda={<Popup modal trigger={
            <button className="btn btn-secondary btnLabel" >
              <div className="tooltiphtml">
                  <input type="radio" name="options" id="option1" autocomplete="off"/>Lambda
                  <span className="tooltiptext">space point space </span>
              </div>
            </button> } >
            {close => <Content close={close}/> }
          </Popup>}/>
          
        
        
    </React.Fragment>
  );
}

export default App;
