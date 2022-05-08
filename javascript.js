
function Stopwatch() {
    let duration = 0;
    let startTime = 0;
    let stopTime = 0;
    let running = false;
    this.start = function() {
        if (running == true)
            throw new Error('Stopwatch is already running')
        running = true
        
        startTime = new Date()
    }

    this.stop = function() {
        if (running == false)
            throw new Error('Stopwatch is not running')

        stopTime = new Date()

        let seconds = (stopTime.getTime() - startTime.getTime()) / 1000
        duration = duration + Math.trunc(seconds);

        running = false
    }

    this.duration = function() {
        
        return `${duration} seconds`
    }

    this.reset = function() {
        startTime = 0;
        stopTime = 0;
        duration = 0;
        running = false;
    }
}

var sw = new Stopwatch();

var starter = document.getElementById('start')

starter.addEventListener("click", () => {
	sw.start()
    console.log('started')
    document.getElementById('timer').innerText = 'running...';
})

var stopper = document.getElementById('stop')

stopper.addEventListener("click", () => {
	sw.stop();
    document.getElementById('timer').innerHTML = sw.duration();
})


var reset = document.getElementById('reset')

reset.addEventListener("click", () => {
	sw.reset();
    document.getElementById('timer').innerText = '0 seconds';
})
