import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
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
      <Link to={props.href} onClick={props.closeSmallMenu}
            className="language-item-link text-item-colors-underline-link">
        {props.value}
      </Link>
    </li>
  );
}

function HeaderMenu(props) {
  const links = useContext(HeaderContext).links.map(item => {
    return ( <HeaderLink key={item.id} value={item.value} class={item.class} href={`/${item.href}`}
                         active={((props.page === '/' && item.href.length <= 2) ||
                                   props.page === item.href.split('/')[0]) ? 'active' : ''} /> );
  });

  return (
    <nav className="text-menu-large-screen">
      <ul className="uk-flex uk-flex-right">
        <li className="menu-item"><ul className="uk-flex uk-flex-right">{props.languages}</ul></li>
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
      <Link to={props.href} className="text-item-colors-underline-link" onClick={props.closeSmallMenu}>
        <span className="icon" uk-icon={props.icon}></span>
        {props.value}
      </Link>
    </li>
  );
}

function HeaderMenuSmallSpanLinkExternal(props) {
  return (
    <li className="item text-item-colors-underline">
      <a href={props.href} target="_blank" className="text-item-colors-underline-link" onClick={props.closeSmallMenu}>
        <span className="icon" uk-icon={props.icon}></span>
        {props.value}
      </a>
    </li>
  );
}

function HeaderMenuSmallItems(props) {
  const links = useContext(HeaderContext).linksSmall.map(item => {
    const { id, icon, value, href, external } = item;
    if (href === "") { return ( <HeaderMenuSmallSpan key={id} icon={icon} value={value} /> ); }
    else if (external === "") { return ( <HeaderMenuSmallSpanLink key={id} href={href} icon={icon} value={value}
                                                                  closeSmallMenu={props.closeSmallMenu} /> ); }
    else { return ( <HeaderMenuSmallSpanLinkExternal key={id} href={href} icon={icon} value={value}
                                                     closeSmallMenu={props.closeSmallMenu} /> ); }
  });

  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-container-inner">
        <nav>
          <ul>
            {links}
            <li className="item"><ul className="languages-align">{props.languages}</ul></li>
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

  const closeSmallMenu = () => {
    if(opened) {
      closeMobileMenu();
      setOpened(false);
    }
  };

  const languagesArray = props.languages.map(item => {
    const { id, value, href } = item;
    return ( <HeaderLanguageLink key={id} value={value} active={language === value ? 'active' : ''}
                                 href={`${page === '/' ? '/' : `/${page}/`}${href}`}
                                 closeSmallMenu={closeSmallMenu} /> );
  });

  return (
    <header className="header-background">
      <div className="uk-container">
        <div className="header-align">
          <HeaderLogo links={logo} language={language} />
          <HeaderMenu languages={languagesArray} page={page} />
          <HeaderMenuSmallItems languages={languagesArray} closeSmallMenu={closeSmallMenu} />
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

Header.propTypes = { language: PropTypes.string, page: PropTypes.string };
Header.defaultProps = { language: 'en', page: 'index' };

export default Header;
