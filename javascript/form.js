function checkForm() {

    // var firstName = document.getElementById('firstName').value; /* getting value by id of form fields */
    // var lastName = document.getElementById('lnlastNameame').value;
    // var address = document.getElementById('address').value;
    // var city = document.getElementById('city').value;
    // var state = document.getElementById('state').value;
    // var zip = document.getElementById('zip').value;
    // var ptype = document.getElementById('ptype').value;
    // var email = document.getElementById('email').value;
    // var phone = document.getElementById('phone').value;

    let form = document.getElementById("userForm");
    let data = new FormData(form);

    const phoneRegex = RegExp(/[0-9]{10}/); 
    const zipRegex = RegExp(/[0-9]{5}/); 
    const emailRegex  = RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/); /* used to compare valid email address */ 
    
    let phoneNum = data.get("phone");
    let email = data.get("email");
    let zip = data.get("zip");
    let firstName = data.get("firstName");
    let lastName = data.get("lastName");
    let address = data.get("address");
    let city = data.get("city");
    let state = data.get("stateName");


    console.log(phoneNum);
    console.log(phoneRegex.test(phoneNum));

    console.log(email);
    console.log(emailRegex.test(email));
    return false;


    // console.log(formObject);                                             

    // if (document.userForm.firstName.value == "")
    // {
    //     alert("Please provide your first name");
    //     document.userForm.firstName.focus();
    //     return false;
    // }

    // if (document.userForm.lastName.value == "")
    // {
    //     alert("Please provide your last name");
    //     document.userForm.firstName.focus();
    //     return false;
    // }

    // if (document.userForm.address.value == "")
    // {
    //     alert("Please provide your street address");
    //     document.userForm.address.focus();
    //     return false;
    // }

    // if (document.userForm.city.value == "")
    // {
    //     alert("Please provide your city");
    //     document.userForm.city.focus();
    //     return false;
    // }    

    // if ( document.myForm.zip.value == "" || 
    //     isNaN( document.myForm.zip.value ) ||
    //     document.myForm.zip.value.length != 5 ) 
    // {
    //     alert( "Please provide a zip in the format #####." );
    //     document.myForm.zip.focus() ;
    //     return false;
    // }
    // return (true);


}