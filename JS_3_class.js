'use strict';
//JS_3_class.js
module.exports = class RegisterValidation {
    
    //Static Function
    // Defaul parameters used. Change these to change the checked password.
    static fieldValidation(email = "johndoegmail.com", password = "12345@PASSword") {

        //Regex for Email and Password validity check
        let validEmailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        let validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        //Print Input
        console.log("Input Email = " + email)
        console.log("Input Password = " +password)

        return [validEmailRegex.test(email) , validPassword.test(password)];
    }
    
    //Static function for output
    static output = (emailFlag, passwordFlag)=>{
        if (emailFlag == true && passwordFlag == true) console.log("Email and Password are Valid.");
        
        else if(emailFlag == false && passwordFlag == true) console.log("Email entered is invalid.");
        
        else if(emailFlag == true && passwordFlag == false) console.log("Password entered is invalid.");

        else console.log("Both email and password entered are invalid.");
    }
}
