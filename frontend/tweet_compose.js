const APIUtil = require("./api_util.js");

class TweetCompose {

  constructor (el) {
    this.$el = $(el);
    this.content = this.$el.find('textarea');
    this.mentionedUserIds = this.$el.find('select');
    this.submitInput = this.$el.find('input[type=submit]');
    this.submitInput.on("click", (event) => this.submit(event));
  }

  submit(event) {
    event.preventDefault();

    const jsonData = this.$el.serializeJSON();

    APIUtil.createTweet(jsonData);
  }

}
