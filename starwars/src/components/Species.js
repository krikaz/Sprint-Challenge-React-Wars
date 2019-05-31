export default function getSpecies(URL) {
  let result = 'test';
  fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      result = data.name;
      console.log(result); // <=== I want the function to return this
      // return result;
    })
  return result;
}

// export default function getSpecies(URL) {
//   let result = URL => {
//     fetch(URL)
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         let test = data.name;
//         // console.log(result);
//         // return result;
//       });
//       return test;
//   };
//   console.log(result);

//   return result;
// }
