import React, { useContext } from "react";

import { IndexContext } from "./IndexContext";

import "./index.sass";

const VerticalIndexBlockText = ({ value = "" }) => (
  <p className="element-text">{value}</p>
);

const VerticalIndexBlock = ({
  text = "",
  ukWidth = "",
  src = "",
  alt = "",
  title = "",
}) => (
  <div className={`uk-width-${ukWidth}`}>
    <div className="services-block parallelogram-block-shadow parallelogram-block-transition">
      <img src={src} alt={alt} className="element-round-image" />

      <p className="element-title">{title}</p>

      {typeof text === "string" ? (
        <VerticalIndexBlockText value={text} />
      ) : (
        text.map((item) => (
          <VerticalIndexBlockText key={item?.id} value={item?.value} />
        ))
      )}
    </div>
  </div>
);

const HorizontalIndexBlock = ({ title = "", blocks = [] }) => (
  <div className="uk-container">
    <div className="uk-grid">
      <div className="uk-width-1-1">
        <h1 className="block-title">{title}</h1>

        {blocks?.length && (
          <div className="uk-grid">
            {blocks?.map((item) => (
              <VerticalIndexBlock
                key={item?.id}
                ukWidth={item?.ukWidth}
                src={item?.src}
                alt={item?.alt}
                title={item?.title}
                text={item?.text}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

const IndexLogics = () => {
  const data = useContext(IndexContext);

  return data?.index?.length ? (
    <section className="main-background services">
      {data.index.map((item) => (
        <HorizontalIndexBlock
          key={item?.id}
          title={item?.title}
          blocks={item?.blocks}
        />
      ))}
    </section>
  ) : null;
};

export default IndexLogics;
