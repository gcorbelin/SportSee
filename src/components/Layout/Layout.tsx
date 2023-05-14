import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";
import Header from "@/components/Header/Header";
import Aside from "@/components/Aside/Aside";
import styles from "@/styles/Layout.module.css";

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`${title} | SportSee`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className={styles["main-wrapper"]}>
        <Aside />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
