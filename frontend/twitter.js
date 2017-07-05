const FollowToggle = require("./follow_toggle.js");

$(function() {
  // new FollowToggle($('.follow-toggle'));
  let $followToggle = $('.follow-toggle');
  $followToggle.each((idx, el) => {
    new FollowToggle($(el));
  });
});
