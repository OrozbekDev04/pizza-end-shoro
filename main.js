const btn = document.querySelector('.open'),
      modal =document.querySelector('.modal'),
    close = document.querySelector('.close');


btn.addEventListener('click',()=>{
 modal.style.display = 'block'
})

close.addEventListener('click',()=>{
    modal.style.display = 'none'
})

const img = document.querySelector('.imgOne');
const btnOne = document.querySelector('.btnOne');
const btnTwo = document.querySelector('.btnTwo');
const btnThree = document.querySelector('.btnThree');


btnOne.addEventListener('click',()=>{
    img.classList.replace('imgTwo','imgOne');
    img.classList.replace('imgThree','imgOne');
    btnTwo.style.background = 'red';
    btnThree.style.background = 'red';
    btnOne.style.background = 'green';
})

btnTwo.addEventListener('click',()=>{
    img.classList.replace('imgOne','imgTwo');
    img.classList.replace('imgThree','imgTwo');
    btnOne.style.background = 'red';
    btnThree.style.background = 'red';
    btnTwo.style.background = 'green'
})

btnThree.addEventListener('click',()=>{
    img.classList.replace('imgOne','imgThree');
    img.classList.replace('imgTwo','imgThree');
    btnOne.style.background = 'red';
    btnTwo.style.background = 'red';
    btnThree.style.background = 'green';
})

const ShoroBtn = document.querySelector('.ShoroBtn');
const drink =document.querySelector('.drink');
const shoroClose = document.querySelector('.drink_close');


ShoroBtn.addEventListener('click',()=>{
    drink.style.display = 'block';
    console.log(ShoroBtn)
})

shoroClose.addEventListener('click',()=>{
    drink.style.display = 'none'
})


const imgLegenda = document.querySelector('.legenda');
const imgChalap = document.querySelector('.chalap');
const imgMaksym = document.querySelector('.maksym')
const btnLegenda = document.querySelector('.btnLegenda');
const btnChalap = document.querySelector('.btnChalap');
const btnMaksym = document.querySelector('.btnMaksym');


btnLegenda.addEventListener('click',()=>{
    img.classList.replace('imgChalap','imgLegenda');
    img.classList.replace('imgMaksym','imgLegenda');
    btnChalap.style.background = 'red';
    btnMaksym.style.background = 'red';
    btnLegenda.style.background = 'green';
    imgLegenda.style.display= 'block'
    imgChalap.style.display = 'none'
    imgMaksym.style.display = 'none'
})

btnChalap.addEventListener('click',()=>{
    img.classList.replace('imgLegenda','imgChalap');
    img.classList.replace('imgMaksym','imgChalap');
    btnChalap.style.background = 'green';
    btnMaksym.style.background = 'red';
    btnLegenda.style.background = 'red';
    imgMaksym.style.display= 'none'
    imgChalap.style.display = 'block'
    imgLegenda.style.display = 'none'

})

btnMaksym.addEventListener('click',()=>{
    img.classList.replace('imgLegenda','imgMaksym');
    img.classList.replace('imgChalap','imgMaksym');
    btnMaksym.style.background = 'green';
    btnChalap.style.background = 'red';
    btnLegenda.style.background = 'red';
    imgMaksym.style.display= 'block'
    imgChalap.style.display = 'none'
    imgLegenda.style.display = 'none'

})
