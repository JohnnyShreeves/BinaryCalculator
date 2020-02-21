let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btnClr = document.getElementById('btnClr');
let btnEql = document.getElementById('btnEql');
let btnSum = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');
let res = document.getElementById('res');
let op1='',op2='',oprnd='';

btnClr.onclick = function() {
    res.innerHTML='';
    op1='';
    op2='';
    oprnd='';
}

btnSum.onclick = function(){
    oprnd='+';
    res.innerHTML += '+';
}
btnSub.onclick = function(){
    oprnd='-';
    res.innerHTML += '-';
}
btnMul.onclick = function(){
    oprnd='*';
    res.innerHTML += '*';
}
btnDiv.onclick = function(){
    oprnd='/';
    res.innerHTML += '/';
}

btn0.onclick = function() {
    if (!oprnd){
        op1 += '0';
    }
    else {
        op2 += '0';
    }
    res.innerHTML+='0';
}
btn1.onclick = function() {
    if (!oprnd){
        op1 += '1';
    }
    else {
        op2 += '1';
    }
    res.innerHTML+='1';
}

btnEql.onclick = function() {
    let op1ten = parseInt(op1,2);
    let op2ten = parseInt(op2,2);
    let result='';
    
    switch (oprnd){
        case '+':
            result=op1ten+op2ten;
            break;
        case '-':
            result=op1ten-op2ten;
            break;
        case '*':
            result=op1ten*op2ten;
            break;
        case '/':
            result=Math.floor(op1ten/op2ten);
            break;
        default:
            break;
    }
    res.innerHTML=result.toString(2);
    op1=result.toString(2);
    op2='';
    oprnd='';
}