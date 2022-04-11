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

    if (document.userForm.firstName.value == "")
    {
        alret("Please provide your first name");
        document.userForm.firstName.focus();
        return false;
    }

    if (document.userForm.lastName.value == "")
    {
        alret("Please provide your last name");
        document.userForm.firstName.focus();
        return false;
    }

    if (document.userForm.address.value == "")
    {
        alret("Please provide your street address");
        document.userForm.address.focus();
        return false;
    }

    if (document.userForm.city.value == "")
    {
        alret("Please provide your city");
        document.userForm.city.focus();
        return false;
    }    

    if ( document.myForm.zip.value == "" || 
        isNaN( document.myForm.zip.value ) ||
        document.myForm.zip.value.length != 5 ) 
    {
        alert( "Please provide a zip in the format #####." );
        document.myForm.zip.focus() ;
        return false;
    }
    return (true);

    // /* check fields are empty */
    // if (firstName==""||lastName=="",address==""||city=="",state==""||zip=="",ptype==""||email=="") {
    //     alert("Please Fill All Required Field");
    // return false; 
    // }

    // /* check length of input data if its 1 it will show alert msg */
    // if (firstName.length<=1||lastName.length<=1,address.length<=1||city.length<=1,zip.length<=1||email.length<=1) {
    //     alert("input must be greater than one character");      
    // }

    // /* check zip code must be numbers and length should not be less than or greater than 5 */
    // if ((!zip.match(numbers)) || zip.length!==5){
    //     alert('enter only numbers or length of zip code must be equal to 5');
    // }

    // /* check phone number must be numbers and length should not be less than or greater than 10 */
    // if ((!phone.match(numbers)) || phone.length!==10){
    //     alert('enter only numbers or length of Phone number must be equal to 10');
    // }

    // /* check valid email id */
    // if ((!email.match(emailformat))){
    //     alert('please enter valid email id');
    // }

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
    return( true );
}	