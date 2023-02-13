import React from 'react'
import { useState } from 'react';
import *  as dataService from '../../service/DataService';


function AddTwoNumbers() {
    const [inputField1, setInputField1] = useState('');
    const [inputField2, setInputField2] = useState('');
    const [resultField, setResultField] = useState('');
    const submitButton = async () =>{
       let test = await dataService.pg2Api(inputField1 , inputField2)
       setResultField(test)
   }
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
                    <img class="top-img" src="../assets/giphy_s 1.png" />
                </div>

                <div class="row">
                    <div class="two-num-title h1 text-center">Add 2 Numbers</div>
                </div>

                <div class="row d-flex justify-content-center">
                    <div class="col-4">
                        <div class="form-floating">
                            <p class="enter-name h4 d-flex justify-content-center">Enter a number</p>
                            <textarea value={inputField1} class="form-control" onChange = {(e) => {
      setInputField1(e.target.value);
     }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>
                             
                        </div>
                    </div>
                    <p class="col-1 plus">+</p>
                    <div class="col-4">
                        <div class="form-floating">
                            <p class="enter-name h4 d-flex justify-content-center">Enter a number</p>
                            <textarea value={inputField2} class="form-control" onChange = {(e) => {
      setInputField2(e.target.value);
     }} placeholder="Leave a comment here" id="pg2NumInput2"></textarea>
                            
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
                        <img class="bottom-img" src="../assets/tumblr_d0270bc448cba91660e869d63cc3a40f_3685bce9_500 1.png" />
                    </div>






                </div>
            </div>
        </div>
    )
}

export default AddTwoNumbers