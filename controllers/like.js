// handle the routing requests => the request gets passed in via the route
const connect = require('../utils/sqlConnect');


var count = 1;
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
