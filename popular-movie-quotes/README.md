![GitHub license](https://img.shields.io/github/license/NikhilNamal17/popular-movie-quotes.svg?style=for-the-badge&logo=github) ![NPM MODULE](http://img.shields.io/badge/popularmovie-quotes-orange.svg?style=for-the-badge&logo=imdb) ![NPM MODULE](https://img.shields.io/github/issues/NikhilNamal17/popular-movie-quotes?style=for-the-badge&logo=appveyor) ![NPM MODULE](https://img.shields.io/github/forks/NikhilNamal17/popular-movie-quotes?logo=github&style=for-the-badge) ![NPM MODULE](https://img.shields.io/github/stars/NikhilNamal17/popular-movie-quotes?color=yellow&logo=github&style=for-the-badge) ![NPM MODULE](https://img.shields.io/github/languages/code-size/NikhilNamal17/popular-movie-quotes?style=for-the-badge&logo=docusign) ![NPM MODULE](https://img.shields.io/github/languages/top/NikhilNamal17/popular-movie-quotes?style=for-the-badge&logo=javascript)

#### A simple [NPM](https://www.npmjs.com/package/popular-movie-quotes) package to get popular movie quotes.

## Getting started

[![NPM](https://nodei.co/npm/popular-movie-quotes.png?compact=true)](https://nodei.co/npm/popular-movie-quotes/)

```
$ npm i popular-movie-quotes --save
```

## Installation

[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=for-the-badge&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) [![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) [![NODE JS](https://img.shields.io/npm/v/popular-movie-quotes?logo=npm&label=popular-movie-quotes&style=for-the-badge)](https://www.npmjs.com/package/popular-movie-quotes)

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
**[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)** command:

```bash
$ npm i popular-movie-quotes --save
```

## Usage

[![usage](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://github.com/vinitshahdeo/inspirational-quotes/)

-   **_getAll()_** method returns an array of objects, each containing **_quote_** and **_movie_**.

```json
{
    "quote": "Frankly, my dear, I don't give a damn.",
    "movie": "Gone with the Wind"
}
```

-   **getQuoteByYear(startYear, endYear)\_** method rreturns a sorted object within the range of year startYear -endYear\*\*

```json
[
    {
        "quote": "Frankly, my dear, I don't give a damn.",
        "movie": "Gone with the Wind",
        "year": startYear
    }
    ...
    .....
    {
        "quote": "Frankly, my dear, I don't give a damn.",
        "movie": "Gone with the Wind",
        "year": endYear
    }
]
```

-   **_getSomeRandom(count)_** method returns an array (of length 'count') of non-duplicate random objects containing **_quote_** and **_movie_**.

```json
[
    {
        "quote": "Frankly, my dear, I don't give a damn.",
        "movie": "Gone with the Wind"
    }
    // with 'count' number of quote objects.
]
```

-   **_getRandomQuote()_** method returns a random **movie** quote : _`I used to think that my life was a tragedy. But now I realize, it’s a comedy.`_

```js
const movieQuote = require("popular-movie-quotes");

console.log(movieQuote.getAll()); //get an array with all available quotes.

console.log(movieQuote.getSomeRandom(10)); // get an array of 10 random quotes.

console.log(movieQuote.getRandomQuote()); // get a random quote
```

## Want to contribute?

[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source-175x29.png?v=103)](https://github.com/NikhilNamal17) [![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)

> Please check issues **[here](https://github.com/NikhilNamal17/popular-movie-quotes/issues)**!

## License

![GitHub license](https://img.shields.io/github/license/NikhilNamal17/popular-movie-quotes.svg?style=for-the-badge&logo=github)

## Let's get connected

[![Twitter Follow](https://img.shields.io/twitter/follow/Nikhil17_namal.svg?style=for-the-badge&logo=twitter)](https://twitter.com/Nikhil17_namal) [![GitHub followers](https://img.shields.io/github/followers/NikhilNamal17.svg?label=Follow&style=for-the-badge&logo=github)](https://github.com/NikhilNamal17/) [![Facebook](https://img.shields.io/static/v1.svg?label=follow&message=@nikhilnamal&color=9cf&logo=facebook&style=for-the-badge&logoColor=white&colorA=informational)](https://www.facebook.com/nikhil.namal) [![Instagram](https://img.shields.io/static/v1.svg?label=follow&message=@NikhilNamal&color=grey&logo=instagram&style=for-the-badge&logoColor=white&colorA=critical)](https://www.instagram.com/nikhil_namal17/) [![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@nikhilnamal&color=success&logo=linkedin&style=for-the-badge&logoColor=white&colorA=blue)](https://www.linkedin.com/in/nikhil_namal17/)

## Special Thanks

#### Karan Bhatt [![Facebook](https://img.shields.io/static/v1.svg?label=follow&message=@KaranBhatt&color=9cf&logo=facebook&style=for-the-badge&logoColor=white&colorA=informational)](https://www.facebook.com/karan.bhatt.7524) [![Instagram](https://img.shields.io/static/v1.svg?label=follow&message=@KaranBhatt&color=grey&logo=instagram&style=for-the-badge&logoColor=white&colorA=critical)](https://www.instagram.com/karanbhatt/) [![GitHub followers](https://img.shields.io/github/followers/ItachiHyuga.svg?label=Follow&style=for-the-badge&logo=github)](https://github.com/ItachiHyuga/)

#### Rishabh Kanojia [![Facebook](https://img.shields.io/static/v1.svg?label=follow&message=@RishabhKanojia&color=9cf&logo=facebook&style=for-the-badge&logoColor=white&colorA=informational)](https://www.facebook.com/rishabh.kanojiya.18) [![Instagram](https://img.shields.io/static/v1.svg?label=follow&message=@RishabhKanojia&color=grey&logo=instagram&style=for-the-badge&logoColor=white&colorA=critical)](https://www.instagram.com/rishabhkanojiya/) [![GitHub followers](https://img.shields.io/github/followers/rishabhkanojiya.svg?label=Follow&style=for-the-badge&logo=github)](https://github.com/rishabhkanojiya/)

<hr>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)
