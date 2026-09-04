const textbox=document.getElementById("a");
const to_fahrenheit=document.getElementById("b");
const to_celsius=document.getElementById("c");
const submit=document.getElementById("submit");
let sol;




submit.onclick=function(){
    if(to_celsius.checked){
        sol= (((9/5) * textbox.value) + 32);
        document.getElementById("sol").textContent=`${sol.toFixed(1)} degree celsius`  ; 
    }
    else if (to_fahrenheit.checked) {
        sol= (5/9)*(textbox.value - 32);
        document.getElementById("sol").textContent=`${sol.toFixed(1)} degree fahrenheit` ;
    } else {
        document.getElementById("sol").textContent=`select one among two option`;
    }
}

