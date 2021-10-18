import Player from "../Player";
import Human from "./Human";

describe('a human', () => {
    it('must instantiate', () => {
        expect.assertions(2);
        const state = {name:'player1', color:'yellow'}
        const human = new Human(state);
        expect(human instanceof Player).toBeTruthy();
        expect(human).toBeTruthy();
    });
    
});
