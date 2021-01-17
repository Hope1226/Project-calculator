const outPrevious=document.querySelector(".previous");
const outCurrent=document.querySelector(".current");
const operandBtn=document.querySelectorAll(".operand");
const operationBtn=document.querySelectorAll(".operation");
const delBtn=document.querySelector(".delete");
const claerBtn=document.querySelector("#clearAll");
const periodBtn=document.querySelector(".period");
const equalBtn=document.querySelector("#equeal");

function showTheCurrentInput(value){
   
    let p=document.createElement("p");
    p.textContent=value;
    p.style.display="inline";
    outCurrent.appendChild(p);

};

function takeToPrevious(value){
    let current=outCurrent.querySelectorAll("p");
    let curArr="";
    for(i=0; i<current.length; i++){
        curArr += current[i].innerHTML;
    }
    outPrevious.textContent=curArr+value;
}



function deleteByEach(){
    let current=outCurrent.querySelectorAll("p");
    let curArr="";
    for(i=0; i<current.length; i++){
        curArr += current[i].innerHTML;
    }

    let myArr=curArr.split("");
    myArr.splice(myArr.length-1, 1);
    outCurrent.textContent=myArr.join("")
  
}





operationBtn.forEach((button)=>{
    button.addEventListener('click', ()=>{takeToPrevious(button.value)})
})
operationBtn.forEach((button)=>{
    button.addEventListener('click', ()=>{outCurrent.textContent="";})
})

claerBtn.addEventListener("click", ()=>{
    outCurrent.textContent="";
    outPrevious.textContent="";
})

operandBtn.forEach((button)=>{
    button.addEventListener('click', ()=>{showTheCurrentInput(button.value)})
});

delBtn.addEventListener("click", ()=>{deleteByEach()})