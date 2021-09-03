//  ------------------------------ Valid Email ----------------------
const pErro = document.querySelector('.errorEmail')
const ctaEmail = document.querySelector('#ctaInput')
const ctaBtn = document.querySelector('#ctaBtn')



const check = ( e ) =>{
    if (e.target.value.search('@') == -1){
        pErro.innerHTML = 'Please enter a valid email address'
        setTimeout(() => {
        pErro.innerHTML = ''   
        }, 3000);
    } 
}
const btnCheck = (e) =>{
    console.log()
    e.preventDefault();
    if (ctaEmail.value.search('@') == -1){
        pErro.innerHTML = 'Please enter a valid email address'
        setTimeout(() => {
        pErro.innerHTML = ''   
        }, 3000);
    }else{
        pErro.classList.add('sucess')
        pErro.innerHTML = 'Sent with sucess'
        setTimeout(() => {
        pErro.innerHTML = ''   
        pErro.classList.remove('sucess')

        }, 3000);
    }
}
ctaEmail.addEventListener('change',check)
ctaBtn.addEventListener('click',btnCheck)

// ------------------------ Stay productive effect
const stayLink = document.querySelector('#stayLink')
const stayArrow = document.querySelector('#stayLink img')
const putWhite = () => {
    stayArrow.src = "./images/icon-arrow-branca.svg"
}
const putBlue = () => {
    stayArrow.src = "./images/icon-arrow.svg"
}
stayLink.addEventListener('mouseenter',putWhite)
stayLink.addEventListener('mouseleave',putBlue)