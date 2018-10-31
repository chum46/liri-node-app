# liri-node-app
### LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data.

## Setup
This requires a few steps before starting to run this application:
- Clone the repository
  - git clone https://github.com/chum46/liri-node-app
  - cd liri-node-app
- Install Node.js
  - Latest version: https://nodejs.org/en/
- Install the dependencies
  - npm install twitter
    - https://www.npmjs.com/package/twitter
  - npm install --save node-spotify-api
    - https://www.npmjs.com/package/node-spotify-api
  - npm install request
    - https://www.npmjs.com/package/request
    - Used to receive information from OMDB
  - npm install dotenv
    - https://www.npmjs.com/package/dotenv
    - Used to hide API Keys
- Create a .env file
  - #Spotify API keys
    SPOTIFY_ID=**your-spotify-id**
    SPOTIFY_SECRET=**your-spotify-secret**
    #Twitter API keys
    TWITTER_CONSUMER_KEY=**your-twitter-consumer-key**
    TWITTER_CONSUMER_SECRET=**your-twitter-consumer-secret**
    TWITTER_ACCESS_TOKEN_KEY=**your-access-token-key**
    TWITTER_ACCESS_TOKEN_SECRET=**your-twitter-access-token-secret**
  - NOTE: Insert the API keys you receive in the following step:
- Obtain API keys
  - https://apps.twitter.com/app/new
  - https://developer.spotify.com/my-applications/#!/

## Using the app
liri.js can take in one of the following commands:

    * node liri.js my-tweets
        - This will show your last 20 tweets and when they were created at in your terminal/bash window.

    * node liri.js spotify-this-song '<song name here>'
        - This will show the following information about the song in your terminal/bash window
            * Artist(s)
            * The song's name
            * A preview link of the song from Spotify
            * The album that the song is from

    * node liri.js movie-this '<movie name here>'
        - This will output the following information to your terminal/bash window:
            ```
            * Title of the movie.
            * Year the movie came out.
            * IMDB Rating of the movie.
            * Rotten Tomatoes Rating of the movie.
            * Country where the movie was produced.
            * Language of the movie.
            * Plot of the movie.
            * Actors in the movie.
            ```

    * node liri.js do-what-it-says
        -Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
