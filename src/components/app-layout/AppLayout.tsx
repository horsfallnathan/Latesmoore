import * as React from "react";
import Helmet from "react-helmet";

import LogoSmall from "assets/svg/logoSmall.svg";
import Plus from "assets/svg/plus.svg";

import { helmet } from "utils/helmet";
import { Header } from "components/header/Header";
import { Link as HeaderLink } from "components/header/Link";
import { Footer } from "components/footer/Footer";
import { Devtools } from "components/devtools/Devtools";

import s from "./AppLayout.scss";

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === "development";

export default ({ children }: IAppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink name="about" to="/about" />
      <HeaderLink name="services" to="/services" />
      <HeaderLink name="contact" to="/contact" />
    </Header>
    {children}
    <Footer
      logo={<LogoSmall />}
      social={[
        {
          icon: <Plus />,
          to: "https://www.instagram.com/adhocplusng/",
          description: ""
        }
      ]}
    />

    {isDev && <Devtools />}
  </div>
);
