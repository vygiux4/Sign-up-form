let pw1 = document.getElementById('password')
let pw2 = document.getElementById('passwordconfirm')


let pwincorrect = document.getElementById('wrongpass')
let pwcorrect = document.getElementById('rightpass')
 
let check=function () {
    if(pw2.value != pw1.value ) {
        pwincorrect.style.display = 'block' 
        pwcorrect.style.display = 'none'
        pw1.style.borderColor = 'red'
        pw1.style.borderWidth = '2px'
        pw2.style.borderColor = 'red'
        pw2.style.borderWidth = '2px'
    } 
    if (pw2.value == pw1.value ) {
        pwcorrect.style.display = 'block'
        pwincorrect.style.display = 'none' 
        pw1.style.borderColor = 'green'
        pw1.style.borderWidth = '2px'
        pw2.style.borderColor = 'green'
        pw2.style.borderWidth = '2px'
    }
}