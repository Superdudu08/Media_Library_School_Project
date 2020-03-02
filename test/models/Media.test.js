import test from "ava";
import { Media } from "../../src/models/Media";

test('Constructor test', t=> {
    const media = new Media("Mon media",new Date(2019,9,27), 5, "monURL")
    t.deepEqual(media.title,"Mon media")
    t.deepEqual(media.releaseDate,new Date(2019,9,27))
    t.deepEqual(media.rating,5)
    t.deepEqual(media.img,"monURL")
})