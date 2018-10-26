window.onload = function () {

  // sample one

  // * generator, set up generator and set ready to use
  function* gen() {
    yield console.log("pear");
    yield console.log("banana");
    yield console.log("apple");
    console.log("all done");
  }

  // iterator  
  var myGen = gen();

  // run
  myGen.next();
  myGen.next();
  myGen.next();
  myGen.next();


  // sample two - pass values out

  function* gen() {
    yield "pear";
    yield "banana";
    yield "apple";
    return "all done";
  }

  var myGen = gen();

  // run
  console.log(myGen.next());
  console.log(myGen.next());
  console.log(myGen.next());
  console.log(myGen.next());


  // sample three - pass values back in

  function* gen() {
    var x = yield "pear";
    var y = yield "banana";
    var z = yield "apple";
    return x + y + z;
  }

  var myGen = gen();

  // run
  console.log(myGen.next());
  console.log(myGen.next(10));
  console.log(myGen.next(5));
  console.log(myGen.next(3));

}