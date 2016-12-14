const DOMAIN_URL = 'http://weibo.com';

var cookieString;
loadCookie((cookie) => {
  cookieString = cookie;
});

function loadCookie(callback) {
  if(cookieString) {
    callback(cookieString);
    return;
  }
  var cookieBuilder = '';
  chrome.cookies.getAll({ url: DOMAIN_URL }, (cookies) => {
    for (var i = 0; i < cookies.length; i++) {
      cookieBuilder += cookies[i].name + '=' + cookies[i].value + '; ';
    }
    callback(cookieBuilder);
  });
}
