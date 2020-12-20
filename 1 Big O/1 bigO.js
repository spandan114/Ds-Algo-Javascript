// O(f(n)) if the number of simple operation the computer 
// has to do is eventually less than aconstant times f(n) as n increases

//f(n) could be linear (f(n) = n)
//f(n) could be quadratic (f(n) = n^2)
//f(n) could be constant (f(n) = 1)
//f(n) could be somthing entirely different 

function addUpTo(n) {
    return n * (n + 1) / 2; 
  }
//always 3 operation (*,+,/) O(1)


function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  //number of operation bounded by multiple of n O(n)

  function countUpAndDown(n) {
    console.log("Going up!");
    for (var i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (var j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
  }
  //O(n) only take the fasted growing term
  
  function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
  }
  //O(n^2)

//NOTE: Constants doesn't matter
//   ex: O(2n) = O(n)
//   ex: O(500) = O(1)
//   ex: O(n+100) = O(n)
//   ex: O(n^2+5n+8) = O(n^2) only tahe the fistest growing term

//Logarithmic complexity

function numberOfHalves(n) {
  var count = 0;
  while (n > 1) {
    n /= 2;
    count++;
  }
  return count;
}
//O(log(n))