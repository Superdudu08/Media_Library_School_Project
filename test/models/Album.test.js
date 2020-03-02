import test from "ava";
import { Album } from "../../src/models/Album";

test('Constructor test', t => {
    const album = new Album("My Album",new Date(2019,9,27),4,"myURL","Tout plein d'artistes",10)
    t.deepEqual(album.title,"My Album")
    t.deepEqual(album.releaseDate,new Date(2019,9,27))
    t.deepEqual(album.rating,4)
    t.deepEqual(album.img,"myURL")
    t.deepEqual(album.artists,"Tout plein d'artistes")
    t.deepEqual(album.nbTracks,10)
});