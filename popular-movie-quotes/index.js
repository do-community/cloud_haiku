let array = require("./data/data.json");

const randomNum = () => {
    return Math.floor(Math.random() * array.length);
};

const getQuoteByYear = (start, end) => {
    let quotes = [];
    array.forEach(item => {
        if (item.year && item.year > start && item.year < end) {
            quotes.push(item);
        }
    });
    return quotes.sort((a, b) =>
        a.year > b.year ? 1 : b.year > a.year ? -1 : 0
    );
};

const getRandomQuote = () => {
    let randNum = randomNum();

    return array[randNum].quote;
};

const getSomeRandom = count => {
    let randomQuotesArray = [];
    let randomQuotesSet = new Set(); // to prevent duplicate quotes
    while (randomQuotesArray.length < count) {
        let quote = array[randomNum()];
        if (!randomQuotesSet.has(quote)) {
            randomQuotesArray.push(quote);
        }
    }
    return randomQuotesArray;
};

const getAll = () => {
    return array;
};

module.exports = {
    getAll,
    getRandomQuote,
    getSomeRandom,
    getQuoteByYear
};
