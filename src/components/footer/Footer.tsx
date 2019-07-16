import * as React from "react";

import { Container } from "components/container/Container";

import s from "./Footer.scss";
import { Link } from "components/link/Link";

interface ISocial {
  icon: React.ReactNode;
  to: string;
  description: String;
}

interface IFooterProps {
  logo: React.ReactNode;
  social: ISocial[];
}

export const Footer = ({ logo, social }: IFooterProps) => (
  <div className={s.footer}>
    <Container>
      <div className={s.footer__content}>
        <Link to="/" className={s.footer__logo}>
          {logo}
        </Link>

        <ul className={s.footer__list}>
          {social.map((item, i) => (
            <li key={i} className={s.footer__item}>
              <a href={item.to} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </div>
);
