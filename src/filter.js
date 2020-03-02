import { Album } from "./models/Album.js";
import { Movie } from "./models/Movie.js";
import { Game } from "./models/Game.js";

export function filterMovie(media){
    let isMovie = false
    if(media instanceof Movie){
        isMovie = true
    }
    return isMovie
}

export function filterGame(media){
    let isGame = false;
    if(media instanceof Game){
        isGame = true
    }
    return isGame
}

export function filterAlbum(media){
        let isAlbum = false;
        if(media instanceof Album){
            isAlbum = true
        }
        return isAlbum
}