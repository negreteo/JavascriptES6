window.onload = function () {

  var str = "graaaaaavy ";
  console.log(str.repeat(5));

  var str = "goodbye";
  console.log(str.startsWith("good"));
  console.log(str.startsWith("bye", 4));

  var str = "goodbye";
  console.log(str.endsWith("bye"));
  console.log(str.endsWith("good", str.length - 3));

  var youSay = "goodbye";

  if (youSay.startsWith("goodbye")) {
    var iSay = "hello";
  }

  console.log(`you say ${youSay}, I say ${iSay}`);

  var test = "My name is Ryu";

  console.log(test.includes("names"));

  /* NEW STRING METHODS
  - repeat
  - startsWith
  - endsWith
  - includes
  */

}