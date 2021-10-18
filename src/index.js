function joinElements(array, joinString) {
  // array: "s", "cr", "t code", " :) :)"
  // join string: "e"
  function recurse(index, resultSoFar) {
    // index = 0; resultSoFar = " ";
    resultSoFar += array[index]; // resultSoFar = "s" => "se" => "secr" => "secret cod "

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString); //1, "se" => 2, "secre" => 3, "secret code"
    }
  }

  return recurse(0, ""); //call function, intilalizing it with a coupl values
}

joinElements(["s", "cr", "t code", " :) :)"], "e");

//we have two arguments that are passed
//1st. is add the resultSoFar ( empty string) we wanna give it the firs value, which is "s".
