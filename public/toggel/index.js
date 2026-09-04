let counter=0

document.getElementById(`toggel`).onclick=function addCSS(){
    counter++
    if (counter%2!==0){
        document.getElementById("main").innerHTML=`<title>Document</title> \n <link rel="stylesheet" href="style.css">`
    }else{
        document.getElementById("main").innerHTML=`<title>Document</title>`
    }
}

