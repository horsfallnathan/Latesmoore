import React from "react";

import Helmet from "react-helmet";
import { Intro } from "components/intro/Intro";
import { Container } from "@material-ui/core";
import Globe from "assets/svg/globeBig.svg";
import SoilTest from "assets/svg/soiltestBig.svg";
import Recycle from "assets/svg/recycleBig.svg";
import Plane from "assets/svg/planeBig.svg";
import Accordion from "components/accordion/Accordion";
import s from "components/accordion/Accordion.scss";
import ListItem from "components/accordion/ListItem";

const serviceList = [
  {
    title: "Water Development/ Treatment",
    description: (
      <>
        <p>
          We have well trained and equipped personnel to handle all your
          residential or domestic water development/treatment needs.
        </p>
        <div className={s.contentBlock}>
          <h2>WATER QUALITY &amp; SANITARY SURVEYS</h2>
          <p>
            We offer the full range of water quality and sanitary surveys
            including:
          </p>
          <ListItem>Location of water point</ListItem>
          <ListItem>Determining depth to potable water</ListItem>
          <ListItem>Estimating distance from contaminated source</ListItem>
          <ListItem>Well protection</ListItem>
          <ListItem>Waste disposal system</ListItem>
          <ListItem>
            Faecal e-coli and streptococci and coliform checks
          </ListItem>
          <ListItem>Groundwater remediation</ListItem>
        </div>
        <div className={s.contentBlock}>
          <h2>OUR MODULAR TREATMENT SYSTEMS</h2>
          <p>We design and construct both solar and electro-mechanical:</p>
          <ListItem>
            Water/waste-water treatment plants of various output volumes to
            serve small populations such as households, offices, hospitals,
            hotels etc.
          </ListItem>
          <ListItem>
            Mobile treatment plants for rigs, offshore/on-site operations etc.
          </ListItem>
          <ListItem>
            Large volume output plants for communities. large establishments,
            etc.
          </ListItem>
          <ListItem>
            The treatment efficiency removes impurities rendering the residual
            water compliant to WHO/EPAs standards. Our modular system is highly
            advantageous because of its high quality, fast availability, small
            number of containers, easy installation and dismantling. It can also
            be fitted to existing borehole line and supplemented by additional
            process steps according to requirements.
          </ListItem>
        </div>
      </>
    ),
    icon: <Globe />
  },
  {
    title: "Geotechnical Engineering",
    description: (
      <>
        <p>
          We undertake the full range of geotechnical engineering and ground
          investigations including site investigations/ soil and groundwater
          investigation and sampling, surface water sampling, foundation
          investigation/ designs, dredging and sand filling etc for:
        </p>
        <ListItem>Environmental design</ListItem>
        <ListItem>Flood and erosion control</ListItem>
        <ListItem>Pollution monitoring and control</ListItem>
        <ListItem>
          Beach erosion and accretion analysis and shore protection works
        </ListItem>
        <ListItem>Reservoir designs</ListItem>
        <ListItem>Water resources development</ListItem>
        <ListItem>Landfills and waste management</ListItem>
        <ListItem>
          Hydrographic and geophysical surveys for dredging activities
        </ListItem>
        <ListItem>
          Roads, bridges, airfields, runways, dams design etc.
        </ListItem>
        <ListItem>Pile/raft foundations/pile driving</ListItem>
        <ListItem>Coring/Soil sampling</ListItem>
        <ListItem>Water and air pollution studies</ListItem>
        <ListItem>Foundation investigation/design engineering</ListItem>
        <ListItem>Surveys for borehole water abstraction</ListItem>
        <ListItem>Down hole geophysical well logging service</ListItem>
      </>
    ),
    icon: <SoilTest />
  },
  {
    title: "Environmental Cleaning/ Waste Management",
    description: (
      <>
        <p>
          We possess state of the art technologies for handling all municipal
          solid waste and the design of safe and efficient hazardous waste
          landfill that protects both soil and groundwater from contamination;
          providing good leachate drainage and collection, lining with 3
          geomembrane layers and good cover. Our designs are blessed on detailed
          site investigation and impact assessment that provides hydraulic,
          dydrologic and other design data for integration with population
          requirements and field capacity computation. The information on each
          waste includes the following:
        </p>
        <ListItem>
          Identification/description of waste - this is follwed by the example
          of the waste type and where possible, the sources of generation.
        </ListItem>
        <ListItem>
          Testing required - a laboratory analytical procedure might be required
          to properly categorize the waste.
        </ListItem>
        <ListItem>Waste seggregation/categorization</ListItem>
        <ListItem>
          Detailed site investigation/assessment for design data
        </ListItem>
        <ListItem>
          Apply most suitable handling and disposal practice/technology.
        </ListItem>
        <ListItem>
          Design and construction of waste sanitary landfill where necessary.
        </ListItem>
        <ListItem>Waste collection to incinerators, landfill etc.</ListItem>
      </>
    ),
    icon: <Recycle />
  },
  {
    title: "Logistics and Operations Management",
    description: (
      <>
        <p>
          Our professional and highly skilled staff provide logistics,
          procurement and other support services for the oil and gas industry.
          Our services are tailored to our clients' need and we leverage on our
          technical expertise to offer the best services at competitive prices.
        </p>
      </>
    ),
    icon: <Plane />
  }
];
export default function services() {
  return (
    <div>
      <Helmet title="Services" />
      <div className={s.serviceBg}>
        <Intro title="Services" tagline={`ENVIRONMENT, ENGINEERING & ENERGY`} />
      </div>
      <div className={s.section}>
        <Container>
          <Accordion content={serviceList} />
        </Container>
      </div>
    </div>
  );
}
