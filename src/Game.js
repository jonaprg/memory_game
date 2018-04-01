import { Taulell } from './Taulell';
export class Game {

    constructor(level){
       this.taulell = new Taulell(4, 4, level);
       this.startGame();
    }
    startGame() {
        let gameStarted = true;  
        let openedCards = new Array();
        this.fitxaSelected1;
        this.fitxaSelected2;
        let that = this;
        that.startTimer(60, 1);
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
    startTimer(second, minute) {

        let timer = document.getElementById("time");
        let interval;
        
        interval = setInterval(function(){
        timer.innerHTML = minute+" mins "+second+" secs";
        second--;
        if(second == 0){
            minute--;
            second=60;
        }
        if(minute == 0){
            this.endGame();
        }
        },1000);   
    }
    endGame() {
        console.log("Finsih");
    }
    moveCounter(){
        let moves = 0;
        moves++;
        document.getElementById().innerHTML = moves;
        //start timer on first click
        if(moves == 1){
            second = 0;
            minute = 0; 
            hour = 0;
            startTimer();
        }
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
    /*
    finalitzarTorn(){
        if(!this.check(this.fitxaSelected1, this.fitxaSelected2)){
            this.fitxaSelected1.toggle();
            this.fitxaSelected2.toggle();
        }
        this.fitxaSelected1 = null;
        this.fitxaSelected2 = null;
        this.fitxasDescobertes = 0;
        if(this.hasGuanyat()){
            alert('GUANYAT');
        }
    }

    hasGuanyat(){
        let guanyat = true;
        this.taulell.cards.forEach((card)=>{
            if(!card.discovered){
                guanyat = false;
            }
        });
        return guanyat;
    }*/
    correctCard(fitxa1,fitxa2) {
        return fitxa1.name === fitxa2.name;
    }
    static getApp(){
        return document.getElementById('app');
    }
    
}