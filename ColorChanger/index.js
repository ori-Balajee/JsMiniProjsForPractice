let randomBtn = document.querySelector('.randombtn');
let colorInp = document.querySelector('#input');
let applyBtn = document.querySelector('.setbtn');
let currClr = document.querySelector('.currClrVal');
let body = document.querySelector('body');

const ColorChange = (color)=>{
    if(color){
        body.style.backgroundColor = color;
    }else{
        body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        currClr.innerText = body.style.backgroundColor.toUpperCase();
    }
}

const handleRandomBtnClick = ()=>{
    ColorChange();
}

const handleApplyBtnClick = ()=>{
    if(!colorInp.value || !CSS.supports("color", colorInp.value)){
        alert("Enter a Valid Color");
        return;
    }
    ColorChange(colorInp.value);
    currClr.innerText = colorInp.value.toUpperCase();
}

randomBtn.addEventListener('click', handleRandomBtnClick);
applyBtn.addEventListener('click', handleApplyBtnClick);

