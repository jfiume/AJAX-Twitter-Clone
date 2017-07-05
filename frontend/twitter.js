const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

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
});
