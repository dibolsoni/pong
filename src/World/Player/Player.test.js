import Player from './Player';

describe('player', () => {
    it('must instantiate', () => {
        expect.hasAssertions();
        const player = new Player({name: 'test', color:'yellow'});
        expect(player).toBeTruthy();
    });
});
