import { Taulell } from './Taulell';
import { Timer } from './Timer';
export class Game {

    constructor(level){
       this.taulell = new Taulell(4, 4, level);
       this.timer = new Timer(level);
       this.startGame();
       this.openedCards = new Array();
    }
    startGame() {
        let that = this;
        
        document.getElementById("lvl_facil").addEventListener('click', 
            evt => this.startGameByLevel(this.timer.levelFacil, this.timer.timerFacil));
        document.getElementById("lvl_medio").addEventListener('click', 
            evt => this.startGameByLevel(this.timer.levelMedio, this.timer.timerMitja));
        document.getElementById("lvl_dificil").addEventListener('click', 
            evt => this.startGameByLevel(this.timer.levelDificil, this.timer.timerDificil));
        this.backToMenu();
    }
    startGameByLevel(nivell, duration) {
        
        document.getElementById("game").classList.add("display-flex");
        document.getElementById("info").classList.add("display-flex"); 
        document.getElementById("menu-principal").classList.add("display-none");
        document.getElementById("nivell").innerHTML = nivell;
        this.timer.startTimer(duration);
        this.taulell.flipCards(2000);
        let punts = 0;
        this.fitxaSelected1;
        this.fitxaSelected2;
        let that = this;
       
        this.taulell.cards.forEach(function(val,index){
            document.getElementById(val.id).addEventListener("click", val.displayCard);
            document.getElementById(val.id).addEventListener("click", function() {
                if(!that.fitxaSelected1) that.fitxaSelected1 = val;
                else that.fitxaSelected2 = val;
                that.openedCards.push(val.img_id);
                if(that.openedCards.length === 2){
                    let fitxa1 = document.getElementById(that.fitxaSelected1.id);
                    let fitxa2 = document.getElementById(that.fitxaSelected2.id);
                    if(that.correctCard(that.fitxaSelected1, that.fitxaSelected2)){
                        punts += that.points(20);
                        that.matched(fitxa1, fitxa2);
                        that.fitxaSelected1 = null;
                        that.fitxaSelected2 = null;
                        that.openedCards = new Array();
                    }
                    else {
                        that.unmatched(fitxa1, fitxa2);
                        that.fitxaSelected1 = null;
                        that.fitxaSelected2 = null;
                        that.openedCards = new Array();
                    }
                    console.log("AFTER"); 
                    console.log(that.openedCards); 
                }
                document.getElementById("punts").innerHTML = punts;
            });
        });
    }
    points(max){
        let punts = 0;
        if(max !== null || max !== 0) punts += max; 
        return punts;
    }
    backToMenu(){
        let that = this;
        document.getElementById("back").addEventListener("click",function(){
            document.getElementById("menu-principal").classList.remove("display-none");
            document.getElementById("game").classList.remove("display-flex");
            document.getElementById("info").classList.remove("display-flex");
            that.timer.clearSetInterval();
            that.restartGame();
        });
    }
    restartGame() {
        ;
        this.taulell.cards.forEach(function(val,index){
            document.getElementById(val.id).classList.remove("open", "match", "disabled");
        });
        
        window.location.reload(true)
    }
    winGame() {
        
        this.taulell.cards.forEach(function(val, index) {
           
        });
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

<<<<<<< HEAD

=======
    botoBack(){
        document.getElementById("back").addEventListener("click",function(){
        var menu = document.getElementById("menu-principal");
        menu.classList.add("display-flex");
        var taulell = document.getElementById("game");
        taulell.classList.add("display-none");
        var infor = documet.getElementById("info");
        infor.classList-add("display-none");
        });
    }
>>>>>>> af20641167c1c2c19931ddb3f38bbcfd17b5ad03

  
    
}