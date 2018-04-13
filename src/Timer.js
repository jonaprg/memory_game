export class Timer {

    constructor(level) {
        this.timerFacil = level.timerFacil;
        this.timerMitja = level.timerMedio;
        this.timerDificil = level.timerDificil;
        this.levelFacil = level.levelFacil;
        this.levelMedio = level.levelMedio;
        this.levelDificil = level.levelDificil;

        this.interval = null;
    }
    startTimer(duration) {
        let temps = duration, minuts, segons;
        let that = this;
        let finish = false;
        this.interval = setInterval(function () {
            minuts = parseInt(temps / 60, 10)
            segons = parseInt(temps % 60, 10);
    
            minuts = minuts < 10 ? "0" + minuts : minuts;
            segons = segons < 10 ? "0" + segons : segons;
    
            //document.getElementById("time").innerHTML = minuts + ":" + segons;
    
            if (--temps < 0) {
                temps = 0;
                clearInterval(this.interval);
                return true;
            }
            return false;
        }, 1000);
    }
    clearSetInterval() {
        clearInterval(this.interval);
    }
}