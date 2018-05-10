//including the path package to get the right file path for html
var path = require("path");
//Routing
module.exports = function(app){
	//HTML GET Request
	app.get('/survey', function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
	//defaults to home page if picks other URL
	app.use(function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/home.html'));

	});
}
