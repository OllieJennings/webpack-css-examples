# CSS-Modules Setup

A reference guide for the most simple configuration to create CSS-Modules via **Webpack**.

This setup basically generates a seperate CSS bundle in the `build` folder. The CSS bundle is completely minified removing any comments (import or not) whilst also allowing you to use next generation CSS features.

The main entry file is `bootstrap.js` where the CSS files are required.

The difference between the `production` and `development` CSS-Module names is, that we try and use a very short naming convention in production, in order to keep the file size down.


#### Commands

`npm start`

This is the development command than will first clean the **build** folder & then generate the CSS bundle with added source-maps.

Since this example uses **React**, the development command runs `webpack-dev-server`


`npm run prod`

This is the production command, that does the exact same as the command above, but instead, it does not generate any source-maps (since we don't want these in production)
