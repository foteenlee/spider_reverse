
(function () {
  var cookie_data = document.cookie;
  Object.defineProperty(document, 'cookie', {
      set: function (value) {
          if (value.indexOf('键') != -1) {
              debugger
          }
      },
      get: function () {
          return cookie_data;
      }
  })
})