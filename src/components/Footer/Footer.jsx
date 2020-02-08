import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import './footer.sass';
import { footerLanguages, FooterContext } from './FooterContext';

import DataFooterContacts from '../../constants/json/SharedData/DataFooterContacts.json';

function FooterMenuLink(props) {
  return (
    <li className="footer-item text-item-colors-underline">
      <Link to={props.href} className="text-item-colors-underline-link">{props.value}</Link>
    </li>
  );
}

function FooterCopyright(props) {
  return ( <li className="footer-item text-item-colors-underline copyright">&#x24B8; Petenok Olena, 2019</li> );
}

function FooterMenuAndCopyright(props) {
  const links = props.links.map((item) => <FooterMenuLink key={item.id} href={item.href} value={item.value} /> );

  return (
    <ul className="footer-menu-copyright-block">
      {links}
      <FooterCopyright />
    </ul>
  );
}

function FooterContactsLink(props) {
  return (
    <li className="footer-item text-item-colors-underline">
      <a href={props.href} target="_blank" className="text-item-colors-underline-link">
        <span className="icon" uk-icon={props.icon}></span>
        {props.value}
      </a>
    </li>
  );
}

function FooterContactsElement(props) {
  return (
    <li className="footer-item text-item-colors-underline">
      <span className="icon" uk-icon={props.icon}></span>
      {props.value}
    </li>
  );
}

function FooterContacts(props) {
  const items = props.contacts.map((item) => {
    if (item.href == "") {
      return ( <FooterContactsElement key={item.id} icon={item.icon} value={item.value} /> );
    } else {
      return ( <FooterContactsLink key={item.id} href={item.href} icon={item.icon} value={item.value} /> );
    }
  });

  return ( <ul>{items}</ul> );
}

function FooterLogics(props) {
  const context = useContext(FooterContext);

  return (
    <footer className="footer-background">
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-1 uk-width-1-2@s"><FooterContacts contacts={props.contacts} /></div>
          <div className="uk-width-1-1 uk-width-1-2@s"><FooterMenuAndCopyright links={context.links} /></div>
        </div>
      </div>
    </footer>
  );
}

function Footer(props) {
  const languages = {
    'en': footerLanguages.en,
    'ua': footerLanguages.ua,
    'ru': footerLanguages.ru,
    'default': footerLanguages.en
  };

  return (
    <FooterContext.Provider value={languages[props.language] || languages['default']}>
      <FooterLogics contacts={DataFooterContacts} />
    </FooterContext.Provider>
  );
}

export default Footer;
