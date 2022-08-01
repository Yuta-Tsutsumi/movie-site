import React from "react";
import { MovieListType } from "../../types/movieTypes";
import MovieItem from "../movieItem/MovieItem";
import styles from "./MovieList.module.scss";

// ここでMovieListコンポーネントにわたすべきPropsの型を定義している
type Props = { movieList: MovieListType };

const MovieList: React.FC<Props> = (props) => {
  // 今からこのデータを1つ1つMolvieItemに渡していく
  const movieList = props.movieList;

  // movieList配列（20個のデータ）の情報を1つ1つ展開したい
  return (
    <div className={styles.root}>
      {movieList.map((movie) => {
        return <MovieItem item={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default MovieList;
