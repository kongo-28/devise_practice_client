import * as React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { withAuthServerSideProps } from "../lib/auth";

export const getServerSideProps: GetServerSideProps =
  withAuthServerSideProps("/api/v1/home");

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>HOME</h1>
          <p className={styles.description}>ホーム画面です</p>
        </main>
      </div>
    </>
  );
};

export default Home;
