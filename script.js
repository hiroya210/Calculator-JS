const calcDisplay = document.querySelector("input");
const calcButton = document.querySelector("#btn");
let arr = [];
let total = 0;
let operation = "";
console.log(calcDisplay.value)


function numButton(e){
    calcDisplay.value = calcDisplay.value + e
    if (calcDisplay.value.length === 20){
     let arr = calcDisplay.value.split("");
       arr.pop();
       calcDisplay.value = arr.join("");
       calcDisplay.value;
    }
 }



function opPress(ope){
        operation = ope;
        num1 = calcDisplay.value;
        arr[0] = num1;
        calcDisplay.value = "";
        console.log(arr)
    }

    
    
    
function operate(){
    num2 = calcDisplay.value;
    arr[1] = (num2)
    let arr2 = arr.map(function toInt(z){
        return parseFloat(z);
    })
    console.log(arr2)
    if(operation == "+"){
        total = arr2.reduce(function total(a,b){
                return a + b
            },0);
    }
    else if(operation == "-"){
        total = arr2.reduce(function total(a,b){
                return a - b
        })
    }
    else if(operation == "*"){
        total = arr2.reduce(function total(a,b){
                return a * b
        },1)
    }
    else if(operation == "/"){
        total = arr2.reduce(function total(a,b){
                return a / b
        })
    }
    
    
    arr2[1] = total;
    console.log(total)
    calcDisplay.value = total;
    
}

function clearDisplay(){
    arr = []
    calcDisplay.value = ""
}

