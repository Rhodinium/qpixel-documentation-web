import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MyImage from "../../static/img/me.png";

import styles from "./index.module.css";
import AboutMe from "../components/AboutMe";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img
          src={MyImage}
          alt="Logo"
          style={{
            width: "230px",
            borderRadius: "50%",
            border: "2px solid black",
            boxSizing: "border-box",
            userSelect: "none",
            backgroundColor: "white",
          }}
        ></img>
        <h1 className="hero__title" style={{ color: "white" }}>
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/">
            Read the docs 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      // description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}

        {/* Will need this later */}
      </main>
    </Layout>
  );
}
