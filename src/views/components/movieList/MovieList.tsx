import React from "react";
import { MovieListType } from "../../types/movieTypes";

type Props = { movieList: MovieListType };

const MovieList: React.FC<Props> = (props) => {
  const movieItem = props.movieList.map((Image) => {
    return <a>テスト</a>;
  });

  const movieList = props.movieList;
  console.log(movieList);

  // 映画のポスターを表示するところまで実装してください

  return <div>MovieList</div>;
};

export default MovieList;
