(function () {
  var options = INSTALL_OPTIONS

  var style = document.createElement('style')
  document.head.appendChild(style)

  function updateStyle () {
    style.innerHTML = options.css
  }

  updateStyle()

  window.INSTALL_SCOPE = {
    setOptions: function (nextOptions) {
      options = nextOptions

      updateStyle()
    }
  }
})()
