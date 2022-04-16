let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
screenValue='';
for(item of buttons){
    item.addEventListener('click', (e) =>{
        buttonText= e.target.innerText;
        
        if(buttonText=='RESET'){
            screenValue="";
            screen.value= screenValue;
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else if(buttonText=='DEL'){
            screenValue= screenValue.slice(0,-1);
            screen.value= screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

        
    })
}

function myFun(){
    var element= document.body;
    element.classList.toggle('dark');
}