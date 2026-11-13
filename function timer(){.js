function timer(){
    var sec = 300;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            # add something to submit the quiz, may need to test. 
        }
    }, 1000);
}