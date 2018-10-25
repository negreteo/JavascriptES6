window.onload = function () {

  // sample 1
  var x = 10;

  if (x > 5) {
    let x = 5; // lexical scope, only works within code block
    console.log("inside", x)
  }

  console.log("outside", x);

  // sample 2

  var items = document.getElementsByTagName("li");

  // will not create a global variable, local scope will be applied
  for (let x = 0; x < items.length; x++) {
    items[x].onclick = function () {
      console.log(x);
    };
  };


}