const APIUtil = {
  followUser: id => {
    // console.log(id);
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: "JSON",
      data: { user_id: id }
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: "JSON",
      data: { user_id: id }
    });
  },

  searchUsers: queryVal => {
    return $.ajax({
      url: `/users/search`,
      method: 'GET',
      dataType: "JSON",
      data: { query: queryVal }
    });
  }

};


module.exports = APIUtil;


// success: () => {
//   this.followState = "followed";
//   this.render();
// }
//
// success: () => {
//   this.followState = "unfollowed";
//   this.render();
// }
