(function(){
  var options = INSTALL_OPTIONS;

  var style = document.createElement('style');
  document.head.appendChild(style);

  var update = function(){
    style.innerHTML = options.css;
  }

  update();

  var setOptions = function(opts){
    options = opts;

    update();
  }

  INSTALL_SCOPE = {
    setOptions: setOptions
  }
})();
