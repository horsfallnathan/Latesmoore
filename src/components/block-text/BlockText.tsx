import * as React from "react";

import { Container } from "components/container/Container";
import { Row } from "components/row/Row";

import s from "./BlockText.scss";

interface BlockTextContent {
  heading: string;
  description: React.ReactNode;
}

interface IBlockTextProps {
  content: BlockTextContent[];
}

export const BlockText = ({ content }: IBlockTextProps) => (
  <Container>
    <div className={s.block}>
      <Row>
        {content &&
          content.map((item, i) => {
            return (
              <div className={s.block__col} key={i}>
                <h3 className={s.block__heading}>{item.heading}</h3>
                <div className={s.block__description}>{item.description}</div>
              </div>
            );
          })}
      </Row>
    </div>
  </Container>
);
