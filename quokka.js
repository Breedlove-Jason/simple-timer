// quokka.js
const { JSDOM } = require('jsdom');

const html = `
<!doctype html>
<html lang="en">
  <body>
    <div class="timer-controls">
      <label for="duration"></label>
      <input type="text" id="duration" />
      <button id="start">Start</button>
      <button id="pause">Pause</button>
    </div>
    <div id="app"></div>
  </body>
</html>
`;

const { window } = new JSDOM(html);

global.window = window;
global.document = window.document;
global.navigator = { userAgent: 'node.js' };

module.exports = {
  babel: true, // Inherit Babel config
  env: {
    type: 'node', // Use Node.js env, plus jsdom to simulate browser
  },
  files: [
    'src/**/*.js',
  ],
};