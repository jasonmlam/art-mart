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
    // var numbers = /^[0-9]+$/; /* used to compare numbers */
    // var emailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; /* used to compare valid email address */    

    let form = document.getElementById("form");
    let data = new FormData(form);
    console.log(data.get("zip"))
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

function validateEmail() 
{
    var emailID = document.myForm.emailid.value;
    atpos = emailid.indexOf("@");
    dotpos = emailid.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )) 
    {
        alert("Please enter correct email ID")
        document.myForm.emailid.focus() ;
        return false;
    }
    return(true);
}	