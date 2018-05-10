//Data sources that hold information of the friends
var friends = require('../data/friends.js');
//Routing

module.exports = function (app) {
	//API GET Requests
	app.get('/api/friends', function(req,res) {
		res.json(friends);
	});
	//API POST Requests
	//user submits the form, handles incoming survey results
	app.post('api/friends', function(req, res) {
		var match = {
			name: "",
			photo: "",
			friendDifference:100

		};
		//results of the user survey
	    var userResult = req.body;
	    var userName = userResult.name;
	    var userPhoto = userResult.photo;
	    var userScores = userResult.scores;
	    //var that calculates the difference between the user's scores and the scores of the friends in the database
	    var totalDifference = 0;
	    //looping through all th friends in the array
	    for (var i = 0; i < friends.length; i++) {
	    	console.log(friends[i].name);
            totalDifference = 0 ;
            //then looping through the scores of each friend

            for (var j = 0; j < friends[i].scores[j]; j++) {
			totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
            if (totalDifference <= match.friendDifference){
            	//Reset the match to be the new friend
            	match.name = friends[i].name;
            	match.photo = friends[i].photo;
            	match.friendDifference = totalDifference;

            }

            }
	    }
	    friends.push(userResult);
	    res.json(match);
	});
}
