// name
function validateName(){
    let name = document.getElementById('name').value
    let nameError = document.getElementById('name_error')

    if (name.trim() == '') {
        nameError.innerHTML = '*Name cannot be blank'
        return false
    }else if(name.length < 3){
        nameError.innerHTML = '*Name must not be less than 3 characters'
        return false
    }else{
        nameError.innerHTML = ''
        return true
    }
}
// surName
function validateSurname(){
    let sur = document.getElementById('surName').value
    let surError = document.getElementById('surname_error')

    if (sur.trim() == '') {
        surError.innerHTML = '*surname cannot be blank'
        return false
    }else{
        surError.innerHTML = ''
        return true
    }
}
// Education
function validateEducation(){
    let edu = document.getElementById('Edu').value;
    let eduError = document.getElementById('edu-error');

    if(edu == ''){
        eduError.innerHTML = '*please select one';
        document.signUp-form.education.focus();
        return false;
    }else{
        eduError.innerHTML = '';
        return true;
    }
}
// Mobile_number
function validateNumber(){
    let mob = document.getElementById('number').value;
    let mobError = document.getElementById('mob');
    let mobPattern = /^[6-9]\d{9}$/;

    if(!mob.match(mobPattern)){
        mobError.innerHTML = '*please enter a correct number';
        return false;
    }else if(mob.trim() == ''){
        mobError.innerHTML = '*number cannot be blank';
        return false;
    }else{
        mobError.innerHTML = '';
        return true;
    }
}
// email validation
function emailValidate(){
    const email_value = document.getElementById('emailId').value
    let email_error = document.getElementById('emailSpan')
    const email_pattern =/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/

    if (email_value.trim() == ''){
        email_error.innerHTML = '*email cannot be blank'
        return false
    }else if(!email_value.match(email_pattern)){
        email_error.innerHTML = '*email not in global format'
        return false
    }else{
        email_error.innerHTML = ''
        return true
    }
}
//password validation
function passwordValidation() {
    let password = document.getElementById('n_password')
    let passwordError = document.getElementById('password_error')

    if (password.value.trim() === '') {
        passwordError.innerHTML = '*Password cannot be blank'
        return false
    } else if (password.value.length < 6) {
        passwordError.innerHTML = '*Password length cannot be less than 6 characters'
        return false
    } else if (password.value.length > 20) {
        passwordError.innerHTML = '*Password length cannot be greater than 20 characters'
        return false
    } else {
        passwordError.innerHTML = ''
        return true
    }
}
//conform_password_validation
function cnfValidation(){
    let cnfPass = document.getElementById('cnf_password').value
    let cnfError = document.getElementById('cnfPassword_error')
    let password = document.getElementById('n_password').value

    if (password != cnfPass){
        cnfError.innerHTML = '*password mismatch'
        return false
    }else {
        cnfError.innerHTML = ''
        return true
    }
}
//day validation
function dayValidate(){
    let day_value = document.getElementById('day').value
    let day_error = document.getElementById('dayError')

    if(day_value == ''){
        day_error.innerHTML = '*select one'
        return false
    }else {
        day_error.innerHTML = ''
        return true
    }
}
//month validation
function monthValidation(){
    let month_value = document.getElementById('month').value
    let month_error = document.getElementById('monthError')

    if(month_value == '' ){
        month_error.innerHTML = '*select one'
        return false
    }else {
        month_error.innerHTML = ''
        return true
    }
}
// year validation
function yearValidation(){
    let year_value = document.getElementById('year').value
    let year_error = document.getElementById('yearError')

    if(year_value == ''){
        year_error.innerHTML = '*select one'
        return false
    }else{
        year_error.innerHTML = ''
        return true
    }
}
// gender validation
function genderValidate(){
    let validation = false;
    let gender = document.getElementsByName('sex');
    console.log(gender)
    let genderError = document.getElementById.gender_error;

    for(let i=0;i<gender.length;i++){
        if(gender[i].checked  === true){
            validation = true;
            break;
        }
    }
    if(validation == false){
        genderError.innerHTML = '*please select a gender';
        return false;
    }else{
        genderError.innerHTML = '';
        return true;
    }
}
function formValidate(){
    let form_span = document.getElementById('formSpan');
    if(!validateName() || !validateSurname() || !validateEducation()
    || !validateNumber() || !emailValidate() || !monthValidation()
    || !passwordValidation() || !cnfValidation() || !dayValidate()
    || !yearValidation()){
        form_span.innerHTML = '*please correct the errors';
        return false
    }else{
        form_span.innerHTML = '';
        return true
    }
}


