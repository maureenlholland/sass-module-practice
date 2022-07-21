# Sass Modules

A very rickety local playground for sass module practice.

Node required. `npm ci` to get the other dependencies.

Webpack is set up with sass, sass-loader, and mini-css-extract (like Protocol).
There are two entrypoints to compile the old and new sass stylesheets to CSS. These are available in the `dist` folder after running `npm run build`. Any errors will be available in the terminal.

To verify styles in the browser, `npm start` and go to `http://127.0.0.1:3000/index.html`. Click links for old or new sass styles. Be aware that the url must always end in `index.html` to know it's looking at a file and not a folder (rickety, see?).