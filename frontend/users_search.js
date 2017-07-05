const APIUtil = require("./api_util.js");

class UsersSearch {

  constructor (el) {
    this.$el = $(el);
    this.input = this.$el.find('input');
    this.ul = this.$el.find('ul');
  }

  inputSuccess() {
    
  }

  handleInput() {
    APIUtil.searchUsers(this.input, this.inputSuccess);
  }
}

module.exports = APIUtil;
