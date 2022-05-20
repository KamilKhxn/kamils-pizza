# Papas Pizza
![Calculator](images/landing.png)

A website showing information about varios pizza options and where Papas Pizza is located. It uses webpack to dynmically render the contents of the site, without using HTML. Check out the [Live Demo](https://kamilkhxn.github.io/kamils-pizza/).

## What I Learned
* Using package.json files
```
$ npm init
```
* Webpack - 
    * Dynamically renders the contents from the src to a single file, called main.js in the dist folder
```
$ npx webpack --watch
```
* webpack.config.js
```
$ devtool: 'inline-source-map',

```
    * generates source maps, indicating the file causing issues
* ES6 Modules
    * importing and exporting modules