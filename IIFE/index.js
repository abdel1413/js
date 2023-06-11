/**
 * Using Mixin that takes object as param and
 * uses that param to create a function
 *
 */

function glidMixin(obj) {
  obj.glide = function () {
    console.log("the fish is glidding in water");
  };
}

function flightMixin(obj) {
  obj.fly = function () {
    console.log("planes are flying in the air");
  };
}
