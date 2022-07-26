import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import styles from "./Top.module.scss";
import MovieList from "../../components/movieList/MovieList";
import { MovieListType } from "../../types/movieTypes";

const Top: React.FC = () => {
  const [movieList, setMovieList] = useState<MovieListType>([
    { id: 0, poster_path: "", title: "", overview: "" },
  ]);
  const ApiKey = process.env.REACT_APP_MOVIE_APIKEY;
  // 第一引数：uesEffect内で発火させたい（自動で発火させたい）関数を定義
  // 第二引数：関数の発火タイミングを定義
  useEffect(() => {
    // 自動的に発火させたい関数を定義
    const fetchTrendMovies = async () => {
      try {
        //変数名responseなどにすること
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day",
          {
            params: {
              api_key: ApiKey,
            },
          }
        );
        // 映画の情報の一覧を配列で取得する。
        const movies = response.data.results;
        setMovieList(movies);
      } catch (error) {
        alert("情報取得が失敗しました");
      }
    };
    // 関数を発火
    fetchTrendMovies();
  }, [ApiKey]);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <MovieList movieList={movieList} />
        <img
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          // alt={item.title}
        />
      </main>
    </div>
  );
};

export default Top;

// import axios from "axios";

// export default axios.create({
//   baseURL: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
// });

// https://developers.themoviedb.org/3/trending/get-trending
