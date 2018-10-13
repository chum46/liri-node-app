require("dotenv").config();
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var getTweets = function () {
    var params = { screen_name: 'KingJames' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            // console.log(tweets);
            // Attributes we want: 'text' associated with it and the 'created_at'
            // Loop through all of the tweets and then console log the attributes
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log(' ');
                console.log(tweets[i].text);
            }
        }
    });
}

var getSong = function (songName) {
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // Look at the first object
        console.log(data.tracks.items[0]);
    });
}

// Holds the query functions so it gets data from the inputed source only
var userQuery = function (caseData, functionData) {
    switch (caseData) {
        case 'my-tweets':
            getTweets();
            break;
        case "spotify-this-song":
            getSong(functionData);
            break;
        default:
            console.log('LIRI has no data to return')
    }
}

// Create a function that grabs arguments from user and pass to tweetQuery
var userArgs = function (arg1, arg2) {
    userQuery(arg1, arg2);
}

// For Twitter node liri.js my-tweets
userArgs(process.argv[2], process.argv[3]);










