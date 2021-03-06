var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insertOne: function(col, burgerChoice, cb){
		orm.insertOne("burgers", col, burgerChoice, function(res){
			cb(res);
		});
	},
	updateOne: function(col, whichBurger, cb){
		orm.updateOne("burgers", col, whichBurger, function(res){
			cb(res);
		});
	}
};

module.exports = burger;