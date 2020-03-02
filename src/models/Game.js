import { Media } from "./Media.js";

export class Game extends Media {
    constructor(title, releaseDate, rating, img, studio, nbPlayers, plot){
        super(title,releaseDate,rating,img);
        this.studio = studio;
        this.nbPlayers = nbPlayers;
        this.plot = plot;
    }
    
    toHTML(){
        const div = this.createBaseDiv()
        const mediaContent = div.getElementsByClassName("mediaContent")[0]
        const studioNbPlayersDiv = this.createElement("div","flexRowDiv")
        //Add the studio        
        let studio = document.createElement("p")
        studio.appendChild(this.createElement("i",["fas","fa-home"]))
        studio.innerHTML += " " + this.studio
        studioNbPlayersDiv.appendChild(studio)
        //Add the number of players
        let playerNumber = document.createElement("p")
        playerNumber.appendChild(this.createElement("i",["fas","fa-users"]))
        playerNumber.innerHTML += " " + this.nbPlayers
        studioNbPlayersDiv.appendChild(playerNumber)
        mediaContent.appendChild(studioNbPlayersDiv)
        //Add the plot
        let plot = this.createElement("p","plot")
        plot.innerHTML = this.plot
        mediaContent.appendChild(plot)
        //Add the button
        let buttonDelete = this.createElement("button",["btn","btn-primary","deleteButton"])
        buttonDelete.innerHTML = "Delete"
        mediaContent.appendChild(buttonDelete)
        return div;
    }
}