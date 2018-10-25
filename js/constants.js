window.onload = function () {

  const pi = 3.142;
  //pi = 10; // error
  console.log(pi);

  function calcArea(r) {
    const pi = 5; // re-declaring in function is allowed
    console.log("new local pi version: ", pi);
    console.log("The area is: ", pi * r * r);
  }

  calcArea(5);

}