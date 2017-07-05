const APIUtil = require("./api_util.js");
const FollowToggle = require("./follow_toggle.js");

class UsersSearch {

  constructor (el) {
    this.$el = $(el);
    this.input = this.$el.find('input');
    this.ul = this.$el.find('.users');
    this.input.on("input", this.handleInput.bind(this));
  }

  renderResults(users) {
    this.ul.empty();
    console.log(users);
    users.forEach( user => {
      let $li = $("<li></li>");
      let $button = $("<button></button>");
      let options = { userId: user.id, followState: user.followed ? "followed" : "unfollowed" };
      new FollowToggle($button, options);
      $li.text(`${user.username}`);
      $li.append($button);
      this.ul.append($li);
    });
  }

  handleInput() {
    APIUtil.searchUsers(this.input.val()).then(users => this.renderResults(users));
  }
}

module.exports = UsersSearch;
