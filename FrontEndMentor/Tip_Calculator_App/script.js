const bill = document.querySelector('.bill');
const billSpan = document.querySelector('.billSpan');
const tip = document.querySelector('.tip');
const listLi = document.querySelectorAll('.tip li');
const listInput = document.querySelector('.tip input');
const people = document.querySelector('.people');
const peopleSpan = document.querySelector('.peopleSpan');
const allInput = document.querySelectorAll('input');
const billValue = document.querySelector('.valueBill');
const tipValue = document.querySelector('.valueTip');
const peopleValue = document.querySelector('.valuePeople');
const tipAmount = document.querySelector('.tipAmount');
const total = document.querySelector('.total');
const btn = document.querySelector('.reset');


// ------------------------ calculus functions

const makeOutputData = () => {
    if(tipValue.innerHTML != '' && billValue.innerHTML != '' && peopleValue.innerHTML != ''){
        const bill = Number(billValue.innerHTML)
        const tip = Number(tipValue.innerHTML)
        const people = Number(peopleValue.innerHTML)
        tipAmount.innerHTML = '$  ' + ((bill*(tip/100))/people).toFixed(2);
        total.innerHTML = '$  ' + ((bill +(bill*(tip/100)))/people).toFixed(2);
    }
}

//  ---------------------- General input functions

allInput.forEach(item => item.addEventListener('click',(e)=>{e.target.select()}))

//  ---------------------- Bill functions

const handleBillChange = (event) => {
    const thisBill = event.target.value.replace(',','.');
    event.target.classList.remove('check');
    if(0 < thisBill){
        billValue.innerHTML = thisBill;
        makeOutputData();
    }
    else{
        billValue.innerHTML = ''
        event.target.classList.add('check');
        billSpan.innerHTML = 'can\'t be zero or less'
        setTimeout(()=>{
        billSpan.innerHTML = ''
        },3000)
    }
};

bill.addEventListener('change', handleBillChange)



//  ----------------------- Tip functions

const handleActive = (event) => {
    listLi.forEach(item => item.classList.remove('active'));
    const element = event.target;
    element.classList.add('active');
    tipValue.innerHTML = element.value;
    listInput.value = '';
    makeOutputData();
}
listLi.forEach((item) => item.addEventListener('click',handleActive))

const handleTipInputClick = () => {
    listLi.forEach(item => item.classList.remove('active'));
}
const handleTipInputChange = (event) => {
    event.target.classList.remove('check');
    const thisTip = event.target.value.replace(',','.').replace('%','');
    if(0 <= thisTip){
        tipValue.innerHTML = thisTip;
        makeOutputData();
    }
    else{
        tipValue.innerHTML = ''
        event.target.classList.add('check');
    }
}

listInput.addEventListener('change',handleTipInputChange);
listInput.addEventListener('click',handleTipInputClick);

// ---------------------- people function

const handlePeopleChange = (event) => {
    const thisPeople = event.target.value.replace(',','.');
    event.target.classList.remove('check');
    if(0 < thisPeople){
        peopleValue.innerHTML = thisPeople;
        makeOutputData();
    }
    else{
        peopleValue.innerHTML = ''
        event.target.classList.add('check');
        peopleSpan.innerHTML = 'can\'t be zero or less'
        setTimeout(()=>{
        peopleSpan.innerHTML = ''
        },3000)
    }
};

people.addEventListener('change', handlePeopleChange)

// ----------- button reset
const handleBtnClick = () => {
   bill.value = '';
   listInput.value = '';
   listLi.forEach(item => item.classList.remove('active'));
   people.value='';
   billValue.innerHTML='';
   tipValue.innerHTML='';
   peopleValue.innerHTML='';
   tipAmount.innerHTML = '$ 0.00 ';
   total.innerHTML = '$ 0.00';
}

btn.addEventListener('click',handleBtnClick)