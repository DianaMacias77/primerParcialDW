const express = require('express');
const Twitter = require('twit');
const app = express();
 
app.listen(3000, () => console.log('Server running'))

const apiclient = new Twitter({
    consumer_key: '9WaaHmXgHXEdT4kaD2YYazIpy',
    consumer_secret: 'xiFKE4SRhj2HPVtHjRW7F4cTYeu000nVHc0LsnOckzlQu5t8z9',
    access_token: '1538545355914092546-8xXIyMdVReQCEbusqehUic4C6knRL8',
    access_token_secret: 'nCF99yaPgpIK7Mdfl1vD1fvSIbqDEa3BKYuFO5xjVM1Xv'
  });
  app.get('/home_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
   
    client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
         
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
});
app.get('/mentions_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
   
    client
      .get(`statuses/mentions_timeline`, params)
      .then(timeline => {
       
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});
app.post('/post_tweet', (req, res) => {
 
    tweet = req.body;
     
      client
        .post(`statuses/update`, tweet)
        .then(tweeting => {
          console.log(tweeting);
           
          res.send(tweeting);
        })
   
       .catch(error => {
        res.send(error);
      });
         
      
  });