import { Collection } from "./models/Collection.js";
import { Album } from "./models/Album.js";
import { Movie } from "./models/Movie.js";
import { Game } from "./models/Game.js";
import { Media } from "./models/Media.js"

const media = new Media()

/**
 * Ajoute le div permettant la création de nouveau média à la fin de la collection
 */
export function addNewMediaDiv(){
    const newMediaDiv = media.createElement("div",["mediaItem","addMediaDiv"])
    newMediaDiv.innerHTML = `<div class="input-group">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="choixTypeMedia">Media Type</label>
                                </div>
                                <select class="custom-select" id="choixTypeMedia">
                                    <option selected value="Movie">Movie</option>
                                    <option value="Game">Game</option>
                                    <option value="Album">Album</option>
                                </select>
                            </div>
                            <form id="addMedia">
                            </form>`;
    
    const divButtonNewMedia = media.createElement("div",["mediaItem"])
    const buttonNewMedia = media.createElement("button",["btn","btn-primary","newMediaCreator"])
    buttonNewMedia.textContent = "+"
    buttonNewMedia.addEventListener("click",()=>{
        newMediaDiv.style.visibility = "visible";
        divButtonNewMedia.remove()
    })
    divButtonNewMedia.appendChild(buttonNewMedia)
    document.getElementsByClassName("mediaCollection")[0].appendChild(divButtonNewMedia);
    document.getElementsByClassName("mediaCollection")[0].appendChild(newMediaDiv)
}

/**
 * Crée la partie du formulaire de création commune à tout les média
 */
export function addBaseForm(){
    const form = document.getElementById("addMedia")
    form.innerHTML = `<label>Title</label>
                        <input type="text" id="titleNewMedia">
                        <br/>
                        <label>Date</label>
                        <input type="date" id="dateNewMedia">
                        <br/>
                        <label>Rating</label>
                        <select id="ratingNewMedia">
                            <option selected value=1>1</option>
                            <option value=2>2</option>
                            <option value=3>3</option>
                            <option value=4>4</option>
                            <option value=5>5</option>
                        </select>
                        <br/>
                        <label>Image URL</label>
                        <input type="text" id="imgLinkNewMedia">
                        <br/>
                        `
}

/**
 * Ajoute le bouton au formulaire de création de média, on le retourne pour y attacher un listener
 */
export function addButtonForm(){
    const form = document.getElementById("addMedia")
    const button = media.createElement("button", ["btn","btn-primary","buttonAjoutMediaForm"])
    button.textContent = "Add the Media"
    form.appendChild(button)
    return button
}

/**
 * Crée la partie du formulaire de création spécifique aux films
 */
export function addMovieForm(){
    const form = document.getElementById("addMedia")
    form.innerHTML +=`<label>Director</label>
                    <input type="text" id="directorNewMedia">
                    <br/>
                    <label>Actors</label>
                    <input type="text" id="actorsNewMedia">
                    <br/>
                    <label>Duration</label>
                    <input type="number" id="durationNewMedia">
                    <br/>
                    <label>Plot</label>
                    <textarea id="plotNewMedia" cols="30" rows="5">
                    </textarea>
                    <br/>

    `;
}

/**
 * Crée la partie du formulaire de création spécifique aux jeux
 */
export function addGameForm(){
    const form = document.getElementById("addMedia")
    form.innerHTML +=`<label>Studio</label>
                        <input type="text" id="studioNewMedia">
                        <br/>
                        <label>Number of players</label>
                        <input type="number" id="nbPlayersNewMedia">
                        <br/>
                        <label>Plot</label>
                        <textarea id="plotNewMedia" cols="30" rows="5">
                        </textarea>
                        <br/>
    `
}

/**
 * Crée la partie du formulaire de création spécifique aux albums
 */
export function addAlbumForm(){
    const form = document.getElementById("addMedia")
    form.innerHTML += `<label>Artists</label>
                        <input type="text" id="artistsNewMedia">
                        <br/>
                        <label>Number of Tracks</label>
                        <input type="number" id="nbTracksNewMedia">
                        <br/>
    `
}

/**
 * On envoie une requête sur l'API OMDb à partir du titre entré par l'utilisateur, puis on crée un objet film qu'on ajoute à la collection
 */
export async function addMovieFromAPI(){
    let newMovie;
    const movieTitle = document.getElementById("titleMovieToAddFromAPI").value;
    const urlAPI = "http://www.omdbapi.com/?apikey=47a3fb2d&t=" + movieTitle;
    const promise = await fetch(urlAPI, {
        method: "GET"
    })
    return promise.json();
}