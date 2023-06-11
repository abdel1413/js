//build a module with thos two function using IIFE;
(function () {
  return {
    glidMixin: function (obj) {
      obj.glide = function () {
        console.log("fish glidding in water");
      };
    },
    flightMixin: function (obj) {
      obj.fly = function () {
        console.log("plane fly in the air");
      };
    },
  };
})();
