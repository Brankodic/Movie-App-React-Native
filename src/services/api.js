export const getMovieListUrl = (API_KEY) => {
  return `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
};
export const getSingleMovieUrl = (API_KEY, movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
};

export async function getData(url) {
  let res = await fetch(url);
  return res
    .json()
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}

export async function postData(url, item) {
  let res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(item),
  });
  return res
    .json()
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}
