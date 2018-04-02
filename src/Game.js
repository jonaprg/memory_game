import { Taulell } from './Taulell';
export class Game {

    constructor(level){
       this.taulell = new Taulell(4, 4, level);
       this.startGameFacil();
       this.levelFacil = level.level_facil;
       this.levelMedio = level.level_medio;
       this.levelDificil = level.level_dificil;
    }
    startGameFacil() {
        
        document.getElementById("facil").addEventListener('click', evt => this.startGame())
        
    }
    startGame() {
        document.getElementById("game").style.display = "flex";
        document.getElementById("info").style.display = "flex";
        
        let gameStarted = true;  
        let openedCards = new Array();
        this.fitxaSelected1;
        this.fitxaSelected2;
        let that = this;
        that.startTimer(60);
        this.taulell.cards.forEach(function(val,idex){
            document.getElementById(val.id).addEventListener("click", val.displayCard);
            document.getElementById(val.id).addEventListener("click", function() {
                if(!that.fitxaSelected1) that.fitxaSelected1 = val;
                else that.fitxaSelected2 = val;
                openedCards.push(val.img_id);   
                if(openedCards.length === 2){
                    let fitxa1 = document.getElementById(that.fitxaSelected1.id);
                    let fitxa2 = document.getElementById(that.fitxaSelected2.id);

                    if(that.correctCard(that.fitxaSelected1, that.fitxaSelected2)){
                        that.moveCounter();
                        that.matched(fitxa1, fitxa2);
                        that.fitxaSelected1 = null;
                        that.fitxaSelected2 = null;
                        openedCards = new Array();
                    }
                    else {
                        that.unmatched(fitxa1, fitxa2);
                        that.fitxaSelected1 = null;
                        that.fitxaSelected2 = null;
                        openedCards = new Array();
                    }
                }
            });
        });
    }
   
    startTimer(duration) {
        let temps = duration, minuts, segons;
        setInterval(function () {
            minuts = parseInt(temps / 60, 10)
            segons = parseInt(temps % 60, 10);
    
            minuts = minuts < 10 ? "0" + minuts : minuts;
            segons = segons < 10 ? "0" + segons : segons;
    
            document.getElementById("time").textContent = minuts + ":" + segons;
    
            if (--temps < 0) {
                temps = 0;
            }
        }, 1000);
    }
    endGame() {
        console.log("Finsih");
    }
    moveCounter(){
        let moves = 0;
        moves++;
        document.getElementById("punts").innerHTML = moves;
       
        
    }
    restartGame() {

    }
    winGame() {
        
    }
    matched(fitxa1, fitxa2) {
        fitxa1.classList.add("match", "disabled");
        fitxa2.classList.add("match", "disabled");
        fitxa1.classList.remove("open");
        fitxa2.classList.remove("open");      
    }
    unmatched(fitxa1, fitxa2) {
        fitxa1.classList.add("unmatched");
        fitxa2.classList.add("unmatched");
        setTimeout(function(){
            fitxa1.classList.remove("open","unmatched", "disabled");
            fitxa2.classList.remove("open","unmatched", "disabled");
        },1500);       
    }
    
    correctCard(fitxa1,fitxa2) {
        return fitxa1.name === fitxa2.name;
    }
    static getApp(){
        return document.getElementById('app');
    }
    
}