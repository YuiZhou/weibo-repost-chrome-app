hackFeedItem();

function hackFeedItem() {
  // console.log($('[action-type=feed_list_item]').children('.WB_feed_handle').children('.WB_handle').children('ul'));
  // console.log($('[action-type=feed_list_item]').attr('mid'));

  // the button line's each element should has width 20% rather than 25%, since there is a new member
  $('.WB_row_r4 li').css({ 'width': '20%' });

  // each post has action-type = feed_list_item
  // the controller for a post is in .WB_feed_handle .WB_handle ul
  var ul = $('[action-type=feed_list_item]').children('.WB_feed_handle').children('.WB_handle').children('ul');
  $(ul).each(function (index) {
    var repost = $(this).children('li:nth-child(2)').clone();
    // todo: change the repost's behavior
    // console.log(repost);
    $(repost).appendTo($(this));
  });

}
