require("dotenv").config();
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require('request');
var fs = require('file-system');
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
            console.log('----------------------');
            for (var i = 0; i < tweets.length; i++) {
                
                console.log(tweets[i].created_at);
                console.log(' ');
                console.log(tweets[i].text);
                console.log('----------------------');
            }
        }
    });
}

var getArtists = function (artist) {
    return artist.name;
}

var getSong = function (songName) {
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // Look at the first object
        // console.log(data.tracks.items[0]);

        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log('artist(s): ' + songs[i].artists.map(
                getArtists));
            console.log('song name: ' + songs[i].name);
            console.log('preview song: ' + songs[i].preview_url);
            console.log('album: ' + songs[i].album.name);
            console.log('----------------------------------');
        }
    });
}

var getMovie = function (movieName) {
    request('http://www.omdbapi.com/?t=' + movieName + '&apikey=trilogy', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var jsonData = JSON.parse(body);
            console.log('Title: ' + jsonData.Title);
            console.log('Year: ' + jsonData.Year);
            console.log('IMDB Rating: ' + jsonData.Ratings[0].Value);
            console.log('Rotten tomato rating: ' + jsonData.Ratings[1].Value);
            console.log('Country: ' + jsonData.Country);
            console.log('Language: ' + jsonData.Language);
            console.log('Plot: ' + jsonData.Plot);
            console.log('Actors: ' + jsonData.Actors);
        }
    });
}

var doWhatItSays = function () {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err) throw err;

        // Create an array of 2 indices from file split with a comma

        var dataArray = data.split(',');
        
        if (dataArray.length == 2) {
            userQuery(dataArray[0], dataArray[1]);
        } else if (dataArray.length == 1) {
            userQuery(dataArray[0]);
        }
    });
}

// Holds the query functions so it gets data from the inputed source only
var userQuery = function (caseData, functionData) {
    switch (caseData) {
        case 'my-tweets':
            getTweets();
            break;
        case 'spotify-this-song':
            getSong(functionData);
            break;
        case 'movie-this':
            getMovie(functionData);
            break;
        case 'do-what-it-says':
            doWhatItSays();
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










