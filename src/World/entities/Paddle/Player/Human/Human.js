import { immerable } from "immer";
import Player from '../Player';

class Human extends Player {
    [immerable] = true;
    constructor(state) {
        super(state);
    }
}

export default Human;
