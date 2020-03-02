import test from "ava";
import { Collection } from "../../src/models/Collection";
import { Media } from "../../src/models/Media";
import { Game } from "../../src/models/Game";
import { Movie } from "../../src/models/Movie";
import { Album } from "../../src/models/Album";
import { filterGame, filterMovie, filterAlbum } from "../../src/filter";

test('Constructor test', t => {
    const media1 = new Media("Media1", new Date(2019,9,27),3,"URL")
    const media2 = new Media("Media2", new Date(2019,9,27),1,"Une URL")
    const collection = new Collection([media1,media2])
    t.deepEqual(collection.mediaCollection,[media1,media2])
})

test('Add media test', t => {
    const media1 = new Media("Media1", new Date(2019,9,27),3,"URL")
    const media2 = new Media("Media2", new Date(2019,9,27),1,"Une URL")
    const collection = new Collection([media1,media2])
    const media3 = new Media("Media3", new Date(2019,9,27),"URLLL")
    collection.addMedia(media3)
    t.deepEqual(collection.mediaCollection,[media1,media2,media3])
})

test('Remove media test', t => {
    const media1 = new Media("Media1", new Date(2019,9,27),3,"URL")
    const media2 = new Media("Media2", new Date(2019,9,27),1,"Une URL")
    const collection = new Collection([media1,media2])
    collection.removeMedia(media2)
    t.deepEqual(collection.mediaCollection,[media1])
})

test('Remove media with parameter not in collection', t => {
    const media1 = new Media("Media1", new Date(2019,9,27),3,"URL")
    const media2 = new Media("Media2", new Date(2019,9,27),1,"Une URL")
    const collection = new Collection([media1,media2])
    const media3 = new Media("Media3", new Date(2019,9,27),"URLLL")
    collection.removeMedia(media3)
    t.deepEqual(collection.mediaCollection,[media1,media2])
})

test('getNbMedias test', t => {
    const media1 = new Media("Media1", new Date(2019,9,27),3,"URL")
    const media2 = new Media("Media2", new Date(2019,9,27),1,"Une URL")
    const collection = new Collection([media1,media2])
    t.deepEqual(collection.getNbMedias(),2)
})

test ('Filter Game test', t => {
    const game = new Game("My Game", new Date(2019,9,27),2,"myURL","myStudio",1,"Plot")
    const movie = new Movie("My Movie", new Date(2019,9,27), 5,"myURL","Director","Des acteurs",100,"Un plot")
    const album = new Album("My Album",new Date(2019,9,27),4,"myURL","Tout plein d'artistes",10)
    const collection = new Collection([game,movie,album])
    t.deepEqual(collection.filter(filterGame),[game])
})

test ('Filter Game test with no game', t => {
    const movie = new Movie("My Movie", new Date(2019,9,27), 5,"myURL","Director","Des acteurs",100,"Un plot")
    const album = new Album("My Album",new Date(2019,9,27),4,"myURL","Tout plein d'artistes",10)
    const collection = new Collection([movie,album])
    t.deepEqual(collection.filter(filterGame),[])
})

test ('Filter Movie test', t => {
    const game = new Game("My Game", new Date(2019,9,27),2,"myURL","myStudio",1,"Plot")
    const movie = new Movie("My Movie", new Date(2019,9,27), 5,"myURL","Director","Des acteurs",100,"Un plot")
    const album = new Album("My Album",new Date(2019,9,27),4,"myURL","Tout plein d'artistes",10)
    const collection = new Collection([game,movie,album])
    t.deepEqual(collection.filter(filterMovie),[movie])
})

test ('Filter movie test with no movie', t => {
    const game = new Game("My Game", new Date(2019,9,27),2,"myURL","myStudio",1,"Plot")
    const album = new Album("My Album",new Date(2019,9,27),4,"myURL","Tout plein d'artistes",10)
    const collection = new Collection([game,album])
    t.deepEqual(collection.filter(filterMovie),[])
})

test ('Filter Album test', t => {
    const game = new Game("My Game", new Date(2019,9,27),2,"myURL","myStudio",1,"Plot")
    const movie = new Movie("My Movie", new Date(2019,9,27), 5,"myURL","Director","Des acteurs",100,"Un plot")
    const album = new Album("My Album",new Date(2019,9,27),4,"myURL","Tout plein d'artistes",10)
    const collection = new Collection([game,movie,album])
    t.deepEqual(collection.filter(filterAlbum),[album])
})

test ('Filter album test with no album', t => {
    const game = new Game("My Game", new Date(2019,9,27),2,"myURL","myStudio",1,"Plot")
    const movie = new Movie("My Movie", new Date(2019,9,27), 5,"myURL","Director","Des acteurs",100,"Un plot")
    const collection = new Collection([game,movie])
    t.deepEqual(collection.filter(filterAlbum),[])
})



