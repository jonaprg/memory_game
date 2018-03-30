export class Juez {
    constructor() {
        this.juzgar();
    }
    juzgar(fixa1, fixa2) {
        // si coinciden, animación que muestra al usuario que asertó
        // si no coinciden, girar dos fixas otra vez
        if(fixa1 === fixa2) this.matched(fixa1, fixa2);
        else this.unmatched(fixa1, fixa2);
    }
    cardClicked(){
        var _ = Memory;
        var $card = $(this);
        if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
            $card.find(".inside").addClass("picked");
            if(!_.guess){
                _.guess = $(this).attr("data-id");
            } else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
                $(".picked").addClass("matched");
                _.guess = null;
            } else {
                _.guess = null;
                _.paused = true;
                setTimeout(function(){
                    $(".picked").removeClass("picked");
                    Memory.paused = false;
                }, 600);
            }
            if($(".matched").length == $(".card").length){
                _.win();
            }
        }
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
    binding() {
        this.$memoryCards = $(".item-cards");
        this.$memoryCards.on("click", this.cardClicked);
    }
    matched(fixa1, fixa2){
        console.log("marched");
        /*fixa1.classList.add("match", "disabled");
        fixa2.classList.add("match", "disabled");
        fixa1.classList.remove("open");
        fixa2.classList.remove("open");*/
    }
    
    unmatched(fixa1, fixa2){
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
} 