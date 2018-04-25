// handle the routing requests => the request gets passed in via the route
const connect = require('../utils/sqlConnect');


var count = 1;
let query = `SELECT movies_cover FROM tbl_movies WHERE movies_id = "${req.params.id}"`;

let insertquery = `INSERT INTO tbl_liked (tables here)`;



/*
 if they like or dislike it inserts +1 or -1 into the database and based off that value it displays a thumbs up or down
*/



 var likeEl = document.getElementById("like");
 function like(){
     count++;
     //add count to the database number
     //if its > 1 show like
 }
 function dislike(){
   if (count > 1) {
     count--;
     //minus count to the database number
     //if its < 1 show dislike


//query here




   }
 }





console.log("working");
