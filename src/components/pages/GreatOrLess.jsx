import React from 'react'
import { useState } from 'react';
import *  as dataService from '../../service/DataService';

function GreatOrLess() {
    const [inputField1, setInputField1] = useState('');
    const [inputField2, setInputField2] = useState('');
    const [resultField, setResultField] = useState('');
    const submitButton = async () => {
        let test = await dataService.pg4Api(inputField1, inputField2)
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
                    <img class="top-img" src="../assets/image 18.png" />
                </div>

                <div class="row">
                    <div class="two-num-title h1 text-center">Greater than or Less than </div>
                </div>

                <div class="row d-flex justify-content-center">
                    <div class="col-4">
                        <div class="form-floating">
                            <p class="enter-name h4 d-flex justify-content-center">Enter a number</p>
                            <textarea value={inputField1} class="form-control" onChange={(e) => {
                                setInputField1(e.target.value);
                            }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>

                        </div>
                    </div>

                    <div class="col-4">
                        <div class="form-floating">
                            <p class="enter-name h4 d-flex justify-content-center">Enter a number</p>
                            <textarea value={inputField2} class="form-control" onChange={(e) => {
                                setInputField2(e.target.value);
                            }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>

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
                        <img class="bottom-img" src="../assets/image 17.png" />
                    </div>






                </div>
            </div>
        </div>
    )
}

export default GreatOrLess