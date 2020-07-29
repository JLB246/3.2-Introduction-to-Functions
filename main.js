/** Function Definitions **/

// This definition is here just as an example. No changes are necessary.
function square(x){
  return x * x;  
}

function smaller(x, y){
  if (x < y){
  return x;
}
  else if(y < x)
  return y;
}

function getFirst(array){
  return array[0]
  // return the first item from the array
}

function getLast(array){
  return array[4]
}

/** Example Invocations **/

// Write two example invocations of each function here, and log the results.
var result = square(5);
console.log(result);

result = square(6);
console.log(result);

result = square(7);
console.log(result);

result = square(8);
console.log(result);

result = square(9);
console.log(result);

result = square(10);
console.log(result);
