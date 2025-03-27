// write js code here if required

let p=document.getElementById("timer")

let timer=new Date()

p.innerText=`${timer.getDate()}/${timer.getMonth()}/${timer.getFullYear()},${timer.getHours()}:${timer.getMinutes()}:${timer.getMilliseconds()}`