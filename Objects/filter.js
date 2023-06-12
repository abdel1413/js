const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

function filter(arr) {
  return arr.filter(({ age }) => age < 30);
}

// save arra object in fliteredList wchich
//has key title and rating. Note ouput only
//where rate equal or heigher than 8.0

// without destructure
function filteredList(arr) {
  return arr
    .filter((movie) => parseFloat(movie["imdbRating"] >= 8.0))
    .map((movie) => {
      return {
        title: movie["Title"],
        rating: movie["imdbRating"],
      };
    });
}

//with destructure
const filteredList = watchList
  .map(({ Title: title, imdbRating: rating }) => ({ title, rating }))
  .filter((r) => Number(r.rating >= 8.0));

//using destructure
const filteredList = watchList
  .filter(({ imdbRating }) => imdbRating >= 8.0)
  .map(({ Title: title, imdbRating: rating }) => ({ title, rating }));
