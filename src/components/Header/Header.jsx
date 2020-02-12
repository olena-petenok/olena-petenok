import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";

import './header.sass';
import { headerLanguages, HeaderContext } from './HeaderContext';
import { openMobileMenu, closeMobileMenu } from '../../utils/helper.js';

import DataLogoLinks from '../../constants/json/SharedData/DataLogoLinks.json';
import DataMenuLanguageLinks from '../../constants/json/SharedData/DataMenuLanguageLinks.json';

function HeaderLink(props) {
  return (
    <li className={`menu-item text-item-colors-underline ${props.active}`}>
      <Link to={props.href} className="menu-item-link text-item-colors-underline-link">{props.value}</Link>
    </li>
  );
}

function HeaderLanguageLink(props) {
  return (
    <li className={`language-item text-item-colors-underline ${props.active}`}>
      <Link to={props.href} className="language-item-link text-item-colors-underline-link">{props.value}</Link>
    </li>
  );
}

function HeaderMenu(props) {
  const { language, page } = props;
  const context = useContext(HeaderContext);

  const links = context.links.map(item => {
    return ( <HeaderLink key={item.id} value={item.value} class={item.class} href={`/${item.href}`}
                         active={((page === '/' && item.href.length <= 2) ||
                                   page === item.href.split('/')[0]) ? 'active' : ''} /> );
  });

  const languages = props.languages.map(item => {
    return ( <HeaderLanguageLink key={item.id} value={item.value}
                                 active={language === item.value ? 'active' : ''}
                                 href={`${page === '/' ? '/' : `/${page}/`}${item.href}`} /> );
  });

  return (
    <nav className="text-menu-large-screen">
      <ul className="uk-flex uk-flex-right">
        <li className="menu-item"><ul className="uk-flex uk-flex-right">{languages}</ul></li>
        {links}
      </ul>
    </nav>
  );
}

function HeaderLogoLink(props) {
  return ( <li id={props.id}><Link to={props.href} className="logo-link">{props.value}</Link></li> );
}

function HeaderLogo(props) {
  const links = props.links.map(item =>
    <HeaderLogoLink key={item.id} id={item.id} value={item.value}
                    href={`/${props.language === 'en' ? '' : props.language}`} />
  );

  return ( <ul>{links}</ul> );
}

function HeaderMenuSmallSpan(props) {
  return (
    <li className="item text-item-colors-underline">
      <span className="icon" uk-icon={props.icon}></span>
      {props.value}
    </li>
  );
}

function HeaderMenuSmallSpanLink(props) {
  return (
    <li className="item text-item-colors-underline">
      <Link to={props.href} className="text-item-colors-underline-link">
        <span className="icon" uk-icon={props.icon}></span>
        {props.value}
      </Link>
    </li>
  );
}

function HeaderMenuSmallSpanLinkExternal(props) {
  return (
    <li className="item text-item-colors-underline">
      <a href={props.href} target="_blank" className="text-item-colors-underline-link">
        <span className="icon" uk-icon={props.icon}></span>
        {props.value}
      </a>
    </li>
  );
}

function HeaderMenuSmallItems(props) {
  const context = useContext(HeaderContext);

  const links = context.links.map(item => {
    if (item.href == "") {
      return ( <HeaderMenuSmallSpan key={item.id} icon={item.icon} value={item.value} /> );
    } else if (item.external == "") {
      return ( <HeaderMenuSmallSpanLink key={item.id} href={item.href} icon={item.icon} value={item.value} /> );
    } else {
      return ( <HeaderMenuSmallSpanLinkExternal key={item.id} href={item.href} icon={item.icon} value={item.value} /> );
    }
  });

  const languages = props.languages.map(item => {
    return ( <HeaderLanguageLink key={item.id} active={''}
                                 href={item.href} value={item.value} /> );
  });

  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-container-inner">
        <nav>
          <ul>
            {links}
            <li className="item"><ul className="languages-align">{languages}</ul></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function HeaderLogics(props) {
  const { logo, languages, language, page } = props;
  const [opened, setOpened] = useState(false);

  const onIconClicked = () => {
    opened ? closeMobileMenu() : openMobileMenu();
    setOpened(previousOpened => !previousOpened);
  };

  return (
    <header className="header-background">
      <div className="uk-container">
        <div className="header-align">
          <HeaderLogo links={logo} language={language} />
          <HeaderMenu languages={languages} language={language} page={page} />
          <HeaderMenuSmallItems languages={languages} language={language} page={page} />
          <div className="menu-icon-container">
            <div className="menu-icon" onClick={onIconClicked}></div>
          </div>
        </div>
      </div>
    </header>
  )
}

function Header(props) {
  const languages = {
    'en': headerLanguages.en,
    'ua': headerLanguages.ua,
    'ru': headerLanguages.ru,
    'default': headerLanguages.en
  };

  const pages = {
    'index': '/',
    'aboutAuthor': 'about-author',
    'default': '/'
  };

  return (
    <HeaderContext.Provider value={languages[props.language] || languages['default']}>
      <HeaderLogics logo={DataLogoLinks} languages={DataMenuLanguageLinks}
                    language={props.language} page={pages[props.page] || pages['default']} />
    </HeaderContext.Provider>
  );
}

export default Header;
