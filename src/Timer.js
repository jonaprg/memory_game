export class Timer {

    constructor(level) {
        this.timerFacil = level.timerFacil;
        this.timerMitja = level.timerMitja;
        this.timerDificil = level.timerDificil;
        this.levelFacil = level.levelFacil;
        this.levelMedio = level.levelMedio;
        this.levelDificil = level.levelDificil;
        console.log(level);
    }
    startTimer(duration) {
        let temps = duration, minuts, segons;
        let that = this;
        setInterval(function () {
            minuts = parseInt(temps / 60, 10)
            segons = parseInt(temps % 60, 10);
    
            minuts = minuts < 10 ? "0" + minuts : minuts;
            segons = segons < 10 ? "0" + segons : segons;
    
            document.getElementById("time").textContent = minuts + ":" + segons;
    
            if (--temps < 0) {
                temps = 0;
                return true;
            }
        }, 1000);
    }
}