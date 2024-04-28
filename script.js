ui = document.querySelector('body');
button = document.querySelector('button');
svg = document.querySelector('svg');
function changecolor(){
    if (ui.style.background === 'white'){
        ui.style.background = 'black'
        ui.style.color = 'white'
    }
    else{
        ui.style.background = 'white'
        ui.style.color = 'black'
    }
}