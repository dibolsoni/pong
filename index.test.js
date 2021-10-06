import fs from 'fs';

it('entry index.js exists', async () => {
    await expect(fs.existsSync('index.js')).toBeTruthy();
});