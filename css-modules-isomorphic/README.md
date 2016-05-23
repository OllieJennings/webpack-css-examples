# CSS-Modules Isomorphic Setup

A reference guide for a more advanced CSS-Modules Isomorphic/Universal solution using **Webpack**.

In this example, we do server-side rendering using **React** to demonstrate how we can use CSS-Modules on both the client & Server.

This example uses **Express** to generate a server than renders the **React** code and create the CSS-Module classnames, identical to that created by the front-end bundle.

In order for the front-end bundle, and the server to share the same CSS-Module names, we use the package `css-modules-require-hook` with a config file  `cmrh.conf.js`, which contains the same naming format as that in the webpack config files.



#### Commands

`npm start`

This is the development command than will first clean the **build** folder & then generate the CSS bundle with added source-maps.

This command runs a **webpack-dev-server** for development mode.



`npm run prod`

This is the production command, that does the exact same as the command above, but instead, it does not generate any source-maps (since we don't want these in production).

This command run **webpack** to generate the bundle used by the client side code, and then runs the **Express** server to manage server-side rendering.
