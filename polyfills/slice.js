if (!Array.prototype.slice) {
  Array.prototype.slice = function (start, end) {
    const length = this.length;
    start = start >= 0 ? start : Math.max(length + start, 0);
    end = end === undefined ? length : end >= 0 ? end : length + end;

    const result = [];
    for (let i = start; i < Math.min(end, length); i++) {
      result[result.length] = this[i];
    }
    return result;
  };
}

var arr = [1, 2, 3];
// Array.prototype.slice
var sliced = arr.slice(1);
console.log(sliced); // 


// basic implemenatation
// const slicez =  (array,start , end) => {
//     const length = array.length;
//      start = start >= 0 ? start :0;
//      end = end ?? length;
  
//       const result = [];
//       for (let i = start; i < end; i++) {
//         result[result.length] = array[i];
//       }
//       return result;
//     };

const slicez =  (array,start = 0, end= array.length) => {
      const result = [];
      for (let i = start; i < end; i++) {
        result[result.length] = array[i];
      }
      return result;
    };
