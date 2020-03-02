import { Media } from "./Media.js";

export class Movie extends Media {
    constructor(title, releaseDate, rating, img, director, actors, duration, plot){
        super(title, releaseDate, rating,img)
        this.director= director;
        this.actors = actors;
        this.duration = duration;
        this.plot = plot;
    }

    toHTML(){
        const div = this.createBaseDiv()
        const mediaContent = div.getElementsByClassName("mediaContent")[0]
        const directorDurationDiv = this.createElement("div","flexRowDiv")
        //Add the director
        let director = document.createElement("p")
        director.innerHTML = "By <b>" + this.director + "</b>"
        directorDurationDiv.appendChild(director)
        //Add the duration
        let duration = document.createElement("p")
        duration.appendChild(this.createElement("i",["far","fa-clock"]))
        duration.innerHTML += " " + this.duration  + " minutes"
        directorDurationDiv.appendChild(duration)
        mediaContent.appendChild(directorDurationDiv)
        //Add the actors
        let actors = document.createElement("p")
        actors.appendChild(this.createElement("i",["fas","fa-users"]))
        actors.innerHTML += " " + this.actors
        mediaContent.appendChild(actors)        
        //Add the plot
        let plot = this.createElement("p","plot")
        plot.innerHTML = this.plot
        mediaContent.appendChild(plot)
        //Add the button
        let buttonDelete = this.createElement("button",["btn","btn-primary","deleteButton"])
        buttonDelete.innerHTML = "Delete"
        mediaContent.appendChild(buttonDelete)
        return div
    }
}