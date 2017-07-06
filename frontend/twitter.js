const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");
const TweetCompose = require("./tweet_compose.js");

$(function() {
  // new FollowToggle($('.follow-toggle'));
  let $followToggle = $('.follow-toggle');
  $followToggle.each((idx, el) => {
    new FollowToggle(el);
  });

  let $usersSearch = $('.users-search');
  $usersSearch.each((idx, el) => {
    new UsersSearch(el);
  });

  let $tweetCompose = $('.tweet-compose');
  $tweetCompose.each((idx, el) => {
    new TweetCompose(el);
  });
});
