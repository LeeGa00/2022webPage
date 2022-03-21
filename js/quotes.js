const quotes = [
    {
        quote: "He that can have patience can have what he will.",
        author: "Benjamin Franklin"
    },
    {
        quote: "You can only be young once. But you can always be immature.",
        author: "Dave Barry"
    },
    {
        quote: "Misfortune shows those who are not really friends.",
        author: "Aristotle"
    },
    {
        quote: "Learn as much by writing as by reading.",
        author: "Lord Acton"
    },
    {
        quote: "Let no one ever come to you without leaving better and happier.",
        author: "Mother Teresa"
    },
    {
        quote: "We know what we are, but not what we may be.",
        author: "William Shakespeare"
    },
    {
        quote: "The human race has one really effective weapon, and that is laughter.",
        author: "Mark Twain"
    },
    {
        quote: "Perpetual optimism is a force multiplier.",
        author: "Colin Powell"
    },
    {
        quote: "Hide not your talents. They for use were made. What's a sundial in the shade.",
        author: "Benjamin Franklin"
    },
    {
        quote: "There is no great genius without some touch of madness.",
        author: "Seneca"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;