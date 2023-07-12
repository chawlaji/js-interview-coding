
// MAP polyfill
Array.prototype.map2 = function (cbfcn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cbfcn.call(undefined,this[i], i, this));
  }
  return result;
};

console.log([1, 2, 4, 6, 7].map2((x, i, arr) => x + i));

console.log(
  [1, 2, 4, 6, 7].map((x,i) => {
    return x + i;
  })
);

//FILTER.Polyfill
Array.prototype.filter2 = function (cbfcn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cbfcn.call(undefined,this[i], i, this)) result.push(this[i]);
  }
  return result;
};

console.log(
  [1, 2, 4, 6, 7].filter2((x) => {
    return x > 2;
  })
);
console.log(
  [1, 2, 4, 6, 7].filter((x) => {
    return x > 2;
  })
);

// REDUCE Polyfill
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      if (accumulator) {
        accumulator = callback.call(undefined,accumulator, this[i], i, this);
      } else {
        accumulator = this[i];
      }
    }
    return accumulator;
  };
  const arr = [1, 2, 3, 4];
  console.log(arr.myReduce((total, elem) => total + elem));
  console.log(arr.myReduce((prod, elem) => prod * elem));
