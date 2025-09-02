# express_random-quote-api

### DOCUMENTATION
**Project Name:** Random Quote API
**Stack:** JavaScript, Node js, Express js

### GET RANDOM QUOTES
1. GET **ALL** Quotes
2. GET **SPECIFIC** Quotes
3. GET **RANDOM** Quotes

## GET ALL QUOTES
```js
fetch(`localhost:5000/quotes`)
```
`quotes/` to get all quotes in the quotes.json

## GET SPECIFIC QUOTES
```js
fetch(`localhost:5000/quotes/{id}`)
```
`quotes/id` use id params to get specific quotes

## GET RANDOM QUOTES
```js
fetch(`localhost:5000/quotes/random`)
```
`quotes/random` to get a random quotes in the quotes.json

