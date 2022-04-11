// function checkForm() {

//     // var firstName = document.getElementById('firstName').value; /* getting value by id of form fields */
//     // var lastName = document.getElementById('lnlastNameame').value;
//     // var address = document.getElementById('address').value;
//     // var city = document.getElementById('city').value;
//     // var state = document.getElementById('state').value;
//     // var zip = document.getElementById('zip').value;
//     // var ptype = document.getElementById('ptype').value;
//     // var email = document.getElementById('email').value;
//     // var phone = document.getElementById('phone').value;

//     let form = document.getElementById("userForm");
//     let data = new FormData(form);

//     const phoneRegex = RegExp(/[0-9]{10}/); 
//     const zipRegex = RegExp(/[0-9]{5}/); 
//     const emailRegex  = RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/); /* used to compare valid email address */ 
    
//     let phoneNum = data.get("phone");
//     let email = data.get("email");
//     let zip = data.get("zip");
//     let firstName = data.get("firstName");
//     let lastName = data.get("lastName");
//     let address = data.get("address");
//     let city = data.get("city");
//     let state = data.get("stateName");

//     console.log(firstName);
//     console.log("text" ,phoneNum);
    
//     // console.log(phoneRegex.test(phoneNum));

//     // console.log(email);
//     // console.log(emailRegex.test(email));
//     return false;


//     // console.log(formObject);                                             

//     // if (document.userForm.firstName.value == "")
//     // {
//     //     alert("Please provide your first name");
//     //     document.userForm.firstName.focus();
//     //     return false;
//     // }

//     // if (document.userForm.lastName.value == "")
//     // {
//     //     alert("Please provide your last name");
//     //     document.userForm.firstName.focus();
//     //     return false;
//     // }

//     // if (document.userForm.address.value == "")
//     // {
//     //     alert("Please provide your street address");
//     //     document.userForm.address.focus();
//     //     return false;
//     // }

//     // if (document.userForm.city.value == "")
//     // {
//     //     alert("Please provide your city");
//     //     document.userForm.city.focus();
//     //     return false;
//     // }    

//     // if ( document.myForm.zip.value == "" || 
//     //     isNaN( document.myForm.zip.value ) ||
//     //     document.myForm.zip.value.length != 5 ) 
//     // {
//     //     alert( "Please provide a zip in the format #####." );
//     //     document.myForm.zip.focus() ;
//     //     return false;
//     // }
//     // return (true);


// }
// function checkForm() {
//     let form = document.getElementById("form");
//     let data = new FormData(form);    

//     console.log(data.get("fname"));
//     console.log(data.get("lname"));    
//     console.log(data.get("address"));    
//     console.log(data.get("city"));
//     console.log(data.get("state"));
//     console.log(data.get("zip"));


// }

function checkForm() {
    let form = document.getElementById("form");
    let data = new FormData(form);
  
    // Clear old error message if exists
    if (document.getElementById("errormessage")) {
      let oldErrorMessage = document.getElementById("errormessage");
      oldErrorMessage.remove();
    }
  
    // Create new message
    let errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.id = "errormessage";
    document.body.appendChild(errorMessage);
  
    // Regular expressions for error checking
    const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/);
    const phoneRegex = RegExp(/[0-9]{10}/);
    const zipRegex = RegExp(/[0-9]{5}/);
    let firstName = data.get("fname");
    let lastName = data.get("lname");
    let address = data.get("address");
    let city = data.get("city");
    let state = data.get("state");
    let zip = data.get("zip");
    let phoneNumber = data.get("phone");
    let email = data.get("email");
  
    // Edit message accordingly
    if (firstName.length < 1) {
      errorMessage.innerText = "Please enter a first name";
    } else if (lastName.length < 1) {
      errorMessage.innerText = "Please enter a last name";
    } else if (address.length < 1) {
      errorMessage.innerText = "Please enter a address";
    } else if (city.length < 1) {
      errorMessage.innerText = "Please enter a city";
    } else if (state.length < 1) {
      errorMessage.innerText = "Please enter a state";
    } else if (!zipRegex.test(zip)) {
      errorMessage.innerText = "Please enter a correct zip code";
    } else if (!phoneRegex.test(phoneNumber)) {
      errorMessage.innerText = "Please enter a correct phone number";
    } else if (!emailRegex.test(email)) {
      errorMessage.innerText = "Please enter a correct email";
    }
  
    return false;
  }
