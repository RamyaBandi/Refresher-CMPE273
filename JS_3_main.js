'use strict';
//Import Class
var importedClass = require('./JS_3_class')

//Store 2 return values
let [emailFlag, passwordFlag] = importedClass.fieldValidation();

//Use return values in output
importedClass.output(emailFlag, passwordFlag);