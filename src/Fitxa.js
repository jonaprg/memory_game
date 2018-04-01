
import { Game } from "./Game";

export class Fitxa {

    constructor(imagen, id, imagesPath){
        this.id = id;
        this.img_id = imagen.id;
        this.name = imagen.name;
        this.img_path = imagen.path;
        this.imagesPath = imagesPath;

    }
    getFitxa() {
        return this.id;
    }
    getImg_id() {
        return this.img_id;
    }
    displayCard(){
        document.getElementById(this.id).classList.toggle("open");
        document.getElementById(this.id).classList.toggle("disabled");
    }
    getHTML() {
        return `
            <div class="item-card" id="${this.id}" name="${ this.img_id}" >
                <img src="${this.imagesPath + this.img_path}" alt="${this.name}" />  
            </div>
            
            `;
            
    }
}