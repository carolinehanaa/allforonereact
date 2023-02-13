import React from 'react'
import { useState } from 'react';
import *  as dataService from '../../service/DataService';

function Madlib() {
    const [inputField1, setInputField1] = useState('');
    const [inputField2, setInputField2] = useState('');
    const [inputField3, setInputField3] = useState('');
    const [inputField4, setInputField4] = useState('');
    const [inputField5, setInputField5] = useState('');
    const [inputField6, setInputField6] = useState('');
    const [inputField7, setInputField7] = useState('');
    const [inputField8, setInputField8] = useState('');
    const [inputField9, setInputField9] = useState('');
    const [inputField10, setInputField10] = useState('');
    const [resultField, setResultField] = useState('');
    const submitButton = async () => {
        let test = await dataService.pg5Api(inputField1, inputField2, inputField3, inputField4, inputField5, inputField6, inputField7, inputField8, inputField9, inputField10)
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
                    <img class="top-img" src="../assets/image 19.png"/>
                </div>

                <div class="row">
                    <div class="hello-title h1 text-center">MadLib</div>
                </div>

                <div class="row d-flex justify-content-center">
                    <div class="col-3">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter Name</p>
                            <textarea value={inputField1} class="form-control" onChange={(e) => {
                                setInputField1(e.target.value);
                            }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter Color</p>
                            <textarea value={inputField2} class="form-control" onChange={(e) => {
                                setInputField2(e.target.value);
                            }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter Location</p>
                            <textarea value={inputField3} class="form-control" onChange={(e) => {
                                setInputField3(e.target.value);
                            }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter Car</p>
                            <textarea value={inputField4} class="form-control" onChange={(e) => {
                                setInputField4(e.target.value);
                            }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>
                        </div>
                    </div>

                </div>

                <div class="row d-flex justify-content-center">
                    <div class="col-3">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter Restaurant</p>
                            <textarea value={inputField5} class="form-control" onChange={(e) => {
                                setInputField5(e.target.value);
                            }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter Animal</p>
                            <textarea value={inputField6} class="form-control" onChange={(e) => {
                                setInputField6(e.target.value);
                            }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter Month</p>
                            <textarea value={inputField7} class="form-control" onChange={(e) => {
                                setInputField7(e.target.value);
                            }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter Emotion</p>
                            <textarea value={inputField8} class="form-control" onChange={(e) => {
                                setInputField8(e.target.value);
                            }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>
                        </div>
                    </div>

                </div>

                <div class="row d-flex justify-content-center">
                    <div class="col-3">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter Noun</p>
                            <textarea value={inputField9} class="form-control" onChange={(e) => {
                                setInputField9(e.target.value);
                            }} placeholder="Leave a comment here" id="pg2NumInput1"></textarea>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter Food</p>
                            <textarea value={inputField10} class="form-control" onChange={(e) => {
                                setInputField10(e.target.value);
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
                        <img class="bottom-img" src="../assets/image 20.png"/>
                    </div>


                </div>
            </div>
            </div>
            )
}

            export default Madlib