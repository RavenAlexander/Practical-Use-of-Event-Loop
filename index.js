let counter = 0;
function inc () {
    counter++;
    return inc();
}

try { 
    inc();
    
} catch (error) {
    console.log(error);
    console.log(counter);
}

//Example
const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// const flatten = (arr) => {
    
// }

function flatten(arr) {
    return arr.reduce((acc, val) => {
      if (Array.isArray(val)) {
        return acc.concat(flatten(val));
      } else {
        return acc.concat(val);
      }
    }, []);
  }