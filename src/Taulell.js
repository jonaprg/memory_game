import { Fitxa } from "./Fitxa";
import { Game } from './Game.js';


export class Taulell {

    constructor(columns, rows, level){  
        this.columns = columns;
        this.rows = rows;   
    
        this.cards = this.generateCards(level);
        this.shuffleCards(this.cards);
        
        this.table = this.generateTaulell();
        this.printTaulell();
        this.openedCards = new Array();
        
    
    }
    generateCards(level) {
        let cards = [];
        let i,id;
        for(i = 0, id = 0; i < level.images_amount; i++, id++) {
            cards[id] = new Fitxa(level.images[i], id, level.images_path);
            cards[++id] = new Fitxa(level.images[i], id, level.images_path);
        }
        return cards;
    }
    shuffleCards(cards) {
        var currentIndex = cards.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
        }
        return cards;
    }
    generateTaulell() {
        return `
            <div id="info">
                ${this.createTableInfo()}
            </div>
            <div id="game">
                ${this.printCards()}
                
            </div>
        `;
    }
    printCards(){
        let cells = ``;
        let count = 0;
        for(let i = 0; i < this.columns; i++) {
            for(let j = 0; j < this.rows; j++) {
                cells += `
                    ${this.cards[count].getHTML()}
                `;
                count++;
            }
        }
        return cells;
    }
    printTaulell() {
        Game.getApp().innerHTML = this.table;
    }
    createTableInfo() {
        let table = ``;
       
        table +=  `<div class="item-info">Nivell: </div>
        <div class="item-info">Time</div>
        <div class="item-info">Punts</div>
        <div class="item-info">Back</div>
        `;
        
        return table;
    }
    displayCard(){
        this.classList.toggle("open");
        this.classList.toggle("disabled");
    }
    hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
    clickCards() {
        
       let clickCard = 0;
        for (let i = 0; i < this.cards.length; i++){
            let card = document.getElementById(this.cards[i].getFitxa());
            card.addEventListener("click", this.displayCard);
            card.addEventListener("click", function() {
                if(card.classList.contains("open")) {
                    let keyCard = card.getAttribute("key");
                    this.openedCards.push(keyCard);
                    
                    var len = this.openedCards.length;
                    if(len === 2){
                        //moveCounter();
                        if(this.openedCards[0] === this.openedCards[1]){
                            this.matched();
                        } else {
                            this.unmatched();
                        }
                    }
                } else {
                    console.log("doesnt has");
                }
            }, false);
            //this.cards[i].addEventListener("click", this.congratulations);
        }
    }
    matched(){
        console.log("marched");
        /*fixa1.classList.add("match", "disabled");
        fixa2.classList.add("match", "disabled");
        fixa1.classList.remove("open");
        fixa2.classList.remove("open");*/
    }
    
    unmatched(){
        console.log("unmatched");
       /* fixa1.classList.add("unmatched");
        fixa2.classList.add("unmatched");
        this.disable();
        setTimeout(function(){
            fixa1.classList.remove("open","unmatched");
            fixa2.classList.remove("open","unmatched");
            enable();
        },1100);*/
    }
 
    disable(){
        Array.prototype.filter.call(cards, function(card){
            card.classList.add('disabled');
        });
    }
    enable(){
        let matchedCard = document.getElementsByClassName("match")
        Array.prototype.filter.call(cards, function(card){
            card.classList.remove('disabled');
            for(var i = 0; i < matchedCard.length; i++){
                matchedCard[i].classList.add("disabled");
            }
        });
    }
   
}

