async function urlCall(url) {
    return await fetch(url).then(
        response => response.text()
    ).then(
        data => {
            console.log(data)
            return data
        }
    )
}

async function urlCallJson(url) {
    return await fetch(url).then(
        response => response.json()
    ).then(
        data => {
            console.log(data)
            return data
        }
    )
}

async function helloApi(nameInput) {
    var letters = /^[A-Za-z]+$/;
    if (nameInput.match(letters)) {
        const sayHelloUrl = "https://carolsoneforall.azurewebsites.net/OneForAll/hello/" + nameInput;
        return urlCall(sayHelloUrl);
    } else {
        return "Enter a valid response";
    }
}

async function pg2Api(pg2NumInput1, pg2NumInput2) {
    var numbers = /^[0-9]*$/;
    if (pg2NumInput1.match(numbers) && pg2NumInput2.match(numbers) && pg2NumInput1 != "" && pg2NumInput2 != "") {
        let pg2SavedInput = pg2NumInput1 + "/" + pg2NumInput2;
        const pg2Url = "https://carolsoneforall.azurewebsites.net/OneForAll/2numbers/" + pg2SavedInput;
        return urlCall(pg2Url);
    } else {
        return "Enter a valid response";
    }
}

function pg3Api(pg3Input1, pg3Input2) {
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]*$/;
    if (pg3Input1.match(letters) && pg3Input2.match(numbers) && pg3Input1 != "" && pg3Input2 != "") {
        let pg3savedInput = pg3Input1 + "/" + pg3Input2;
        const pg3Url = "https://carolsoneforall.azurewebsites.net/OneForAll/questions/" + pg3savedInput;
        return urlCall(pg3Url);
    } else {
        return "Enter a valid response";
    }
}

function pg4Api(pg4Input1, pg4Input2) {
    var numbers = /^[0-9]*$/;
    if (pg4Input1.match(numbers) && pg4Input2.match(numbers) && pg4Input1 != "" && pg4Input2 != "") {
        let pg4SavedInput = pg4Input1 + "/" + pg4Input2;
        const pg4Url = "https://carolsoneforall.azurewebsites.net/OneForAll/math/" + pg4SavedInput;
        return urlCall(pg4Url);
    } else {
        return "Enter a valid response";
    }
}

function pg5Api(pg5Input1, pg5Input2, pg5Input3, pg5Input4, pg5Input5, pg5Input6, pg5Input7, pg5Input8, pg5Input9, pg5Input10) {
    var letters = /^[A-Za-z]+$/;
    if (pg5Input1.match(letters) && pg5Input2.match(letters) && pg5Input3.match(letters) && pg5Input4.match(letters) && pg5Input5.match(letters) && pg5Input6.match(letters) && pg5Input7.match(letters) && pg5Input8.match(letters) && pg5Input9.match(letters) && pg5Input10.match(letters) && pg5Input1 != "" && pg5Input2 != "" && pg5Input3 != "" && pg5Input4 != "" && pg5Input5 != "" && pg5Input6 != "" && pg5Input7 != "" && pg5Input8 != "" && pg5Input9 != "" && pg5Input10 != "") {
         
       let pg5savedInput = pg5Input1 + "/" + pg5Input2 + "/" + pg5Input3 + "/" + pg5Input4 + "/" + pg5Input5 + "/" + pg5Input6 + "/" + pg5Input7 + "/" + pg5Input8 + "/" + pg5Input9 + "/" + pg5Input10;
         
       const pg5Url = "https://carolsoneforall.azurewebsites.net/OneForAll/Fill/" + pg5savedInput;
         return urlCall(pg5Url);
    } else {
         return "Enter a valid response";
    }
}

function pg6Api(pg6Input1 ) {
    var numbers = /^[0-9]*$/;
    if (pg6Input1.match(numbers)  && pg6Input1 != "") {
        let pg6SavedInput = pg6Input1 ;
        const pg6Url = "https://carolsoneforall.azurewebsites.net/OneForAll/oddoreven/" + pg6SavedInput;
        return urlCall(pg6Url);
    } else {
        return "Enter a valid response";
    }
}

function pg7Api(pg7Input1 ) {
    var numbers = /^[0-9]*$/;
    if (pg7Input1.match(numbers)) {
        let pg7SavedInput = pg7Input1 ;
        const pg7Url = "https://carolsoneforall.azurewebsites.net/OneForAll/reverse/" + pg7SavedInput;
        return urlCall(pg7Url);
    } else {
        return "Enter a valid response";
    }
}

function pg8Api(pg8Input) {
    var letters = /^[A-Za-z]+$/;
    if (pg8Input !="" ) {
         let pg8savedInput = pg8Input;
         const pg8Url = "https://carolsoneforall.azurewebsites.net/OneForAll/GetStudentByFirstName/" + pg8savedInput;
         return urlCallJson(pg8Url);
    } else {
         return "Enter a valid response";
    }
}

function pg9ApiRest(){

   const pg9UrlRest = "https://carolsoneforall.azurewebsites.net/OneForAll/picker/restaurant";
   return urlCall(pg9UrlRest);
}

// function pg9Api(){

//     const pg9UrlRest = "https://carolineallforone.azurewebsites.net/oneforall/picker/restaurant";
//     return urlCall(pg9UrlRest);
//  }
 


//  function pg9ApiRest(){

//     const pg9UrlRest = "https://carolineallforone.azurewebsites.net/oneforall/picker/restaurant";
//     return urlCall(pg9UrlRest);
//  }
 




export { helloApi, pg2Api, pg3Api, pg4Api, pg5Api, pg6Api, pg7Api, pg8Api, pg9ApiRest };