var request = require('request');
var cheerio = require('cheerio');
var async = require('async');


request('https://www.bop.gov/locations/list.jsp', function (error, response, data) {
  console.log(data);
  var $ = cheerio.load(data);
  console.log($('.padded-list').text());
});

// request('http://www.visitseattle.org/', function(error, response, data){
// 	// console.log(data);
// 	var $ = cheerio.load(data);
// 	// console.log($('h2').text());
// 	// console.log($('.text-medium-small').text());
// 	var neighborhoods = $('.text-medium-small').map(function(index, element){
// 		return {
// 			name: $(element).text(),
// 			link: $(element).closest('a').attr('href'),
// 		}
// 	}).get();
// 	console.log(neighborhoods);
// });

// function fn1(callback){
// 	console.log(1);
// 	callback(null, "first");
// }

// function fn2(callback){
// 	console.log(2);
// 	callback(null, "second");
// }

// function fn3(callback){
// 	console.log(3);
// 	callback(null, "third");
// }

// async.series([fn3, fn2, fn1], function(err, results){
// 	console.log("DONE!!!");
// 	console.log(results);
// });

// function fn1(callback){
// 	setTimeout(function(){
// 		console.log(1);
// 		callback(null, "first");
// 	}, 5000)
// }

// function fn2(callback){
// 	setTimeout(function(){
// 		console.log(2);
// 		callback(null, "second");
// 	}, 1000)
// }

// function fn3(callback){
// 	setTimeout(function(){
// 		console.log(3);
// 		callback(null, "third");
// 	}, 50000)
// }

// async.parallel([fn1, fn2, fn3], function(err, results){
// 	console.log("DONE!!!");
// 	console.log(results);
// });

// function fn1(callback){
// 	var initial = 55;
// 	callback(null, initial);
// }

// function fn2(num1, callback){
// 	num1 += 5;
// 	callback(null, num1);
// }

// function fn3(num1, callback){
// 	num1 += 40;
// 	callback(null, num1);
// }

// async.waterfall([fn1, fn2, fn3], function(error, results){
// 	console.log("DONE!!");
// 	console.log(results);
// });

// var urlsToGet=["http://www.reddit.com/search.json?q=politics", "http://www.reddit.com/search.json?q=kittens", "http://www.reddit.com/search.json?q=youtubehaiku"];

// var getFirstTitle = function(url, callback){
// 	request(url, function(err, response, data){
// 		var firstTitle = JSON.parse(data).data.children[0].data.title;
// 		callback(null, firstTitle);
// 	});
// };

// async.concat(urlsToGet, getFirstTitle, function(err, results){
// 	console.log(results);
// });