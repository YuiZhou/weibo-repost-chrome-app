const DOMAIN_URL = 'http://weibo.com';

var cookieString;
loadCookie();

function loadCookie() {
  var cookieBuilder = '';
  chrome.cookies.getAll({ url: DOMAIN_URL }, (cookies) => {
    for (var i = 0; i < cookies.length; i++) {
      cookieBuilder += cookies[i].name + '=' + cookies[i].value + '; ';
    }
    cookieString = cookieBuilder;
    // console.log(cookieString);
  });
}

