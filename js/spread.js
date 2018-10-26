window.onload = function () {

  // sample one
  var meats = ["ham", "salami", "bacon"];

  console.log(...meats);

  // sample two
  var nums1 = [1, 2, 3];
  var nums2 = [nums1, 4, 5, 6];
  var nums3 = [...nums1, 4, 5, 6];

  console.log(nums2);
  console.log(nums3);

  // sample three
  var nums = [3, 5, 7];

  function addNums(a, b, c) {
    console.log(a + b + c);
  }

  addNums(...nums);
}