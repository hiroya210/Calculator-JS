function add(num1, num2){
    return num1 + num2;
};

function subtract(num1, num2){
    return num1 - num2;
};

function multiply(num1, num2){
    return num1*num2;
};

function divide(num1,num2){
    return num1/num2;
};

function operate(ope,num1,num2){
    if (ope = "+"){
        add(num1,num2);
    }
}

function displayNum(val){
    document.querySelector("input").value = parseInt(val)
}