//показать неизменненое резюме
let CV = document.getElementById('CV')
let CV_but = document.getElementById('CV_but')
CV_but.addEventListener('click', function(){
    CV.style.display = 'block'
})
//показать неизмененную регистрацию
let Registration_but = document.getElementById('Registration')
let Registration = document.getElementById('Registration_1')
Registration_but.addEventListener('click', function(){
    Registration.style.display = 'block'
})
//изменить CV
let CV_change = document.getElementById('Change_CV')
let h1 = document.getElementById('CV_main_1')
let h1_1 = document.getElementById('CV_main_1_1')
let h1_2 = document.getElementById('CV_main_1_2')
let h1_3 = document.getElementById('CV_main_1_3')
let h2 = document.getElementById('CV_main_2')
let h2_1 = document.getElementById('CV_main_2_1')
let h2_2 = document.getElementById('CV_main_2_2')
let h2_3 = document.getElementById('CV_main_2_3')
CV_change.addEventListener('click', function(){
    CV.style.background = 'black'
    CV.style.border = '4px solid green'
    h1.style.color = 'green'
    h2.style.color = 'green'
    h1_1.style.color = 'green'
    h1_2.style.color = 'green'
    h1_3.style.color = 'green'
    h2_1.style.color = 'green'
    h2_2.style.color = 'green'
    h2_3.style.color = 'green'
})
//изменить регистрацию
let Registration_cnange = document.getElementById('Change_Registration')
let h1_reg = document.getElementById('h1_reg')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let but_submit = document.getElementById('Button_submit')
Registration_cnange.addEventListener('click', function(){
    Registration.style.background = 'black'
    Registration.style.border = '4px solid green'
    h1_reg.style.color = 'green'
    username.style.background = 'rgba(84, 194, 84, 0.781)'
    email.style.background = 'rgba(84, 194, 84, 0.781)'
    password.style.background = 'rgba(84, 194, 84, 0.781)'
    but_submit.style.background = 'rgba(84, 194, 84, 0.781)'
})