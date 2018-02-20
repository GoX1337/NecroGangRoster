import { Fighter } from './fighter';
import { FighterType } from './fighter';

let Juve = new Fighter(FighterType.JUVE, "", 5,4,5,3,3,1,3,1,9,5,10,9,20,[],[]);
let Ganger = new Fighter(FighterType.GANGER, "", 5,4,5,3,3,1,3,1,9,5,10,9,50,[],[]);
let Champion = new Fighter(FighterType.CHAMPION, "", 5,4,5,3,3,1,3,1,9,5,10,9,95,[],[]);
let Chief = new Fighter(FighterType.CHIEF, "", 5,4,5,3,3,1,3,1,9,5,10,9,120,[],[]);

export let Escher = {
    Juve : Juve,
    Ganger : Ganger,
    Champion : Champion,
    Chief : Chief
}
