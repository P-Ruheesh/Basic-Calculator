function Select(value){
    document.getElementById('display').value += value;
    display.scrollLeft = display.scrollWidth;
}
function Clear(){
    document.getElementById('display').value = '';
}
document.addEventListener('keypress', function(event){
    if(event.key >= '0' && event.key <='9'){
        Select(event.key);
    }
    if(event.key == '/' || event.key == '+' || event.key == '-' || event.key == '*'){
        Select(event.key);
    }
    if(event.key == '.'){
        Select(event.key);
    }
});
document.addEventListener('keydown', function(event) {
    if(event.key == 'Backspace' || event.key == 'Delete'){
       Clear();
    }
});
function Equal(){
    document.getElementById('display').value = eval(document.getElementById('display').value);
}
document.addEventListener('keydown' , function(event){
    if(event.key == 'Enter'){
        Equal()
    }
});
