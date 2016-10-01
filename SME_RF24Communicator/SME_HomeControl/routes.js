module.exports = {
	define: function (app, res) {
		app.get("/", function(req, res){
			res.render("home");
		});
		app.get("/livingroom", function(req, res){
			res.render("livingroom");
		});
		app.get("/bedroom", function(req, res){
			res.render("bedroom");
		});
		/*
		app.get("/bedroomOptions", function(req, res){
			res.render("bedroomOptions");
		});
		*/
		app.get("/floor", function(req, res){
			res.render("floor");
		});
		app.get("/vibcontrol", function(req, res){
			res.render("vibcontrol");
		});
	}
};
