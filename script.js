const outPrevious=document.querySelector(".previous");
const outCurrent=document.querySelector(".current");
const operandBtn=document.querySelectorAll(".operand");
const operationBtn=document.querySelectorAll(".operation");
const delBtn=document.querySelector(".delete");
const claerBtn=document.querySelector("#clearAll");
const periodBtn=document.querySelector(".period");
const equalBtn=document.querySelector("#equeal");

//input manipulation functions
const calculatorObj={
    cuurentOut: "",
    previousOut: ""

};

function showTheCurrentInput(value){
    if(value==="."&&calculatorObj.cuurentOut.includes("."))return
   calculatorObj.cuurentOut+=value;
   outCurrent.textContent=calculatorObj.cuurentOut;
};


function takeToPrevious(value){
    calculatorObj.previousOut=calculatorObj.cuurentOut;
    outPrevious.textContent=calculatorObj.previousOut+value;
    calculatorObj.cuurentOut="";
}



function deleteByEach(){
    if(outCurrent.textContent===""){
        let output=calculatorObj.previousOut.split("");
        output.splice(output.length-1,1);
        calculatorObj.previousOut=output.join("");
        outPrevious.textContent=output.join("")
    }
    else{
        let output=calculatorObj.cuurentOut.split("");
        output.splice(output.length-1,1);
        calculatorObj.cuurentOut=output.join("");
        outCurrent.textContent=output.join("")
    }
}

//operation functions

function sum(a,b){
    return a+b;
};

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}
function devide(a,b){
    return a/b;
}

function operation(input){
    if(input.includes("+")){
        outCurrent.textContent="="+Number(calculatorObj.previousOut)+Number(calculatorObj.cuurentOut)
        outPrevious.textContent=calculatorObj.previousOut+"+"+calculatorObj.cuurentOut;
        calculatorObj.cuurentOut="";
    }
    else if(input.includes("-")){
        outCurrent.textContent="="+Number(calculatorObj.previousOut)-Number(calculatorObj.cuurentOut)
        outPrevious.textContent=calculatorObj.previousOut+"-"+calculatorObj.cuurentOut;
        calculatorObj.cuurentOut="";
    }
    else if(input.includes("x")){
        outCurrent.textContent="="+Number(calculatorObj.previousOut)*Number(calculatorObj.cuurentOut)
        outPrevious.textContent=calculatorObj.previousOut+"x"+calculatorObj.cuurentOut;
        calculatorObj.cuurentOut="";
    }
    else if(input.includes("/")){
        outCurrent.textContent="="+Number(calculatorObj.previousOut)/Number(calculatorObj.cuurentOut)
        outPrevious.textContent=calculatorObj.previousOut+"/"+calculatorObj.cuurentOut;
        calculatorObj.cuurentOut="";
    }
};


operationBtn.forEach((button)=>{
    button.addEventListener('click', ()=>{takeToPrevious(button.value)})
})
operationBtn.forEach((button)=>{
    button.addEventListener('click', ()=>{outCurrent.textContent="";})
})

claerBtn.addEventListener("click", ()=>{
    outPrevious.textContent="";
    outCurrent.textContent="";
    calculatorObj.previousOut="";
    calculatorObj.cuurentOut="";
})

operandBtn.forEach((button)=>{
    button.addEventListener('click', ()=>{showTheCurrentInput(button.value)})
});

delBtn.addEventListener("click", ()=>{deleteByEach()})

equalBtn.addEventListener("click", ()=>{operation(outPrevious.innerText)})