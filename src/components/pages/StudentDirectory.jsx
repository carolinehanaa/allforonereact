import React from 'react'
import { useState } from 'react';
import *  as dataService from '../../service/DataService';


function StudentDirectory() {
    const [inputField, setInputField] = useState('');
    const [resultField, setResultField] = useState('');


    const submitButton = async () =>{
       let test = await dataService.pg8Api(inputField)
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
                    <img class="top-img" src="../assets/image 26.png" />
                </div>

                <div class="row">
                    <div class="hello-title h1 text-center">Student Directory</div>
                </div>

                <div class="row d-flex justify-content-center">
                    <div class="col-4">
                        <div class="form-floating">
                            <p class="enter-name h4">Enter one of the following (first name, last name, slack name, or email)</p>
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
                    <div class="col-4 ">
                        <p id="pg8Result1" class="output-text h4 hello-res">{resultField.firstName} </p>
                        <p id="pg8Result2" class="output-text h4 hello-res">{resultField.lastName} </p>
                        <p id="pg8Result3" class="output-text h4 hello-res">{resultField.slackName} </p>
                        <p id="pg8Result4" class="output-text h4 hello-res">{resultField.email}</p>
                        <p id="pg8Result5" class="output-text h4 hello-res">{resultField.hobbies} </p>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row">
                        <img class="bottom-img" src="../assets/image 25.png" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StudentDirectory