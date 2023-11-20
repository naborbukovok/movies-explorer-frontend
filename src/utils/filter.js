export const filter = (input, isShort, movies) => {
  if (movies.length === 0) {
    return null;
  } else if (input.length === 0 && !isShort) {
    return movies;
  } else {
    const keywords = input.toLowerCase().split(" ");
    return movies.filter((movie) => {
      let isMatching = false;
      for (let i = 0; i < keywords.length; ++i) {
        if (
          movie.nameRU.toLowerCase().includes(keywords[i]) ||
          movie.nameEN.toLowerCase().includes(keywords[i])
        ) {
          isMatching = true;
          break;
        }
      }
      return isMatching && ((isShort && movie.duration <= 40) || !isShort);
    });
  }
};
