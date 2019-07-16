import * as React from "react";
import Helmet from "react-helmet";

import { Intro } from "components/intro/Intro";
import { Highlight } from "components/intro/Highlight";
import { Container } from "components/container/Container";
import { Row } from "components/row/Row";
import s from "components/vision/Vision.scss";

export default () => {
  return (
    <>
      <Helmet title="About" />
      <div className={s.aboutBg}>
        <Intro title="About Us" tagline="PROMOTING INDIGENOUS EXCELLENCE" />
      </div>
      <Container>
        <div className={s.vision}>
          <Row>
            <div className={s.vision__colMinor}>
              <p className={s.vision__subText}>
                Latesmoore Energy and Logistics Limited is an indigenous company
                totally committed towards <Highlight>quality </Highlight>
                <Highlight>
                  service
                </Highlight> <Highlight>delivery.</Highlight> The company was
                incorporated in October 2006 with the principal goal of offering
                <Highlight>
                  expert
                </Highlight> <Highlight>services;</Highlight> transforming
                knowledge gained by academic and working experience into expert
                technical knowledge and prowess in solving problems of the
                environment and other areas of our core competence.
              </p>
            </div>
            <div className={s.vision__colMain}>
              <Row>
                <div className={s.vision__col}>
                  <h2>CORPORATE PHILOSOPHY</h2>
                  <p className={s.vision__text}>
                    Our corporate philosophy is Total Quality Management in
                    service/product delivery using the best available
                    technology, not entailing excessive cost within the context
                    of the best practicable environemental option. Our total
                    quality management approach employs quality of design,
                    conformance, availability and service.
                  </p>
                </div>
                <div className={s.vision__col}>
                  <h2>ENVIRONMENTAL POLICY</h2>
                  <p className={s.vision__text}>
                    Latesmoore is an environmental compliant company; our policy
                    is to employ the "Best Available Technology Not Entailing
                    Excessive Cost (BATNEEC) in proferring designs and products
                    to solve environmental and developmental problems.
                  </p>
                </div>
                <div className={s.vision__col}>
                  <h2>CLIENTELE</h2>
                  <p className={s.vision__text}>
                    Our Clientele list includes Oil and Gas companies, private
                    residential and industrail developers, government
                    establishments etc.
                  </p>
                </div>
              </Row>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};
