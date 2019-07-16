import * as React from "react";

import { Container } from "components/container/Container";
import { Row } from "components/row/Row";
import Globe from "assets/svg/globe.svg";
import SoilTest from "assets/svg/soiltest.svg";
import Recycle from "assets/svg/recycle.svg";
import Plane from "assets/svg/plane.svg";

import s from "./ServiceSummary.scss";
import IconBox from "components/iconBox/IconBox";

export const ServiceSummary = () => {
  return (
    <div className={s.bg}>
      <Container>
        <Row>
          <div className={s.bigImage} />
          <div className={s.serviceSummary}>
            <h1 className={s.serviceSummary__title}>
              We offer a wide range of fully integrated, independent
              environmental, engineering and logistics services.
            </h1>
            <p style={{ padding: "1.5rem 0" }}>Our Services Include:</p>
            <IconBox
              content={[
                {
                  icon: <Globe />,
                  header: "Water Development/ Treatment",
                  text:
                    "We are fully equipped to handle the search, drilling and treatment of water to WHO standards."
                },
                {
                  icon: <SoilTest />,
                  header: "Geotechnical Engineering",
                  text:
                    "We carry out the full range of geotechnical engineering and ground investigations."
                },
                {
                  icon: <Recycle />,
                  header: "Environmental Cleaning/ Waste Management",
                  text:
                    "We utilize technologies for handling all municipal solid waste and design safe and efficient hazardous waste landfills that protects both the soil and groundwater from contamination."
                },
                {
                  icon: <Plane />,
                  header: "Logistics and Operations Management",
                  text:
                    "Our well trained personnel can handle your logistics and procurement needs, ensuring quality service at the shortest possible time."
                }
              ]}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

{
  /* <Row>
<div className={s.mainBox}>
  <div className={s.box}>
    <Row>
      <div className={s.content}>
        <Globe />
        <h2>Water Development/ Treatment</h2>
      </div>
    </Row>
  </div>
  <div className={s.box}>
    <div className={s.icon} />
    <div className={s.content}>
      <h2>Geotechnical Engineering</h2>
    </div>
  </div>
</div>
</Row> */
}
