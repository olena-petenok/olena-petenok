import React, { useContext } from "react";

import { AboutAuthorContext } from "./AboutAuthorContext";

import PortraitImage from "../../images/about-author/portrait.jpg";

import "./about-author.sass";

const PhotoAboutAuthor = () => (
  <section className="uk-width-1-1 uk-width-1-4@s">
    <div className="portrait-image-block">
      <div className="portrait-image-shadow">
        <img
          src={`/${PortraitImage}`}
          alt="portrait"
          className="portrait-image parallelogram-block-shadow"
        />
      </div>
    </div>
  </section>
);

const VerticalAboutAuthorBlockText = ({ text = "" }) => (
  <p className="text-item-colors-underline active">{text}</p>
);

const VerticalAboutAuthorBlockTextLink = ({ href = "", text = "" }) => (
  <p className="text-item-colors-underline active">
    <a href={href} target="_blank" className="text-item-colors-underline-link">
      {text}
    </a>
  </p>
);

const VerticalAboutAuthorBlock = ({
  text = [],
  ukWidth = "",
  subtitle = "",
}) => {
  const mainText =
    text?.length &&
    text?.map((item) => {
      if (item?.href === "") {
        return (
          <VerticalAboutAuthorBlockText key={item?.id} text={item?.value} />
        );
      } else {
        return (
          <VerticalAboutAuthorBlockTextLink
            key={item?.id}
            text={item?.value}
            href={item?.href}
          />
        );
      }
    });

  return (
    <div className={`uk-width-${ukWidth}`}>
      <div className="text-block parallelogram-block-shadow parallelogram-block-transition">
        <p className="subtitle-text text-item-colors-underline">{subtitle}</p>

        <div className="main-text">{mainText}</div>
      </div>
    </div>
  );
};

const HorizontalAboutAuthorBlock = ({
  blocks = [],
  ukWidth = "",
  title = "",
}) => (
  <section className={`uk-width-${ukWidth}`}>
    <div className="double-text-block">
      <h1 className="title-text text-item-colors-underline">{title}</h1>

      {blocks?.length && (
        <div className="uk-grid">
          {blocks.map((item) => (
            <VerticalAboutAuthorBlock
              key={item.id}
              ukWidth={item.ukWidth}
              subtitle={item.subtitle}
              text={item.text}
            />
          ))}
        </div>
      )}
    </div>
  </section>
);

const AboutAuthorLogics = () => {
  const data = useContext(AboutAuthorContext);

  return (
    <section className="main-background about-author">
      <div className="uk-container">
        <div className="uk-grid">
          <PhotoAboutAuthor />

          {data?.aboutAuthor?.length &&
            data.aboutAuthor.map((item) => (
              <HorizontalAboutAuthorBlock
                key={item.id}
                ukWidth={item.ukWidth}
                upDown={item.upDown}
                title={item.title}
                blocks={item.blocks}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAuthorLogics;
