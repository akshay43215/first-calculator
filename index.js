 
function btnclick(val) {
    var screen = document.getElementById("display");
    screen.value += val;
     
     
}

function clr() {
     var screen = document.getElementById('display');
     screen.value='';
      
}

function calculate() 
{
    var screen = document.getElementById('display');
    screen.value = eval(screen.value);
}