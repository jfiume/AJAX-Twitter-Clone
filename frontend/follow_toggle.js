const APIUtil = require("./api_util.js");

class FollowToggle {

  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on('click', event => this.handleClick(event));
  }

  render() {
    if (this.followState === "following" || this.followState === "unfollowing") {
      this.$el.prop("disabled", true);
    } else if (this.followState === "unfollowed") {
      this.$el.prop("disabled", false);
      this.$el.text("Follow!");
    } else {
      this.$el.prop("disabled", false);
      this.$el.text("Unfollow!");
    }
  }

  followSuccess() {
    this.followState = "followed";
    this.render();
  }

  unfollowSuccess() {
    this.followState = "unfollowed";
    this.render();
  }

  handleClick(event) {
    event.preventDefault();
    if (this.followState === "unfollowed"){
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId)
      .then(this.followSuccess.bind(this));
    } else {
      this.followState = "unfollowing";
      this.render();
      APIUtil.unfollowUser(this.userId)
      .then(this.unfollowSuccess.bind(this));
      }
  }

}

module.exports = FollowToggle;
