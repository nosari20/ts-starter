# TypeScript starter

## Techs
* [TypeScript](http://www.typescriptlang.org/)
* [Gulp](http://gulpjs.com/)
* [Sass](http://sass-lang.com/)


## Installation
```
> npm install
> npm start
```

## Commands

### Live server + watcher (TS + HTML + SCSS)
```
> npm start
```

### build
```
> npm run build
```
### live server
```
> npm run server
```

### watch (TS + HTML + SCSS)
```
> npm run wacth
```

### Libraries
#### Get the library
```
> npm install jquery
```

#### Install TypeScript definition file
##### Option 1
```
> npm install --save-dev @types/jquery
```
##### Option 2
```
> npm run typings install dt~jquery --global --save
# You can also install typings globaly
```

#### Import file
```
> import $ from "jquery";
// or
> import $ = require("jquery");
