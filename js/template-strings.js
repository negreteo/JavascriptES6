window.onload = function () {
  // sample one

  var temp = `hello, 

      my name is Ryu`;

  console.log(temp);


  // sample two

  function logNinja(name, age) {
    console.log("my name is", name, "and my age is", age);
    console.log(`my name ud ${name} and my age is ${age}`);
    console.log(`my name ud ${name} and my age is ${10+9}`);
  }

  logNinja("Ryu", 24);
}