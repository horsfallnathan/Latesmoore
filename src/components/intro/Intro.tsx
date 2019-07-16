import * as React from "react";

import { Container } from "components/container/Container";
import { Row } from "components/row/Row";

import s from "./Intro.scss";

interface IIntroProps {
  title: String;
  tagline: String;
}

export const Intro = ({ title, tagline }: IIntroProps) => {
  return (
    <Container>
      <div className={s.intro}>
        <Row>
          <div className={s.intro__col}>
            <p className={s.intro__headerText}>{title}</p>
            <p className={s.intro__tagline}>{tagline}</p>
          </div>
        </Row>
      </div>
    </Container>
  );
};
