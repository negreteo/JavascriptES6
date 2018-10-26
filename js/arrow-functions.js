window.onload = function () {

  // Sample One

  // FROM
  // var ninjaGreeting = function (name) {
  //   console.log(`${name} says hiiiiiya`);
  // };

  // TO
  var ninjaGreeting = name => console.log(`${name} says hiiiiiya`);
  ninjaGreeting("Ryu");


  // Sample Two

  // FROM
  // var ninja = {
  //   name: "Ryu",
  //   chop(x) {
  //     var _this = this;
  //     window.setInterval(function () {
  //       if (x > 0) {
  //         console.log(_this.name, "chopped the enemy");
  //         x--;
  //       }
  //     }, 1000)
  //   }
  // };

  // TO
  var ninja = {
    name: "Ryu",
    chop(x) {
      window.setInterval(() => {
        if (x > 0) {
          console.log(this.name, "chopped the enemy");
          x--;
        }
      }, 1000)
    }
  };


  ninja.chop(5);

}