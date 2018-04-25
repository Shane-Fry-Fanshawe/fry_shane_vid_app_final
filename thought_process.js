/*

This is my thought process for part marks, and reference for myself!


Socail Media Sharing:
*** for footer I thought we needed to use a v-bind: for an href but it just lets me normally add it in with the {{link here}}*** just incase you wanted that instead id let you know ***


- I already know from exprince that I will need to go into the socail media platforms dev tools

- Google Plus and Twitter is simple enough
- Facebook you need to use their API and SDK (Isnt working correctly right now)
- For facebook I have it set up to share a specific facebook page not a custom link to share that exact page




Liking:
Either I can add a section to the users database and allow them to increase a count so 1 is liked and 0 is unliked and depending on the number show a thumbs up or down and allow them to switch

I was also looking at your code here, and saw a possiblity of using a fucntion inside of Vue and doing a similar thing to update the users status.
Will have to test this*


controllers > like.js

I couldnt get it to work, needed to still add query for the databse and insert a number into that and depending on that number it would display like ro dislike





Movie Content:

****UPDATE*****

I got it to query, got it to JSON format, parsed that so I can use it.
PROBLEM: After using the loop to be able to pull what I wanted from the array I couldnt use that outside the loop! All I would need to do is take that variable and output it to the res.render and update the handlebars page to the correct object!
So if you look at the console it pulls the title, desc, etc for the movie I just couldnt get that outside the loop to use it to render so it basically all works but that :(


myApp.vm.genres.push({
  name : genre,
  movies : data.filter(movie => movie.genre_name === genre)
})

^Maybe I had to push it out???? Couldnt get that to work either



I need to aquire the current movies ID and then display its relevant info
- get ID
- query database (let querytitle = `SELECT movies_title FROM tbl_movies WHERE movies_id = "${req.params.id}"`;) this gives me exactly what I want
- translate that into the value
- display on page or render it to the page

- As of writing this I have the query set up prefectly and have it rendered to the movies page, but its only the query I need to get the actuall value and render that!

* Then do the same for its desc, year, etc


































*/
