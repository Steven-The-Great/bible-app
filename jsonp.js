// simple module/wrapper for doing JSONP requests
var $JSONP = (function() {
  function GET(url, callback) { // this is a string reference to the callback function and not the function itself
    var script = document.createElement('script');
    var query = (url.indexOf('?')) === -1 ? '?' : '&';
    script.setAttribute('src', url + query + 'callback=' + callback);
    script.onload = function() {
      document.head.removeChild(script);
    }
    document.head.appendChild(script);
  }

  return {
    GET
  }
})();