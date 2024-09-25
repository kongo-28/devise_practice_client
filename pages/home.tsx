import * as React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { withAuthServerSideProps } from "../lib/auth";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps =
  withAuthServerSideProps("/api/v1/home");

const Home = (props) => {
  const router = useRouter();
  //////////////////ログアウト機能/////////////
  const handleLogout = async () => {
    console.log("aaaa");
    try {
      await axios.delete("http://localhost:3000/api/v1/auth/sign_out", {
        headers: {
          uid: Cookies.get("uid"),
          client: Cookies.get("client"),
          "access-token": Cookies.get("access-token"),
        },
      });
      router.reload();
    } catch (err) {
      alert("削除に失敗しました");
    }
  };
  //////////////////ログアウト機能/////////////

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>ようこそ{props.email}さん</h1>
          <h1 className={styles.title}>HOME</h1>
          <p className={styles.description}>ホーム画面です</p>{" "}
          <button onClick={handleLogout}>Logout</button>
        </main>
      </div>
    </>
  );
};

export default Home;
