# basic-setup

A reference guide for the most simple and standard configuration for bundling your CSS via **Webpack**.

This setup basically generates a seperate CSS bundle in the `build` folder. The CSS bundle is completely minified removing any comments (import or not) whilst also allowing you to use next generation CSS features.

The main entry file is `bootstrap.js` where the CSS files are required.



#### Commands

`npm start`

This is the development command than will first clean the **build** folder & then generate the CSS bundle with added source-maps.


`npm run prod`

This is the production command, that does the exact same as the command above, but instead, it does not generate any source-maps (since we don't want these in production)
