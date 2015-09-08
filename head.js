// Modified from http://git.io/vZ3Oj
(function(){
  var options = INSTALL_OPTIONS;

  if (document.createStyleSheet) {
    var sheet = document.createStyleSheet();
    sheet.cssText = options.css;
  } else {
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = options.css;
    } else {
      style.appendChild(document.createTextNode(options.css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
  }
})();
