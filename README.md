# Papas Pizza
![Calculator](dist/images/landing.png)

A website showing information about various pizza options, the location and contact info for Papas Pizza. It uses webpack to dynmically render the contents of the site, without using HTML. Check out the [Live Demo](https://kamilkhxn.github.io/kamils-pizza/).

## What I Learned
* package.json 
   * Manage project dependencies
```
$ npm init
```

* Webpack 
    * Dynamically renders the contents from the src folder to a single file, called main.js, in the dist folder
```
$ npx webpack --watch
```

* webpack.config.js

    * Generates source maps to help debug the original code (src folder) over the generated one (dist folder)
```
$ devtool: 'inline-source-map',
```

* ES6 Modules
    * Importing and exporting modules
