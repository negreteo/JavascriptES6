window.onload = function () {

  // first sample

  function log(num = 10) {
    console.log(num);
  }

  log(); // using default parameter
  log(5);


  // second sample

  function logNinja(name = "Ryu", belt = "Red", age = 25) {
    console.log("My name is", name, "and my belt color is", belt, "and my age is", age);
  }

  logNinja("Rhy", "Black", 28);
  logNinja();

}