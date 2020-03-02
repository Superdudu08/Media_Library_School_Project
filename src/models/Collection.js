import { Media } from "./Media.js";
import { addNewMediaDiv } from "../addMedia.js";

export class Collection {
    constructor(mediaCollection){
        this.mediaCollection = mediaCollection;
    }

    addMedia(media) {
        this.mediaCollection.push(media)
    }

    removeMedia(media) {
        let index = this.mediaCollection.indexOf(media)
        if(index>-1){
            this.mediaCollection.splice(index,1)
        }
    }

    getNbMedias() {
        return this.mediaCollection.length
    }

    /**
     * Retourne un tableau contenant les medias filtrées par rapport à la fonction en paramètre.
     * @param {*} filterFn, fonction de filtre 
     */
    filter(filterFn) {
        return this.mediaCollection.filter(filterFn);
    }


    /**
     * Remplit le div principal afin d'afficher les média de la collection 
     */
    displayCollection(collection = this.mediaCollection) {
        let mainDiv = document.getElementsByClassName("mediaCollection")[0];
        mainDiv.innerHTML = ""
        for (const item of collection) {
            let mediaDiv = item.toHTML()
            //Retire le media de la collection quand on supprime l'élément
            mediaDiv.getElementsByClassName("deleteButton")[0].addEventListener("click", () => {
                this.removeMedia(item)
                mediaDiv.remove();
                
            })
            mainDiv.appendChild(mediaDiv)
            
        }
        addNewMediaDiv()
    }
}