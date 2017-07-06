const APIUtil = require("./api_util.js");

class TweetCompose {

  constructor (el) {
    this.$el = $(el);
    this.content = this.$el.find('textarea');
    this.mentionedUserIds = this.$el.find('select');
    this.submitInput = this.$el.find('#tweetSubmit');
    this.submitInput.on("click", this.submit.bind(this));
  }

  submit(event) {
    event.preventDefault();

    const jsonData = this.$el.serializeJSON();
    // const jsonData = {content: this.content, mentioned_user_ids: []};

    APIUtil.createTweet(jsonData);
  }

}

module.exports = TweetCompose;
