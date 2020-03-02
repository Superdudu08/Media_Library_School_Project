import test from "ava";
import { Game } from "../../src/models/Game";

test('Constructor test', t=> {
    const game = new Game("My Game", new Date(2019,9,27),2,"myURL","myStudio",1,"Plot")
    t.deepEqual(game.title,"My Game")
    t.deepEqual(game.releaseDate,new Date(2019,9,27))
    t.deepEqual(game.rating,2)
    t.deepEqual(game.img,"myURL")
    t.deepEqual(game.studio,"myStudio")
    t.deepEqual(game.nbPlayers,1)
    t.deepEqual(game.plot,"Plot")
})