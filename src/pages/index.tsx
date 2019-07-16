import * as React from "react";
import Helmet from "react-helmet";

import { BlockText } from "components/block-text/BlockText";
import Gallery from "../components/carousel/Carousel";
import { Vision } from "components/vision/Vision";
import { ServiceSummary } from "components/serviceSummary/ServiceSummary";

const galleryImages = [
  {
    imageUrl:
      "http://www.sustainableplaces.eu/wp-content/uploads/2017/02/SmartBuilding.jpg",
    title: "ENERGY & LOGISTICS",
    secondTitle: "Company",
    pageUrl: "/about",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis eum doloremque assumenda vero ad iste perferendis molestias, accusamus cupiditate aut sed eos natus provident deserunt quam, voluptatum recusandae consectetur."
  },
  {
    imageUrl:
      "http://www.sustainableplaces.eu/wp-content/uploads/2017/02/SmartBuilding.jpg",
    title: "FULL RANGE",
    secondTitle: "Geotechnical Services",
    pageUrl: "/services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis eum doloremque assumenda vero ad iste perferendis molestias, accusamus cupiditate aut sed eos natus provident deserunt quam, voluptatum recusandae consectetur."
  }
];

const addressDescription = (
  <>
    <p>Suite 023 Obidave Plaza</p>
    <p>202 Peter Odili Road, Trans-Amadi</p>
    <p>Port Harcourt, Rivers State</p>
  </>
);

const email = <p>latesmooreenergy@gmail.com</p>;
const phoneNumber = <p>+23470-30228782, +23480-56302026</p>;
export default () => (
  <>
    <Helmet title="Home" />

    <Gallery clones={galleryImages} />
    <Vision />
    <ServiceSummary />
    <BlockText
      content={[
        { heading: "Address:", description: addressDescription },
        { heading: "Email:", description: email },
        { heading: "Call Us:", description: phoneNumber }
      ]}
    />
  </>
);
