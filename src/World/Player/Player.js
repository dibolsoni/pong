import {immerable, produce} from 'immer';

/**
 * a playable base class
 * @param {object} name
 * @param {object} color
 */ 
class Player {
    [immerable] = true
    constructor(state){
        this.state = state
    }

}

export default Player;
