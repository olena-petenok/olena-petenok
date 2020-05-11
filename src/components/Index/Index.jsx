import React, { useContext } from 'react';

import './index.sass';
import { indexLanguages, IndexContext } from './IndexContext';

function VerticalIndexBlockText(props) { return ( <p className="element-text">{props.value}</p> ); }

function VerticalIndexBlock(props) {
  let text = '';
  if (typeof props.text === "undefined") { }
  else if (typeof props.text === "string") { text = <VerticalIndexBlockText value={props.text} /> }
  else { text = props.text.map(item => <VerticalIndexBlockText key={item.id} value={item.value} /> ); }

  return (
    <div className={`uk-width-${props.ukWidth}`}>
      <div className="services-block parallelogram-block-shadow parallelogram-block-transition">
        <img src={props.src} alt={props.alt} className="element-round-image" />
        <p className="element-title">{props.title}</p>
        {text}
      </div>
    </div>
  );
}

function HorizontalIndexBlock(props) {
  const blocks = props.blocks.map(item =>
    <VerticalIndexBlock key={item.id} ukWidth={item.ukWidth} src={item.src} alt={item.alt}
                        title={item.title} text={item.text}/>
  );

  return (
    <div className="uk-container">
      <div className="uk-grid">
        <div className="uk-width-1-1">
          <h1 className="block-title">{props.title}</h1>
          <div className="uk-grid">{blocks}</div>
        </div>
      </div>
    </div>
  );
}

function IndexLogics(props) {
  const sections = useContext(IndexContext).index.map(item =>
    <HorizontalIndexBlock key={item.id} title={item.title} blocks={item.blocks} />
  );

  return ( <section className="main-background services">{sections}</section> );
}

function Index(props) {
  const languages = {
    'en': indexLanguages.en,
    'ua': indexLanguages.ua,
    'ru': indexLanguages.ru,
    'default': indexLanguages.en
  };

  return (
    <IndexContext.Provider value={languages[props.language] || languages['default']}>
      <IndexLogics />
    </IndexContext.Provider>
  );
}

export default Index;
