import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import styles from "./Pages.module.scss";

// type = {};

const Pages: React.FC = () => {
  const [movieList, setMovieList] = useState();
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

  console.log(movieList);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}></main>
    </div>
  );
};

export default Pages;

// https://developers.themoviedb.org/3/trending/get-trending
