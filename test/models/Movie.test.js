import test from "ava";
import { Movie } from "../../src/models/Movie";

test('Constructor test', t => {
    const movie = new Movie("My Movie", new Date(2019,9,27), 5,"myURL","Director","Des acteurs",100,"Un plot")
    t.deepEqual(movie.title,"My Movie")
    t.deepEqual(movie.releaseDate,new Date(2019,9,27))
    t.deepEqual(movie.rating,5)
    t.deepEqual(movie.img,"myURL")
    t.deepEqual(movie.director,"Director")
    t.deepEqual(movie.actors,"Des acteurs")
    t.deepEqual(movie.duration,100)
    t.deepEqual(movie.plot,"Un plot")
})