function flattenObject1( obj, prefix = "") {
    return Object.keys(obj).reduce((result, key) => {
      if (typeof obj[key] === "object") {
        result = { ...result, ...flattenObject1 (obj[key], prefix + key + ".") };
      } else {
        result[prefix + key] = obj[key];
      }
      return result;
    }, {}); 
  }
  
  // Define the input object
  let input1 = { a: { b: { c: 3, d: { e: 5 } } } };
  // Call the function and store the output
  let output1 = flattenObject1 (input1);
  // Print the output
  console.log(output1);
