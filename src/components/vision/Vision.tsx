import * as React from "react";

import { Highlight } from "components/intro/Highlight";
import { Container } from "components/container/Container";
import { Row } from "components/row/Row";

import s from "./Vision.scss";

export const Vision = () => {
  return (
    <Container>
      <div className={s.vision}>
        <Row>
          <div className={s.vision__colMinor}>
            <p className={s.vision__mainText}>
              Our policy is to employ the Best Available Technology not
              Entailing Excessive Cost <Highlight>(BATNEEC)</Highlight> in
              proferring designs and products to solve environmental and
              developmental problems.
            </p>
          </div>
          <div className={s.vision__colMain}>
            <Row>
              <div className={s.vision__col}>
                <h2>100% INDIGENOUS</h2>
                <p className={s.vision__text}>
                  Latesmoore is committed to the development of indigenous
                  talent and manpower
                </p>
              </div>
              <div className={s.vision__col}>
                <h2>HIGHLY SPECIALIZED</h2>
                <p className={s.vision__text}>
                  We offer specialized services in the fields of environment,
                  water, energy and logistics.
                </p>
              </div>
              <div className={s.vision__col}>
                <h2>QUALITY SERVICE</h2>
                <p className={s.vision__text}>
                  We employ proven technologies to ensure our services are world
                  class.
                </p>
              </div>
            </Row>
          </div>
        </Row>
      </div>
    </Container>
  );
};
