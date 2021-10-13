/**
 * @jest-environment jsdom
 */

import main from './main';



describe('main', () => {
   it("throw an error if dom element isn't canvas", () => {
        const div = document.createElement('div');
       try {
            main(div);
       } catch(e) {
           expect(e).not.toBeNull();
       }
    });
});
