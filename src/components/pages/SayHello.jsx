import React from 'react'
import { useState } from 'react';
import *  as dataService from '../../service/DataService';



function SayHello() {
  //      variable  function  Initial Value
  const [inputField, setInputField] = useState('');
  const [resultField, setResultField] = useState('');
  const submitButton = async () => {
    let test = await dataService.helloApi(inputField)
    setResultField(test)
  }

  {/* <Button onClick={ () => setCount(count + 1) } variant="primary" > Primary </Button> {' '}
        <p>{count} </p>
        
        <input onChange = {(e) => {
         console.log(e.target.value);
        }}> </input>
        <p> text goes here</p> */}
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Caroline's All For One</span>

          <img class="nav-img" src="../assets/image 12.png" alt="hello kitty" />

          <a class="navbar-brand h1" href="../index.html">Home</a>
        </div>
      </nav>

      <div class="container-fluid">
        <div class="row">
          <img class="top-img" src="../assets/image 14.png" />
        </div>

        <div class="row">
          <div class="hello-title h1 text-center">Say Hello</div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-4">
            <div class="form-floating">
              <p class="enter-name h4">Enter Name</p>
              <textarea value={inputField} class="form-control" onChange={(e) => {
                setInputField(e.target.value);
              }} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            </div>
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-2 d-flex justify-content-center">
            <button onClick={submitButton} class="btn btn-light hello-submit">Submit</button>
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-4 d-flex justify-content-center">
            <p id="helloResult" class="output-text h4 hello-res"> {resultField}</p>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row">
            <img class="bottom-img" src="../assets/image 13.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SayHello