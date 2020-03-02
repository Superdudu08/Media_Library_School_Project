import { Collection } from "./models/Collection.js";
import { Album } from "./models/Album.js";
import { Movie } from "./models/Movie.js";
import { Game } from "./models/Game.js";
import * as Filters from "./filter.js";
import * as NewMedia from "./addMedia.js"

const game1 = new Game("Warcraft 3 Reforged",new Date(2019,11,1), 5, "https://p3.storage.canalblog.com/31/95/1437539/125903721.jpg", "Blizzard", 1, "Remake du GOTY 2002 <br/> Warcraft III is set several years after the events of Warcraft II, and tells the story of the Burning Legion's attempt to conquer the fictional world of Azeroth with the help of an army of the Undead, led by fallen paladin Arthas Menethil.")
const movie1 = new Movie("Joker",new Date(2019,9,9), 4, "https://www.sonomacountygazette.com/photos/articles/17713455_1_joker-joker-movie-movie-superhero-comics-character-800x800.jpg","Todd Phillips","Joaquin Phoenix", 122, "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.")
const album1 = new Album("Room On Fire",new Date(2003,9,28), 5, "https://consequenceofsound.net/wp-content/uploads/2018/10/the-strokes-room-on-fire.jpg?quality=80&w=807", "The Strokes", 11)


const collection = new Collection([game1,movie1,album1])

collection.displayCollection()
ajoutListenerNewMedia()
ajoutListenerAPI()

//Ajout des listener sur les boutons de filtrage
document.getElementById("filterAll").addEventListener("click",() => {
    collection.displayCollection(collection.filter(()=> { return true }))
    ajoutListenerNewMedia()
    document.getElementsByClassName("active")[0].classList.remove("active")
    document.getElementById("filterAll").classList.add("active")
})

document.getElementById("filterMovie").addEventListener("click",() => {
    collection.displayCollection(collection.filter(Filters.filterMovie))
    ajoutListenerNewMedia()
    document.getElementsByClassName("active")[0].classList.remove("active")
    document.getElementById("filterMovie").classList.add("active")
})

document.getElementById("filterGame").addEventListener("click",() => {
    collection.displayCollection(collection.filter(Filters.filterGame))
    ajoutListenerNewMedia()
    document.getElementsByClassName("active")[0].classList.remove("active")
    document.getElementById("filterGame").classList.add("active")
})

document.getElementById("filterAlbum").addEventListener("click",() => {
    collection.displayCollection(collection.filter(Filters.filterAlbum))
    ajoutListenerNewMedia()
    document.getElementsByClassName("active")[0].classList.remove("active")
    document.getElementById("filterAlbum").classList.add("active")
})


function ajoutListenerNewMedia() {
    document.getElementById("choixTypeMedia").addEventListener("change", (event) => {
        if(event.target.value === "Game"){
            NewMedia.addBaseForm()
            NewMedia.addGameForm()
            const buttonAdd = NewMedia.addButtonForm()
            buttonAdd.addEventListener("click", (event) => {
                event.preventDefault()
                const newMediaItem = new Game(document.getElementById("titleNewMedia").value,
                                                new Date(document.getElementById("dateNewMedia").value),
                                                document.getElementById("ratingNewMedia").value,
                                                document.getElementById("imgLinkNewMedia").value,
                                                document.getElementById("studioNewMedia").value,
                                                document.getElementById("nbPlayersNewMedia").value,
                                                document.getElementById("plotNewMedia").value)
                collection.addMedia(newMediaItem)
                collection.displayCollection()
                ajoutListenerNewMedia()  
            })
        }
        else if (event.target.value === "Movie"){
            NewMedia.addBaseForm()
            NewMedia.addMovieForm()
            const buttonAdd = NewMedia.addButtonForm()
            buttonAdd.addEventListener("click", (event) => {
                event.preventDefault()
                const newMediaItem = new Movie(document.getElementById("titleNewMedia").value,
                                                new Date(document.getElementById("dateNewMedia").value),
                                                document.getElementById("ratingNewMedia").value,
                                                document.getElementById("imgLinkNewMedia").value,
                                                document.getElementById("directorNewMedia").value,
                                                document.getElementById("actorsNewMedia").value,
                                                document.getElementById("durationNewMedia").value,
                                                document.getElementById("plotNewMedia").value)
                collection.addMedia(newMediaItem)
                collection.displayCollection()
                ajoutListenerNewMedia()                                    
            })
        }
        else {
            NewMedia.addBaseForm()
            NewMedia.addAlbumForm()
            const buttonAdd = NewMedia.addButtonForm()
            buttonAdd.addEventListener("click", (event) => {
                event.preventDefault()
                const newMediaItem = new Album(document.getElementById("titleNewMedia").value,
                                                new Date(document.getElementById("dateNewMedia").value),
                                                document.getElementById("ratingNewMedia").value,
                                                document.getElementById("imgLinkNewMedia").value,
                                                document.getElementById("artistsNewMedia").value,
                                                document.getElementById("nbTracksNewMedia").value)
                collection.addMedia(newMediaItem)
                collection.displayCollection()
                ajoutListenerNewMedia()                                    
            })
        }
    })
    fakeEvent()
}

/**
 * Envoie un onChange event pour trigger le listener et avoir un affichage du formulaire
 */
function fakeEvent(){
    const event = document.createEvent("HTMLEvents")
    event.initEvent("change",false,true)
    document.getElementById("choixTypeMedia").dispatchEvent(event)
}

async function ajoutListenerAPI(){
    document.getElementById("addFromAPI").addEventListener("click", async () => {
        await NewMedia.addMovieFromAPI().then((data)=> {
            console.log(data)
            const duration = data.Runtime.substr(0,3)
            if(duration.charAt(3) === " "){
                duration = duration.substr(0,2)
            }
            const intDuration = parseInt(duration)
            const newMovie = new Movie(data.Title,
                                        new Date(data.Released),
                                        Math.round(data.imdbRating / 2.0),
                                        "http://img.omdbapi.com/?apikey=47a3fb2d&i="+data.imdbID,
                                        data.Director,
                                        data.Actors,
                                        intDuration,
                                        data.Plot)
            document.getElementById("titleMovieToAddFromAPI").value = ""
            collection.addMedia(newMovie)
            collection.displayCollection()
            ajoutListenerNewMedia()  
        });
        
    })
}
