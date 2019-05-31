export default function getSpecies(URL) {
  let result = 'test';
  fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      result = data.name;
      console.log(result);
      // return result;
    })
  return result;
}
