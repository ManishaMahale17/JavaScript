
function cal(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equals = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');
    
    //each button applay event when we click
    buttons.forEach(function(button) {
    button.addEventListener('click', function(e){
        //store when button click store value variable
        let value = e.target.dataset.num;
        screen.value+=value;
    })
    });
    equals.addEventListener('click', function(e){
        if (screen.value === ''){
            screen.value ="Please Enter";
        } else {
            let answer= eval(screen.value);
            screen.value=answer;
        }
    });
    clear.addEventListener('click', function(e){
        screen.value ="";
    })
    
}
cal();    
    
   