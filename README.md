Dark Sky API Demo
=================

What do we want to build?
-------------------------

Let's build a tool that compares the current weather in a number of different cities and computes a number of stats (warmest, coldest, cloudiest, rainiest).

1. Figure out which cities to test
2. Make a call for each city, getting current weather conditions and storing them somewhere
3. Calculate the "winning" city for each of our statistics


Where are we going to get our data?
-----------------------------

We're going to use the Dark Sky API for this project. Let's make sure we're all on the same page for the next part. What's a web API?

- an API is a way for an organization's clients to report information, ask questions, or trigger an action programmatically
- a web API is an API that you can interact with by sending various types of HTTP requests to a well-defined set of URLs

Let's read the [docs](https://darksky.net/dev) to see if we can implement what we want to do using this service.

- use `?units=si` to get centigrade
- make a note of rate limiting: here the limit is 1,000 requests/day

Can we test a web API without coding?
----------------------------------

Absolutely!

- you can use a web browser like Chrome or Firefox for `GET` requests only: open the developer tools' network tab, then reload the page
-  `curl` (or my preference, [httpie](https://httpie.org/))
- [Insomnia](https://insomnia.rest/) or [Postman](https://getpostman.com/) for a standalone program

Start
-----

1. `npm init`
   - put initial path as `src/index.js`
   - add `"start": "node src/index.js"` to runconfig
2. `npm install --save dotenv request eslint cli-table`
   - what are these libraries?
   - you'll see dotenv later in the bootcamp
   - see package in `package.json`
3. Sign up for the [Dark Sky API](https://darksky.net/dev/register)
4. Create a `.env` file and store your secret key in there, e.g. `DARK_SKY_API_KEY=...`
5. Let's get Toronto's weather.
   - what does the API take? store lat/lon
   - how do we call the API? https://npmjs.com/package/request
   - how do we get the response? what does it look like? (Insomnia)
   - async programming :/
   - how can we parse the response? `JSON.parse`
   - let's print the current temperature
6. What if not everything goes to plan?
   - wrong URL?
   - wrong method?
   - bad arguments? (lat/lon out of bounds, bad `units`)
   - rate limit reached?
7. Re-factoring time...
   - use cities database and still basic demo
   - what cities do we want to use? store them in cities db and make a list in `index.js`
   - store output in `results[city]`
   - how do we know when everything is done? async stopping conditions? promises later...
   - create `showStats`: perform a loop, calculating each stat in a var (e.g. `rainiestCity`)
8. How can we verify our result?
   - create `showTable`: show output using `cli-table`
   - in general, unit testing...
9. How could we expand on what we have?
