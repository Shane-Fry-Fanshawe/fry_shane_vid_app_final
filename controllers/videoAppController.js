// handle the routing requests => the request gets passed in via the route
const connect = require('../utils/sqlConnect');

exports.get_all_movies = (req, res) => {
  console.log('hit get all movies');

  connect.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }

    let query = `SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`;

    connect.query(query, (err, rows) => {
      connection.release(); // let somebody else use this connection

      if (err) {
        return console.log(err.message);
      }

      //console.log(rows);

      res.render('home', {
          defaultMovie : rows[Math.floor(Math.random() * rows.length)],
          data : JSON.stringify(rows),
          instagram : "https://www.instagram.com/escapade.apparel/",
          facebook : "https://www.facebook.com/",
          google : "https://www.youtube.com/channel/UCy3oPBCpp0b8_QFW3z8d-9w",
          twitter : "https://twitter.com/?lang=en",
          mainpage : true,
          videopage : false
      });
    })
  })
};







exports.get_one_movie = (req, res) => {
  console.log('hit single movie');

  connect.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }

    let query = `SELECT * FROM tbl_comments WHERE comments_movie = "${req.params.id}"`;
    let querytitle = `SELECT * FROM tbl_movies WHERE movies_id = "${req.params.id}"`;


//I changed query to querytitle for testing purposes to get the current info per movie!
// Would change it back and have them both running to sperate objects to hold each data


    connect.query(querytitle, (err, rows) => {
      connection.release(); // let somebody else use this connection

      if (err) {
        return console.log(err.message);
      }


      console.log(req.params.movie);
      console.log(querytitle);


//Getting the info to display onto the single video page (Probs an easier way, but this is how I approached it)
      let data = JSON.stringify(rows);

      var obj = JSON.parse(data);
      //console.log(data);
      //console.log("--------------");
      //console.log(obj);

      var arrayLength = obj.length;
      var i;

  for ( i = 0; i < arrayLength; i++) {

    let moviesCount = obj[i];
      //console.log(moviesCount);
      console.log(moviesCount.movies_title);
      console.log(moviesCount.movies_storyline);

    };





      //rows.forEach(row => console.log(JSON.stringify(row.data)))

      res.render('moviepage', {

        movie : req.params.id,
        moviesrc : req.params.movie,
      //  movietitle: moviesCount.movies_title,
        data : data,
        instagram : "https://www.instagram.com/escapade.apparel/",
        facebook : "https://www.facebook.com/",
        google : "https://www.youtube.com/channel/UCy3oPBCpp0b8_QFW3z8d-9w",
        twitter : "https://twitter.com/?lang=en",
        mainpage : false,
        videopage : true,
      });



    })
  })
};






exports.post_new_review = (req, res) => {
  console.log('hit post review route');

  connect.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }

    query = `INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}", CURRENT_TIMESTAMP(), "${req.body.id}", "${req.body.stars}");`;

    connect.query(query, (err, rows) => {
      if (err) {
        return console.log(err.message);
      }
      res.json(rows);
    })
  })
};


// router.post('/', function(req, res) {
//   console.log('post a review');
//
//   connect.query(, (error, data)=> {
//     if (error) {
//       console.log(error);
//     } else {
//       res.json(data);
//     }
//   });
// });
