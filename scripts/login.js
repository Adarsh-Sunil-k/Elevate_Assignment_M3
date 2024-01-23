function emailValidate(){
    const email_value = document.getElementById('email').value
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

function passwordValidation() {
    let password = document.getElementById('password')
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

function formValidate(){
    let form_span = document.getElementById('formError');

    if(!emailValidate()|| !passwordValidation()){
        form_span.innerHTML = '*please correct the errors';
        return false
    }else{
        form_span.innerHTML = '';
        return true
    }
}