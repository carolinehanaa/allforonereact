import React from 'react'
import { useState } from 'react';
import *  as dataService from '../../service/DataService';

function OddOrEven() {
    const [inputField1, setInputField1] = useState('');
    const [resultField, setResultField] = useState('');
    const submitButton = async () => {
        let test = await dataService.pg6Api(inputField1)
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
                    <img class="top-img" src="../assets/image 22.png" />
                </div>

                <div class="row">
                    <div class="hello-title h1 text-center">Odd or Even</div>
                </div>

                <div class="row d-flex justify-content-center">
                    <div class="col-4">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter a Number</p>
                            <textarea value={inputField1} class="form-control" onChange={(e) => {
                                setInputField1(e.target.value);
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
                        <img class="bottom-img" src="../assets/image 21.png" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OddOrEven