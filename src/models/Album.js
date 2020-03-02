import { Media } from "./Media.js";

export class Album extends Media {
    constructor(title, releaseDate, rating, img, artists, nbTracks){
        super(title,releaseDate,rating,img);
        this.artists = artists;
        this.nbTracks = nbTracks;
    }

    toHTML() {
        const div = this.createBaseDiv()
        const mediaContent = div.getElementsByClassName("mediaContent")[0]
        //Add the artists and number of tracks
        let artists = this.createElement("p") 
        artists.innerHTML = "By <b>" + this.artists +"</b>, it contains "+this.nbTracks + " tracks."
        mediaContent.appendChild(artists)
        //Add the button
        let buttonDelete = this.createElement("button",["btn","btn-primary","deleteButton"])
        buttonDelete.innerHTML = "Delete"
        mediaContent.appendChild(buttonDelete)
        return div
    }
}