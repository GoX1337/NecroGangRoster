import { Fighter } from './fighter';
import { FighterType } from './fighter';

let Juve = new Fighter(FighterType.JUVE, "", 5,4,5,3,3,1,3,1,9,5,10,9,25,[],[]);
let Ganger = new Fighter(FighterType.GANGER, "", 5,4,5,3,3,1,3,1,9,5,10,9,60,[],[]);
let Champion = new Fighter(FighterType.CHAMPION, "", 5,4,5,3,3,1,3,1,9,5,10,9,110,[],[]);
let Chief = new Fighter(FighterType.CHIEF, "", 5,4,5,3,3,1,3,1,9,5,10,9,145,[],[]);

export let Goliath = {
    Juve : Juve,
    Ganger : Ganger,
    Champion : Champion,
    Chief : Chief
}
