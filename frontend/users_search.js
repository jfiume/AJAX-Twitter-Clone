const APIUtil = require("./api_util.js");

class UsersSearch {

  constructor (el) {
    this.$el = $(el);
    this.input = this.$el.find('input');
    this.ul = this.$el.find('.users');
    this.input.on("input", this.handleInput.bind(this));
  }

  renderResults(users) {
    this.ul.empty();
    users.forEach( user => {
      let $li = $("<li></li>");
      $li.text(user.username);
      this.ul.append($li);
    });
  }

  handleInput() {
    APIUtil.searchUsers(this.input.val()).then(users => this.renderResults(users));
  }
}

module.exports = UsersSearch;
