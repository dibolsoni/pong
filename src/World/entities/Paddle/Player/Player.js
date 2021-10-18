import {immerable, produce} from 'immer';

const {assert} = console;

/**
 * a playable base class
 * @param {object} name
 * @param {object} color
 */ 
class Player {
    [immerable] = true
    constructor(state){
        this.state = state
        assert(state.name, 'must have a name');
        assert(state.color, 'must have a color');
    }

    moveUp(){throw Error('must implement moveUp()')}
    moveDown(){throw Error('must implement moveDown()')}

}

export default Player;
