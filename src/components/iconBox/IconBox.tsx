import React from "react";
import s from "./IconBox.scss";
import { Row } from "components/row/Row";

interface IconBoxContent {
  header: String;
  text: String;
  icon: React.ReactNode;
}
interface IconProps {
  content: IconBoxContent[];
}

export default function IconBox({ content }: IconProps) {
  return (
    <div className={s.mainBox}>
      <Row>
        {content &&
          content.map((item, i) => {
            return (
              <div className={s.box} key={i}>
                <Row>
                  <div className={s.icon}>{item.icon}</div>
                  <div className={s.content}>
                    <h2>{item.header}</h2>
                    <p>{item.text}</p>
                  </div>
                </Row>
              </div>
            );
          })}
      </Row>
    </div>
  );
}
