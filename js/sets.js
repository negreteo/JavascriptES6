window.onload = function () {

  // sample one

  // set of unique values
  var names = new Set();

  // removes duplicate values automatically
  names.add("Shaun").add("Ryu").add("Crystal").add("Ryu");

  console.log(names);
  console.log(names.size);

  names.delete("Crystal"); // returns true

  console.log(names);
  console.log(names.size);

  console.log(names.has("Ryu"));
  console.log(names.has("Crystal"));

  names.clear();

  console.log(names);
  console.log(names.size);


  // sample two

  var ninjas = ["Shaun", "Crystal", "Yoshi", "Ryu", "Yoshi", "Ryu"];

  var refinedNinjas = new Set(ninjas);

  console.log(refinedNinjas);

  ninjas = [...refinedNinjas];

  console.log(ninjas);


}