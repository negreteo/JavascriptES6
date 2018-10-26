window.onload = function () {

  var name = "Crystal";
  var belt = "Black";

  // ES5
  // var ninja = {
  //   name: name,
  //   belt: belt,
  //   chop: function (x) {
  //     console.log(`you chopped the enemy ${x} times`);
  //   }
  // };

  // ES6
  var ninja = {
    name,
    belt,
    chop(x) {
      console.log(`you chopped the enemy ${x} times`);
    }
  };

  console.log(ninja.name);
  console.log(ninja.chop(5));

}