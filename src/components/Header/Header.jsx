import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './header.sass';

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
  const links = props.links.map((item) => {
    let active = '';
    if (props.activeId == item.id) { active = 'active'; }
    return ( <HeaderLink key={item.id} active={active} href={item.href} value={item.value} class={item.class} /> );
  });

  const languages = props.languages.map((item) => {
    let active = '';
    if (props.activeLanguageId == item.id) { active = 'active'; }
    return ( <HeaderLanguageLink key={item.id} active={active} href={item.href} value={item.value} /> );
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
  const links = props.links.map((item) =>
    <HeaderLogoLink key={item.id} id={item.id} href={item.href} value={item.value} />
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
  const links = props.links.map((item) => {
    if (item.href == "") {
      return ( <HeaderMenuSmallSpan key={item.id} icon={item.icon} value={item.value} /> );
    } else if (item.external == "") {
      return ( <HeaderMenuSmallSpanLink key={item.id} href={item.href} icon={item.icon} value={item.value} /> );
    } else {
      return ( <HeaderMenuSmallSpanLinkExternal key={item.id} href={item.href} icon={item.icon} value={item.value} /> );
    }
  });

  const languages = props.languages.map((item) => {
    let active = '';
    if (props.activeLanguageId == item.id) { active = 'active'; }
    return ( <HeaderLanguageLink key={item.id} active={active} href={item.href} value={item.value} /> );
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

function Header(props) {
  const [opened, setOpened] = useState(false);

  const onIconClicked = () => {
    if (opened) {
      document.querySelector(`.mobile-menu-container`).classList.remove("shown");
      document.querySelector(`.mobile-menu-container-inner`).classList.remove("shown");
      document.querySelector(`.menu-icon`).classList.remove("clicked");
    } else {
      document.querySelector(`.mobile-menu-container`).classList.add("shown");
      document.querySelector(`.mobile-menu-container-inner`).classList.add("shown");
      document.querySelector(`.menu-icon`).classList.add("clicked");
    }
    setOpened(previousOpened => !previousOpened);
  };

  return (
    <header className="header-background">
      <div className="uk-container">
        <div className="header-align">
          <HeaderLogo links={props.logo} />
          <HeaderMenu links={props.links} languages={props.languages} activeLanguageId={props.activeLanguageId} activeId={props.activeId} />
          <HeaderMenuSmallItems links={props.linksSmall} languages={props.languages} activeLanguageId={props.activeLanguageId} activeId={props.activeId} />
          <div className="menu-icon-container">
            <div className="menu-icon" onClick={onIconClicked}></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
