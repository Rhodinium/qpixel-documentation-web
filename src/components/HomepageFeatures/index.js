import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Back Story",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        A little boy was born on 2004, 18 years later, he become obsessed with
        programming
      </>
    ),
  },
  {
    title: "Are you Lazy?",
    Svg: require("@site/static/img/me.png").default,
    description: (
      <>
        Yea. I do have another name before this, but I changed it, since I
        prefer getting called lazy dev rather than JustLazzy
      </>
    ),
    isimage: true,
    rounded: true,
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({
  Svg,
  title,
  description,
  isimage = false,
  rounded = false,
}) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {isimage && (
          <img
            src={Svg}
            className={`${styles.fImage} ${styles.fuck}`}
            style={rounded ? { borderRadius: "50%" } : {}}
          ></img>
        )}
        {!isimage && <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">Who am I?</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
