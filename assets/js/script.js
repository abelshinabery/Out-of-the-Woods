var button = document.getElementById('big-button');
var buttonText = document.getElementById('big-button-text');

var mainText = document.getElementById('main-text');

var logo = document.getElementById('logo');

function counter() {
    var ctr = 0;
    return {
        increase: function(){
            ctr++;
        },
        restart: function(){
            ctr = 0;
        },
        getCounter: function(){
            return ctr;
        }
    };
}

var timesClicked = counter();

button.addEventListener('click', function() {
    
    timesClicked.increase();
    
    if(timesClicked.getCounter() === 1) {
        button.classList.remove('first-press');
        button.classList.add('confirm-press');
        buttonText.textContent = 'Tap one more time to confirm';
        mainText.textContent = 'Send location?';
    }
    else if(timesClicked.getCounter() === 2) {
        button.classList.remove('confirm-press');
        button.classList.add('final-press');
        buttonText.textContent = '';
        mainText.textContent = 'Message sent';
    }
    else
        return;
});

logo.addEventListener('click', function() {
    
    button.classList.remove('confirm-press');
    button.classList.remove('final-press');
    button.classList.add('first-press');
    
    buttonText.textContent = 'SOS';
    mainText.textContent = 'Press button twice to send location to contacts';
    
    timesClicked.restart();
});