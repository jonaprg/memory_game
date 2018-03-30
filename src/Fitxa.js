
import { Game } from "./Game";

export class Fitxa {

    constructor(imagen, id, imagesPath){
        this.id = id;
        this.img_id = imagen.id;
        this.name = imagen.name;
        this.img_path = imagen.path;
        this.imagesPath = imagesPath;
        this.discovered = false;
        
    }
    toogle() {
        if(!this.discovered){
            this.getFitxa().classList.add('open');
            this.discovered = true;
        }else{
            this.getFitxa().classList.remove('open');
            this.discovered = false;
        } 
    }
    getFitxa(){
        return document.getElementById(this.id);
    }
    getHTML() {
        return `
        <div class="item-card" id="${this.id}" key="${this.img_id}">
            <img src="${this.imagesPath + this.img_path}" alt="${this.name}" />
            <h1>Laia</h1>  
        </div>
            `;
    }
}